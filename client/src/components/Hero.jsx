import React from "react";
import { useNavigate } from "react-router-dom"; 

const Hero = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleButtonClick = () => {
    navigate("/register"); // Navigate to /register
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center p-10 bg-gradient-to-r from-gray-800 to-black h-screen text-gray-200">
        
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Unlock Elite Performance On The Court!</h1>
          <p className="text-lg mb-6">Step up your game with our cutting-edge basketball training program, tailored for ambitious young athletes...</p>
          <div className="flex justify-center mt-4">
            <button 
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg mr-4 hover:bg-yellow-300" 
              onClick={handleButtonClick}
            >
              Start Training
            </button>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 mt-10 lg:mt-0">
          <img src="../src/assets/Basketball-Training-Hero.jpeg" alt="Youth Basketball Team" className="max-w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;