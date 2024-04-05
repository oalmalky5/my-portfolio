import React from 'react';
import Image from 'next/image';

interface ProjectBoxProps {
  title: string;
  imageUrl: string;
  technologies: string[];
  description: string;
  demoUrl: string; // URL for the demo version
  codeUrl: string; // URL for the GitHub repository
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  imageUrl,
  technologies,
  description,
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-dark-theme-element transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-8">
      <div className="relative h-64  m-4">
        <Image
          src={imageUrl}
          alt={`Project titled ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg" // Rounded image within the inset of the box
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-wrap justify-start items-center mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-dark-theme-chip text-gray-900 bg-lightPaige text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded border border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={demoUrl}
            className="text-lightPaige hover:text-darkerPagie font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
          <a
            href={codeUrl}
            className="text-lightPaige hover:text-darkerPagie font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
