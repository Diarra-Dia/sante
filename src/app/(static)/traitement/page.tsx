'use client'; // <-- Cette directive marque le fichier comme un composant client

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function RendezVousPage() {
  const router = useRouter();
  
  // États du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    service: 'consultation',
  });

  // États UI
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Gestion des changements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (loading) return;
    
    setLoading(true);
    setMessage(null);

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.date) {
        throw new Error('Tous les champs requis doivent être remplis');
      }

      // Appel API
      const response = await fetch('/api/traitement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Vérification du statut de la réponse
      if (!response.ok) {
        const textResponse = await response.text();
        console.log('Réponse brute:', textResponse);  // Ajout d'un log pour déboguer

        // Si la réponse n'est pas au format JSON, gérer l'erreur
        try {
          const errorData = JSON.parse(textResponse);
          throw new Error(errorData.message || 'Erreur lors de la requête');
        } catch (err) {
          throw new Error('Réponse API mal formée ou vide');
        }
      }

      // Si la réponse est OK, essayer de la parser en JSON
      const data = await response.json();
      console.log('Réponse JSON:', data);  // Ajout d'un log pour vérifier le contenu des données

      // Si la requête réussit, afficher un message de succès
      setMessage({
        text: 'Rendez-vous confirmé avec succès !',
        type: 'success',
      });

      // Redirection après un délai pour afficher le message
      setTimeout(() => {
        router.push(
          `/confirmation-mental?name=${encodeURIComponent(formData.name)}` +
          `&date=${encodeURIComponent(formData.date)}` +
          `&service=${encodeURIComponent(formData.service)}`
        );
      }, 2000); // Délai de 2 secondes pour afficher le message

    } catch (error) {
      // Vérifie si l'erreur est une instance d'Error
      setMessage({
        text: error instanceof Error ? error.message : 'Erreur inconnue',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Prendre un rendez-vous</h1>
          
          {message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="consultation">Consultation</option>
                <option value="urgence">Urgence</option>
                <option value="suivi">Suivi médical</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date du rendez-vous *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  loading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {loading ? 'Envoi en cours...' : 'Confirmer le rendez-vous'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
