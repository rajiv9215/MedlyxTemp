import { useEffect, useRef } from 'react';
import { PlusCircle, Brain, Zap } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: <PlusCircle className="w-6 h-6" />,
        title: 'Add Medicine Details',
        description: 'Quickly import your inventory via CSV or add medicines manually. Batch input support for existing stock setups.',
        color: 'from-brand-500 to-brand-600',
        bg: 'bg-brand-50 border-brand-100',
        imgBg: 'bg-brand-50',
        image: '/step1.png',
        imageAlt: 'Pharmacist adding medicine details on a tablet',
    },
    {
        step: '02',
        icon: <Brain className="w-6 h-6" />,
        title: 'AI Tracks Expiry Dates',
        description: 'Our AI engine monitors every SKU in real-time, groups by batch, and continuously re-evaluates risk scores.',
        color: 'from-teal-500 to-teal-600',
        bg: 'bg-teal-50 border-teal-100',
        imgBg: 'bg-teal-50',
        image: '/step2.png',
        imageAlt: 'AI neural network scanning medicine bottles',
    },
    {
        step: '03',
        icon: <Zap className="w-6 h-6" />,
        title: 'Get Alerts & Take Action',
        description: 'Receive smart multi-channel alerts days before expiry. Return, discount, or transfer medicines before losses occur.',
        color: 'from-violet-500 to-violet-600',
        bg: 'bg-violet-50 border-violet-100',
        imgBg: 'bg-violet-50',
        image: '/step3.png',
        imageAlt: 'Person receiving expiry alert on smartphone',
    },
];

export default function HowItWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'));
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="how-it-works" ref={sectionRef} className="py-24 bg-gradient-to-br from-brand-50/60 to-teal-50/60">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="animate-on-scroll text-center mb-20">
                    <span className="text-sm font-semibold text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 inline-block mb-4">
                        Simple Setup
                    </span>
                    <h2 className="section-heading">
                        Up & Running in{' '}
                        <span className="gradient-text">3 Easy Steps</span>
                    </h2>
                    <p className="section-sub">
                        No complex onboarding. Start tracking your pharmacy's expiry risk in under 15 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map((s, i) => (
                        <div
                            key={s.step}
                            className={`animate-on-scroll stagger-${i + 1} group flex flex-col items-center text-center`}
                        >
                            {/* Card */}
                            <div className="w-full bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
                                {/* Image area */}
                                <div className={`relative ${s.imgBg} px-6 pt-8 pb-4 flex items-center justify-center`}>
                                    {/* Step badge */}
                                    <div className={`absolute top-4 left-4 w-9 h-9 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xs font-bold shadow-md z-10`}>
                                        {s.step}
                                    </div>

                                    {/* Illustration */}
                                    <img
                                        src={s.image}
                                        alt={s.imageAlt}
                                        className="w-full max-w-[240px] h-52 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="px-6 py-6">
                                    {/* Icon + title */}
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white`}>
                                            {s.icon}
                                        </div>
                                        <h3 className="text-lg font-bold font-poppins text-gray-900 group-hover:text-brand-700 transition-colors duration-200">
                                            {s.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {s.description}
                                    </p>

                                    {/* Bottom gradient bar */}
                                    <div className={`mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-500`} />
                                </div>
                            </div>

                            {/* Connector arrow (between cards, only on desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:flex absolute translate-x-[calc(100%+16px)] top-[30%]">
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom connector line on desktop */}
                <div className="hidden lg:flex items-center justify-center gap-0 mt-6 px-32">
                    {steps.map((_, i) => (
                        <div key={i} className="flex items-center flex-1">
                            <div className={`w-full h-0.5 bg-gradient-to-r ${i === 0 ? 'from-brand-300 to-teal-300' :
                                    i === 1 ? 'from-teal-300 to-violet-300' : 'from-violet-300 to-violet-100'
                                }`} />
                            {i < steps.length - 1 && (
                                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-teal-400 to-brand-400 flex-shrink-0 shadow-sm" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
