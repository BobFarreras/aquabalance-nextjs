import React from 'react';
import { type Metadata } from 'next';
import ContacteView from './ContacteView';

export const metadata: Metadata = {
  title: "Contacte - AquaBalance",
  description: "Contacta amb nosaltres per a més informació sobre els nostres productes.",
  alternates: {
    canonical: "https://www.aquabalance.es/contacte",
  },
};

export default function ContactePage() {
  return <ContacteView />;
}