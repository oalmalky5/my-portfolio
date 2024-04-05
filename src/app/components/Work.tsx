import '../globals.css';
import ProjectBox from './ProjectBox'; // import the ProjectBox component

const projects = [
  {
    id: 1,
    title: 'Mauzoun Responsive Website',
    imageUrl: '/project_pics/mauzoun.png',
    technologies: ['React', 'Next', 'Javascript'],
    description:
      'A revamped fully responsive sign up form for the MLB All Star game, collecting player information and facilitating the purchase of tickets, merchandise and hotel accommodation.',
    demoUrl: 'https://www.example.com',
    codeUrl: 'https://www.example.com',
  },
];

const Work: React.FC = () => {
  return (
    <div>
      <div
        className="bg-dark-theme text-white py-8 m-24 mx-auto max-w-7xl"
        id="work"
      >
        <h2 className="text-6xl font-semibold">
          <span className="text-darkerPagie">02.</span> Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectBox key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
