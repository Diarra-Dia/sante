import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, phone, service } = await req.json();  

    
    if (!name || !email || !date) {
      return NextResponse.json({ message: 'Tous les champs sont requis.' }, { status: 400 });
    }

    
    console.log('Données reçues:', { name, email, date, phone, service });

    
    return NextResponse.json({ message: 'Rendez-vous pris avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur du serveur:', error);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}
