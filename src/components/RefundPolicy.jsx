import { useLanguage } from '../contexts/LanguageContext';

const RefundPolicy = () => {
    const { language } = useLanguage();

    return (
        <div className="policy-page">
            <div className="container">
                <div className="policy-header">
                    <h1>{language === 'bn' ? 'রিফান্ড পলিসি' : 'Refund Policy'}</h1>
                    <p className="policy-date">Last updated: 22-10-2025</p>
                </div>

                <div className="policy-content">
                    <p>Thank you for purchasing a digital service or subscription from Amar Khata. Please read this Refund Policy carefully before making any purchase.</p>

                    <section className="policy-section">
                        <h2>1. Digital Services</h2>
                        <p>Amar Khata provides digital services, including but not limited to:</p>
                        <ul>
                            <li>Premium features</li>
                            <li>Paid subscriptions</li>
                            <li>In-app digital services</li>
                        </ul>
                        <p>All services are delivered digitally and do not involve any physical goods.</p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Refund Eligibility</h2>
                        <p>A refund request will be considered eligible only if all of the following conditions are met:</p>
                        <ul>
                            <li>The user contacts us within 7 (seven) days from the date of purchase</li>
                            <li>The request is submitted through our official support channels</li>
                            <li>The subscription or service has not been misused or used in violation of our Terms & Conditions</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. Non-Refundable Cases</h2>
                        <p>Refunds will not be provided in the following cases:</p>
                        <ul>
                            <li>Refund requests made after 7 days from the purchase date</li>
                            <li>Violation of Amar Khata's Terms & Conditions</li>
                            <li>Significant usage of the digital service after purchase</li>
                            <li>Issues caused by user error, device incompatibility, or internet/network problems</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Refund Process</h2>
                        <p>To request a refund:</p>
                        <ol>
                            <li>Contact us via email or phone with your purchase details</li>
                            <li>Our support team will review your request</li>
                            <li>You will be notified of approval or rejection</li>
                            <li>If approved, the refund will be processed through the original payment method</li>
                        </ol>
                        <p>Refund processing time may vary depending on the payment provider.</p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Policy Updates</h2>
                        <p>Amar Khata reserves the right to modify or update this Refund Policy at any time. Changes will be effective immediately upon publication on our website or application.</p>
                    </section>

                    <section className="policy-section">
                        <h2>6. Contact Us</h2>
                        <p>For refund requests or any questions related to this Refund Policy, please contact us:</p>
                        <p className="contact-info">📧 Email: Support@amarkhata.com</p>
                        <p className="contact-info">📞 Phone: +8801627276060</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
