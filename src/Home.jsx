import { Link } from 'react-router-dom';
import { checklistsData } from './data/checklists';
import './Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="header-container">
<img src="/logo.png" alt="SimulCare Logo" className="logo" />
        <h1>Simulačné Checklisty</h1>
        <p>Vyberte si checklist na vyplnenie</p>
      </div>

      <div className="grid-container">
        {checklistsData.map((checklist) => {
          // Z podnadpisu vytiahneme iba hlavný názov (všetko pred pomlčkou)
          const specificTitle = checklist.subtitle.split('–')[0].trim();

          return (
            <Link to={`/checklist/${checklist.slug}`} key={checklist.slug} className="menu-item">
              <div className="icon-placeholder">📋</div>
              {/* Zobrazíme konkrétny názov checklistu tučným písmom */}
              <div className="menu-title">{specificTitle}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}