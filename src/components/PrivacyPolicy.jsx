import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Privacy Policy',
            lastUpdated: 'Last updated: October 22, 2025',
            intro: 'Thank you for using Amar Khata ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application Amar Khata.',
            sections: [
                {
                    heading: '1. Information We Collect',
                    content: 'We may collect the following types of information:',
                    subsections: [
                        {
                            subheading: 'Personal Information:',
                            text: 'Such as name, phone number, or email address (only if you choose to provide it).'
                        },
                        {
                            subheading: 'Usage Data:',
                            text: 'Information about how you use the app, such as features accessed, device type, and crash reports.'
                        },
                        {
                            subheading: 'Financial Records (User Data):',
                            text: 'Any income, expense, or customer details you record in the app are stored locally on your device. We do not share or access your financial data.'
                        }
                    ]
                },
                {
                    heading: '2. How We Use Your Information',
                    content: 'We use the collected information to:',
                    list: [
                        'Provide and improve app functionality',
                        'Offer customer support',
                        'Send you updates or notifications (only if you allow it)',
                        'Maintain and enhance app performance'
                    ],
                    footer: 'We do not sell, rent, or share your personal information with any third party.'
                },
                {
                    heading: '3. Data Storage and Security',
                    content: 'Your financial and personal data are stored securely on your device. If you use our backup feature (e.g., Google Drive), your data is uploaded securely and only accessible to you. We use encryption and security best practices to protect your data.'
                },
                {
                    heading: '4. Third-Party Services',
                    content: 'Our app may use third-party services such as:',
                    list: [
                        'Google Play Services',
                        'Firebase Analytics (for crash reports or app improvement)'
                    ],
                    footer: 'These services may collect information according to their own privacy policies.'
                },
                {
                    heading: '5. Your Data Rights',
                    content: 'You can:',
                    list: [
                        'View and delete all your data anytime within the app',
                        'Uninstall the app to permanently remove stored data from your device',
                        'Contact us for any data-related requests'
                    ]
                },
                {
                    heading: '6. Children\'s Privacy',
                    content: 'Our app is not designed for children under the age of 13. We do not knowingly collect personal information from children.'
                },
                {
                    heading: '7. Changes to This Policy',
                    content: 'We may update this Privacy Policy from time to time. Any changes will be posted within the app or on our website. Please review this policy periodically.'
                },
                {
                    heading: '8. Contact Us',
                    content: 'If you have any questions or concerns about this Privacy Policy, please contact us:',
                    contact: '📧 Email: support@amarkhata.com'
                }
            ]
        },
        bn: {
            title: 'গোপনীয়তা নীতি',
            lastUpdated: 'সর্বশেষ আপডেট: ২২ অক্টোবর, ২০২৫',
            intro: 'আমার খাতা ("আমরা," "আমাদের," বা "আমাদেরকে") ব্যবহার করার জন্য ধন্যবাদ। আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। এই গোপনীয়তা নীতিটি ব্যাখ্যা করে যে আপনি যখন আমাদের মোবাইল অ্যাপ্লিকেশন আমার খাতা ব্যবহার করেন তখন আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি।',
            sections: [
                {
                    heading: '১. আমরা যে তথ্য সংগ্রহ করি',
                    content: 'আমরা নিম্নলিখিত ধরণের তথ্য সংগ্রহ করতে পারি:',
                    subsections: [
                        {
                            subheading: 'ব্যক্তিগত তথ্য:',
                            text: 'যেমন নাম, ফোন নম্বর, বা ইমেল ঠিকানা (শুধুমাত্র আপনি যদি তা প্রদান করতে চান)।'
                        },
                        {
                            subheading: 'ব্যবহারের তথ্য:',
                            text: 'আপনি কীভাবে অ্যাপটি ব্যবহার করেন সে সম্পর্কে তথ্য, যেমন অ্যাক্সেস করা বৈশিষ্ট্য, ডিভাইস টাইপ এবং ক্র্যাশ রিপোর্ট।'
                        },
                        {
                            subheading: 'আর্থিক রেকর্ড (ব্যবহারকারীর তথ্য):',
                            text: 'আপনি অ্যাপে যে কোনো আয়, ব্যয় বা গ্রাহক বিবরণ রেকর্ড করেন তা আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত হয়। আমরা আপনার আর্থিক তথ্য শেয়ার বা অ্যাক্সেস করি না।'
                        }
                    ]
                },
                {
                    heading: '২. আমরা কীভাবে আপনার তথ্য ব্যবহার করি',
                    content: 'আমরা সংগৃহীত তথ্য ব্যবহার করি:',
                    list: [
                        'অ্যাপের কার্যকারিতা প্রদান এবং উন্নত করতে',
                        'গ্রাহক সহায়তা প্রদান করতে',
                        'আপনাকে আপডেট বা বিজ্ঞপ্তি পাঠাতে (শুধুমাত্র আপনি যদি অনুমতি দেন)',
                        'অ্যাপের কর্মক্ষমতা বজায় রাখতে এবং উন্নত করতে'
                    ],
                    footer: 'আমরা আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা শেয়ার করি না।'
                },
                {
                    heading: '৩. তথ্য সংরক্ষণ এবং নিরাপত্তা',
                    content: 'আপনার আর্থিক এবং ব্যক্তিগত তথ্য আপনার ডিভাইসে নিরাপদভাবে সংরক্ষিত হয়। আপনি যদি আমাদের ব্যাকআপ বৈশিষ্ট্য ব্যবহার করেন (যেমন, গুগল ড্রাইভ), আপনার তথ্য নিরাপদভাবে আপলোড করা হয় এবং শুধুমাত্র আপনার কাছে অ্যাক্সেসযোগ্য। আপনার তথ্য সুরক্ষিত করতে আমরা এনক্রিপশন এবং নিরাপত্তা সেরা অনুশীলন ব্যবহার করি।'
                },
                {
                    heading: '৪. তৃতীয় পক্ষের সেবা',
                    content: 'আমাদের অ্যাপ তৃতীয় পক্ষের সেবা ব্যবহার করতে পারে যেমন:',
                    list: [
                        'গুগল প্লে সার্ভিসেস',
                        'ফায়ারবেস অ্যানালিটিক্স (ক্র্যাশ রিপোর্ট বা অ্যাপ উন্নতির জন্য)'
                    ],
                    footer: 'এই সেবাগুলি তাদের নিজস্ব গোপনীয়তা নীতি অনুযায়ী তথ্য সংগ্রহ করতে পারে।'
                },
                {
                    heading: '৫. আপনার তথ্য অধিকার',
                    content: 'আপনি করতে পারেন:',
                    list: [
                        'অ্যাপের মধ্যে যেকোনো সময় আপনার সমস্ত তথ্য দেখতে এবং মুছতে',
                        'আপনার ডিভাইস থেকে সংরক্ষিত তথ্য স্থায়ীভাবে সরাতে অ্যাপ আনইনস্টল করতে',
                        'যেকোনো তথ্য-সম্পর্কিত অনুরোধের জন্য আমাদের সাথে যোগাযোগ করতে'
                    ]
                },
                {
                    heading: '৬. শিশুদের গোপনীয়তা',
                    content: 'আমাদের অ্যাপ ১৩ বছরের কম বয়সী শিশুদের জন্য ডিজাইন করা হয়নি। আমরা জেনেশুনে শিশুদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না।'
                },
                {
                    heading: '৭. এই নীতিতে পরিবর্তন',
                    content: 'আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। যেকোনো পরিবর্তন অ্যাপের মধ্যে বা আমাদের ওয়েবসাইটে পোস্ট করা হবে। অনুগ্রহ করে পর্যায়ক্রমে এই নীতি পর্যালোচনা করুন।'
                },
                {
                    heading: '৮. যোগাযোগ করুন',
                    content: 'এই গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন বা উদ্বেগ থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:',
                    contact: '📧 ইমেইল: support@amarkhata.com'
                }
            ]
        }
    };

    const data = language === 'bn' ? content.bn : content.en;

    return (
        <div className="policy-page">
            <div className="container">
                <div className="policy-header">
                    <h1>{data.title}</h1>
                    <p className="policy-date">{data.lastUpdated}</p>
                </div>

                <div className="policy-content">
                    <p>{data.intro}</p>

                    {data.sections.map((section, index) => (
                        <section key={index} className="policy-section">
                            <h2>{section.heading}</h2>
                            <p>{section.content}</p>

                            {section.subsections && section.subsections.map((sub, subIndex) => (
                                <div key={subIndex}>
                                    <h3>{sub.subheading}</h3>
                                    <p>{sub.text}</p>
                                </div>
                            ))}

                            {section.list && (
                                <ul>
                                    {section.list.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.footer && <p>{section.footer}</p>}
                            {section.contact && <p className="contact-info">{section.contact}</p>}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
