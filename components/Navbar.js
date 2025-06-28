import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <span className="text-xl font-semibold font-serif tracking-wide uppercase text-gray-800 cursor-pointer">
            A Simple Company
          </span>
        </Link>

        <div className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <span className="cursor-pointer hover:text-gold transition">Explore ▾</span>
            {exploreOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow p-4 w-48 text-sm z-50">
                <Link href="#chat"><div className="hover:text-gold pb-2 cursor-pointer">Chat Interface</div></Link>
                <Link href="#submit"><div className="hover:text-gold pb-2 cursor-pointer">Submit a Prompt</div></Link>
                <Link href="/journeys"><div className="hover:text-gold cursor-pointer">GPT Journeys</div></Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <span className="cursor-pointer hover:text-gold transition">Research ▾</span>
            {researchOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow p-4 w-52 text-sm z-50">
                <Link href="/research/interpretability"><div className="hover:text-gold pb-2 cursor-pointer">Interpretability</div></Link>
                <Link href="/research/introspection"><div className="hover:text-gold pb-2 cursor-pointer">Introspection</div></Link>
                <Link href="/research/experiments"><div className="hover:text-gold cursor-pointer">Experiments</div></Link>
              </div>
            )}
          </div>

          <Link href="/blog"><span className="hover:text-gold cursor-pointer transition">Blog</span></Link>
          <Link href="#about"><span className="hover:text-gold cursor-pointer transition">About</span></Link>

          <div
            className="relative"
            onMouseEnter={() => setInvolvedOpen(true)}
            onMouseLeave={() => setInvolvedOpen(false)}
          >
            <span className="cursor-pointer hover:text-gold transition">Get Involved ▾</span>
            {involvedOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow p-4 w-56 text-sm z-50">
                <Link href="#submit"><div className="hover:text-gold pb-2 cursor-pointer">Contribute a Prompt</div></Link>
                <Link href="/experiments"><div className="hover:text-gold pb-2 cursor-pointer">Join an Experiment</div></Link>
                <Link href="/donate"><div className="hover:text-gold cursor-pointer">Donate</div></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}