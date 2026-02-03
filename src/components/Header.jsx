import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="Amar Khata" />
                        <span>{content.hero.title[language]}</span>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <button onClick={() => scrollToSection('features')} className="nav-link">
                            {language === 'bn' ? 'বৈশিষ্ট্য' : 'Features'}
                        </button>
                        <button onClick={() => scrollToSection('how-it-works')} className="nav-link">
                            {language === 'bn' ? 'কিভাবে কাজ করে' : 'How It Works'}
                        </button>
                        <button onClick={() => scrollToSection('screenshots')} className="nav-link">
                            {language === 'bn' ? 'স্ক্রিনশট' : 'Screenshots'}
                        </button>
                        <button onClick={() => scrollToSection('download')} className="nav-link">
                            {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                        </button>
                    </nav>

                    <div className="header-actions">
                        <button onClick={toggleLanguage} className="language-toggle">
                            {language === 'bn' ? 'English' : 'বাংলা'}
                        </button>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.amarkhata.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            {content.header.downloadBtn[language]}
                        </a>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
