// Components/ContactNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const ContactNavbar = () => {
  return (
    <nav className=" bg-green-950 p-4 shadow-lg">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default ContactNavbar;
