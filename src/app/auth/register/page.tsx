// Ajoute cette ligne en haut du fichier pour marquer le composant comme un Client Component
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de l'inscription.");
      }

      setSuccess("Utilisateur créé avec succès 🎉 Redirection en cours...");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:flex w-full md:w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-8 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Bienvenue sur Santé.sg
        </h2>
        <p className="text-base md:text-lg text-center max-w-md">
          Créez un compte pour avoir accès à nos ressources et participer à notre programme de soutien.
        </p>
      </div>

      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-100 py-10 px-4">
        <div className="w-full max-w-md p-8 md:p-10 bg-white rounded-3xl shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-4">
            Créez un Compte
          </h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white p-3 md:p-4 rounded-lg font-semibold hover:bg-blue-700 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm md:text-base">
              Vous avez déjà un compte ?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
