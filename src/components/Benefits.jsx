import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Benefits = () => {
    const { language } = useLanguage();

    return (
        <section className="benefits">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{content.benefits.title[language]}</h2>
                </div>

                <div className="benefits-grid">
                    {content.benefits.items.map((benefit, index) => (
                        <div key={index} className="benefit-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{benefit[language]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
