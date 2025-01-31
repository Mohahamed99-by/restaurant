import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantProfile from './components/RestaurantProfile.jsx';
import Menu from './components/Menu.jsx';
import ReserveTable from './components/ReserveTable.jsx';
import Invoice from './components/Invoice.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantProfile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/reserve" element={<ReserveTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
