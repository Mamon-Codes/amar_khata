import { useLanguage } from '../contexts/LanguageContext';

const TermsConditions = () => {
    const { language } = useLanguage();

    return (
        <div className="policy-page">
            <div className="container">
                <div className="policy-header">
                    <h1>{language === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions'}</h1>
                    <p className="policy-date">Last updated: 22-10-2025</p>
                </div>

                <div className="policy-content">
                    <p>Please read these Terms & Conditions carefully before using the Amar Khata mobile application and website. By accessing or using our app or website, you agree to be bound by these Terms.</p>

                    <section className="policy-section">
                        <h2>1. Purpose of the App</h2>
                        <p>Amar Khata is a digital record-keeping application designed to help users manage:</p>
                        <ul>
                            <li>Income and expenses</li>
                            <li>Due and payable amounts</li>
                            <li>Personal financial records</li>
                        </ul>
                        <p>The app is intended for personal and lawful use only.</p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Eligibility</h2>
                        <ul>
                            <li>Users must be at least 13 years old</li>
                            <li>You agree to use the app in compliance with all applicable laws</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. User Responsibilities</h2>
                        <p>By using Amar Khata, you agree that you will:</p>
                        <ul>
                            <li>Provide accurate and truthful information</li>
                            <li>Not use another person's data without permission</li>
                            <li>Not use the app for illegal, fraudulent, or harmful activities</li>
                            <li>Maintain the security of your account and device</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Data & Privacy</h2>
                        <ul>
                            <li>User data is handled according to our Privacy Policy</li>
                            <li>We do not sell personal or financial data to third parties</li>
                            <li>Data may be shared only when legally required</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>5. Data Responsibility Disclaimer</h2>
                        <ul>
                            <li>Users are responsible for maintaining their own records</li>
                            <li>Amar Khata is not liable for data loss due to device change, deletion, internet failure, or technical issues</li>
                            <li>Backup services, if available, do not guarantee 100% data recovery</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>6. Third-Party Services & Advertisements</h2>
                        <ul>
                            <li>The app may include third-party services or advertisements</li>
                            <li>Amar Khata is not responsible for third-party content, services, or policies</li>
                            <li>Accessing third-party links is at your own risk</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>7. App Modifications & Service Availability</h2>
                        <ul>
                            <li>We reserve the right to modify, suspend, or discontinue any part of the app at any time</li>
                            <li>Changes may be made without prior notice</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>8. Violation of Terms</h2>
                        <p>If a user violates these Terms:</p>
                        <ul>
                            <li>We may suspend or permanently terminate the user's account</li>
                            <li>Legal action may be taken if necessary</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>9. Limitation of Liability</h2>
                        <ul>
                            <li>Amar Khata shall not be liable for any direct or indirect financial or data loss</li>
                            <li>The app is provided on an "as is" and "as available" basis</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>10. Changes to These Terms</h2>
                        <ul>
                            <li>These Terms & Conditions may be updated at any time</li>
                            <li>Continued use of the app after changes means acceptance of the updated Terms</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>11. Contact Us</h2>
                        <p>If you have any questions regarding these Terms & Conditions, please contact us:</p>
                        <p className="contact-info">📧 Email: support@amarkhata.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
