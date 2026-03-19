import { useEffect, useRef } from 'react';
import { PlusCircle, Brain, Zap } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: <PlusCircle className="w-8 h-8" />,
        title: 'Add Medicine Details',
        description: 'Quickly import your inventory via CSV or add medicines manually. Batch input support for existing stock setups.',
        color: 'from-brand-500 to-brand-600',
        bg: 'bg-brand-50 border-brand-100',
    },
    {
        step: '02',
        icon: <Brain className="w-8 h-8" />,
        title: 'AI Tracks Expiry Dates',
        description: 'Our AI engine monitors every SKU in real-time, groups by batch, and continuously re-evaluates risk scores.',
        color: 'from-teal-500 to-teal-600',
        bg: 'bg-teal-50 border-teal-100',
    },
    {
        step: '03',
        icon: <Zap className="w-8 h-8" />,
        title: 'Get Alerts & Take Action',
        description: 'Receive smart multi-channel alerts days before expiry. Return, discount, or transfer medicines before losses occur.',
        color: 'from-violet-500 to-violet-600',
        bg: 'bg-violet-50 border-violet-100',
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
                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-brand-200 via-teal-200 to-violet-200 hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {steps.map((s, i) => (
                            <div
                                key={s.step}
                                className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center text-center group`}
                            >
                                {/* Step number circle */}
                                <div className="relative mb-6">
                                    <div className={`w-[140px] h-[140px] rounded-full ${s.bg} border-2 flex items-center justify-center shadow-card group-hover:shadow-card-hover group-hover:scale-105 transition-all duration-300`}>
                                        <div className={`text-transparent bg-gradient-to-br ${s.color} bg-clip-text`}>
                                            {s.icon}
                                        </div>
                                    </div>
                                    {/* Step badge */}
                                    <div className={`absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                                        {s.step}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3 group-hover:text-brand-700 transition-colors duration-200">
                                    {s.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
