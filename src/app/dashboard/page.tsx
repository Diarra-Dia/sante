"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    if (!user.email || !user.password) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl">Bienvenue sur le site sante.sg</h1>
    </div>
  );
}

