import { useEffect, useRef } from 'react';
import { DollarSign, Heart, Clock, Cpu } from 'lucide-react';

const benefits = [
    {
        icon: <DollarSign className="w-6 h-6" />,
        title: 'Reduce Financial Loss',
        description: 'Stop discarding expired medicines worth thousands. MEDLYX customers save an average of ₹15,000/month in expiry losses.',
        stat: '₹15K',
        statLabel: 'avg. monthly savings',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-100',
        gradient: 'from-green-500 to-teal-500',
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Improve Customer Safety',
        description: 'Zero tolerance for expired medicine dispensing. Real-time alerts prevent errors before they reach your customers.',
        stat: '99.9%',
        statLabel: 'safety compliance rate',
        color: 'text-red-500',
        bg: 'bg-red-50',
        border: 'border-red-100',
        gradient: 'from-red-500 to-pink-500',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Save Time Daily',
        description: 'Eliminate manual expiry date checks that eat into your day. Automated tracking frees up 2+ hours for your staff.',
        stat: '2hrs',
        statLabel: 'staff time saved daily',
        color: 'text-brand-600',
        bg: 'bg-brand-50',
        border: 'border-brand-100',
        gradient: 'from-brand-500 to-teal-500',
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Smart Automation',
        description: 'Set intelligent rules once and let MEDLYX handle everything — alerts, reports, reorder suggestions — automatically.',
        stat: '10x',
        statLabel: 'operational efficiency gain',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        gradient: 'from-violet-500 to-brand-500',
    },
];

export default function Benefits() {
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
        <section id="benefits" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-sm font-semibold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 inline-block mb-4">
                        Why Choose MEDLYX
                    </span>
                    <h2 className="section-heading">
                        Built to Deliver{' '}
                        <span className="gradient-text">Real Results</span>
                    </h2>
                    <p className="section-sub">
                        MEDLYX isn't just software — it's a financial safety net for your pharmacy business.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((b, i) => (
                        <div
                            key={b.title}
                            className={`animate-on-scroll stagger-${i + 1} group flex gap-5 bg-white border ${b.border} rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 flex-shrink-0 rounded-2xl ${b.bg} flex items-center justify-center ${b.color} group-hover:scale-110 transition-transform duration-300`}>
                                {b.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold font-poppins text-gray-900 mb-1 group-hover:text-brand-700 transition-colors">
                                    {b.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{b.description}</p>

                                {/* Stat */}
                                <div className="flex items-end gap-2">
                                    <span className={`text-3xl font-extrabold font-poppins bg-gradient-to-r ${b.gradient} bg-clip-text text-transparent`}>
                                        {b.stat}
                                    </span>
                                    <span className="text-xs text-gray-400 mb-1 font-medium">{b.statLabel}</span>
                                </div>

                                {/* Progress bar */}
                                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${b.gradient} rounded-full w-0 group-hover:w-4/5 transition-all duration-700`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
