import React from 'react'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './views/Main';
import Register from './views/Register';
import ComingSoon from './components/ComingSoon';
import Pricing from './views/Pricing';
import Schedule from './views/Schedule';
import TermsOfService from './views/TermsOfService';
import PrivacyPolicy from './views/PrivacyPolicy';
import ContactUs from './views/ContactUs';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<ComingSoon pageTitle="About" />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;