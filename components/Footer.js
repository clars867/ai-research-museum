import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} A Simple Company. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/meet-the-founder">
            <span className="hover:text-teal-500 cursor-pointer">Meet the Founder</span>
          </Link>
          <a
            href="https://github.com/clars867"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}