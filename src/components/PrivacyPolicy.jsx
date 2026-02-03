import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    return (
        <div className="policy-page">
            <div className="container">
                <div className="policy-header">
                    <h1>{language === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}</h1>
                    <p className="policy-date">Last updated: October 22, 2025</p>
                </div>

                <div className="policy-content">
                    <p>Thank you for using AmarKhata ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application AmarKhata.</p>

                    <section className="policy-section">
                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>

                        <h3>Personal Information:</h3>
                        <p>Such as name, phone number, or email address (only if you choose to provide it).</p>

                        <h3>Usage Data:</h3>
                        <p>Information about how you use the app, such as features accessed, device type, and crash reports.</p>

                        <h3>Financial Records (User Data):</h3>
                        <p>Any income, expense, or customer details you record in the app are stored locally on your device. We do not share or access your financial data.</p>
                    </section>

                    <section className="policy-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul>
                            <li>Provide and improve app functionality</li>
                            <li>Offer customer support</li>
                            <li>Send you updates or notifications (only if you allow it)</li>
                            <li>Maintain and enhance app performance</li>
                        </ul>
                        <p>We do not sell, rent, or share your personal information with any third party.</p>
                    </section>

                    <section className="policy-section">
                        <h2>3. Data Storage and Security</h2>
                        <p>Your financial and personal data are stored securely on your device. If you use our backup feature (e.g., Google Drive), your data is uploaded securely and only accessible to you. We use encryption and security best practices to protect your data.</p>
                    </section>

                    <section className="policy-section">
                        <h2>4. Third-Party Services</h2>
                        <p>Our app may use third-party services such as:</p>
                        <ul>
                            <li>Google Play Services</li>
                            <li>Firebase Analytics (for crash reports or app improvement)</li>
                        </ul>
                        <p>These services may collect information according to their own privacy policies. You can read their privacy policies here:</p>
                        <ul>
                            <li>Google Play Services</li>
                            <li>Firebase</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>5. Your Data Rights</h2>
                        <p>You can:</p>
                        <ul>
                            <li>View and delete all your data anytime within the app</li>
                            <li>Uninstall the app to permanently remove stored data from your device</li>
                            <li>Contact us for any data-related requests</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>6. Children's Privacy</h2>
                        <p>Our app is not designed for children under the age of 13. We do not knowingly collect personal information from children.</p>
                    </section>

                    <section className="policy-section">
                        <h2>7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted within the app or on our website. Please review this policy periodically.</p>
                    </section>

                    <section className="policy-section">
                        <h2>8. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                        <p className="contact-info">📧 Email: support@amarkhata.com</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
