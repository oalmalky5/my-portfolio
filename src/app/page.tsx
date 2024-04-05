import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import SocialMediaSidebar from './components/SocialMediaSidebar';
import Work from './components/Work';

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <SocialMediaSidebar />
      <Work />
    </main>
  );
}
