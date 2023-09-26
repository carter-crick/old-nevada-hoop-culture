import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ComingSoon = ({ pageTitle }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);  // Navigates back by one entry in the history stack
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 p-10">
            <Header/>

            {/* Page Info */}
            <p className="text-xl mb-6">Our <span className="text-yellow-400">{pageTitle}</span> page is under construction and will be available soon. Stay tuned!</p>

            {/* Illustration */}
            <div className="mb-6">
                <img src="../src/assets/coming-soon.svg" alt="Coming Soon Illustration" className="w-48 h-auto"/>
            </div>

            {/* Subheader */}
            <p className="text-lg text-center mb-4">We're working hard to bring you a seamless experience. We appreciate your patience and support.</p>

            {/* Go Back Button */}
            <button onClick={handleGoBack} className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg hover:bg-yellow-300">
                Go Back
            </button>
        </div>
    );
};

export default ComingSoon;