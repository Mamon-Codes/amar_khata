import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const HowItWorks = () => {
    const { language } = useLanguage();

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{content.howItWorks.title[language]}</h2>
                </div>

                <div className="steps">
                    {content.howItWorks.steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{index + 1}</div>
                            <h3 className="step-title">{step.title[language]}</h3>
                            <p className="step-description">{step.description[language]}</p>
                            {index < content.howItWorks.steps.length - 1 && (
                                <div className="step-arrow">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
