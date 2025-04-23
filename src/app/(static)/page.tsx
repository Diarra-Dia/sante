import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Prenez soin de votre <span className="text-blue-200">santé mentale</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Découvrez des ressources, conseils et soutien pour votre bien-être psychologique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/blog"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl text-center"
                >
                  Explorer les articles
                </Link>
                <Link
                  href="/ressources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl text-center"
                >
                  Ressources utiles
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi la santé mentale est essentielle ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une bonne santé mentale est le fondement d'une vie épanouie et productive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Bien-être émotionnel",
                description: "Apprenez à gérer vos émotions et à développer une résilience face aux défis de la vie."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Relations saines",
                description: "Améliorez vos interactions sociales et construisez des relations plus satisfaisantes."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Productivité accrue",
                description: "Optimisez vos performances professionnelles et votre capacité de concentration."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Actualités & Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les dernières nouvelles et campagnes de sensibilisation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/assets/images/miroir.jpg",
                title: "Campagnes de Sensibilisation",
                description: "Initiatives locales et internationales pour promouvoir la santé mentale.",
                highlights: [
                  "Journée mondiale de la santé mentale (10 octobre)",
                  "Mois de la sensibilisation à la dépression",
                  "Événements dans les écoles et entreprises"
                ]
              },
              {
                image: "/assets/images/temoignage.jpg",
                title: "Témoignages Inspirants",
                description: "Histoires de rétablissement et parcours de résilience.",
                quote: "Grâce au soutien de ma famille et des professionnels, j'ai pu surmonter ma dépression."
              },
              {
                image: "/assets/images/avenir.jpg",
                title: "Conseils Bien-être",
                description: "Stratégies pour gérer le stress et l'anxiété au quotidien.",
                tips: [
                  "Méditation quotidienne",
                  "Exercice régulier",
                  "Sommeil suffisant"
                ]
              },
              {
                image: "/assets/images/etudes.jpg",
                title: "Recherches Récentes",
                description: "Découvertes scientifiques sur les troubles mentaux.",
                content: "La thérapie cognitive comportementale (TCC) s'avère efficace contre l'anxiété."
              },
              {
                image: "/assets/images/image12.jpg",
                title: "Lutte contre la Stigmatisation",
                description: "Initiatives pour changer les perceptions sur la santé mentale.",
                content: "Sensibilisez votre entourage avec des informations fiables."
              },
              {
                image: "/assets/images/dormir.jpg",
                title: "Soutien en Crise",
                description: "Ressources pour les périodes de stress intense.",
                tips: [
                  "Maintenez les contacts sociaux",
                  "Cherchez de l'aide professionnelle",
                  "Pratiquez l'auto-soin"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  {item.highlights && (
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {item.quote && (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
                      "{item.quote}"
                    </blockquote>
                  )}
                  
                  {item.tips && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-800 mb-2">Conseils clés :</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {item.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.content && (
                    <p className="text-gray-600 mt-4">{item.content}</p>
                  )}
                  
                  <Link 
                    href="#" 
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Vous avez besoin d'aide immédiate ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Des professionnels sont disponibles 24h/24 pour vous écouter et vous soutenir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Contactez un professionnel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}