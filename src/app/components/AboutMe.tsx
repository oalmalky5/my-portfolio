import { FaDownload } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import '../globals.css';

const resumeLink =
  'https://drive.google.com/file/d/1ZzPI5tdbXKxNq2mSxJagehOJ3ijbyEb2/view';

export default function AboutMe() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start py-8 m-32 mx-auto max-w-7xl "
      id="#about"
    >
      {/* Introduction Text */}
      <div className="md:w-3/4 p-6">
        <h1 className="text-2xl md:text-3xl font-bold  text-gray-300">
          Hello! My name is{' '}
          <span className="block text-4xl md:text-7xl font-bold text-lightPaige">
            Omar AlMalky
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          I&apos;m a{' '}
          <strong className="text-lightPaige">Software Engineer</strong> with 5
          years of experience adept in both <br />
          <strong className="underline decoration-lightPaige">
            front-end
          </strong>{' '}
          and{' '}
          <strong className="underline decoration-lightPaige">back-end</strong>{' '}
          development, utilizing technologies like{' '}
          <strong className="text-lightPaige">TypeScript</strong>,{' '}
          <strong className="text-lightPaige">React</strong>,{' '}
          <strong className="text-lightPaige">Next.js</strong>,{' '}
          <strong className="text-lightPaige">Tailwind</strong>,{' '}
          <strong className="text-lightPaige">Node</strong>,{' '}
          <strong className="text-lightPaige">Go</strong>, and{' '}
          <strong className="text-lightPaige">PostgreSQL</strong>.<br />{' '}
          <span className="inline-block mt-8">
            If you&apos;re looking for a dedicated Software Engineer to bring
            your vision to life, let&apos;s{' '}
            <strong className="text-lightPaige cursor-pointer">connect</strong>{' '}
            and create something impactful together. At{' '}
            <a
              href="https://www.mauzoun.com"
              target="_blank"
              className="text-lightPaige font-bold"
            >
              Mauzoun Writing & Publishing
            </a>
            , I lead both the Software Development and Client Management
            departments, enhancing our technical and client service standards
            through research and best practices. My focus is on merging
            technical prowess with superior client engagement to exceed
            expectations and drive success. I&apos;m dedicated to pushing
            boundaries and delivering solutions that resonate with our audience
            and align with our strategic goals.
          </span>
        </p>
        <Link href="#work">
          <button className="flex items-center mt-12 bg-lighterPaige hover:bg-darkerPagie text-gray-900 font-bold py-2 px-4 rounded">
            Explore my work <FaArrowDown className="ml-2" />
          </button>
        </Link>
      </div>

      {/* Experience Box */}
      <div className="mt-8 md:mt-0 bg-darkPaige text-white mr-4 p-10 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {/* Mock experience entries */}
          <div className="relative pl-4">
            <div className="flex items-start mb-8">
              <div className="relative">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3"></div>
                <div className="absolute top-4 left-1.5 h-12 w-1 bg-lighterPaige"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Account & Software Manager
                </p>
                <p className="text-xs">Mauzoun - Feb 2021</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="relative">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3"></div>
                <div className="absolute top-4 left-1.5 h-12 w-1 bg-lighterPaige"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">Software Engineer</p>
                <p className="text-xs">100Devs - Jan 2020</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="relative">
                <div className="rounded-full h-4 w-4 bg-lighterPaige mr-3"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">Web Developer</p>
                <p className="text-xs">Freelance - Feb 2019</p>
              </div>
            </div>

            <div className="border-t border-dotted border-gray-500 py-4"></div>

            <div className="flex items-start mb-4">
              <div className="relative">
                <div className="rounded-full h-4 w-4 bg-lightPaige mr-3"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Web Developlment Certification
                </p>
                <p className="text-xs">General Assembly - Jan 2019</p>
              </div>
            </div>
          </div>{' '}
        </div>
        {/* Button to view resume */}
        <div className="mt-6">
          <Link href={resumeLink} target="_blank">
            <button className="flex items-center justify-center bg-lighterPaige hover:bg-darkerPagie text-gray-700 font-bold py-2 px-4 rounded mx-auto">
              <FaDownload className="mr-2" /> View Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
