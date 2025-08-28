"use client"; // AQUEST ÉS EL COMPONENT DE CLIENT

import React, { JSX } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Droplets, Zap, Wind } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

import heroLevelukk8 from '@/assets/images/leveluk-k8-1.png';
import formulaAigua from '@/assets/images/formulaAigua.webp';
// Aquest arxiu conté TOTA la lògica i el JSX de la pàgina.
const AiguaKangenView = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) return null;

  const waterTypes = t('kangenPage.waterTypes.list', { returnObjects: true });
  const howItWorksSteps = t('kangenPage.howItWorks.steps', { returnObjects: true });

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('kangenPage.hero.title')}{' '}
                <span className="text-transparent bg-clip-text water-gradient">Kangen®</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t('kangenPage.hero.subtitle')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <Image alt={t('kangenPage.hero.imageAlt')} className="w-full h-auto rounded-2xl shadow-2xl" src={heroLevelukk8} width={600} height={400} priority/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('kangenPage.waterTypes.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('kangenPage.waterTypes.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(waterTypes) && (waterTypes as any[]).map((water, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-full h-3 ${water.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{water.name}</h3>
                <p className="text-gray-600 mb-4">{water.description}</p>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">{t('kangenPage.waterTypes.usesLabel')}</span>
                  <ul className="text-sm text-gray-600">
                    {water.uses.map((use: string, useIndex: number) => (
                      <li key={useIndex} className=" text-lg flex items-center">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('kangenPage.howItWorks.imageAlt')} className="w-full h-auto rounded-2xl shadow-xl object-cover" src={formulaAigua} width={585} height={390}/>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('kangenPage.howItWorks.title')}</h2>
              <p className="text-lg text-gray-600 mb-10">{t('kangenPage.howItWorks.subtitle')}</p>
              <div className="space-y-8">
                {Array.isArray(howItWorksSteps) && (howItWorksSteps as any[]).map((step, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-600">
                      {index === 0 && <Zap className="w-6 h-6" />}
                      {index === 1 && <Wind className="w-6 h-6" />}
                      {index === 2 && <Droplets className="w-6 h-6" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AiguaKangenView;