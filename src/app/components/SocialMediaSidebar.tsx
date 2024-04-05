import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const SocialMediaSidebar: React.FC = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-10 space-y-8 p-4 bg-black bg-opacity-80 rounded-r-lg flex flex-col">
      <a
        href="https://www.linkedin.com/in/omar-almalky/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-darkerPagie"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/oalmalky5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-darkerPagie"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://twitter.com/OmarA_SWE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-darkerPagie"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="mailto:your.oalmalky5@gmail.com"
        className="text-white hover:text-darkerPagie"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;
