import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Hero = () => {
    const { language } = useLanguage();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {content.hero.title[language]}
                        </h1>
                        <p className="hero-subtitle">
                            {content.hero.subtitle[language]}
                        </p>
                        <p className="hero-description">
                            {content.hero.description[language]}
                        </p>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.amarkhata.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-large"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                            </svg>
                            {content.hero.downloadBtn[language]}
                        </a>
                    </div>

                    <div className="hero-center">
                        <div className="hero-circle-bg"></div>
                        <div className="hero-image">
                            <div className="phone-mockup">
                                <div className="phone-screen">
                                    <img src="/screenshots/screenshot-1.jpg" alt="Amar Khata App" className="screenshot-main" />
                                </div>
                            </div>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-value">{content.hero.stats.downloads[language]}</div>
                                <div className="stat-label">{content.hero.stats.downloadsLabel[language]}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">{content.hero.stats.rating[language]}</div>
                                <div className="stat-label">{content.hero.stats.ratingLabel[language]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
