import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Corps reçu (login):", body); 

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Aucun utilisateur trouvé avec cet email." },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Mot de passe incorrect." },
        { status: 401 }
      );
    }


    return NextResponse.json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        fullName: user.fullName, 
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erreur de login:", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
