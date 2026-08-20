import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddListing from './pages/AddListing';
import Register from './pages/Register';
import DonationPage from './pages/DonationPage';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-listing" element={<AddListing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/donations" element={<DonationPage />} />
            </Routes>
            <BottomNav/>
        </div>
    );
}
export default App;