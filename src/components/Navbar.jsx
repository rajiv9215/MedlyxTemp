import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-light shadow-glass py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold font-poppins gradient-text tracking-tight">
                        MEDLYX
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-teal-500 group-hover:w-full transition-all duration-300 rounded-full" />
                        </a>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#cta" className="btn-secondary text-sm py-2 px-5">
                        Sign in
                    </a>
                    <a href="#cta" className="btn-primary text-sm py-2 px-5">
                        Get Started Free
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-brand-50 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden glass-light mt-2 mx-4 rounded-2xl p-5 shadow-glass">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                            <a href="#cta" className="btn-secondary text-sm text-center" onClick={() => setMobileOpen(false)}>Sign in</a>
                            <a href="#cta" className="btn-primary text-sm text-center" onClick={() => setMobileOpen(false)}>Get Started Free</a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
