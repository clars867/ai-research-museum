import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated glowing background */}
      <div className="absolute inset-0 z-0 bg-gradient-radial opacity-40 animate-pulseSlow" />
      <div className="absolute inset-0 z-0 bg-stars opacity-20 mix-blend-screen animate-drift" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}