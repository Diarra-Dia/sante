"use client";

import { useState } from 'react';
import ArticleCard from "@/components/layout/ArticleCard";

interface Article {
  id: number;
  title: string;
  content: string;
  category?: string;
  readTime?: string;
  date?: string;
}

const articles: Article[] = [
  { 
    id: 1, 
    title: "Comprendre la dépression", 
    content: "La dépression est une maladie courante qui affecte des millions de personnes. Elle se caractérise par une tristesse persistante, une perte d'intérêt pour les activités quotidiennes, et des difficultés à fonctionner normalement. Il est important de consulter un professionnel de santé si vous pensez souffrir de dépression.",
    category: "Dépression",
    readTime: "5 min",
    date: "15 mars 2024"
  },
  { 
    id: 2, 
    title: "Gérer le stress au quotidien", 
    content: "Le stress peut être géré grâce à des techniques simples comme la méditation, la respiration profonde, ou l'exercice physique. Prendre du temps pour soi et établir des priorités peut également aider à réduire le stress.",
    category: "Stress",
    readTime: "4 min",
    date: "10 mars 2024"
  },
  { 
    id: 3, 
    title: "L'importance du sommeil pour la santé mentale", 
    content: "Un sommeil de qualité est crucial pour la santé mentale. Le manque de sommeil peut aggraver les symptômes de dépression et d'anxiété. Essayez de maintenir une routine de sommeil régulière et évitez les écrans avant de dormir.",
    category: "Bien-être",
    readTime: "6 min",
    date: "5 mars 2024"
  },
  { 
    id: 4, 
    title: "Les bienfaits de l'exercice physique sur le mental", 
    content: "L'exercice physique libère des endorphines, les hormones du bien-être. Il peut aider à réduire le stress, améliorer l'humeur, et augmenter l'estime de soi. Essayez de faire au moins 30 minutes d'exercice par jour.",
    category: "Bien-être",
    readTime: "5 min",
    date: "28 février 2024"
  },
  { 
    id: 5, 
    title: "Comment surmonter l'anxiété", 
    content: "L'anxiété peut être paralysante, mais des techniques comme la thérapie cognitivo-comportementale (TCC), la méditation, ou les exercices de respiration peuvent aider. Parler à un professionnel de santé est également recommandé.",
    category: "Anxiété",
    readTime: "7 min",
    date: "20 février 2024"
  },
  { 
    id: 6, 
    title: "L'impact de l'alimentation sur la santé mentale", 
    content: "Une alimentation équilibrée riche en nutriments essentiels améliore l'humeur et réduit les symptômes de dépression. Les aliments riches en oméga-3, comme le poisson, et les fruits et légumes sont particulièrement bénéfiques.",
    category: "Nutrition",
    readTime: "8 min",
    date: "15 février 2024"
  },
  { 
    id: 7, 
    title: "La méditation pour un esprit sain", 
    content: "La méditation est une pratique ancienne qui aide à calmer l'esprit et à réduire le stress. Elle peut être pratiquée n'importe où et ne nécessite aucun équipement spécial. Essayez de méditer 10 minutes par jour pour commencer.",
    category: "Méditation",
    readTime: "4 min",
    date: "10 février 2024"
  },
  { 
    id: 8, 
    title: "Les signes de burnout et comment y faire face", 
    content: "Le burnout est un état d'épuisement physique et mental causé par un stress prolongé. Les signes incluent la fatigue, l'irritabilité, et une baisse de productivité. Prendre des pauses régulières et établir des limites claires peut aider à prévenir le burnout.",
    category: "Stress",
    readTime: "6 min",
    date: "5 février 2024"
  },
  { 
    id: 9, 
    title: "L'importance de parler de ses émotions", 
    content: "Exprimer ses émotions est crucial pour la santé mentale. Parler à un ami, un membre de la famille, ou un professionnel de santé peut aider à soulager le stress et à mieux comprendre ses sentiments.",
    category: "Communication",
    readTime: "5 min",
    date: "1 février 2024"
  },
  { 
    id: 10, 
    title: "Les réseaux sociaux et la santé mentale", 
    content: "Les réseaux sociaux peuvent avoir un impact négatif sur la santé mentale, notamment en provoquant des comparaisons sociales et en augmentant l'anxiété. Essayez de limiter votre temps sur les réseaux sociaux et de suivre des comptes qui vous inspirent positivement.",
    category: "Technologie",
    readTime: "7 min",
    date: "25 janvier 2024"
  },
];

const categories = [...new Set(articles.map(article => article.category))];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const toggleDetails = (id: number) => {
    setSelectedArticle(selectedArticle === id ? null : id);
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête avec recherche et filtres */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Ressources sur la Santé Mentale
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos articles pour mieux comprendre et prendre soin de votre santé mentale
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Rechercher des articles..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Tous">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun article trouvé</h3>
              <p className="mt-1 text-gray-500">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>

        {/* Liste des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${selectedArticle === article.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleDetails(article.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.content}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDetails(article.id);
                    }}
                  >
                    {selectedArticle === article.id ? 'Voir moins' : 'Lire plus'}
                    <svg className={`w-4 h-4 ml-1 transition-transform ${selectedArticle === article.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Contenu détaillé */}
              {selectedArticle === article.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-fadeIn">
                  <div className="prose max-w-none text-gray-700">
                    <p>{article.content}</p>
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Partager
                    </button>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Sauvegarder
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Restez informé</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et conseils sur la santé mentale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}