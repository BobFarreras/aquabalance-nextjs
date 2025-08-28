"use client";

import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ArrowLeft } from 'lucide-react';
import { motion, useMotionValue, useTransform, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import AIWellnessAssistant from '@/components/AIWellnessAssistant';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

// Imatges Locals
import heroPhoto from '@/assets/images/hero-animated-photo.jpg';
import kangenProductImg from '@/assets/images/leveluk-k8.png';
import anespaMainImg from '@/assets/images/product-anespa-main.jpg';
import anespaDetailImg from '@/assets/images/product-anespa-detail.jpg';
import emguardeProductImg from '@/assets/images/product-emguarde.jpg';
import avatar1 from '@/assets/images/avatar-testimonial-1.jpeg';
import avatar2 from '@/assets/images/avatar-testimonial-2.jpg';
import avatar3 from '@/assets/images/avatar-testimonial-3.jpeg';

const testimonialAvatars = [avatar1, avatar2, avatar3];

// --- Component de la Imatge Animada ---
const AnimatedHeroImage = ({ altText }: { altText: string }) => {
  // ... (el codi d'aquest component no canvia)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 150], [5, -5]);
  const rotateY = useTransform(x, [-100, 150], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: ["-10px", "10px"] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="relative z-10 transform-gpu"
      >
        <Image
          src={heroPhoto}
          alt={altText}
          className="relative w-full h-auto rounded-3xl shadow-2xl max-w-md"
          draggable={false}
          priority
          placeholder="blur"
        />
      </motion.div>
    </motion.div>
  );
};

// --- Component Principal de la Pàgina ---
export default function HomePage() {
  const { t, i18n } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  if (!i18n.isInitialized) {
    return null;
  }
  
  const testimonials = t('testimonial.list', { returnObjects: true });

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-sky-50 py-20 md:py-32"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.85)),
            url('/images/textura_aigua.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
            <motion.div
              className="text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8"
                variants={itemVariants}
              >
                {t('hero.title1')}
                <span className="block text-sky-500 md:text-7xl">{t('hero.title2')}</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 mb-4"
                variants={itemVariants}
              >
                {t('hero.subtitle1')}
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 mb-12"
                variants={itemVariants}
              >
                {t('hero.subtitle2')}
              </motion.p>
            </motion.div>
            <div className="flex justify-center items-center min-h-[400px] mt-12 md:mt-0">
              <AnimatedHeroImage altText={t('hero.heroImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('productsPreview.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t('productsPreview.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-5">{t('productsPreview.kangenTitle')}</h3>
              <p className="text-gray-600 mb-6 md:text-3xl">{t('productsPreview.kangenDescription')}</p>
              <Button asChild className="bg-gradient-to-r from-teal-400 to-blue-500  text-white">
                <Link href="/aigua-kangen">{t('productsPreview.discoverMore')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('productsPreview.kangenImageAlt')} className="w-full h-auto object-cover rounded-2xl shadow-xl" src={kangenProductImg} placeholder="blur" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:order-last">
              <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">{t('productsPreview.anespaTitle')}</h3>
              <p className="text-gray-600 mb-6 md:text-3xl text-lg">{t('productsPreview.anespaDescription')}</p>
              <Button asChild className="bg-gradient-to-r from-teal-400 to-blue-500  text-white">
                <Link href="/dutxa-anespa">{t('productsPreview.discoverMore')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="relative p-8">
                <Image alt={t('productsPreview.anespaImageAlt')} className="w-full h-auto object-cover rounded-2xl shadow-xl" src={anespaMainImg} placeholder="blur"/>
                <Image alt={t('productsPreview.anespaDetailAlt')} className="absolute w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl border-4 border-white -bottom-4 -right-4" src={anespaDetailImg} placeholder="blur"/>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-5">{t('productsPreview.emGuardeTitle')}</h3>
              <p className="text-gray-600 mb-6 md:text-3xl text-lg">{t('productsPreview.emGuardeDescription')}</p>
              <Button asChild className="bg-gradient-to-r from-teal-400 to-blue-500  text-white">
                <Link href="/emguarde">{t('productsPreview.discoverMore')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Image alt={t('productsPreview.emGuardeImageAlt')} className="w-full h-auto object-cover rounded-2xl shadow-xl" src={emguardeProductImg} placeholder="blur" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonial.title')}</h2>
            <p className="text-lg text-gray-600">{t('testimonial.subtitle')}</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {Array.isArray(testimonials) && (testimonials as any[]).map((testimonial, index) => (
                  <div className="flex-grow-0 flex-shrink-0 w-full min-w-0 px-4" key={index}>
                    <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-100">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <Image
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full mr-4 object-cover shadow-md"
                          src={testimonialAvatars[index % testimonialAvatars.length]}
                          placeholder="blur"
                        />
                        <cite className="font-semibold text-slate-800 not-italic">{testimonial.author}</cite>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 h-12 w-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-600 hover:text-sky-500 transition-colors"
              aria-label="Testimoni anterior"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 h-12 w-12 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-600 hover:text-sky-500 transition-colors"
              aria-label="Testimoni següent"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
      
      <AIWellnessAssistant />
    </PageWrapper>
  );
};