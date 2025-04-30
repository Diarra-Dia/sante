"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Adresse e-mail invalide.");
      return;
    }

    // Validation du mot de passe (longueur minimale)
    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    // Simuler l'enregistrement en stockant les données dans le localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      })
    );

    // Rediriger vers la page de connexion
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Colonne gauche */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Bienvenue sur Santé.sg
        </h1>
        <p className="text-center text-lg font-semibold">
          Créez un compte pour accéder à nos ressources et participer au programme.
        </p>
      </div>

      {/* Colonne droite */}
      <div className="w-1/2 bg-blue-50 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Créez un compte
          </h2>
          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nom complet"
              className="w-full px-4 py-3 mb-4 border rounded-md"
              required
            />
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
              className="w-full px-4 py-3 mb-4 border rounded-md"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              className="w-full px-4 py-3 mb-6 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
