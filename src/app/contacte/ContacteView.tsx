"use client";

import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';

const ContacteView = () => {
  return (
    <PageWrapper>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
    </PageWrapper>
  );
};

export default ContacteView;