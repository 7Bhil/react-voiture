import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer le message
    console.log('Message envoyé:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Message envoyé!</h2>
        <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Nom complet</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </span>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Votre nom" 
              required 
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaEnvelope />
            </span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="votre@email.com" 
              required 
            />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Sujet</label>
        <input 
          type="text" 
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
          placeholder="Sujet de votre message" 
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
          placeholder="Votre message..." 
          required 
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
      >
        <FaPaperPlane className="mr-2" /> Envoyer le message
      </button>
    </form>
  );
};

export default ContactForm;