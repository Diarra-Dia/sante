// src/components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Santé Mentale
          </Link>
          <nav className="space-x-6 hidden md:block">
            <Link href="/accueil" className="text-gray-700 hover:text-blue-600 font-medium">
              Accueil
            </Link>
            <Link href="/traitement" className="text-gray-700 hover:text-blue-600 font-medium">
              Traitement
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/ressources" className="text-gray-700 hover:text-blue-600 font-medium">
              Ressources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
