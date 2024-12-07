import React from 'react';
import { ChevronDown } from 'lucide-react';
import { strings } from '../../constants/strings';

export const FAQSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <a
        href="https://t.me/CalmVPN"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 px-4 bg-amber-500 text-white rounded-xl font-bold text-lg text-center hover:bg-amber-600 transition-colors"
      >
        {strings.support.contact}
      </a>
      
      <h2 className="text-2xl font-semibold mb-4">{strings.support.faq.title}</h2>
      
      {Object.entries(strings.support.faq.categories).map(([key, category]) => (
        <details key={key} className="group bg-white/50 dark:bg-neutral-800/50 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer">
            <h3 className="font-medium">{category.title}</h3>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
          </summary>
          <div className="p-4 pt-0 space-y-3">
            {category.items.map((item, index) => (
              <div key={index} className="border-t border-neutral-200 dark:border-neutral-700 pt-3">
                <h4 className="font-medium mb-2">{item.question}</h4>
                <p className="text-neutral-600 dark:text-neutral-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};