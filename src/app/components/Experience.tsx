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

// Your updated experience data
const experiences: Experience[] = [
  {
    company: 'AstroLabs',
    role: 'Senior Account Manager | Business Growth, HR, PRO, GRO',
    duration: 'Nov. 2023 – Nov. 2024',
    location: 'Riyadh, Saudi Arabia',
    responsibilities: [
      'Market Expansion: Spearheaded the successful entry of over 40 global companies into the Saudi market, overseeing strategic planning and execution of market entry strategies.',
      'Revenue Growth: Contributed to significant revenue increases by identifying and pursuing new business opportunities.',
      'Regulatory Compliance: Ensured full compliance with Saudi regulations, facilitating seamless market entry and maintaining adherence to local laws and standards.',
      'Labour Law Knowledge: Possess deep knowledge of Human Resource, Public Relations, and Government Relation processes.',
      'Process Optimization: Leveraged technical expertise in Software Engineering and Web Development to optimize internal processes, introducing innovative solutions.',
      "Team Leadership: Managed and led a team of professionals, conducting performance reviews, setting KPIs, and ensuring the unit's overall success and smooth functioning.",
      'Strategic Partnerships: Developed and maintained strategic alliances with key stakeholders, including government bodies, to support business growth initiatives.',
    ],
  },
  {
    company: 'Mauzoun Writing & Publishing',
    role: 'Business Development & Software Manager',
    duration: 'Feb. 2021 – Mar. 2024',
    location: 'Jeddah, Saudi Arabia',
    responsibilities: [
      'Client Acquisition & Management: Managed high-profile clients, including the Saudi Ministry of Culture and the Red Sea International Film Festival, acting as the primary liaison between clients and technical teams.',
      "Digital Transformation: Spearheaded the digital transformation for the company by launching the Mauzoun's website, e-store, and invoicing system resulting in a significant increase in online sales and enhancing the company's digital presence.",
      'Identifying Lead: Created and introduced key creative strategies to identify leads and enhance sales.',
      'Full-Stack Development: Designed and implemented full-stack web applications using JavaScript, TypeScript, Java, Python, React.js, Node.js, Spring Boot, Django, and Express, improving user experience and functionality.',
      'Revenue Enhancement: Identified and executed opportunities for upselling and cross-selling services contributing to revenue growth.',
    ],
  },
  {
    company: '100Devs',
    role: 'Software Engineer',
    duration: 'Jan 2020 – Dec 2022',
    location: 'Jeddah, Saudi Arabia',
    responsibilities: [
      'Built semantically structured full stack responsive web applications using best practices.',
      'Applied agile methodologies like SCRUM for project management.',
    ],
  },
  {
    company: 'Signature',
    role: 'Restaurant Manager',
    duration: 'Oct 2017 – April 2019',
    location: 'Jeddah, Saudi Arabia',
    responsibilities: [
      'Coordinate daily Front of the House and Back of the House restaurant operations.',
      'Deliver superior service and maximize customer satisfaction.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-between items-start py-8 m-32 mx-auto max-w-4xl"
      id="experience"
    >
      <h2 className="text-6xl font-semibold mb-8">
        <span className="text-darkerPaige">05.</span> Experience
      </h2>
      <CertificationLinks />
      <div className="relative ml-6">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-px h-full bg-lighterPaige"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 relative">
            {/* Connector Circle */}
            <div className="absolute -left-6 top-2 bg-lighterPaige rounded-full h-4 w-4 z-10"></div>
            {/* Experience Details */}
            <div className="ml-8">
              <h3 className="text-2xl font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-md text-darkerPaige">
                {exp.duration} | {exp.location}
              </p>
              <ul className="list-disc ml-5 mt-2">
                {exp.responsibilities.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="text-md text-lighterPaige my-1"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
