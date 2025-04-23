"use client";

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: '', email: '', message: '' });
      } else {
        const err = await res.json();
        setStatus(err.message || "❌ Une erreur s'est produite.");
      }
    } catch (err) {
      setStatus("❌ Erreur serveur, veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row mt-16">
      {/* Section gauche */}
      <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center p-8">
        <div className="text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg sm:text-xl">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question ou
            préoccupation concernant la santé mentale.
          </p>
        </div>
      </div>

      {/* Section droite */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 sm:p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Formulaire de contact</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre e-mail"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message"
              required
            />
          </div>

          {status && (
            <div className="text-sm text-center mb-4 text-blue-600 font-medium">{status}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
