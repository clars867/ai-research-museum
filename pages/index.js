import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();
    setResponse(data.result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">AI Research Museum Chat</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-xl p-4 border rounded mb-4"
        rows={4}
        placeholder="Ask something..."
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-black text-white rounded disabled:opacity-50"
        disabled={loading || !input.trim()}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {response && (
        <div className="mt-6 w-full max-w-xl bg-white p-4 border rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Response</h2>
          <p className="whitespace-pre-line text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
}
