import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Screenshots = () => {
    const { language } = useLanguage();

    const screenshots = [
        { src: '/screenshots/screenshot-1.jpg', title: { bn: 'ব্যাংক একাউন্ট যোগ করুন', en: 'Add Bank Account' } },
        { src: '/screenshots/screenshot-2.jpg', title: { bn: 'ব্যাংক হিসাব দেখুন', en: 'View Bank Accounts' } },
        { src: '/screenshots/screenshot-3.jpg', title: { bn: 'নোট সংরক্ষণ করুন', en: 'Save Notes' } },
        { src: '/screenshots/screenshot-4.jpg', title: { bn: 'মেনু ও সেটিংস', en: 'Menu & Settings' } }
    ];

    return (
        <section id="screenshots" className="screenshots">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{content.screenshots.title[language]}</h2>
                    <p className="section-subtitle">
                        {language === 'bn' ? 'আমার খাতা অ্যাপের সম্পূর্ণ ফিচার দেখুন' : 'Explore all features of Amar Khata app'}
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                    className="screenshots-carousel"
                >
                    {screenshots.map((screenshot, index) => (
                        <SwiperSlide key={index}>
                            <div className="screenshot-item" data-index={index}>
                                <div className="screenshot-phone">
                                    <div className="screenshot-screen">
                                        <img src={screenshot.src} alt={screenshot.title[language]} />
                                    </div>
                                </div>
                                <p className="screenshot-caption">{screenshot.title[language]}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Screenshots;
