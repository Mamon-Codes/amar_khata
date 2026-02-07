import { useLanguage } from '../contexts/LanguageContext';

const TermsConditions = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Terms & Conditions',
            lastUpdated: 'Last updated: 22-10-2025',
            intro: 'Please read these Terms & Conditions carefully before using the Amar Khata mobile application and website. By accessing or using our app or website, you agree to be bound by these Terms.',
            sections: [
                {
                    heading: '1. Purpose of the App',
                    content: 'Amar Khata is a digital record-keeping application designed to help users manage:',
                    list: [
                        'Income and expenses',
                        'Due and payable amounts',
                        'Personal financial records'
                    ],
                    footer: 'The app is intended for personal and lawful use only.'
                },
                {
                    heading: '2. Eligibility',
                    list: [
                        'Users must be at least 13 years old',
                        'You agree to use the app in compliance with all applicable laws'
                    ]
                },
                {
                    heading: '3. User Responsibilities',
                    content: 'By using Amar Khata, you agree that you will:',
                    list: [
                        'Provide accurate and truthful information',
                        'Not use another person\'s data without permission',
                        'Not use the app for illegal, fraudulent, or harmful activities',
                        'Maintain the security of your account and device'
                    ]
                },
                {
                    heading: '4. Data & Privacy',
                    list: [
                        'User data is handled according to our Privacy Policy',
                        'We do not sell personal or financial data to third parties',
                        'Data may be shared only when legally required'
                    ]
                },
                {
                    heading: '5. Data Responsibility Disclaimer',
                    list: [
                        'Users are responsible for maintaining their own records',
                        'Amar Khata is not liable for data loss due to device change, deletion, internet failure, or technical issues',
                        'Backup services, if available, do not guarantee 100% data recovery'
                    ]
                },
                {
                    heading: '6. Third-Party Services & Advertisements',
                    list: [
                        'The app may include third-party services or advertisements',
                        'Amar Khata is not responsible for third-party content, services, or policies',
                        'Accessing third-party links is at your own risk'
                    ]
                },
                {
                    heading: '7. App Modifications & Service Availability',
                    list: [
                        'We reserve the right to modify, suspend, or discontinue any part of the app at any time',
                        'Changes may be made without prior notice'
                    ]
                },
                {
                    heading: '8. Violation of Terms',
                    content: 'If a user violates these Terms:',
                    list: [
                        'We may suspend or permanently terminate the user\'s account',
                        'Legal action may be taken if necessary'
                    ]
                },
                {
                    heading: '9. Limitation of Liability',
                    list: [
                        'Amar Khata shall not be liable for any direct or indirect financial or data loss',
                        'The app is provided on an "as is" and "as available" basis'
                    ]
                },
                {
                    heading: '10. Changes to These Terms',
                    list: [
                        'These Terms & Conditions may be updated at any time',
                        'Continued use of the app after changes means acceptance of the updated Terms'
                    ]
                },
                {
                    heading: '11. Contact Us',
                    content: 'If you have any questions regarding these Terms & Conditions, please contact us:',
                    contact: '📧 Email: support@amarkhata.com'
                }
            ]
        },
        bn: {
            title: 'শর্তাবলী',
            lastUpdated: 'সর্বশেষ আপডেট: ২২-১০-২০২৫',
            intro: 'আমার খাতা মোবাইল অ্যাপ্লিকেশন এবং ওয়েবসাইট ব্যবহার করার আগে এই শর্তাবলী সাবধানে পড়ুন। আমাদের অ্যাপ বা ওয়েবসাইট অ্যাক্সেস বা ব্যবহার করে, আপনি এই শর্তাবলী দ্বারা আবদ্ধ হতে সম্মত হন।',
            sections: [
                {
                    heading: '১. অ্যাপের উদ্দেশ্য',
                    content: 'আমার খাতা একটি ডিজিটাল রেকর্ড-কিপিং অ্যাপ্লিকেশন যা ব্যবহারকারীদের পরিচালনা করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে:',
                    list: [
                        'আয় এবং ব্যয়',
                        'বাকি এবং প্রদেয় পরিমাণ',
                        'ব্যক্তিগত আর্থিক রেকর্ড'
                    ],
                    footer: 'অ্যাপটি শুধুমাত্র ব্যক্তিগত এবং বৈধ ব্যবহারের জন্য উদ্দিষ্ট।'
                },
                {
                    heading: '২. যোগ্যতা',
                    list: [
                        'ব্যবহারকারীদের বয়স কমপক্ষে ১৩ বছর হতে হবে',
                        'আপনি সমস্ত প্রযোজ্য আইন মেনে চলে অ্যাপ ব্যবহার করতে সম্মত হন'
                    ]
                },
                {
                    heading: '৩. ব্যবহারকারীর দায়িত্ব',
                    content: 'আমার খাতা ব্যবহার করে, আপনি সম্মত হন যে আপনি:',
                    list: [
                        'সঠিক এবং সত্যবাদী তথ্য প্রদান করবেন',
                        'অনুমতি ছাড়া অন্য ব্যক্তির ডেটা ব্যবহার করবেন না',
                        'অবৈধ, প্রতারণামূলক বা ক্ষতিকর কার্যকলাপের জন্য অ্যাপ ব্যবহার করবেন না',
                        'আপনার অ্যাকাউন্ট এবং ডিভাইসের নিরাপত্তা বজায় রাখবেন'
                    ]
                },
                {
                    heading: '৪. ডেটা এবং গোপনীয়তা',
                    list: [
                        'ব্যবহারকারীর ডেটা আমাদের গোপনীয়তা নীতি অনুযায়ী পরিচালনা করা হয়',
                        'আমরা তৃতীয় পক্ষের কাছে ব্যক্তিগত বা আর্থিক ডেটা বিক্রি করি না',
                        'ডেটা শুধুমাত্র আইনগত প্রয়োজনে শেয়ার করা হতে পারে'
                    ]
                },
                {
                    heading: '৫. ডেটা দায়িত্ব দাবিত্যাগ',
                    list: [
                        'ব্যবহারকারীরা তাদের নিজস্ব রেকর্ড বজায় রাখার জন্য দায়ী',
                        'ডিভাইস পরিবর্তন, মুছে ফেলা, ইন্টারনেট ব্যর্থতা বা প্রযুক্তিগত সমস্যার কারণে ডেটা ক্ষতির জন্য আমার খাতা দায়ী নয়',
                        'ব্যাকআপ সেবা, যদি উপলব্ধ থাকে, ১০০% ডেটা পুনরুদ্ধারের নিশ্চয়তা দেয় না'
                    ]
                },
                {
                    heading: '৬. তৃতীয় পক্ষের সেবা এবং বিজ্ঞাপন',
                    list: [
                        'অ্যাপে তৃতীয় পক্ষের সেবা বা বিজ্ঞাপন অন্তর্ভুক্ত থাকতে পারে',
                        'তৃতীয় পক্ষের বিষয়বস্তু, সেবা বা নীতির জন্য আমার খাতা দায়ী নয়',
                        'তৃতীয় পক্ষের লিঙ্ক অ্যাক্সেস করা আপনার নিজের ঝুঁকিতে'
                    ]
                },
                {
                    heading: '৭. অ্যাপ পরিবর্তন এবং সেবার প্রাপ্যতা',
                    list: [
                        'আমরা যেকোনো সময় অ্যাপের যেকোনো অংশ পরিবর্তন, স্থগিত বা বন্ধ করার অধিকার সংরক্ষণ করি',
                        'পূর্ব বিজ্ঞপ্তি ছাড়াই পরিবর্তন করা হতে পারে'
                    ]
                },
                {
                    heading: '৮. শর্তের লঙ্ঘন',
                    content: 'যদি কোনো ব্যবহারকারী এই শর্তাবলী লঙ্ঘন করেন:',
                    list: [
                        'আমরা ব্যবহারকারীর অ্যাকাউন্ট স্থগিত বা স্থায়ীভাবে সমাপ্ত করতে পারি',
                        'প্রয়োজনে আইনি পদক্ষেপ নেওয়া হতে পারে'
                    ]
                },
                {
                    heading: '৯. দায়বদ্ধতার সীমাবদ্ধতা',
                    list: [
                        'কোনো প্রত্যক্ষ বা পরোক্ষ আর্থিক বা ডেটা ক্ষতির জন্য আমার খাতা দায়ী থাকবে না',
                        'অ্যাপটি "যেমন আছে" এবং "যেমন উপলব্ধ" ভিত্তিতে প্রদান করা হয়'
                    ]
                },
                {
                    heading: '১০. এই শর্তাবলীতে পরিবর্তন',
                    list: [
                        'এই শর্তাবলী যেকোনো সময় আপডেট করা হতে পারে',
                        'পরিবর্তনের পরে অ্যাপের ব্যবহার অব্যাহত রাখার অর্থ হল আপডেট করা শর্তাবলীর স্বীকৃতি'
                    ]
                },
                {
                    heading: '১১. যোগাযোগ করুন',
                    content: 'এই শর্তাবলী সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:',
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
                            {section.content && <p>{section.content}</p>}

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

export default TermsConditions;
