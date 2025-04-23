"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ConfirmationPage() {
  const params = useSearchParams();
  
  // Récupération des données passées en paramètre
  const name = params.get('name');
  const date = params.get('date');
  const service = params.get('service');

  // Formatage de la date
  const formattedDate = date ? new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) : '';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 text-center">
        <div className="mb-6">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Confirmation de rendez-vous
        </h1>
        
        <p className="text-gray-700 mb-2">
          Merci <span className="font-semibold">{name || ''}</span>,
        </p>
        
        <p className="text-gray-700 mb-4">
          Votre demande de <span className="font-semibold capitalize">{service || ''}</span> 
          pour le <span className="font-semibold">{formattedDate}</span> a bien été enregistrée.
        </p>
        
        <p className="text-gray-500 text-sm mb-6">
          Un email de confirmation vous a été envoyé avec les détails.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Link 
            href="/" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
          
          <Link 
            href="/contact" 
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}