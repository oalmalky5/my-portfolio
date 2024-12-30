import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import SocialMediaSidebar from './components/SocialMediaSidebar';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <SocialMediaSidebar />
      <CaseStudies />
      <Work />
      <Skills />
      <Experience />
    </main>
  );
}
