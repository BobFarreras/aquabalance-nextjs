"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Send, User, MessageSquare, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  productInterest: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', subject: '', message: '', productInterest: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAccepted) {
      toast({
        title: "Acceptació requerida",
        description: "Per enviar el missatge, has d'acceptar la política de privacitat.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    // CANVI: Accedim a les variables d'entorn amb process.env
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    
    const templateParams = {
      ...formData,
      phone: formData.phone || 'No especificat',
      productInterest: formData.productInterest || 'No especificat',
      subject: formData.subject || 'Sense assumpte',
      reply_to: formData.email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast({ 
            title: t('contactPage.form.toast.title'), 
            description: t('contactPage.form.toast.description') 
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', productInterest: '' });
        setPrivacyAccepted(false);
      })
      .catch((err) => {
        toast({ 
            title: "Error en l'enviament", 
            description: "Si us plau, intenta-ho més tard o contacta'ns directament.", 
            variant: "destructive" 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contactPage.form.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.name')}</label>
            <div className="relative"><User className="absolute left-3 top-3 w-5 h-5 text-gray-400" /><input type="text" name="name" value={formData.name} onChange={handleInputChange} required disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg" placeholder={t('contactPage.form.placeholders.name')} /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.email')}</label>
            <div className="relative"><Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" /><input type="email" name="email" value={formData.email} onChange={handleInputChange} required disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg" placeholder={t('contactPage.form.placeholders.email')} /></div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.phone')}</label>
          <div className="relative"><Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" /><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg" placeholder={t('contactPage.form.placeholders.phone')} /></div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.product')}</label>
          <select name="productInterest" value={formData.productInterest} onChange={handleInputChange} disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg"><option value="">{t('contactPage.form.options.default')}</option><option value="kangen">{t('contactPage.form.options.kangen')}</option><option value="anespa">{t('contactPage.form.options.anespa')}</option><option value="emGuarde">{t('contactPage.form.options.emGuarde')}</option><option value="general">{t('contactPage.form.options.general')}</option></select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.subject')}</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder={t('contactPage.form.placeholders.subject')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.form.labels.message')}</label>
          <div className="relative"><MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" /><textarea name="message" value={formData.message} onChange={handleInputChange} required rows={4} disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg resize-none" placeholder={t('contactPage.form.placeholders.message')} /></div>
        </div>
        
        <div className="flex items-start space-x-3">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="h-4 w-4 mt-1 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
          />
          <div className="text-sm">
            <label htmlFor="privacy" className="text-gray-700">
              {t('contactPage.form.labels.privacy_prefix')}
              {/* CANVI: L'enllaç ara és un component Link de Next.js */}
              <Link href="/politica-de-privacitat.html" className="font-semibold text-sky-600 hover:underline">
                {t('contactPage.form.labels.privacy_link')}
              </Link>.
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full water-gradient text-white" size="lg" disabled={isSubmitting || !privacyAccepted}>
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> {t('contactPage.form.sending')}</>
          ) : (
            <><Send className="w-5 h-5 mr-2" /> {t('contactPage.form.button')}</>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;