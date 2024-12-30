'use client';
import React, { useState, ReactElement } from 'react';
import '../globals.css';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaCheck,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiSwift,
  SiSvelte,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGo,
  SiSupabase,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: ReactElement;
  experience: string;
}

interface SkillsCategories {
  all: Skill[];
  frontend: Skill[];
  backend: Skill[];
}

// Mock skills for testing purposes
const allSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, experience: '5+ years' },
  { name: 'CSS3', icon: <FaCss3Alt />, experience: '5+ years' },
  { name: 'JavaScript', icon: <SiJavascript />, experience: '5+ years' },
  { name: 'TypeScript', icon: <SiTypescript />, experience: '4-5 years' },
  { name: 'React', icon: <FaReact />, experience: '4-5 years' },
  { name: 'Next.js', icon: <TbBrandNextjs />, experience: '3-4 years' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, experience: '2-3 years' },
  { name: 'Bootstrap', icon: <FaBootstrap />, experience: '3-4 years' },
  { name: 'Svelte', icon: <SiSvelte />, experience: '1-2 years' },
  { name: 'Swift', icon: <SiSwift />, experience: '2-3 years' },
  { name: 'SwiftUI', icon: <SiSwift />, experience: '1-2 years' }, // Assuming no direct SwiftUI icon, using Swift icon
  { name: 'Node.js', icon: <FaNodeJs />, experience: '2-3 years' },
  { name: 'Express', icon: <SiExpress />, experience: '2-3 years' },
  { name: 'Python', icon: <FaPython />, experience: '3-4 years' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, experience: '3-4 years' },
  { name: 'MongoDB', icon: <SiMongodb />, experience: '3-4 years' },
  { name: 'Go', icon: <SiGo />, experience: '1-2 years' },
  { name: 'Supabase', icon: <SiSupabase />, experience: '1-2 years' },
  // Adding a few additional skills common among developers
];

const skills = {
  all: allSkills,
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 />, experience: '5+ years' },
    { name: 'CSS3', icon: <FaCss3Alt />, experience: '5+ years' },
    { name: 'JavaScript', icon: <SiJavascript />, experience: '5+ years' },
    { name: 'TypeScript', icon: <SiTypescript />, experience: '4-5 years' },
    { name: 'React', icon: <FaReact />, experience: '4-5 years' },
    { name: 'Next.js', icon: <TbBrandNextjs />, experience: '3-4 years' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, experience: '2-3 years' },
    { name: 'Bootstrap', icon: <FaBootstrap />, experience: '3-4 years' },
    { name: 'Svelte', icon: <SiSvelte />, experience: '1-2 years' },
    { name: 'JavaScript', icon: <SiJavascript />, experience: '5+ years' },
    { name: 'TypeScript', icon: <SiTypescript />, experience: '4-5 years' },
    { name: 'Swift', icon: <SiSwift />, experience: '2-3 years' },
    { name: 'SwiftUI', icon: <SiSwift />, experience: '1-2 years' },
    // Additional common frontend skills could be added here
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs />, experience: '4-5 years' },
    { name: 'Express', icon: <SiExpress />, experience: '4-5 years' },
    { name: 'Python', icon: <FaPython />, experience: '3-4 years' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, experience: '4-5 years' },
    { name: 'MongoDB', icon: <SiMongodb />, experience: '4-5 years' },
    { name: 'Go', icon: <SiGo />, experience: '1-2 years' },
    { name: 'Supabase', icon: <SiSupabase />, experience: '1-2 years' },
  ],
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof SkillsCategories>('all');

  const renderSkills = (category: keyof SkillsCategories) => {
    return skills[category].map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg fade-in" // Added fade-in class here
      >
        <div className="text-3xl mb-2">{skill.icon}</div>
        <div className="text-md font-bold">{skill.name}</div>
        <div className="text-sm">{skill.experience} experience</div>
      </div>
    ));
  };

  return (
    <div
      className="bg-dark-theme text-white py-8 m-24 mx-auto max-w-7xl"
      id="skills"
    >
      <h2 className="text-6xl font-semibold">
        <span className="text-darkerPagie">04.</span> Programming Skills
      </h2>

      {/* Filter buttons */}
      <div className="flex space-x-4 py-8">
        {(['all', 'frontend', 'backend'] as (keyof SkillsCategories)[]).map(
          (category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border-2 ${
                activeCategory === category
                  ? 'bg-darkerPagie transition-colors duration-300 ease-in-out'
                  : 'bg-transparent'
              } flex items-center`}
              onClick={() => setActiveCategory(category)}
            >
              {activeCategory === category && (
                <FaCheck className="text-white mr-2" />
              )}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderSkills(activeCategory)}
      </div>
    </div>
  );
};

export default Skills;
