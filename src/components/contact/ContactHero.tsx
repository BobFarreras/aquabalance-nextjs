"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contactPage.hero.title')}
            <span className="text-transparent bg-clip-text water-gradient">{t('contactPage.hero.nosaltres')}</span>
          </h1>
          <p className="text-xl text-gray-600 ">{t('contactPage.hero.subtitle')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;