"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Droplet, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="p-1.5 bg-gradient-to-br from-sky-400 to-emerald-500 rounded-lg">
                      <Droplet className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-800 tracking-tight">AQUABALANCE</span>
              </Link>
              <p className="text-slate-600">{t('footer.slogan')}</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800 mb-4">{t('footer.productsTitle')}</p>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="/aigua-kangen" className="hover:text-sky-500 transition-colors">{t('nav.kangen')}</Link></li>
              <li><Link href="/dutxa-anespa" className="hover:text-sky-500 transition-colors">{t('nav.anespa')}</Link></li>
              <li><Link href="/emguarde" className="hover:text-sky-500 transition-colors">{t('nav.emGuarde')}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">{t('footer.companyTitle')}</p>
            <ul className="space-y-3 text-slate-600">
              <li><Link href="/beneficis" className="hover:text-sky-500 transition-colors">{t('nav.benefits')}</Link></li>
              <li><Link href="/contacte" className="hover:text-sky-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
            <div>
              <p className="font-semibold text-gray-800 mb-4">{t('footer.segueix-nos')}</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/marta-puig-barnes-156a97377/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="text-slate-500 hover:text-sky-500 transition-colors"><Linkedin /></a>
                <a href="https://www.facebook.com/profile.php?id=61578678193741" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-sky-500 transition-colors"><Facebook /></a>
                <a href="https://www.instagram.com/_aquabalance_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-sky-500 transition-colors"><Instagram /></a>
              </div>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/avis-legal.html" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline transition-colors">{t('footer.legalNotice')}</a>
            <a href="/politica-de-privacitat.html" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="/politica-de-cookies.html" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:underline transition-colors">{t('footer.cookiesPolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;