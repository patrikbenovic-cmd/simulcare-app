import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Checklist from './Checklist';
import Login from './Login';

// Tento komponent stráži prístup
function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('prihlaseny') === 'true';
  
  if (!isAuthenticated) {
    // Ak nie je prihlásený, presmeruj ho na /login
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Samotná prihlasovacia stránka */}
        <Route path="/login" element={<Login />} />

        {/* Chránené stránky - bez prihlásenia sa sem nedostaneš */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        
        <Route path="/checklist/:slug" element={
          <ProtectedRoute>
            <Checklist />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;