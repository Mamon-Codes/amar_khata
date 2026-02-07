import { useLanguage } from '../contexts/LanguageContext';

const RefundPolicy = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Refund Policy',
            lastUpdated: 'Last updated: 22-10-2025',
            intro: 'Thank you for purchasing a digital service or subscription from Amar Khata. Please read this Refund Policy carefully before making any purchase.',
            sections: [
                {
                    heading: '1. Digital Services',
                    content: 'Amar Khata provides digital services, including but not limited to:',
                    list: [
                        'Premium features',
                        'Paid subscriptions',
                        'In-app digital services'
                    ],
                    footer: 'All services are delivered digitally and do not involve any physical goods.'
                },
                {
                    heading: '2. Refund Eligibility',
                    content: 'A refund request will be considered eligible only if all of the following conditions are met:',
                    list: [
                        'The user contacts us within 7 (seven) days from the date of purchase',
                        'The request is submitted through our official support channels',
                        'The subscription or service has not been misused or used in violation of our Terms & Conditions'
                    ]
                },
                {
                    heading: '3. Non-Refundable Cases',
                    content: 'Refunds will not be provided in the following cases:',
                    list: [
                        'Refund requests made after 7 days from the purchase date',
                        'Violation of Amar Khata\'s Terms & Conditions',
                        'Significant usage of the digital service after purchase',
                        'Issues caused by user error, device incompatibility, or internet/network problems'
                    ]
                },
                {
                    heading: '4. Refund Process',
                    content: 'To request a refund:',
                    orderedList: [
                        'Contact us via email or phone with your purchase details',
                        'Our support team will review your request',
                        'You will be notified of approval or rejection',
                        'If approved, the refund will be processed through the original payment method'
                    ],
                    footer: 'Refund processing time may vary depending on the payment provider.'
                },
                {
                    heading: '5. Policy Updates',
                    content: 'Amar Khata reserves the right to modify or update this Refund Policy at any time. Changes will be effective immediately upon publication on our website or application.'
                },
                {
                    heading: '6. Contact Us',
                    content: 'For refund requests or any questions related to this Refund Policy, please contact us:',
                    contacts: [
                        '📧 Email: Support@amarkhata.com',
                        '📞 Phone: +8801627276060'
                    ]
                }
            ]
        },
        bn: {
            title: 'রিফান্ড নীতি',
            lastUpdated: 'সর্বশেষ আপডেট: ২২-১০-২০২৫',
            intro: 'আমার খাতা থেকে ডিজিটাল সেবা বা সাবস্ক্রিপশন কেনার জন্য ধন্যবাদ। কোনো ক্রয় করার আগে এই রিফান্ড নীতিটি সাবধানে পড়ুন।',
            sections: [
                {
                    heading: '১. ডিজিটাল সেবা',
                    content: 'আমার খাতা ডিজিটাল সেবা প্রদান করে, যার মধ্যে রয়েছে কিন্তু সীমাবদ্ধ নয়:',
                    list: [
                        'প্রিমিয়াম বৈশিষ্ট্য',
                        'পেইড সাবস্ক্রিপশন',
                        'ইন-অ্যাপ ডিজিটাল সেবা'
                    ],
                    footer: 'সমস্ত সেবা ডিজিটালভাবে সরবরাহ করা হয় এবং কোনো ভৌত পণ্য জড়িত নয়।'
                },
                {
                    heading: '২. রিফান্ডের যোগ্যতা',
                    content: 'একটি রিফান্ড অনুরোধ যোগ্য বলে বিবেচিত হবে শুধুমাত্র যদি নিম্নলিখিত সমস্ত শর্ত পূরণ হয়:',
                    list: [
                        'ব্যবহারকারী ক্রয়ের তারিখ থেকে ৭ (সাত) দিনের মধ্যে আমাদের সাথে যোগাযোগ করেন',
                        'অনুরোধটি আমাদের অফিসিয়াল সাপোর্ট চ্যানেলের মাধ্যমে জমা দেওয়া হয়',
                        'সাবস্ক্রিপশন বা সেবা অপব্যবহার করা হয়নি বা আমাদের শর্তাবলী লঙ্ঘন করে ব্যবহার করা হয়নি'
                    ]
                },
                {
                    heading: '৩. রিফান্ড না দেওয়ার ক্ষেত্র',
                    content: 'নিম্নলিখিত ক্ষেত্রে রিফান্ড প্রদান করা হবে না:',
                    list: [
                        'ক্রয়ের তারিখ থেকে ৭ দিন পরে করা রিফান্ড অনুরোধ',
                        'আমার খাতার শর্তাবলী লঙ্ঘন',
                        'ক্রয়ের পরে ডিজিটাল সেবার উল্লেখযোগ্য ব্যবহার',
                        'ব্যবহারকারীর ত্রুটি, ডিভাইসের অসামঞ্জস্য, বা ইন্টারনেট/নেটওয়ার্ক সমস্যার কারণে সৃষ্ট সমস্যা'
                    ]
                },
                {
                    heading: '৪. রিফান্ড প্রক্রিয়া',
                    content: 'রিফান্ড অনুরোধ করতে:',
                    orderedList: [
                        'আপনার ক্রয়ের বিবরণ সহ ইমেল বা ফোনের মাধ্যমে আমাদের সাথে যোগাযোগ করুন',
                        'আমাদের সাপোর্ট টিম আপনার অনুরোধ পর্যালোচনা করবে',
                        'অনুমোদন বা প্রত্যাখ্যানের বিষয়ে আপনাকে অবহিত করা হবে',
                        'অনুমোদিত হলে, মূল পেমেন্ট পদ্ধতির মাধ্যমে রিফান্ড প্রক্রিয়া করা হবে'
                    ],
                    footer: 'রিফান্ড প্রক্রিয়াকরণের সময় পেমেন্ট প্রদানকারীর উপর নির্ভর করে পরিবর্তিত হতে পারে।'
                },
                {
                    heading: '৫. নীতি আপডেট',
                    content: 'আমার খাতা যেকোনো সময় এই রিফান্ড নীতি পরিবর্তন বা আপডেট করার অধিকার সংরক্ষণ করে। পরিবর্তনগুলি আমাদের ওয়েবসাইট বা অ্যাপ্লিকেশনে প্রকাশিত হওয়ার সাথে সাথে কার্যকর হবে।'
                },
                {
                    heading: '৬. যোগাযোগ করুন',
                    content: 'রিফান্ড অনুরোধ বা এই রিফান্ড নীতি সম্পর্কিত যেকোনো প্রশ্নের জন্য, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:',
                    contacts: [
                        '📧 ইমেইল: Support@amarkhata.com',
                        '📞 ফোন: +৮৮০১৬২৭২৭৬০৬০'
                    ]
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

                            {section.list && (
                                <ul>
                                    {section.list.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.orderedList && (
                                <ol>
                                    {section.orderedList.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ol>
                            )}

                            {section.footer && <p>{section.footer}</p>}

                            {section.contacts && section.contacts.map((contact, contactIndex) => (
                                <p key={contactIndex} className="contact-info">{contact}</p>
                            ))}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
