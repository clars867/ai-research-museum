export default function HeroSection() {
    return (
      <section className="text-center py-28 px-4 bg-parchment text-graphite">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold font-serif leading-tight mb-6 tracking-tight">
            Welcome to the AI Research Museum
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            A place to explore interpretability, cognitive architecture, and the story of co-synthesized intelligence between humans and large language models.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#chat"
              className="px-6 py-3 bg-gradient-to-r from-gold to-mystic text-navy font-semibold rounded-md shadow-lg hover:opacity-90 transition duration-150"
            >
              Begin Your Journey
            </a>
            <a
              href="#submit"
              className="px-6 py-3 border border-mystic text-mystic rounded-md hover:bg-mystic/10 transition duration-150"
            >
              Submit a Prompt
            </a>
          </div>
        </div>
      </section>
    );
  }