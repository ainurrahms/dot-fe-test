import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calc" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
