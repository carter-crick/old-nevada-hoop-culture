import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-10">
            <Header/>

            {/* Header */}
            <h1 className="text-5xl font-bold mb-6">Pricing</h1>

            {/* Pricing Card */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-4xl font-bold mb-6">$50/mo</h2>
                <p className="text-lg mb-6">Join our elite basketball training program and unlock a plethora of benefits:</p>
                <ul className="list-disc list-inside pl-5">
                    <li>Personalized training sessions</li>
                    <li>Access to certified coaches</li>
                    <li>Monthly performance reports</li>
                    <li>Exclusive access to events and workshops</li>
                    <li>24/7 support from our team</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;