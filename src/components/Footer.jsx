import { Zap, Mail, Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    Product: ['Features', 'How It Works', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Documentation', 'API Reference', 'Community', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Brand column */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-md">
                                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-bold font-poppins gradient-text">MEDLYX</span>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                            India's smartest AI-powered pharmacy management platform. Track expiry, save money, and serve customers better.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:medlyxtech@gmail.com"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 group"
                        >
                            <Mail className="w-4 h-4 text-teal-500" />
                            medlyxtech@gmail.com
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        {/* Newsletter */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
                            />
                            <button className="btn-primary !text-sm !py-2.5 !px-4 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-white mb-4 font-poppins">{category}</h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-500 hover:text-teal-400 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} MEDLYX Technologies. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-xs text-gray-600">All systems operational · 99.9% uptime</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
                        <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
                        <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
