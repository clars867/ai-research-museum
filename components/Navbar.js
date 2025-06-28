import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl cursor-pointer">A Simple Company</span>
        </Link>
        <div className="space-x-4">
          <Link href="#about">
            <span className="hover:text-teal-500 cursor-pointer">About</span>
          </Link>
          <Link href="#chat">
            <span className="hover:text-teal-500 cursor-pointer">Chat</span>
          </Link>
          <Link href="#submit">
            <span className="hover:text-teal-500 cursor-pointer">Submit a Prompt</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}