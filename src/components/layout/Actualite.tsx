
import Image from "next/image";

const Actualites = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Nos Actualités
        </h1>

        {/* Liste des actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Campagne de Sensibilisation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/miroir.jpg"  
              alt="Campagne de Sensibilisation"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Campagnes de Sensibilisation
              </h2>
              <p className="text-gray-700 mb-4">
                Découvrez les initiatives locales et internationales pour la sensibilisation à la santé mentale. Participez à la Journée mondiale de la santé mentale et au mois de la sensibilisation à la dépression.
              </p>
              {/* Contenu supplémentaire */}
              <ul className="list-disc list-inside text-gray-700">
                <li>Journée mondiale de la santé mentale (10 octobre).</li>
                <li>Mois de la sensibilisation à la dépression (octobre).</li>
                <li>Campagnes locales dans les écoles et les entreprises.</li>
              </ul>
            </div>
          </div>

          {/* Témoignages inspirants */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/temoignage.jpg"  // Mettre à jour le chemin ici
              alt="Témoignages Inspirants"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Témoignages Inspirants
              </h2>
              <p className="text-gray-700 mb-4">
                Lisez des témoignages de personnes ayant surmonté des troubles de santé mentale et découvrez des histoires de rétablissement.
              </p>
              {/* Contenu supplémentaire */}
              <blockquote className="text-gray-700 italic">
                "Grâce au soutien de ma famille et des professionnels, j'ai pu surmonter ma dépression."
              </blockquote>
            </div>
          </div>

          {/* Conseils pour le bien-être mental */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/avenir.jpg"  // Mettre à jour le chemin ici
              alt="Bien-être Mental"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Conseils pour le Bien-être Mental
              </h2>
              <p className="text-gray-700 mb-4">
                Apprenez des stratégies simples pour gérer le stress, l'anxiété et maintenir une bonne santé mentale au quotidien.
              </p>
              {/* Contenu supplémentaire */}
              <ul className="list-disc list-inside text-gray-700">
                <li>Pratiquez la méditation quotidienne.</li>
                <li>Faites de l'exercice régulièrement.</li>
                <li>Dormez suffisamment.</li>
              </ul>
            </div>
          </div>

          {/* Études récentes */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/etudes.jpg"  // Mettre à jour le chemin ici
              alt="Études récentes"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Études Récentes en Santé Mentale
              </h2>
              <p className="text-gray-700 mb-4">
                Découvrez les dernières recherches sur la dépression, l'anxiété et d'autres troubles mentaux. Ce que la science nous apprend.
              </p>
              {/* Contenu supplémentaire */}
              <p className="text-gray-700">
                Une étude récente montre que la thérapie cognitive comportementale (TCC) est efficace pour traiter l'anxiété.
              </p>
            </div>
          </div>

          {/* Réduire la stigmatisation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/image12.jpg"  // Mettre à jour le chemin ici
              alt="Réduire la stigmatisation"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Réduire la Stigmatisation
              </h2>
              <p className="text-gray-700 mb-4">
                Lutter contre la stigmatisation des troubles mentaux et promouvoir l'acceptation de la santé mentale.
              </p>
              {/* Contenu supplémentaire */}
              <p className="text-gray-700">
                Sensibilisez votre entourage en partageant des informations fiables sur la santé mentale.
              </p>
            </div>
          </div>

          {/* Soutien en temps de crise */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/assets/images/dormir.jpg"  // Mettre à jour le chemin ici
              alt="Soutien en temps de crise"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Soutien en Temps de Crise
              </h2>
              <p className="text-gray-700 mb-4">
                Apprenez à faire face aux périodes de stress élevé et découvrez comment soutenir les autres en temps de crise.
              </p>
              {/* Contenu supplémentaire */}
              <ul className="list-disc list-inside text-gray-700">
                <li>Restez en contact avec vos proches.</li>
                <li>Cherchez de l'aide professionnelle si nécessaire.</li>
                <li>Prenez soin de vous.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;