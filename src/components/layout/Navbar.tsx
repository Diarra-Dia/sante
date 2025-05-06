'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/assets/images/heath.jpg"
          alt="Logo"
          width={40}
          height={30}
          className="rounded-lg"
        />
        <span className="text-white text-xl font-bold"></span>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6">
        <li><Link href="/accueil" className="text-white font-bold hover:underline">Accueil</Link></li>
        <li><Link href="/blog" className="text-white font-bold hover:underline">Blog</Link></li>
        <li><Link href="/ressources" className="text-white font-bold hover:underline">Ressources</Link></li>
        <li><Link href="/contact" className="text-white font-bold hover:underline">Contact</Link></li>
        <li><Link href="/quiz" className="text-white font-bold hover:underline">Nos missions</Link></li>
        <li><Link href="/traitement" className="text-white font-bold hover:underline">Traitement</Link></li>
      </ul>

      
      <div className="hidden md:flex items-center">
        <Link
          href="/auth/login"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
        >
          Connexion
        </Link>
      </div>

      {/* Hamburger Button Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">✖</span> // Croix pour fermer
          ) : (
            <span className="text-2xl">☰</span> // Hamburger
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 shadow-md md:hidden z-50">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link href="/accueil" className="text-white font-bold">Accueil</Link></li>
            <li><Link href="/blog" className="text-white font-bold">Blog</Link></li>
            <li><Link href="/ressources" className="text-white font-bold">Ressources</Link></li>
            <li><Link href="/contact" className="text-white font-bold">Contact</Link></li>
            <li><Link href="/quiz" className="text-white font-bold">Nos missions</Link></li>
            <li><Link href="/traitement" className="text-white font-bold">Traitement</Link></li>
            <Link
              href="/auth/login"
              className="block mt-2 bg-white text-blue-600 text-center py-2 rounded font-semibold hover:bg-gray-100"
            >
              Connexion
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
