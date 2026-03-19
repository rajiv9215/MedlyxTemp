import { ArrowRight, Play, Shield, TrendingUp, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { value: '98%', label: 'Expiry Tracking Accuracy' },
    { value: '2x', label: 'Inventory Efficiency' },
    { value: '500+', label: 'Pharmacies Onboarded' },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24 pb-16"
        >
            {/* Background blobs */}
            <div className="hero-blob w-96 h-96 bg-brand-300 top-10 -left-20" style={{ animationDelay: '0s' }} />
            <div className="hero-blob w-80 h-80 bg-teal-300 bottom-10 -right-16" style={{ animationDelay: '2s' }} />
            <div className="hero-blob w-64 h-64 bg-brand-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col gap-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-brand-100 rounded-full px-4 py-1.5 w-fit shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
                        <span className="text-sm font-medium text-brand-700">AI-Powered Pharmacy Intelligence</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-gray-900">
                        Never Lose Money on{' '}
                        <span className="gradient-text">Expired Medicines</span>{' '}
                        Again
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        MEDLYX uses advanced AI to automatically track expiry dates across your entire inventory, send intelligent alerts, and help medical store owners save thousands every month.
                    </p>

                    {/* Trust signals */}
                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: <Shield className="w-4 h-4" />, text: 'HIPAA Compliant' },
                            { icon: <TrendingUp className="w-4 h-4" />, text: 'Reduce losses by 70%' },
                            { icon: <Bell className="w-4 h-4" />, text: 'Real-time alerts' },
                        ].map((item) => (
                            <span key={item.text} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-white/70 border border-gray-100 rounded-full px-3 py-1 shadow-sm">
                                <span className="text-teal-500">{item.icon}</span>
                                {item.text}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#cta" className="btn-primary text-base px-7 py-3.5 shadow-lg">
                            Get Started Free
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#dashboard"
                            className="btn-secondary text-base px-7 py-3.5 flex items-center gap-2"
                        >
                            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-100 text-brand-600">
                                <Play className="w-4 h-4 fill-brand-600" />
                            </span>
                            View Demo
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-2">
                        {stats.map((s) => (
                            <div key={s.label} className="glass-light rounded-xl p-4 text-center">
                                <div className="text-2xl font-extrabold font-poppins gradient-text">{s.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5 font-medium leading-tight">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column – Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 60, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="animate-float relative">
                        {/* Main dashboard card */}
                        <div className="glass-card rounded-3xl p-5 w-[520px] shadow-2xl">
                            {/* Header bar */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                    MEDLYX Dashboard
                                </div>
                                <div className="w-20 h-6 bg-gradient-to-r from-brand-100 to-teal-100 rounded-full animate-pulse" />
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[
                                    { label: 'Total Medicines', val: '1,284', color: 'from-brand-50 to-brand-100', accent: 'text-brand-600' },
                                    { label: 'Expiring Soon', val: '23', color: 'from-orange-50 to-orange-100', accent: 'text-orange-500' },
                                    { label: 'Alerts Today', val: '7', color: 'from-teal-50 to-teal-100', accent: 'text-teal-600' },
                                ].map((s) => (
                                    <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-xl p-3`}>
                                        <div className={`text-xl font-bold font-poppins ${s.accent}`}>{s.val}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart area */}
                            <div className="bg-gradient-to-br from-brand-50/60 to-teal-50/60 rounded-xl p-4 mb-4">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-gray-600">Stock Health Overview</span>
                                    <span className="text-xs text-teal-600 bg-teal-50 rounded-full px-2 py-0.5 font-medium">This Month</span>
                                </div>
                                {/* Fake bar chart */}
                                <div className="flex items-end gap-2 h-20">
                                    {[60, 80, 45, 90, 70, 55, 95, 65, 85, 75, 50, 88].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-t-md"
                                            style={{
                                                height: `${h}%`,
                                                background: i % 3 === 0
                                                    ? 'linear-gradient(180deg, #0ea5e9 0%, #38bdf8 100%)'
                                                    : i % 3 === 1
                                                        ? 'linear-gradient(180deg, #14b8a6 0%, #5eead4 100%)'
                                                        : 'rgba(14,165,233,0.2)',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Alert list */}
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: 'Azithromycin 500mg', days: '3 days', color: 'bg-red-100 text-red-600' },
                                    { name: 'Metformin 850mg', days: '8 days', color: 'bg-orange-100 text-orange-600' },
                                    { name: 'Amoxicillin 250mg', days: '15 days', color: 'bg-yellow-100 text-yellow-600' },
                                ].map((alert) => (
                                    <div key={alert.name} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                            <span className="text-xs font-medium text-gray-700">{alert.name}</span>
                                        </div>
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${alert.color}`}>
                                            Expires in {alert.days}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating mini card 1 */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="absolute -top-6 -right-8 glass-light rounded-2xl px-4 py-3 shadow-card flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                                <Bell className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Alert sent</div>
                                <div className="text-sm font-semibold text-gray-800">2 meds expiring!</div>
                            </div>
                        </motion.div>

                        {/* Floating mini card 2 */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            className="absolute -bottom-4 -left-8 glass-light rounded-2xl px-4 py-3 shadow-card flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Savings this month</div>
                                <div className="text-sm font-semibold text-gray-800">₹12,400 saved</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Wave SVG at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
