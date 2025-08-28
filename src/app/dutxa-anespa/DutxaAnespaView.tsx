"use client";

import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Heart, Droplets, Shield, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';

// Imatges locals
import imgDutxa from '@/assets/images/dutxa.webp';
import anespaSenseFons from '@/assets/images/anespa-sensefons.png'; // He canviat el nom per a més claredat
import noiaNegraBanyera from '@/assets/images/anespa-dx-1.jpeg';
import anespaTestimonial from '@/assets/images/anespa-testimonial.jpeg'; // Nova imatge local per al testimoni

const DutxaAnespaView = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) return null;

  const benefits = t('anespaPage.benefits.list', { returnObjects: true });
  const features = t('anespaPage.features.list', { returnObjects: true });
  const howItWorksSteps = t('anespaPage.howItWorks.steps', { returnObjects: true });

  const benefitIcons = [<Sparkles className="w-6 h-6" />, <Heart className="w-6 h-6" />, <Shield className="w-6 h-6" />, <Droplets className="w-6 h-6" />];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('anespaPage.hero.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">ANESPA®</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t('anespaPage.hero.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90">
                  <Link href="/contacte">{t('anespaPage.hero.buyButton')} <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <Image alt={t('anespaPage.hero.imageAlt')} className="w-full h-auto rounded-2xl shadow-2xl" src={imgDutxa} priority placeholder="blur" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('anespaPage.benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('anespaPage.benefits.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(benefits) && (benefits as any[]).map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {benefitIcons[index]}
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

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('anespaPage.howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('anespaPage.howItWorks.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('anespaPage.howItWorks.imageAlt')} className="w-full h-auto rounded-xl shadow-lg" src={anespaSenseFons} placeholder="blur" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              {Array.isArray(howItWorksSteps) && (howItWorksSteps as any[]).map((step, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('anespaPage.features.title')}</h2>
              <p className="text-xl text-gray-600 mb-8">{t('anespaPage.features.subtitle')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.isArray(features) && (features as any[]).map((feature, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">{feature.text || feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('anespaPage.features.imageAlt')} className="w-full h-auto rounded-xl shadow-lg" src={noiaNegraBanyera} placeholder="blur" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('anespaPage.testimonial.title')}</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-600 mb-6 italic">{t('anespaPage.testimonial.quote')}</p>
              <div className="flex items-center justify-center space-x-4">
                <Image alt={t('anespaPage.testimonial.imageAlt')} className="w-12 h-12 rounded-full object-cover" src={anespaTestimonial} placeholder="blur"/>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t('anespaPage.testimonial.author')}</p>
                  <p className="text-sm text-gray-600">{t('anespaPage.testimonial.role')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('anespaPage.cta.title')}</h2>
            <p className="text-xl text-white/90 mb-8">{t('anespaPage.cta.subtitle')}</p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default DutxaAnespaView;