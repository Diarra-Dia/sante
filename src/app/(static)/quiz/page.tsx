"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaLightbulb, FaHandsHelping, FaSearch } from "react-icons/fa";

interface Mission {
  id: number;
  title: string;
  description: string;
  actions: string[];
  icon: React.ReactNode;
}

const MissionsPage: React.FC = () => {
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const missions: Mission[] = [
    {
      id: 1,
      title: "Sensibilisation et éducation",
      description:
        "Informer le public sur les enjeux de la santé mentale, déstigmatiser les troubles psychiques et promouvoir une compréhension globale de la santé mentale.",
      actions: [
        "Organiser des ateliers interactifs dans les écoles et entreprises",
        "Créer des campagnes digitales avec des influenceurs spécialisés",
        "Développer une application mobile éducative avec quiz et ressources",
        "Partenariats avec les médias pour des documentaires et reportages",
      ],
      icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Prévention et détection précoce",
      description:
        "Aider à identifier les signes précoces de troubles mentaux et encourager une prise en charge rapide.",
      actions: [
        "Plateforme de dépistage en ligne avec algorithme intelligent",
        "Formation certifiante pour les professionnels de première ligne",
        "Kits de détection pour les établissements scolaires",
        "Application de suivi de l'humeur avec alertes personnalisées",
      ],
      icon: <FaSearch className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Soutien et accompagnement",
      description:
        "Offrir un soutien aux personnes en difficulté et à leurs proches.",
      actions: [
        "Réseau national de bénévoles formés en écoute active",
        "Chatbot intelligent avec orientation vers les bons professionnels",
        "Programme de mentorat par des personnes ayant surmonté des troubles",
        "Centres d'accueil temporaire avec activités thérapeutiques",
      ],
      icon: <FaHandsHelping className="text-green-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Innovation et recherche",
      description:
        "Développer de nouvelles approches thérapeutiques et contribuer à la recherche scientifique.",
      actions: [
        "Financement de projets de recherche interdisciplinaires",
        "Laboratoire d'innovation en santé mentale digitale",
        "Partenariats avec les startups de healthtech",
        "Observatoire des tendances et besoins émergents",
      ],
      icon: <FaLightbulb className="text-purple-500 text-3xl" />,
    },
  ];

  const toggleMission = (id: number) => {
    setExpandedMission(expandedMission === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Nos Engagements pour la Santé Mentale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons la vision de la santé mentale à travers des actions concrètes et innovantes.
          </p>
        </motion.div>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer flex items-start"
                  onClick={() => toggleMission(mission.id)}
                >
                  <div className="mr-4 mt-1">{mission.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{mission.title}</h2>
                    <p className="text-gray-600 mb-4">{mission.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600">
                        {expandedMission === mission.id ? "Voir moins" : "Voir les actions"}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedMission === mission.id ? 180 : 0 }}
                      >
                        <FaChevronDown className="text-gray-500" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedMission === mission.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6"
                    >
                      <ul className="space-y-3">
                        {mission.actions.map((action, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                            <span className="text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          S'impliquer dans cette mission
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Section supplémentaire */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Comment contribuer ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Devenir bénévole</h3>
              <p>Donnez de votre temps pour soutenir nos actions sur le terrain.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Faire un don</h3>
              <p>Soutenez financièrement nos programmes et initiatives.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Partager</h3>
              <p>Relayez nos campagnes et augmentez notre impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionsPage;
