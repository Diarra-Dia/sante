
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
  
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

      {/* Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="" className="text-white font-bold hover:underline">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white font-bold hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/ressources" className="text-white font-bold hover:underline">
            Ressources
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white font-bold hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/quiz" className="text-white font-bold hover:underline">
            Nos missions
          </Link>
        </li>
        <li>
          <Link href="/traitement" className="text-white font-bold hover:underline">
            Traitement
          </Link>
        </li>
      </ul>
      {/* Image cliquable pour la page d'urgence */}
      <div className="flex items-center space-x-6">
      {/* Connexion */}
      <Link
        href="/auth/login"
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
      >
        Connexion
      </Link>
      </div>
    </nav>
  );
}
