import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Tous les champs sont requis." }, { status: 400 });
    }

    console.log("📩 Nouveau message reçu :", { name, email, message });

    return NextResponse.json({ message: "Message reçu avec succès !" });
  } catch (error) {
    console.error("Erreur dans /api/contact:", error);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}
