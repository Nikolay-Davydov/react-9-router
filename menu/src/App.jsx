import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import './index.css';

import Menu from './Components/Menu';
import DriftPage from './Components/DriftPage';
import HomePage from './Components/HomePage';
import TimeAttackPage from './Components/TimeAttackPage';
import ForzaPage from './Components/ForzaPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
