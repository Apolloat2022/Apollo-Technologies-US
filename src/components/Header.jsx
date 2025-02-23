import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo flex items-center">
          <img src="/images/logo.png" alt="Apollo 18 Logo" className="w-12 h-12" />
          <span className="ml-2 text-xl font-bold">Apollo 18</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#tokenomics" className="hover:text-gray-400">Tokenomics</a></li>
            <li><a href="#roadmap" className="hover:text-gray-400">Roadmap</a></li>
            <li><a href="#team" className="hover:text-gray-400">Team</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="cta-button bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600">Buy APOLO</a>
      </div>
    </header>
  );
};

export default Header;