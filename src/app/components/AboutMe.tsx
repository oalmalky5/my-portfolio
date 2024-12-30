import { FaDownload, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import '../globals.css';

const resumeLink =
  'https://drive.google.com/file/d/106e2FA8WYIo-1gjM1sn4mHRDpvRwvmDc/view';

export default function AboutMe() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start py-8 m-32 mx-auto max-w-7xl"
      id="about"
    >
      {/* Introduction Text */}
      <div className="md:w-3/4 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
          Hello! My name is{' '}
          <span className="block text-4xl md:text-7xl font-bold text-lightPaige">
            Omar AlMalky
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          <br />
          With 5 years of experience spanning{' '}
          <strong className="text-lightPaige">Client Management</strong>,{' '}
          <strong className="text-lightPaige">Customer Success</strong>,{' '}
          <strong className="text-lightPaige">Software Development</strong>, and{' '}
          <strong className="text-lightPaige">Data Analysis</strong>, I
          specialize in transforming complex challenges into seamless solutions.
          My ability to harmonize technical expertise with client-focused
          strategies consistently drives innovation, boosts efficiency, and
          fuels growth.
          <br />
          <br />
          I’m excited to connect and explore impactful collaborations that
          deliver extraordinary results.
        </p>
        {/* Button to view work experience */}
        <Link href="#case-studies">
          <button className="flex items-center mt-6 bg-lighterPaige hover:bg-darkerPaige text-gray-900 font-bold py-2 px-4 rounded">
            Explore my work <FaArrowDown className="ml-2" aria-hidden="true" />
          </button>
        </Link>
      </div>

      {/* Experience Box */}
      <div className="mt-8 md:mt-0 bg-darkPaige text-white mr-4 p-10 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {/* Experience Entries */}
          <div className="relative pl-4">
            {/* Position 1: Senior Account Manager at Astrolabs */}
            <div className="flex items-start mb-8">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3 z-10"></div>
                {/* Connector line */}
                <div className="w-px bg-lighterPaige flex-1 mt-2"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">Senior Account Manager</p>
                <p className="text-xs">
                  Astrolabs - Nov 1, 2023 to Nov 30, 2024
                </p>
              </div>
            </div>

            {/* Position 2: Business Development & Software Manager at Mauzoun */}
            <div className="flex items-start mb-8">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3 z-10"></div>
                {/* Connector line */}
                <div className="w-px bg-lighterPaige flex-1 mt-2"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Business Development & Software Manager
                </p>
                <p className="text-xs">Mauzoun - Feb 2021 to Oct 30, 2023</p>
              </div>
            </div>

            {/* Position 3: Software Engineer at 100Devs */}
            <div className="flex items-start mb-8">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3 z-10"></div>
                {/* Connector line */}
                <div className="w-px bg-lighterPaige flex-1 mt-2"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">Software Engineer</p>
                <p className="text-xs">100Devs - Jan 2020 to Jan 2021</p>
              </div>
            </div>

            {/* Position 4: Web Developer at Freelance */}
            <div className="flex items-start mb-8">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3 z-10"></div>
                {/* No connector line for the last entry */}
              </div>
              <div>
                <p className="text-sm font-semibold">Web Developer</p>
                <p className="text-xs">Freelance - Feb 2019 to Dec 2019</p>
              </div>
            </div>

            {/* Certification Section Divider */}
            <div className="border-t border-dotted border-gray-500 py-4"></div>

            {/* Certification */}
            <div className="flex items-start mb-4">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full h-4 w-4 bg-lightPaige mr-3 z-10"></div>
                {/* No connector line after certification */}
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Web Development Certification
                </p>
                <p className="text-xs">General Assembly - Jan 2019</p>
              </div>
            </div>
          </div>
        </div>
        {/* Button to view resume */}
        <div className="mt-6">
          <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center bg-lighterPaige hover:bg-darkerPaige text-gray-700 font-bold py-2 px-4 rounded mx-auto">
              <FaDownload className="mr-2" aria-hidden="true" /> View Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
