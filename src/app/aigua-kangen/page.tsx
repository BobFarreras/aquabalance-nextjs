import React from 'react';
import { type Metadata } from 'next';
import AiguaKangenView from './AiguaKangenView'; // Importem el component de client

// AQUEST ÉS UN COMPONENT DE SERVIDOR
// Només s'encarrega del SEO.
export const metadata: Metadata = {
  title: "Aigua Kangen® | Canvia la teva aigua, canvia la teva vida",
  description: "Descobreix els beneficis de l'Aigua Kangen®, aigua alcalina, ionitzada i rica en hidrogen produïda per les màquines Enagic®.",
  alternates: {
    canonical: "https://www.aquabalance.es/aigua-kangen",
  },
};

// La seva única funció és renderitzar el component de client.
export default function AiguaKangenPage() {
  return <AiguaKangenView />;
}