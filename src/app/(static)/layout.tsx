import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import  Actualite from "@/components/layout/Actualite";


export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
