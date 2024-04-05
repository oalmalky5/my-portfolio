import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import SocialMediaSidebar from './components/SocialMediaSidebar';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <SocialMediaSidebar />
      <Work />
      <Skills />
      <Experience />
    </main>
  );
}
