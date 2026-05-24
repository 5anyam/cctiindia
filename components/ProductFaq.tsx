'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  productSlug: string;
  productName: string;
}

const faqData: Record<string, FAQ[]> = {
  'oxygen-concentrator': [
    {
      question: "What is an oxygen concentrator and how does it work?",
      answer: "An oxygen concentrator is a medical device that filters ambient air to deliver concentrated oxygen (typically 90–96% purity) to patients who require supplemental oxygen therapy. It uses a molecular sieve (zeolite) to separate oxygen from nitrogen and other gases, delivering a continuous supply without the need for oxygen cylinders."
    },
    {
      question: "Do I need a doctor's prescription to buy an oxygen concentrator?",
      answer: "Yes. Oxygen concentrators are medical devices and should only be used under the guidance of a qualified healthcare professional. A doctor's prescription specifying the required flow rate (LPM) and duration of use is recommended before purchase."
    },
    {
      question: "What flow rate do I need — 5 LPM or 10 LPM?",
      answer: "Flow rate depends on your doctor's prescription. For most patients with mild to moderate hypoxia, a 5 LPM concentrator is sufficient. Patients with higher oxygen requirements (e.g., COPD, severe hypoxia) may need a 10 LPM model. Always follow your physician's recommendation."
    },
    {
      question: "How long can I run the concentrator continuously?",
      answer: "Longfian oxygen concentrators are designed for continuous 24/7 operation. They are built for long-term home use and clinical settings. Regular filter cleaning every 1–2 weeks is recommended to maintain performance."
    },
    {
      question: "What is the oxygen purity delivered?",
      answer: "At rated flow, Longfian concentrators deliver 93% ± 3% oxygen purity — meeting medical-grade standards. Purity may decrease slightly at higher flow rates, which is normal."
    },
    {
      question: "Does it work during power cuts?",
      answer: "No, oxygen concentrators require a stable electricity supply and do not have built-in battery backup. For power-cut scenarios, we recommend keeping an oxygen cylinder as backup. An inverter/UPS can be used to ensure uninterrupted power supply."
    },
    {
      question: "Is the warranty included?",
      answer: "Yes. All Longfian oxygen concentrators sold by Sachdeva Medline come with the manufacturer's warranty covering manufacturing defects. We assist with all warranty claims from day one. Please retain the warranty card included with your product."
    },
    {
      question: "Do you provide after-sale support and servicing?",
      answer: "Yes. Sachdeva Medline provides comprehensive after-sale support including setup guidance, usage training, and service assistance. You can reach us at +91 98915 21090 or +91 99110 06187."
    },
    {
      question: "Can I use it for multiple family members?",
      answer: "An oxygen concentrator can be used by different patients provided the flow rate settings are adjusted as per each individual's prescription. A separate nasal cannula or mask should always be used per patient to maintain hygiene."
    },
    {
      question: "How is the product delivered and what is included in the box?",
      answer: "We dispatch orders within 24 hours across pan-India via reliable courier partners. The box typically includes the concentrator unit, nasal cannula, power cord, humidifier bottle, air filter, and user manual. Delivery usually takes 3–5 business days."
    }
  ],
  'recliner-bed': [
    {
      question: "What is a patient recliner bed used for?",
      answer: "A patient recliner bed (also called a fowler bed or hospital-type bed) is designed for home care patients who need adjustable positioning — including head elevation, knee break, and flat positions. It is commonly used for post-surgery recovery, long-term illness, COPD patients, and elderly care."
    },
    {
      question: "How does the recliner mechanism work?",
      answer: "The backrest and knee rest can be adjusted manually or via crank mechanism to various angles. This allows caregivers to position the patient safely for eating, resting, breathing, or medical procedures."
    },
    {
      question: "What is the weight capacity?",
      answer: "Please refer to the product specification sheet for the exact weight capacity. Generally, patient beds of this type support up to 100–120 kg. Contact us to confirm specifications before purchasing."
    },
    {
      question: "Is a mattress included?",
      answer: "Please check the product listing or contact us to confirm whether a mattress is included. We can also recommend compatible anti-decubitus (anti-bedsore) air mattresses separately."
    },
    {
      question: "How is it delivered given the size?",
      answer: "The recliner bed is dispatched in a flat-pack or semi-assembled form to facilitate shipping. Detailed assembly instructions are included. Delivery takes 5–7 business days depending on the delivery location."
    },
    {
      question: "Do you offer return or replacement for this product?",
      answer: "Returns are accepted within 7 days of delivery only for manufacturing defects, wrong product delivered, or damaged unit. Please contact us within 7 days with photos of the issue at info@sachdevamedline.com or +91 98915 21090."
    }
  ]
};

const defaultFAQs: FAQ[] = [
  {
    question: "Is this product covered under warranty?",
    answer: "Yes. All products sold by Sachdeva Medline include the manufacturer's warranty covering manufacturing defects. We assist with warranty claims at no additional cost."
  },
  {
    question: "Do you deliver pan-India?",
    answer: "Yes. We deliver across India. Most orders are dispatched within 24 hours and delivered within 3–5 business days depending on the location."
  },
  {
    question: "Can I get expert guidance before purchasing?",
    answer: "Absolutely. Call or WhatsApp us at +91 98915 21090 and our team will help you choose the right product based on your medical requirement and doctor's prescription."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 7 days of delivery for damaged, defective, or incorrect products. Change of mind returns are not accepted for medical equipment. Contact us at info@sachdevamedline.com to initiate a return."
  }
];

const ProductFAQ: React.FC<ProductFAQProps> = ({ productSlug, productName }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getFAQs = (): FAQ[] => {
    if (productSlug.includes('recliner') || productSlug.includes('bed')) {
      return faqData['recliner-bed'];
    }
    if (productSlug.includes('oxygen') || productSlug.includes('concentrator') || productSlug.includes('longfian') || productSlug.includes('jay')) {
      return faqData['oxygen-concentrator'];
    }
    return defaultFAQs;
  };

  const faqs = getFAQs();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-center gap-3 mb-2">
          <QuestionMarkCircleIcon className="h-8 w-8 text-emerald-600" />
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-gray-600 text-center text-sm lg:text-base">
          Everything you need to know about {productName}
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="group">
              <button
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                      isOpen
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                    }`}>
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-relaxed pr-2">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className={`h-5 w-5 transition-colors duration-200 ${
                      isOpen ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-600'
                    }`} />
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="ml-9 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
        <p className="text-gray-700 text-sm mb-3">
          Still have questions? Our team is here to help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default ProductFAQ;
