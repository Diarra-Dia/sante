'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center">
        {/* Logo + titre */}
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/images/heath.jpg"
            alt="Logo"
            width={40}
            height={30}
            className="rounded-lg"
          />
          <span className="text-white text-xl font-bold">Santé Mentale</span>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/accueil" className="text-white font-bold hover:underline">Accueil</Link></li>
          <li><Link href="/blog" className="text-white font-bold hover:underline">Blog</Link></li>
          <li><Link href="/ressources" className="text-white font-bold hover:underline">Ressources</Link></li>
          <li><Link href="/contact" className="text-white font-bold hover:underline">Contact</Link></li>
          <li><Link href="/quiz" className="text-white font-bold hover:underline">Nos missions</Link></li>
          <li><Link href="/traitement" className="text-white font-bold hover:underline">Traitement</Link></li>
        </ul>

        {/* Connexion (desktop only) */}
        <div className="hidden md:block">
          <Link
            href="/auth/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
          >
            Connexion
          </Link>
        </div>

        {/* Bouton "..." (mobile only) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ...
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden mt-4 space-y-2 bg-white rounded-lg p-4 shadow-lg">
          <Link href="/accueil" className="block text-blue-600 font-semibold hover:underline">Accueil</Link>
          <Link href="/blog" className="block text-blue-600 font-semibold hover:underline">Blog</Link>
          <Link href="/ressources" className="block text-blue-600 font-semibold hover:underline">Ressources</Link>
          <Link href="/contact" className="block text-blue-600 font-semibold hover:underline">Contact</Link>
          <Link href="/quiz" className="block text-blue-600 font-semibold hover:underline">Nos missions</Link>
          <Link href="/traitement" className="block text-blue-600 font-semibold hover:underline">Traitement</Link>
        </div>
      )}
    </nav>
  );
}
