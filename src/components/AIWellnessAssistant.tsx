"use client";

import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Zap, Sparkles, Droplets, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link'; // CANVI: Import de Next.js

// Definim uns tipus per a les respostes i recomanacions per a més seguretat
type Answers = { [key: string]: string };
type Recommendation = {
  title: string;
  morning: { icon: JSX.Element; text: string };
  beauty: { icon: JSX.Element; text: string };
  cleaning: { icon: JSX.Element; text: string };
} | null;

const AIWellnessAssistant = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [recommendation, setRecommendation] = useState<Recommendation>(null);

  // Esperem que i18next estigui llest per evitar errors
  if (!i18n.isInitialized) {
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-2xl min-h-[280px] flex flex-col justify-center items-center">
            <Loader2 className="w-12 h-12 text-sky-400 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  const questions = [
    { id: 'goal', text: t('aiAssistant.question1'), options: t('aiAssistant.options1', { returnObjects: true }) },
    { id: 'activity', text: t('aiAssistant.question2'), options: t('aiAssistant.options2', { returnObjects: true }) }
  ];

  const handleAnswer = (questionId: string, option: string) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);
    if (Object.keys(newAnswers).length >= questions.length) {
      getRecommendation(newAnswers);
    } else {
      setStep(step + 1);
    }
  };
  
  const getRecommendation = (finalAnswers: Answers) => {
    setStep(questions.length);
    setTimeout(() => {
      let rec = {
        title: t('aiAssistant.resultsTitle'),
        morning: { icon: <Zap/>, text: t('aiAssistant.recMorning') },
        beauty: { icon: <Sparkles/>, text: t('aiAssistant.recBeauty') },
        cleaning: { icon: <Droplets/>, text: t('aiAssistant.recCleaning') }
      };
      if (finalAnswers.goal === t('aiAssistant.options1.1')) {
        rec.title = t('aiAssistant.resultsTitleBeauty');
        rec.beauty.text = t('aiAssistant.recBeautyPriority');
      }
      if (finalAnswers.activity === t('aiAssistant.options2.2')) {
        rec.title = t('aiAssistant.resultsTitleSport');
        rec.morning = { icon: <Zap/>, text: t('aiAssistant.recSportPriority') };
      }
      setRecommendation(rec);
    }, 2000);
  };

  const resetAssistant = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <section className="py-10 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aiAssistant.mainTitle')}</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">{t('aiAssistant.mainSubtitle')}</p>
            </motion.div>
            <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-2xl min-h-[280px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step < questions.length && Array.isArray(questions[step].options) && (
                  <motion.div key={`question-${step}`} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl font-semibold text-sky-300 mb-6">{questions[step].text}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {questions[step].options.map(opt => (
                        <Button key={opt} onClick={() => handleAnswer(questions[step].id, opt)} variant="outline" size="lg" className="text-black border-slate-600 hover:bg-sky-500 hover:text-white">
                          {opt}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
                {step === questions.length && !recommendation && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <Loader2 className="w-12 h-12 text-sky-400 animate-spin mx-auto mb-4" />
                    <p className="text-slate-300 text-lg">{t('aiAssistant.loadingText')}</p>
                  </motion.div>
                )}
                {step === questions.length && recommendation && (
                  <motion.div key="result" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
                    <h3 className="text-2xl font-semibold text-sky-300 mb-6">{recommendation.title}</h3>
                    <div className="space-y-6 text-left">
                      <div className="flex items-start gap-3">
                        <div className="text-sky-400 mt-1">{recommendation.morning.icon}</div>
                        <p className="text-slate-200 text-lg flex-1">{recommendation.morning.text}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-sky-400 mt-1">{recommendation.beauty.icon}</div>
                        <p className="text-slate-200 text-lg flex-1">{recommendation.beauty.text}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-sky-400 mt-1">{recommendation.cleaning.icon}</div>
                        <p className="text-slate-200 text-lg flex-1">{recommendation.cleaning.text}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                      <Button onClick={resetAssistant} variant="outline" size="lg" className="text-black border-slate-600 hover:bg-gray-500 hover:text-white">
                        {t('aiAssistant.resetButton')}
                      </Button>
                        <Link href="/contacte">
                        <Button variant="default" size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                          {t('aiAssistant.contactUsButton')} <ArrowRight className="ml-2 h-4 w-4" />
    
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
  );
};
export default AIWellnessAssistant;