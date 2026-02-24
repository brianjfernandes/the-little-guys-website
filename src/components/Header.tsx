import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            The Little Guys
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
