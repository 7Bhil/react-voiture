import React from 'react';
import FAQItem from '../UI/FAQItem';
import { faqItems } from '../../data/faq';

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Questions fréquentes</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous ne trouvez pas réponse à votre question?</p>
          <a 
            href="/contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;