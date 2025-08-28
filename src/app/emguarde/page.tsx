import React from 'react';
import { type Metadata } from 'next';
import EmGuardeView from './EmGuardeView'; // Importem el component de client

// AQUEST ÉS UN COMPONENT DE SERVIDOR
// Només s'encarrega del SEO.
export const metadata: Metadata = {
  title: "EmGuarde | Protecció avançada contra camps electromagnètics",
  description: "Protegeix la teva salut amb EmGuarde, el dispositiu que neutralitza la radiació electromagnètica de mòbils, Wi-Fi i altres fonts.",
  alternates: {
    canonical: "https://www.aquabalance.es/emguarde",
  },
};

// La seva única funció és renderitzar el component de client.
export default function EmGuardePage() {
  return <EmGuardeView />;
}