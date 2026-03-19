import { useEffect, useRef } from 'react';

const features = [
    {
        image: '/feat1.png',
        title: 'AI-Powered Expiry Tracking',
        description: "Our smart AI engine automatically tracks every medicine's expiry, learns restock patterns, and flags risks weeks in advance.",
        color: 'from-brand-500 to-brand-600',
        bg: 'bg-brand-50',
        delay: 'stagger-1',
    },
    {
        image: '/feat2.png',
        title: 'Automated Smart Alerts',
        description: 'Receive instant SMS, email, and in-app notifications when medicines approach expiry — customizable for your timelines.',
        color: 'from-teal-500 to-teal-600',
        bg: 'bg-teal-50',
        delay: 'stagger-2',
    },
    {
        image: '/feat3.png',
        title: 'Intelligent Inventory',
        description: 'Manage stock levels with one-click updates, batch tracking, and automated reorder suggestions based on demand.',
        color: 'from-violet-500 to-violet-600',
        bg: 'bg-violet-50',
        delay: 'stagger-3',
    },
    {
        image: '/feat4.png',
        title: 'Analytics Dashboard',
        description: 'Rich visual reports on stock turnover, near-expiry losses, revenue impact, and category-wise performance insights.',
        color: 'from-orange-500 to-orange-600',
        bg: 'bg-orange-50',
        delay: 'stagger-4',
    },
    {
        image: '/feat5.png',
        title: 'Custom Notification Rules',
        description: 'Set personalized alert timelines — 30, 14, or 7 days before expiry. Multiple channels, zero missed alerts.',
        color: 'from-pink-500 to-pink-600',
        bg: 'bg-pink-50',
        delay: 'stagger-5',
    },
    {
        image: '/feat6.png',
        title: 'Enterprise-Grade Security',
        description: 'Bank-level encryption, role-based access control, and automated backups keep your pharmacy data safe always.',
        color: 'from-green-500 to-green-600',
        bg: 'bg-green-50',
        delay: 'stagger-6',
    },
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
                            el.classList.add('visible');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="animate-on-scroll text-center mb-16">
                    {/* Enhanced Tag */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200/50 shadow-sm mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-500 animate-[pulse-slow_3s_ease-in-out_infinite]"></div>
                        <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-teal-700 uppercase tracking-wide">
                            Everything You Need
                        </span>
                    </div>

                    <h2 className="section-heading">
                        Powerful Features for{' '}
                        <span className="gradient-text">Modern Pharmacies</span>
                    </h2>
                    <p className="section-sub">
                        From AI expiry tracking to advanced analytics — MEDLYX gives your pharmacy the edge it needs to operate flawlessly.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className={`animate-on-scroll ${f.delay} feature-card group cursor-default`}
                        >
                            {/* Illustration Box replacing the vacant icon Box */}
                            <div className="w-16 h-16 rounded-2xl bg-gray-50/50 border border-gray-100 flex items-center justify-center p-2 mb-6 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                                <img src={f.image} alt={f.title} className="w-full h-full object-contain" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-brand-700 transition-colors duration-200">
                                {f.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {f.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className={`mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r ${f.color} rounded-full transition-all duration-500`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
