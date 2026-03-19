import { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const perks = [
    'Free 14-day trial, no credit card required',
    'Onboarding support & training included',
    'Works for single stores & multi-chain pharmacies',
    'Cancel anytime, no lock-in',
];

export default function CTA() {
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
        <section id="cta" ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-cta" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Glow blobs */}
            <div className="absolute w-80 h-80 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow" />
            <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl -bottom-16 -right-16 animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <div className="animate-on-scroll">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-white text-sm font-semibold">Limited Time — First Month Free</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-white mb-6 leading-tight">
                        Start Managing Your Pharmacy{' '}
                        <span className="text-teal-200">Smarter</span> Today
                    </h2>

                    <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Join 500+ pharmacy owners who've already cut expiry losses by up to 95% with MEDLYX's AI-powered platform.
                    </p>

                    {/* Perks */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
                        {perks.map((p) => (
                            <div key={p} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                                <CheckCircle className="w-4 h-4 text-teal-200 flex-shrink-0" />
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="mailto:medlyxtech@gmail.com"
                            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-teal-50 transition-all duration-300 text-base"
                        >
                            Try MEDLYX Free
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:medlyxtech@gmail.com"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white font-bold rounded-xl px-8 py-4 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-base"
                        >
                            Schedule a Demo
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="mt-10 flex items-center justify-center gap-2">
                        <div className="flex -space-x-2">
                            {['RK', 'PS', 'MA', 'SP'].map((initials, i) => (
                                <div
                                    key={initials}
                                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                                    style={{ background: ['#0ea5e9', '#14b8a6', '#8b5cf6', '#f97316'][i] }}
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <span className="text-white/80 text-sm font-medium ml-1">
                            Trusted by <strong className="text-white">500+</strong> pharmacy owners
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
