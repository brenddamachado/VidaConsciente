import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'; 
import Registre from './pages/RegisterForm/Registre';
import Dashboard from './pages/Dashboard/Dashboard';
import 'boxicons/css/boxicons.min.css'
import UserProfile from './pages/UserProfile/UserProfile';
import Login from './pages/Login/Login'; 
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
