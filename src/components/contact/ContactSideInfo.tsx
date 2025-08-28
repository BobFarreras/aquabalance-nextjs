"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSideInfo = () => {
  const { t, i18n } = useTranslation();
  
  // Assegurem que les traduccions estiguin llestes
  if (!i18n.isInitialized) {
    return null; // O un esquelet de càrrega
  }

  const demoPoints = t('contactPage.sideInfo.demo.points', { returnObjects: true });

  return (
    <div className="space-y-8">
      {/* --- Secció de Demostració Gratuïta --- */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {t('contactPage.sideInfo.demo.title')}
        </h3>
        <p className="text-gray-600 mb-2">
          {t('contactPage.sideInfo.demo.description')}
        </p>
        <p className="text-gray-600 mb-6">
          {t('contactPage.sideInfo.demo.monthlyInfo')}
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          {Array.isArray(demoPoints) && (demoPoints as any[]).map((point, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-sky-500 rounded-full mr-3 shrink-0"></div>
              {/* Comprovem si 'point' és un objecte o un string per evitar errors */}
              {point.text || point}
            </li>
          ))}
        </ul>
      </div>

      {/* Pots afegir aquí la secció de "Resposta Ràpida" si la necessites */}
    </div>
  );
};

export default ContactSideInfo;