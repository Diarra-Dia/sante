'use client';
import React from 'react';

const RessourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
            Ressources pour la Santé Mentale
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trouvez l'aide et les informations dont vous avez besoin pour votre bien-être mental
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Liens Utiles */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-600 p-4">
              <h2 className="text-xl font-semibold text-white">Liens Utiles</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  {
                    name: "OMS - Santé Mentale",
                    url: "https://www.who.int/mental_health/en/",
                    description: "Ressources mondiales sur la santé mentale"
                  },
                  {
                    name: "MentalHealth.gov",
                    url: "https://www.mentalhealth.gov/",
                    description: "Informations gouvernementales sur la santé mentale"
                  },
                  {
                    name: "National Alliance on Mental Illness (NAMI)",
                    url: "https://www.nami.org/",
                    description: "Soutien et éducation sur les maladies mentales"
                  },
                  {
                    name: "Santé Mentale France",
                    url: "https://www.santementale.fr/",
                    description: "Ressources francophones sur la santé mentale"
                  }
                ].map((resource, index) => (
                  <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <a
                      href={resource.url}
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline flex items-start"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <div>
                        <span>{resource.name}</span>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Aide Immédiate */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 p-4">
              <h2 className="text-xl font-semibold text-white">Aide Immédiate</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-2">Numéros d'urgence</h3>
                <ul className="space-y-3">
                  {[
                    { title: 'Urgences psy (Sénégal)', number: '3114' },
                    { title: 'Suicide Écoute', number: '01 45 39 40 00' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-red-600 font-bold">{item.number}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-800 mb-2">Chat en ligne</h3>
                <p className="text-gray-600 mb-3">Parlez à quelqu'un en temps réel :</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Accéder au chat d'aide
                </button>
              </div>
            </div>
          </div>

          {/* Informations & Conseils */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-600 p-4">
              <h2 className="text-xl font-semibold text-white">Informations et Conseils</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Prendre soin de sa santé mentale</h3>
                <p className="text-gray-700">La santé mentale est un aspect fondamental de notre bien-être général...</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Signes à reconnaître</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Changements d'humeur persistants</li>
                  <li>Difficultés de concentration</li>
                  <li>Retrait social</li>
                  <li>Problèmes de sommeil ou d’alimentation</li>
                  <li>Sentiments de désespoir</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Conseils pour le bien-être mental</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Pratiquez une activité physique régulière",
                    "Maintenez des liens sociaux",
                    "Établissez une routine de sommeil saine",
                    "Pratiquez des techniques de relaxation",
                    "Limitez alcool et caféine",
                    "Demandez de l’aide"
                  ].map((tip, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-3 flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trouver un professionnel */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-purple-600 p-4">
            <h2 className="text-xl font-semibold text-white">Trouver un Professionnel</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Annuaire des psychologues",
                description: "Trouvez un psychologue près de chez vous",
                cta: "Rechercher un professionnel"
              },
              {
                title: "Lignes d'écoute",
                description: "Services d'écoute téléphonique spécialisés",
                cta: "Voir les numéros disponibles"
              },
              {
                title: "Thérapie en ligne",
                description: "Consultations à distance avec des professionnels",
                cta: "Découvrir les plateformes"
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-300">
                <h3 className="font-medium text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center">
                  {item.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourcesPage;
