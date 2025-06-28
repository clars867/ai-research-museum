

import { useState } from 'react';

export default function PromptForm() {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic (e.g., API call or email trigger)
    console.log('Prompt submitted:', { name, prompt });
    setSubmitted(true);
  };

  return (
    <section id="submit" className="bg-white text-graphite py-24 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Submit a Journey Prompt</h2>
        <p className="text-lg text-gray-600 mb-8">
          Share an idea or prompt you'd like to see explored. We'll credit you if it's featured in our public research logs.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium">Thank you! Your prompt has been received.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your name (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                placeholder="Describe your prompt or journey idea..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-150"
            >
              Submit Prompt
            </button>
          </form>
        )}
      </div>
    </section>
  );
}