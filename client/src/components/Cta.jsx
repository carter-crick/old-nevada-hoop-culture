import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cta = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <div className="py-16 bg-yellow-400 text-gray-900 text-center">
      <p className="mb-2 text-lg font-light">Unlock your child's potential</p>
      <h2 className="text-4xl font-bold mb-6">Join Our Elite Basketball Training Today!</h2>
      <button 
        className="px-6 py-2 bg-gray-900 text-yellow-400 font-semibold rounded-full hover:bg-gray-800 transition duration-300"
        onClick={handleButtonClick}
      >
        Get Started
      </button>
    </div>
  );
}

export default Cta;