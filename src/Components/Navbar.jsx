import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul className="flex space-x-6 bg-black md:space-x-58 justify-center md:justify-center text-white">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
    </div>
  );
}


