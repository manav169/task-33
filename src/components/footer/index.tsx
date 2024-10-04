// import React from 'react';
import { footerData } from '../../data/footerData';
import '../footer/index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>{footerData.brandName}</h2>
        <p>Email: <a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a></p>
        <p>Phone: <a href={`tel:${footerData.contact.phone}`}>{footerData.contact.phone}</a></p>
        <div className="newsletter">
          <p>{footerData.newsletter.text}</p>
          <form>
            <input type="email" placeholder={footerData.newsletter.placeholder} />
            <button type="submit">{footerData.newsletter.buttonText}</button>
          </form>
        </div>
      </div>

      <div className="footer-links">
        {footerData.sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
