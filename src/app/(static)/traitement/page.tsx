'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function RendezVousPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    phone: '',
    service: 'consultation',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage(null);

    try {
      if (!formData.name || !formData.email || !formData.date) {
        throw new Error('Tous les champs requis doivent être remplis');
      }

      const response = await fetch('/api/traitement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const textResponse = await response.text();
        try {
          const errorData = JSON.parse(textResponse);
          throw new Error(errorData.message || 'Erreur lors de la requête');
        } catch {
          throw new Error('Réponse API mal formée ou vide');
        }
      }

      const data = await response.json();
      console.log('Réponse JSON:', data);

      setMessage({
        text: 'Rendez-vous confirmé avec succès !',
        type: 'success',
      });

      setTimeout(() => {
        router.push(
          `/confirmation-mental?name=${encodeURIComponent(formData.name)}` +
          `&date=${encodeURIComponent(formData.date)}` +
          `&service=${encodeURIComponent(formData.service)}`
        );
      }, 2000);
    } catch (error) {
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
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Prendre un rendez-vous</h1>

        {message && (
          <div
            className={`mb-6 p-3 rounded-md text-center ${
              message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
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
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="col-span-1 md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-base sm:text-sm py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-white ${
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
  );
}
