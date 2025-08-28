import React from 'react';
import { type Metadata } from 'next';
import DutxaAnespaView from './DutxaAnespaView'; // Importem el component de client

// AQUEST ÉS UN COMPONENT DE SERVIDOR
// Només s'encarrega del SEO.
export const metadata: Metadata = {
  title: "Dutxa ANESPA® DX | Converteix la teva llar en un balneari",
  description: "Descobreix el sistema de dutxa ANESPA® DX, que elimina el clor i altres substàncies nocives per oferir-te una experiència de spa a casa.",
  alternates: {
    canonical: "https://www.aquabalance.es/dutxa-anespa",
  },
};

// La seva única funció és renderitzar el component de client.
export default function DutxaAnespaPage() {
  return <DutxaAnespaView />;
}