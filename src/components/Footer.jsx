import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-title">{content.footer.about.title[language]}</h3>
                        <p className="footer-text">{content.footer.about.description[language]}</p>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-title">{content.footer.contact.title[language]}</h3>
                        <div className="contact-info">
                            <a href={`tel:${content.footer.contact.phone}`} className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                {content.footer.contact.phone}
                            </a>
                            <a href={`mailto:${content.footer.contact.email}`} className="contact-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {content.footer.contact.email}
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-title">{content.footer.links.title[language]}</h3>
                        <div className="footer-links">
                            <Link to="/privacy-policy" className="footer-link">{content.footer.links.privacy[language]}</Link>
                            <Link to="/terms-conditions" className="footer-link">{content.footer.links.terms[language]}</Link>
                            <Link to="/refund-policy" className="footer-link">
                                {language === 'bn' ? 'রিফান্ড পলিসি' : 'Refund Policy'}
                            </Link>
                            <a href="#" className="footer-link">{content.footer.links.facebook[language]}</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-title">{content.footer.developer.title[language]}</h3>
                        <p className="footer-text">{content.footer.developer.name}</p>
                        <p className="footer-text">{content.footer.developer.country[language]}</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{content.footer.copyright[language]}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
