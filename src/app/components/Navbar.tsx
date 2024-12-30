// app/components/Navbar.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';
import { FaRocket, FaMoon, FaSun } from 'react-icons/fa'; // Icons for Get in Touch and theme toggle
import { useState } from 'react'; // React's useState for theme toggling

const Navbar: React.FC = () => {
  // State to toggle between themes
  const [darkTheme, setDarkTheme] = useState(true);

  // Function to toggle theme
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    // Implement theme change logic here (e.g., update class on body)
  };

  return (
    <div className="bg-gray-900 text-white fixed top-0 w-screen z-50 mr-8 pr-4 pl-4">
      <nav className="flex items-center justify-between p-4">
        {/* Logo and Name */}
        <div className="flex items-center">
          <Image
            src="/omarm.jpg"
            alt="Omar AlMalky"
            width={68}
            height={68}
            className="rounded-full"
          />
          <span className="ml-2 font-semibold">Omar AlMalky</span>
        </div>

        {/* Theme Toggle Button */}
        {/* Add theme toggle button here if needed */}

        {/* Navigation Links and Get in Touch Button */}
        <div className="flex items-center space-x-12">
          <Link
            href="#about"
            className="hover:underline decoration-2 underline-offset-4 hover:text-darkerPagie"
          >
            <span className="text-lightPaige">01.</span> About
          </Link>
          <Link
            href="#case-studies"
            className="hover:underline decoration-2 underline-offset-4"
          >
            <span className="text-lightPaige">02.</span> Case Studies
          </Link>
          <Link
            href="#work"
            className="hover:underline decoration-2 underline-offset-4"
          >
            <span className="text-lightPaige">03.</span> Web Dev
          </Link>
          <Link
            href="#skills"
            className="hover:underline decoration-2 underline-offset-4"
          >
            <span className="text-lightPaige">04.</span> Skills
          </Link>
          <Link
            href="#experience"
            className="hover:underline decoration-2 underline-offset-4"
          >
            <span className="text-lightPaige">05.</span> Experience
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
