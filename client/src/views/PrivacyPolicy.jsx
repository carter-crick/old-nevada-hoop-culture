import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black min-h-screen text-gray-200 p-4">
            <Header />
            {/* Header */}
            <header className="text-center py-4">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </header>
            
            {/* Content */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">1. Collection of Personal Information</h2>
                    <p>We collect personal information directly from you for the purposes of providing our services, communicating with you, and ensuring the quality of our services.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">2. Use of Your Personal Information</h2>
                    <p>We use your personal information to serve you, improve our services, and communicate updates or promotional offers that might interest you.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">3. Sharing Your Personal Information</h2>
                    <p>We do not sell your personal information to third parties. However, we may share your information with third-party service providers working on our behalf.</p>
                </section>

                {/* ... add more sections as needed ... */}
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;