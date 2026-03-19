import { useEffect, useRef } from 'react';
import { Bell, TrendingUp, Package, AlertTriangle, BarChart3, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const labels = [
    { label: 'Expiry Alerts', icon: <Bell className="w-3.5 h-3.5" />, color: 'bg-red-100 text-red-600 border-red-200', position: 'top-4 right-4' },
    { label: 'Stock Health', icon: <TrendingUp className="w-3.5 h-3.5" />, color: 'bg-teal-100 text-teal-700 border-teal-200', position: 'top-4 left-4' },
    { label: 'Low Stock', icon: <Package className="w-3.5 h-3.5" />, color: 'bg-orange-100 text-orange-600 border-orange-200', position: 'bottom-16 right-4' },
];

export default function DashboardPreview() {
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
        <section id="dashboard" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-950 via-brand-950 to-gray-900 overflow-hidden relative">
            {/* Glow orbs */}
            <div className="absolute w-96 h-96 bg-brand-500/20 rounded-full blur-3xl top-1/2 -translate-y-1/2 left-0 -translate-x-1/2" />
            <div className="absolute w-80 h-80 bg-teal-500/20 rounded-full blur-3xl top-1/2 -translate-y-1/2 right-0 translate-x-1/2" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-sm font-semibold text-brand-300 bg-brand-900/60 border border-brand-700 rounded-full px-4 py-1.5 inline-block mb-4">
                        Live Preview
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white text-center">
                        A Dashboard That Thinks{' '}
                        <span className="gradient-text">For You</span>
                    </h2>
                    <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mt-3">
                        Every metric that matters to your pharmacy — beautifully visualized, always up-to-date.
                    </p>
                </div>

                {/* Main dashboard container */}
                <div className="animate-on-scroll stagger-2">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative mx-auto max-w-5xl"
                        style={{ perspective: '1200px' }}
                    >
                        {/* Browser chrome */}
                        <div className="bg-gray-800/90 rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-gray-700">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="flex-1 mx-4">
                                <div className="bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-400 font-mono text-center w-fit mx-auto">
                                    app.medlyx.com/dashboard
                                </div>
                            </div>
                        </div>

                        {/* Dashboard body */}
                        <div className="bg-gray-900 border border-gray-700/60 rounded-b-2xl overflow-hidden shadow-2xl relative p-5">
                            {/* Floating labels */}
                            {labels.map((l) => (
                                <div key={l.label} className={`absolute z-10 ${l.position} flex items-center gap-1.5 ${l.color} border text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}>
                                    {l.icon} {l.label}
                                </div>
                            ))}

                            {/* Sidebar + Main */}
                            <div className="flex gap-4">
                                {/* Sidebar */}
                                <div className="w-44 flex-shrink-0 flex flex-col gap-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center">
                                            <Bell className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-white text-sm font-bold font-poppins">MEDLYX</span>
                                    </div>
                                    {['Dashboard', 'Inventory', 'Alerts', 'Analytics', 'Reports', 'Settings'].map((item, i) => (
                                        <div
                                            key={item}
                                            className={`rounded-xl px-3 py-2 text-xs font-medium cursor-pointer transition-colors ${i === 0
                                                    ? 'bg-gradient-to-r from-brand-600 to-teal-600 text-white'
                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                                }`}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Main content */}
                                <div className="flex-1 flex flex-col gap-4">
                                    {/* Top stats */}
                                    <div className="grid grid-cols-4 gap-3">
                                        {[
                                            { label: 'Total SKUs', value: '1,284', change: '+12', positive: true, icon: <Package className="w-4 h-4" /> },
                                            { label: 'Expiring Soon', value: '23', change: '-5', positive: false, icon: <AlertTriangle className="w-4 h-4" /> },
                                            { label: 'Alerts Today', value: '7', change: '+3', positive: false, icon: <Bell className="w-4 h-4" /> },
                                            { label: 'Savings', value: '₹12,400', change: '+18%', positive: true, icon: <TrendingUp className="w-4 h-4" /> },
                                        ].map((s) => (
                                            <div key={s.label} className="bg-gray-800 rounded-xl p-3 border border-gray-700/50">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-gray-400 text-xs">{s.label}</span>
                                                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.positive ? 'bg-teal-900/60 text-teal-400' : 'bg-red-900/40 text-red-400'}`}>
                                                        {s.icon}
                                                    </span>
                                                </div>
                                                <div className="text-white font-bold text-lg font-poppins">{s.value}</div>
                                                <div className={`text-xs mt-0.5 font-medium ${s.positive ? 'text-teal-400' : 'text-red-400'}`}>
                                                    {s.change} this week
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart + Table */}
                                    <div className="grid grid-cols-5 gap-4">
                                        {/* Chart */}
                                        <div className="col-span-3 bg-gray-800 rounded-xl p-4 border border-gray-700/50">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-white text-sm font-semibold">Expiry Risk by Category</span>
                                                <div className="flex gap-2">
                                                    <span className="text-xs text-gray-400 bg-gray-700 rounded-full px-2 py-0.5">Monthly</span>
                                                    <BarChart3 className="w-4 h-4 text-gray-500" />
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-1.5 h-28">
                                                {[
                                                    ['Antibiotics', 75, '#0ea5e9'],
                                                    ['Analgesics', 55, '#14b8a6'],
                                                    ['Vitamins', 40, '#8b5cf6'],
                                                    ['Cardiac', 85, '#f97316'],
                                                    ['Diabetic', 60, '#ec4899'],
                                                    ['ENT', 30, '#10b981'],
                                                    ['Neuro', 70, '#0ea5e9'],
                                                ].map(([cat, h, color]) => (
                                                    <div key={cat} className="flex-1 flex flex-col items-center gap-1">
                                                        <div
                                                            className="w-full rounded-t-md"
                                                            style={{ height: `${h}%`, backgroundColor: color + '80', border: `1px solid ${color}` }}
                                                        />
                                                        <span className="text-gray-500 text-[9px] leading-none text-center">{cat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Alert list */}
                                        <div className="col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700/50 flex flex-col gap-2">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-white text-sm font-semibold">Critical Alerts</span>
                                                <span className="text-xs text-red-400 bg-red-900/40 border border-red-800 rounded-full px-2 py-0.5">7 new</span>
                                            </div>
                                            {[
                                                { name: 'Azithromycin 500mg', days: '3 days', batch: 'B2024-091' },
                                                { name: 'Metformin 850mg', days: '6 days', batch: 'B2024-087' },
                                                { name: 'Amoxicillin 250mg', days: '12 days', batch: 'B2024-082' },
                                                { name: 'Aspirin 75mg', days: '18 days', batch: 'B2024-078' },
                                            ].map((alert) => (
                                                <div key={alert.name} className="bg-gray-900/60 rounded-lg p-2.5 border border-gray-700/40">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                                                        <span className="text-white text-xs font-medium truncate">{alert.name}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500 text-[10px]">{alert.batch}</span>
                                                        <span className="text-red-400 text-[10px] font-semibold">{alert.days}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom row */}
                                    <div className="bg-gray-800 rounded-xl p-3 border border-gray-700/50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-teal-400" />
                                            <span className="text-gray-300 text-xs">1,261 medicines in safe zone</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className={`h-1.5 rounded-full ${i < 5 ? 'w-8 bg-teal-500' : 'w-4 bg-red-500'}`} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-teal-400 font-medium">98.2% safe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
