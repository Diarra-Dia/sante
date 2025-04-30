"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Connexion() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Récupérer les informations de l'utilisateur stockées
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Vérifier si les informations sont correctes
    if (formData.email === user.email && formData.password === user.password) {
      // Rediriger vers une page protégée ou la page d'accueil
      router.push("/dashboard"); // Remplace "/dashboard" par la page où tu veux rediriger l'utilisateur
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Partie gauche */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Sensibilisation à la Santé Mentale
        </h1>
        <p className="text-center text-lg font-semibold">
          Connectez-vous pour accéder à nos ressources et participer à notre programme.
        </p>
      </div>

      {/* Partie droite */}
      <div className="w-1/2 bg-blue-50 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Connexion à Santé.sg
          </h2>
          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adresse e-mail"
              className="w-full px-4 py-3 mb-4 border rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              className="w-full px-4 py-3 mb-6 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Se connecter
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Pas encore de compte ?{" "}
            <Link href="/auth/register" className="text-blue-600 underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
