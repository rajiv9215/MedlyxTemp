import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Owner, Sai Medical Store',
        city: 'Mumbai, MH',
        avatar: 'RK',
        avatarColor: 'from-brand-500 to-teal-500',
        rating: 5,
        text: "MEDLYX completely transformed how we manage our inventory. We used to lose ₹8,000–₹12,000 every month on expired medicines. After 3 months with MEDLYX, we've reduced that to almost zero!",
    },
    {
        name: 'Priya Sharma',
        role: 'Pharmacist, Apollo Pharmacy Partner',
        city: 'Pune, MH',
        avatar: 'PS',
        avatarColor: 'from-violet-500 to-pink-500',
        rating: 5,
        text: 'The automated alerts are a game-changer. I receive notifications 30, 14, and 7 days before expiry — plenty of time to return or discount stock. The AI dashboard is incredibly intuitive.',
    },
    {
        name: 'Mohammed Aslam',
        role: 'Owner, Al-Shifa Medical',
        city: 'Hyderabad, TS',
        avatar: 'MA',
        avatarColor: 'from-orange-500 to-red-500',
        rating: 5,
        text: "Being a small pharmacy owner, I couldn't afford to hire extra staff for inventory management. MEDLYX does everything automatically. My monthly savings now exceed what I pay for the subscription by 20x.",
    },
    {
        name: 'Sunita Patel',
        role: 'Manager, Patel Drug House',
        city: 'Ahmedabad, GJ',
        avatar: 'SP',
        avatarColor: 'from-green-500 to-teal-500',
        rating: 5,
        text: "Customer trust is our biggest asset. With MEDLYX, I'm 100% confident that no expired medicine leaves our store. The peace of mind alone is worth every rupee we invest.",
    },
];

const trustBadges = [
    'HIPAA Compliant', 'ISO 27001', '256-bit SSL', 'GDPR Ready', '99.9% Uptime SLA',
];

export default function Testimonials() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'));
            }),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-brand-50/40 to-teal-50/40">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 inline-block mb-4">
                        Trusted by Pharmacists
                    </span>
                    <h2 className="section-heading">
                        Hear from Our{' '}
                        <span className="gradient-text">Happy Customers</span>
                    </h2>
                    <p className="section-sub">
                        Pharmacy owners and pharmacists across India trust MEDLYX to protect their inventory and profits.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`animate-on-scroll stagger-${i + 1} group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-default relative overflow-hidden`}
                        >
                            {/* Background gradient accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${t.avatarColor} opacity-5 rounded-bl-full`} />

                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-brand-200 mb-4" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

                            {/* Reviewer info */}
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm font-poppins">{t.name}</div>
                                    <div className="text-xs text-gray-400">{t.role}</div>
                                    <div className="text-xs text-brand-500 font-medium">{t.city}</div>
                                </div>
                                {/* Verified badge */}
                                <div className="ml-auto bg-teal-50 border border-teal-100 text-teal-600 text-xs font-medium px-2.5 py-1 rounded-full">
                                    Verified ✓
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust badges */}
                <div className="animate-on-scroll stagger-5 flex flex-wrap justify-center gap-3">
                    {trustBadges.map((badge) => (
                        <div key={badge} className="glass-light rounded-full px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm border border-gray-100 hover:border-brand-200 hover:text-brand-700 transition-colors duration-200">
                            🔒 {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
