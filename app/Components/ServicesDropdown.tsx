'use client';

import React, { useState } from 'react';

// Mock shadcn/ui components for demonstration purposes.
// In your actual project, these would be imported from your components/ui directory.
// For example:
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';

// These mock components are included here for self-containment in this environment.
// In a real Next.js project, you would import the actual shadcn/ui components.
const DropdownMenu = ({ children }: any) => (
  // The hover events are now managed by the parent ServicesDropdown component
  // to ensure the pop-up stays open when hovering over the content.
  <div className="relative">
    {children}
  </div>
);
const DropdownMenuTrigger = ({ children }: any) => <>{children}</>;
const DropdownMenuContent = ({ children, className }: any) => (
  // Changed 'mt-4' to 'top-full' to ensure no gap between trigger and pop-up
  <div className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-5xl rounded-lg shadow-xl p-6 border border-teal-300 z-50 animate-fade-in-down ${className}`}
    style={{ backgroundColor: 'white', minWidth: '750px', top: '100%' }}> {/* Using top: '100%' for direct placement below trigger */}
    {children}
  </div>
);

// Define the structure for a service item
interface ServiceItem {
  name: string;
  link?: string;
}

// Define the structure for a service category
interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

// Define the data for the services menu
const servicesData: ServiceCategory[] = [
  {
    title: 'DIGITAL MARKETING STRATEGY',
    items: [
      { name: 'Social Media Management', link: '/services/social-media' },
      { name: 'PPC Advertising', link: '/services/ppc-advertising' },
      { name: 'E-Commerce', link: '/E-Commerce' },
    ],
  },
  {
    title: 'BUSINESS TECHNOLOGY',
    items: [
      { name: 'AI Chatbots', link: '/services/ai-chatbots' },
      { name: 'CRM & ERP Solutions', link: '/services/crm-erp' },
      { name: 'Customer Engagement', link: '/services/customer-engagement' },
      { name: 'Business Analytics', link: '/services/business-analytics' },
    ],
  },
  {
    title: 'WEB & DESIGN',
    items: [
      { name: 'Smart Web Design', link: '/services/smart-web-design' },
      { name: 'Conversion Optimization', link: '/services/conversion-optimization' },
      { name: 'Digital Infrastructure', link: '/services/digital-infrastructure' },
    ],
  },
];

interface ServicesDropdownProps {
  triggerClassName?: string;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ triggerClassName }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control pop-up visibility

  return (
    // Hover events are moved to this parent div to keep the pop-up open
    // when the mouse is over the trigger OR the pop-up content itself.
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownMenu> {/* Removed setIsOpen prop as it's not used by the mock */}
        <DropdownMenuTrigger asChild>
          <a href="/Services" className={`text-gray-600 font-semibold text-base hover:text-indigo-600 cursor-pointer ${triggerClassName}`}>Services</a>
        </DropdownMenuTrigger>
        {/* Conditionally render DropdownMenuContent based on isOpen state */}
        {isOpen && (
          <DropdownMenuContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.map((category, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-teal-800 font-bold text-base mb-3 uppercase">
                    {category.title}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.link || '#'}
                          className="text-teal-700 text-sm hover:text-teal-900 hover:underline transition-colors duration-200 block whitespace-nowrap"
                        >
                          <span className="mr-2 text-teal-600">&bull;</span>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* Buttons placed under respective categories */}
                  {category.title === 'DIGITAL MARKETING STRATEGY' && (
                    <a
                      href="/marketing-session" // Example link
                      className="mt-4 px-3 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300 border-t border-gray-200 pt-4 pb-4 flex items-center justify-center self-start"
                      style={{ backgroundColor: '#14b8a6' }} // Directly using primary color hex code
                    >
                      Marketing Session
                    </a>
                  )}
                  {category.title === 'BUSINESS TECHNOLOGY' && (
                    <a
                      href="/tech-consultation" // Example link
                      className="mt-4 px-3 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300 border-t border-gray-200 pt-4 pb-4 flex items-center justify-center self-start"
                      style={{ backgroundColor: '#14b8a6' }} // Directly using primary color hex code
                    >
                      Tech Consultation
                    </a>
                  )}
                  {category.title === 'WEB & DESIGN' && (
                    <a
                      href="/design-planning" // Example link
                      className="mt-4 px-3 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300 border-t border-gray-200 pt-4 pb-4 flex items-center justify-center self-start"
                      style={{ backgroundColor: '#14b8a6' }} // Directly using primary color hex code
                    >
                      Design Planning
                    </a>
                  )}
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default ServicesDropdown;
