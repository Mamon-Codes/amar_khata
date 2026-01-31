import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const DownloadCTA = () => {
    const { language } = useLanguage();

    return (
        <section id="download" className="download-cta">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">{content.download.title[language]}</h2>
                    <p className="cta-description">{content.download.description[language]}</p>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.amarkhata.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white btn-large"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                        </svg>
                        {content.download.downloadBtn[language]}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;
