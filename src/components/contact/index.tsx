import React from 'react';
import { contactData } from '../../data/contactData';

const ContactOptions: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center max-w-5xl mx-auto p-5 bg-white rounded-lg shadow-md">
      {contactData.map((contact, index) => (
        <div className="flex-1 text-center p-5 border-r border-gray-300 last:border-r-0" key={index}>
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-red-500 transition-colors duration-300"
          >
            <figure className="flex justify-center mb-3">
              <img src={contact.icon} alt={contact.title} className="h-10 w-10 filter-red" />
            </figure>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">{contact.title}</h2>
              <span className="text-sm text-gray-600">{contact.link}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactOptions;
