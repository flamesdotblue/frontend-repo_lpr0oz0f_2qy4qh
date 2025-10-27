import Header from './components/Header';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import ProfileAndContact from './components/ProfileAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#162035] font-sans">
      <Header />
      <main>
        <Hero />
        <WorkShowcase />
        <ProfileAndContact />
      </main>
    </div>
  );
}
