import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard';
import Driver from './component/driver';
import Product from './component/product';
import SideNav from './component/shared/sideNav';
import Header from './component/shared/header';

function App() {
    return (
        <Router>

            <div>
                <Header />
                <SideNav />
                <main style={mainContentStyle}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/driver" element={<Driver />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/" element={<h1>Welcome to the Admin Panel</h1>} />
                    </Routes>
                </main>
            </div>

        </Router>
    );
}
// Styling for the main content area
const mainContentStyle = {
    marginLeft: '200px', // Adjusting for the side nav
    padding: '0px 10px 10px 0px',
};

export default App;
