import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfoData = [
  { icon: <Phone className="w-6 h-6" />, title: "Telèfon", content: "+34 690 846 611" },
  { icon: <Mail className="w-6 h-6" />, title: "Email", content: "marta@aquabalance.es" },
  { icon: <MapPin className="w-6 h-6" />, title: "Ubicació", content: "Girona, Catalunya" }
];

const ContactInfo = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {contactInfoData.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 water-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-sky-600 font-medium mb-1">{info.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;