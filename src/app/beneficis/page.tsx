import React from 'react';
import { type Metadata } from 'next';
import BeneficisView from './BeneficisView';

// SEO per a la pàgina de beneficis
export const metadata: Metadata = {
  title: "Beneficis de l'Aigua Kangen® i ANESPA®",
  description: "Descobreix els múltiples beneficis per a la salut, la bellesa i l'esport que ofereixen els productes Enagic®.",
  alternates: {
    canonical: "https://www.aquabalance.es/beneficis",
  },
};

// Component de servidor que renderitza la vista de client
export default function BeneficisPage() {
  return <BeneficisView />;
}