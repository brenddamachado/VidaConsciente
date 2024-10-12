import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'; // Adicione seu componente Home
import Registre from './pages/RegisterForm/Registre';
import Dashboard from './pages/Dashboard/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import Login from './pages/Login/Login'; // Adicione seu componente Login
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registre />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
