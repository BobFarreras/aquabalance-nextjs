"use client";

import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Zap, Shield, Sparkles, Users, Dumbbell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';

import imgAdriabebent from '@/assets/images/adriabeu.webp';
import grans from '@/assets/images/grans.jpeg';
import noiaBebent from '@/assets/images/noiabebent.jpeg';
import marta2 from '@/assets/images/marta.png';

const BeneficisView = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) return null;

  const healthBenefits = t('benefitsPage.health.list', { returnObjects: true });
  const beautyBenefits = t('benefitsPage.beauty.list', { returnObjects: true });
  const sportsBenefits = t('benefitsPage.sports.list', { returnObjects: true });
  const targetAudiences = t('benefitsPage.audience.list', { returnObjects: true });
  
  const healthIcons = [<Heart className="w-8 h-8" />, <Shield className="w-8 h-8" />, <Zap className="w-8 h-8" />];
  const beautyIcons = [<Sparkles className="w-8 h-8" />, <Heart className="w-8 h-8" />, <Shield className="w-8 h-8" />];
  const sportsIcons = [<Dumbbell className="w-8 h-8" />, <Zap className="w-8 h-8" />, <Heart className="w-8 h-8" />];
  const audienceIcons = [<Users className="w-6 h-6" />, <Dumbbell className="w-6 h-6" />, <Sparkles className="w-6 h-6" />, <Heart className="w-6 h-6" />];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('benefitsPage.hero.title1')}{' '}
              <span className="text-transparent bg-clip-text water-gradient">{t('benefitsPage.hero.title_health')}</span>
              {t('benefitsPage.hero.title2')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">{t('benefitsPage.hero.title_beauty')}</span>
              {t('benefitsPage.hero.title3')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">{t('benefitsPage.hero.title_sports')}</span>
            </h1>
            <p className="text-xl text-gray-600">{t('benefitsPage.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:order-last">
              <Image alt={t('benefitsPage.health.imageAlt')} className="w-full h-auto rounded-2xl shadow-2xl object-cover" src={imgAdriabebent} placeholder="blur" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('benefitsPage.health.title')}</h2>
              <p className="text-xl text-gray-600 mb-10">{t('benefitsPage.health.subtitle')}</p>
              <div className="space-y-8">
                {Array.isArray(healthBenefits) && (healthBenefits as any[]).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full water-gradient text-white">{healthIcons[index]}</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                      {benefit.points && (
                        <ul className="mt-3 space-y-2">
                          {benefit.points.map((point: string, pIndex: number) => (
                            <li key={pIndex} className="flex items-center text-sm text-gray-500">
                              <ArrowRight className="w-4 h-4 mr-2 text-emerald-500" />{point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beauty Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('benefitsPage.beauty.imageAlt')} className="w-full h-auto rounded-2xl shadow-2xl object-cover" src={grans} placeholder="blur" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('benefitsPage.beauty.title')}</h2>
              <p className="text-xl text-gray-600 mb-10">{t('benefitsPage.beauty.subtitle')}</p>
              <div className="space-y-8">
                {Array.isArray(beautyBenefits) && (beautyBenefits as any[]).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">{beautyIcons[index]}</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                      {benefit.testimonials && (
                        <div className="mt-4 space-y-3 border-l-2 border-pink-200 pl-4">
                          {benefit.testimonials.map((testimonial: any, tIndex: number) => (
                            <div key={tIndex}>
                              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                              <p className="text-sm font-semibold text-pink-600 mt-1">{testimonial.author}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:order-last">
              <Image alt={t('benefitsPage.sports.imageAlt')} className="w-full h-auto rounded-2xl shadow-2xl object-cover" src={noiaBebent} placeholder="blur" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('benefitsPage.sports.title')}</h2>
              <p className="text-xl text-gray-600 mb-10">{t('benefitsPage.sports.subtitle')}</p>
              <div className="space-y-8">
                {Array.isArray(sportsBenefits) && (sportsBenefits as any[]).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">{sportsIcons[index]}</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                      {benefit.points && (
                        <ul className="mt-3 space-y-2">
                          {benefit.points.map((point: string, pIndex: number) => (
                            <li key={pIndex} className="flex items-center text-sm text-gray-500">
                              <ArrowRight className="w-4 h-4 mr-2 text-orange-500" />{point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('benefitsPage.audience.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('benefitsPage.audience.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(targetAudiences) && (targetAudiences as any[]).map((audience, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 water-gradient rounded-full flex items-center justify-center text-white flex-shrink-0">{audienceIcons[index]}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-sky-50 to-emerald-50 rounded-3xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="hidden lg:block h-full px-30" ><Image src={marta2} alt={t('benefitsPage.cta.imageAlt')} /></div>
              <div className="p-8 md:p-12 lg:p-16 text-center lg:text-left">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                  <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">{t('benefitsPage.cta.pretitle')}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t('benefitsPage.cta.title')}</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">{t('benefitsPage.cta.description')}</p>
                  <Button asChild size="lg" className="group">
                    <Link href="/contacte">{t('benefitsPage.cta.button')} <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BeneficisView;