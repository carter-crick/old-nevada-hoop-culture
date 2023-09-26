import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-black min-h-screen text-gray-200 p-4">
            <Header/>
            {/* Header */}
            <header className="text-center py-4">
                <h1 className="text-3xl font-bold">Terms of Service</h1>
            </header>
            
            {/* Content */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                    <p>Welcome to our platform. These are our terms and conditions for use of the platform, which you may access in several ways, including but not limited to the web, APIs, and mobile applications.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">2. Acceptance of Terms</h2>
                    <p>By accessing or using the platform, you agree to be bound by these terms. Please review them carefully before using the services.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">3. Changes to Terms</h2>
                    <p>We may change these terms at any time without notice. Please review these terms regularly to ensure you are aware of any changes made.</p>
                </section>

                {/* ... add more sections as needed ... */}
            </div>
            <Footer />
        </div>
    );
}

export default TermsOfService;