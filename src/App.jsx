import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantProfile from './components/RestaurantProfile';
import Menu from './components/Menu';
import QRCodePage from './components/QRCodePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantProfile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/qr" element={<QRCodePage />} />
      </Routes>
    </Router>
  );
}

export default App;
