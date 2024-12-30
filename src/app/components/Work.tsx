import '../globals.css';
import ProjectBox from './ProjectBox'; // import the ProjectBox component

const projects = [
  {
    id: 1,
    title: 'Mauzoun Responsive Website',
    imageUrl: '/project_pics/mauzoun.png',
    technologies: ['React', 'Next', 'Javascript', 'SCSS'],
    description:
      'The Mauzoun website is built with Next.js and React, offering a fully responsive, multi-page experience. It utilizes SCSS for advanced styling and incorporates seamless animations, all while supporting left-to-right locale functionality for a broad user base.',
    demoUrl: 'https://mauzoun.com/story',
    codeUrl: 'https://github.com/oalmalky5/mauzoun-website',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    imageUrl: '/project_pics/portfolio.png',
    technologies: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
    description:
      "The portfolio website is developed with Next.js, React, and TypeScript, offering a responsive design that's elegantly styled with Tailwind CSS.",
    demoUrl: 'https://my-portfolio-ten-tan.vercel.app/',
    codeUrl: 'https://github.com/oalmalky5/my-portfolio',
  },
  {
    id: 3,
    title: 'E-Commerce',
    imageUrl: '/project_pics/stealthy.png',
    technologies: ['Webflow'],
    description:
      'Stealthy Whiskers is a sleek and modern website I developed using Webflow, featuring a visually engaging design and intuitive navigation to showcase content effectively',
    demoUrl: 'https://stealthy-whiskers.webflow.io/',
    codeUrl: 'https://github.com/oalmalky5/my-portfolio',
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
          <span className="text-darkerPagie">03.</span> Web Development Projects
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
