import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { checklistsData } from './data/checklists';
import * as XLSX from 'xlsx';
import './Checklist.css';

export default function Checklist() {
  const { slug } = useParams();
  const checklist = checklistsData.find(c => c.slug === slug);

  const [scores, setScores] = useState({});
  const [notes, setNotes] = useState({});
  const [criticalErrors, setCriticalErrors] = useState({});
  const [studentName, setStudentName] = useState("");

  if (!checklist) return <div style={{padding: '2rem'}}>Checklist sa nenašiel. <Link to="/">Späť</Link></div>;

  const handleScoreChange = (itemId, value) => {
    setScores(prev => ({ ...prev, [itemId]: value }));
  };

  const handleNoteChange = (itemId, text) => {
    setNotes(prev => ({ ...prev, [itemId]: text }));
  };

  const handleCriticalChange = (index) => {
    setCriticalErrors(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Výpočet
  const allItems = checklist.phases.flatMap(p => p.items);
  const maxPoints = allItems.length * checklist.scoring.max_points_per_item;
  const currentPoints = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const hasCriticalError = Object.values(criticalErrors).some(val => val === true);
  const percentage = maxPoints > 0 ? (currentPoints / maxPoints) * 100 : 0;
  
  let grade = "Fx (nevyhovel)";
  if (hasCriticalError) {
    grade = "Fx (nevyhovel) - Kritická chyba";
  } else if (percentage >= 90) {
    grade = "A (výborný)";
  } else if (percentage >= 80) {
    grade = "B (veľmi dobrý)";
  } else if (percentage >= 70) {
    grade = "C (dobrý)";
  } else if (percentage >= 65) {
    grade = "D (uspokojivý)";
  } else if (percentage >= 60) {
    grade = "E (dostatočný)";
  } else {
    grade = "Fx (nedostatočný)";
  }

  // Zistenie kritických chýb pre Excel aj Tlač
  const selectedCriticalErrors = checklist.critical_errors.items.filter(
    (_, idx) => criticalErrors[idx]
  );

  // Export do Excelu
  const exportToExcel = () => {
    const dataForExcel = [
      ["Meno študenta", studentName || "Nezadané"],
      ["Checklist", checklist.title + " - " + checklist.subtitle],
      ["Získané body", `${currentPoints} / ${maxPoints}`],
      ["Úspešnosť", `${percentage.toFixed(1)} %`],
      ["Kritická chyba", selectedCriticalErrors.length > 0 ? "ÁNO" : "NIE"],
    ];

    if (selectedCriticalErrors.length > 0) {
      dataForExcel.push(["Zistené kritické chyby:"]);
      selectedCriticalErrors.forEach((err, i) => {
        dataForExcel.push([`${i + 1}.`, err]);
      });
    }

    dataForExcel.push([]);
    dataForExcel.push(["Výsledná známka", grade]);
    dataForExcel.push([]);
    dataForExcel.push(["Fáza", "Kritérium", "Získané body", "Poznámka"]);

    checklist.phases.forEach(phase => {
      phase.items.forEach(item => {
        dataForExcel.push([
          phase.title,
          item.text,
          scores[item.id] !== undefined ? scores[item.id] : "Nehodnotené",
          notes[item.id] || ""
        ]);
      });
    });

    const ws = XLSX.utils.aoa_to_sheet(dataForExcel);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Hodnotenie");
    XLSX.writeFile(wb, `Hodnotenie_${studentName.replace(/\s+/g, '_') || 'student'}.xlsx`);
  };

  return (
    <>
      {/* --- INTERAKTÍVNA VERZIA (viditeľná na obrazovke) --- */}
      <div className="checklist-container no-print">
        <div className="header-section">
          <Link to="/" className="back-link">← Späť na zoznam</Link>
          <h1>{checklist.title}</h1>
          <p className="subtitle-text">{checklist.subtitle}</p>
          
          <div className="student-input">
            <label>Meno študenta:</label>
            <input 
              type="text" 
              value={studentName} 
              onChange={(e) => setStudentName(e.target.value)} 
              placeholder="Zadajte meno a priezvisko..."
            />
          </div>
        </div>

        {/* NOVÉ: Pokyny pre hodnotiaceho */}
        {checklist.instructions && (
          <div className="info-section">
            <h3>Pokyny pre hodnotiaceho</h3>
            <ul>
              {checklist.instructions.map((ins, i) => <li key={i}>{ins}</li>)}
            </ul>
          </div>
        )}

        {/* NOVÉ: Vzdelávacie ciele */}
        {checklist.objectives && (
          <div className="info-section">
            <h3>Kontrolované vzdelávacie ciele</h3>
            <ul>
              {checklist.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </div>
        )}

        {checklist.phases.map(phase => (
          <div key={phase.id} className="phase-section">
            <h2>{phase.title}</h2>
            <table className="checklist-table">
              <thead>
                <tr>
                  <th>Kritérium</th>
                  <th className="score-col">Body (2 / 1 / 0)</th>
                  <th>Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {phase.items.map(item => (
                  <tr key={item.id}>
                    <td>{item.text}</td>
                    <td className="score-col">
                      {[2, 1, 0].map(val => (
                        <label key={val} className="radio-label">
                          <input 
                            type="radio" 
                            name={item.id} 
                            value={val}
                            checked={scores[item.id] === val}
                            onChange={() => handleScoreChange(item.id, val)}
                          />
                          {val}
                        </label>
                      ))}
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="note-input"
                        value={notes[item.id] || ''} 
                        onChange={(e) => handleNoteChange(item.id, e.target.value)}
                        placeholder="..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="phase-section critical-section">
          <h2>{checklist.critical_errors.title}</h2>
          <ul className="critical-list">
            {checklist.critical_errors.items.map((err, idx) => (
              <li key={idx}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={!!criticalErrors[idx]}
                    onChange={() => handleCriticalChange(idx)}
                  /> 
                  {err}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-card">
          <h2>Výsledné hodnotenie</h2>
          <p><strong>Študent:</strong> {studentName || "_________________"}</p>
          <p><strong>Získané body:</strong> {currentPoints} / {maxPoints}</p>
          <p><strong>Úspešnosť:</strong> {percentage.toFixed(1)} %</p>
          <p><strong>Kritická chyba:</strong> {hasCriticalError ? "ÁNO" : "NIE"}</p>
          <p className="final-grade"><strong>Výsledná známka:</strong> {grade}</p>
        </div>

        <div className="actions">
          <button onClick={() => window.print()} className="btn btn-print">🖨️ Vytlačiť</button>
          <button onClick={exportToExcel} className="btn btn-excel">📊 Uložiť do Excelu</button>
        </div>
      </div>

      {/* --- TLAČOVÁ VERZIA (skrytá, zobrazí sa len pri tlači) --- */}
      <div className="print-only-container">
        <h1 style={{ color: '#8B0050', textAlign: 'center', marginBottom: '0.5rem' }}>
          {checklist.title}
        </h1>
        <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
          {checklist.subtitle}
        </p>

        <div className="print-summary">
          <table style={{ width: '100%', marginBottom: '2rem', borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ padding: '5px', fontWeight: 'bold', width: '200px' }}>Meno študenta:</td><td>{studentName || "Nezadané"}</td></tr>
              <tr><td style={{ padding: '5px', fontWeight: 'bold' }}>Získané body:</td><td>{currentPoints} / {maxPoints}</td></tr>
              <tr><td style={{ padding: '5px', fontWeight: 'bold' }}>Úspešnosť:</td><td>{percentage.toFixed(1)} %</td></tr>
              <tr><td style={{ padding: '5px', fontWeight: 'bold' }}>Kritická chyba:</td><td>{selectedCriticalErrors.length > 0 ? "ÁNO" : "NIE"}</td></tr>
              <tr><td style={{ padding: '5px', fontWeight: 'bold', fontSize: '1.2em' }}>Výsledná známka:</td><td style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{grade}</td></tr>
            </tbody>
          </table>
        </div>

        {selectedCriticalErrors.length > 0 && (
          <div style={{ marginBottom: '2rem', padding: '1rem', border: '2px solid #C2185B', backgroundColor: '#FCE4EC' }}>
            <h3 style={{ marginTop: 0, color: '#8B0050' }}>Zistené kritické chyby:</h3>
            <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
              {selectedCriticalErrors.map((err, i) => <li key={i}>{err}</li>)}
            </ol>
          </div>
        )}

        <h3 style={{ color: '#8B0050' }}>Detailné hodnotenie:</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10pt' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#eee', textAlign: 'left' }}>Fáza</th>
              <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#eee', textAlign: 'left' }}>Kritérium</th>
              <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#eee', textAlign: 'center', width: '60px' }}>Body</th>
              <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#eee', textAlign: 'left', width: '150px' }}>Poznámka</th>
            </tr>
          </thead>
          <tbody>
            {checklist.phases.map(phase => (
              phase.items.map((item, index) => (
                <tr key={item.id}>
                  {index === 0 && (
                    <td rowSpan={phase.items.length} style={{ border: '1px solid #000', padding: '8px', fontWeight: 'bold', verticalAlign: 'top' }}>
                      {phase.title}
                    </td>
                  )}
                  <td style={{ border: '1px solid #000', padding: '8px' }}>{item.text}</td>
                  <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                    {scores[item.id] !== undefined ? scores[item.id] : "-"}
                  </td>
                  <td style={{ border: '1px solid #000', padding: '8px' }}>{notes[item.id] || ""}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between' }}>
          <div>Dátum: _________________</div>
          <div>Podpis hodnotiaceho: _________________</div>
        </div>
      </div>
    </>
  );
}