import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center w-full p-5 bg-gray-900">
      <div className="flex justify-between w-full md:w-auto">
        <img src="../src/assets/OldLogo.png" alt="Company Logo" className="w-24 h-auto" />
        <button className="bg-transparent px-1 text-5xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0 md:space-x-4`}>
        <a href="/" className="block md:inline-block text-white hover:bg-yellow-400 hover:text-gray-800 px-4 py-2 rounded">Home</a>
        <a href="/about" className="block md:inline-block text-white hover:bg-yellow-400 hover:text-gray-800 px-4 py-2 rounded">About</a>
        <a href="/pricing" className="block md:inline-block text-white hover:bg-yellow-400 hover:text-gray-800 px-4 py-2 rounded">Pricing</a>
        <a href="/schedule" className="block md:inline-block text-white hover:bg-yellow-400 hover:text-gray-800 px-4 py-2 rounded">Schedule</a>
      </nav>
    </header>
  );
}

export default Header;