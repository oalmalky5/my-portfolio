import '../globals.css';
import CertificationLinks from './CertificationLinks';

// Define the structure for the experience data
interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

// Your experience data
const experiences: Experience[] = [
  {
    company: 'Mauzoun Writing & Publishing',
    role: 'Account & Software Manager',
    duration: 'Feb. 2021 – Present',
    location: 'Jeddah Saudi Arabia',
    responsibilities: [
      'Develop software applications from conception to delivery ensuring they meet business needs and adhere to technical standards.',
      'Designed and implemented multifaceted frontend and full-stack web applications leveraging JavaScript, TypeScript, React.js, Node.js, and Express for enhanced user experience and functionality.',
      "Notable projects include developing the main Mauzoun using React and NextJs website and Mauzoun's E-Invoicing system using React and Nodejs, complying with Zatca guidelines.",
      'Build and maintain strong client relationships acting as the main point of contact between clients and technical/creative teams.',
    ],
  },
  {
    company: '100Devs',
    role: 'Software Engineer',
    duration: 'Jan 2020 – Dec 2022',
    location: 'Jeddah Saudi Arabia',
    responsibilities: [
      'Built semantically structured full stack responsive web applications using best practices.',
      'Applied agile methodologies like SCRUM for project management.',
    ],
  },
  {
    company: 'Signature',
    role: 'Restaurant Manager',
    duration: 'Oct 2017 – April 2019',
    location: 'Jeddah Saudi Arabia',
    responsibilities: [
      'Coordinate daily Front of the House and Back of the House restaurant operations.',
      'Deliver superior service and maximize customer satisfaction.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div
      className="md:flex-row justify-between items-start py-8 m-32 mx-auto max-w-4xl "
      id="experince"
    >
      <h2 className="text-6xl font-semibold mb-4">
        <span className="text-darkerPagie">04.</span> Experience
      </h2>
      <CertificationLinks />
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-md text-darkerPagie">
            {exp.duration} - {exp.location}
          </p>
          <ul className="list-disc ml-5 mt-2">
            {exp.responsibilities.map((task, taskIndex) => (
              <li
                key={taskIndex}
                className="text-md text-lighterPaige-800 my-1"
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
