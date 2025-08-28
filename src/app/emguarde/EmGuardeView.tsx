"use client";

import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Zap, WifiOff, RadioTower, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';

// Importem la imatge local
import imgEmguarde from '@/assets/images/product-emguarde.jpg';

const EmGuardeView = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) return null;

  const benefits = t('emGuardePage.benefits.list', { returnObjects: true });
  const features = t('emGuardePage.features.list', { returnObjects: true });
  const specs = t('emGuardePage.specs.list', { returnObjects: true });
  const certifications = t('emGuardePage.certifications.items', { returnObjects: true });
  
  const benefitIcons: { [key: string]: JSX.Element } = {
    RadioTower: <RadioTower className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    WifiOff: <WifiOff className="w-8 h-8" />
  };

  return (
    <PageWrapper>
{/* Hero Section */}
<section className="relative py-20 bg-gradient-to-br from-gray-100 to-slate-200 overflow-hidden">
  {/* AQUEST ÉS L'ÚNIC CONTENIDOR QUE NECESSITEM */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-800">
            {t('emGuardePage.hero.title')}
          </span>
        </h1>
        <p className="text-2xl text-gray-700 font-medium mb-6">{t('emGuardePage.hero.slogan')}</p>
        <p className="text-lg text-gray-600 mb-8">{t('emGuardePage.hero.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gray-800 text-white hover:bg-gray-700 group">
            <Link href="/contacte">{t('emGuardePage.hero.buyButton')} <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Image 
          alt={t('emGuardePage.hero.imageAlt')} 
          className="w-full h-auto rounded-2xl shadow-2xl" 
          src={imgEmguarde} 
          priority 
          placeholder="blur"
        />
      </motion.div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('emGuardePage.benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('emGuardePage.benefits.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Array.isArray(benefits) && (benefits as any[]).map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-6 p-6">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {benefitIcons[benefit.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('emGuardePage.specs.title')}</h3>
              <div className="space-y-3">
                {Array.isArray(specs) && (specs as any[]).map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-gray-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('emGuardePage.features.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Array.isArray(features) && (features as any[]).map((feature) => (
                    <div key={feature.title} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-gray-800">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('emGuardePage.certifications.title')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(certifications) && (certifications as any[]).map((cert, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> {cert.name || cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('emGuardePage.video.title')}</h2>
            <p className="text-xl text-gray-600">{t('emGuardePage.video.subtitle')}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl shadow-2xl overflow-hidden border-4 border-white bg-black">
              <video
                src="/videos/videoEmGurade.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                El teu navegador no suporta l'etiqueta de vídeo.
              </video>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default EmGuardeView;