import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [heslo, setHeslo] = useState('');
  const [error, setError] = useState('');
  const [pokusy, setPokusy] = useState(0);
  const [zablokovany, setZablokovany] = useState(false);
  const [nacitava, setNacitava] = useState(false);
  const [spravnyHash, setSpravnyHash] = useState(null);
  const navigate = useNavigate();

  const MAX_POKUSOV = 3;

  useEffect(() => {
    async function fetchHash() {
      try {
        const response = await fetch('/login/heslo.hash');
        if (!response.ok) throw new Error('Súbor s heslom sa nepodarilo načítať.');
        const hash = (await response.text()).trim();
        if (hash.length !== 64 || !/^[0-9a-f]{64}$/i.test(hash)) {
          throw new Error('Neplatný formát hashu.');
        }
        setSpravnyHash(hash);
      } catch (err) {
        setError('Systémová chyba: ' + err.message);
      }
    }
    fetchHash();

    if (sessionStorage.getItem('prihlaseny') === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const hashHeslo = async (text) => {
    const enc = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', enc);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const overHeslo = async (e) => {
    e.preventDefault();
    if (zablokovany || !spravnyHash) return;

    if (!heslo.trim()) {
      setError('Prosím, zadajte heslo.');
      return;
    }

    setNacitava(true);
    setError('');

    try {
      const hashZadaneho = await hashHeslo(heslo.trim());

      if (hashZadaneho === spravnyHash) {
        sessionStorage.setItem('prihlaseny', 'true');
        navigate('/'); 
      } else {
        const novePokusy = pokusy + 1;
        setPokusy(novePokusy);
        setError('Nesprávne heslo, skúste znova.');
        setHeslo('');

        if (novePokusy >= MAX_POKUSOV) {
          setZablokovany(true);
          setError('⛔ Prekročili ste maximálny počet pokusov. Skúste znova o 30 sekúnd.');
          setTimeout(() => {
            setZablokovany(false);
            setPokusy(0);
            setError('');
          }, 30000);
        }
      }
    } catch (err) {
      setError('Chyba: ' + err.message);
    } finally {
      setNacitava(false);
    }
  };

  const zostavaPokusov = MAX_POKUSOV - pokusy;

  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        {/* HLAVIČKA */}
        <div className="login-header">
<img src="/logo.png" alt="SimulCare Logo" className="login-logo" />
          <h1 className="brand-title">SimuCheck</h1>
          <h2 className="brand-subtitle">Hodnotiaci systém laboratórnych simulácii</h2>
          
          <div className="author-box">
            <p className="authors">
              Patrik Beňovič<sup>1✉</sup>, Katarína Kašlíková<sup>1</sup>, Vladimír Meluš<sup>1</sup>
            </p>
            <p className="affiliation">
              <sup>1</sup>Trenčianska univerzita Alexandra Dubčeka v Trenčíne<br />
              <sup>✉</sup> patrik.benovic@tnuni.sk
            </p>
          </div>
        </div>

        {/* OPIS APLIKÁCIE - PREHĽADNEJŠÍ */}
        <div className="description-box">
          <p>
            Webová aplikácia pre pedagógov na objektívne hodnotenie praktických zručností študentov v simulovanom laboratórnom prostredí.
          </p>
          <ul className="features-list">
            <li>Digitálne checklisty (glukóza, laktát, Hb, pipetovanie, váženie).</li>
            <li>Automatický výpočet známky (A – Fx) a detekcia kritických chýb.</li>
            <li>Export do Excelu a tlačová podoba na podpis.</li>
            <li>Responzívny dizajn pre PC, tablet aj mobil.</li>
          </ul>
        </div>

        {/* FORMULÁR */}
        <form className="login-form" onSubmit={overHeslo}>
          <label htmlFor="heslo">Pre vstup zadajte prístupové heslo</label>
          <input 
            type="password" 
            id="heslo" 
            className="login-input" 
            placeholder="••••••••" 
            value={heslo}
            onChange={(e) => setHeslo(e.target.value)}
            disabled={zablokovany || nacitava}
            autoFocus
          />
          <button type="submit" className="btn-login" disabled={zablokovany || nacitava}>
            {nacitava ? 'Overujem...' : 'Vstúpiť do aplikácie'}
          </button>
          
          <div className="error-message" aria-live="polite">
            {error}
          </div>
          
          {pokusy > 0 && !zablokovany && (
            <div className="attempts-info" style={{ color: zostavaPokusov <= 1 ? '#C2185B' : '#666' }}>
              Zostáva pokusov: {zostavaPokusov}
            </div>
          )}
        </form>

        <div className="login-footer">
          Tvorba aplikácie bola podporená projektom KEGA 007TnUAD-4/2026 a projektom SIMULCARE 401101B920 .
        </div>
      </div>
    </div>
  );
}