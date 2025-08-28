"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n'; // Assegura't que la teva configuració de i18n estigui a src/lib/i18n.ts

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}