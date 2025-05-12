import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I get started with the platform?',
      answer: 'Getting started is easy! Simply create an account, browse our course catalog, and enroll in the courses that interest you. You can start learning immediately after enrollment.'
    },
    {
      question: 'What types of courses do you offer?',
      answer: 'We offer a wide range of courses across various disciplines including programming, business, design, and more. Our courses are designed by industry experts and are regularly updated to reflect current trends and technologies.'
    },
    {
      question: 'How much do the courses cost?',
      answer: 'We offer both free and premium courses. Free courses provide basic content, while premium courses include additional features like certificates, assignments, and direct instructor support.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all premium courses. If you\'re not satisfied with your purchase, you can request a full refund within 30 days of enrollment.'
    },
    {
      question: 'Do you offer certificates upon completion?',
      answer: 'Yes, all our premium courses come with a certificate of completion. These certificates are recognized by industry professionals and can be shared on your LinkedIn profile or resume.'
    },
    {
      question: 'How can I track my progress?',
      answer: 'Our platform includes a comprehensive progress tracking system. You can view your completed lessons, quiz scores, and overall course progress in your dashboard.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTemplate
      title="Frequently Asked Questions"
      description="Find answers to common questions about our platform"
    >
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <span className="text-gray-500 transform transition-transform duration-200">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <a
          href="/contact"
          className="btn-primary inline-block"
        >
          Contact Us
        </a>
      </div>
    </PageTemplate>
  );
};

export default FaqPage; 