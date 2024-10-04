import React from 'react';
import { contactData} from '../../data/contactData';
import '../contact/index.css'

const ContactOptions: React.FC = () => {
  return (
    <div className="contact-options">
      {contactData.map((contact, index) => (
        <div className='contact-wrapper'>
        <div className="contact-option" key={index}>
          <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
            <figure className="contact-icon">
              <img src={contact.icon} alt={contact.title} />
            </figure>
            <div className="contact-details">
              <h2>{contact.title}</h2>
              <span>{contact.link}</span>
            </div>
          </a>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ContactOptions;
