'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Home, BookOpen, HeartHandshake, Scissors, Gift, Send, Instagram, Facebook, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/duas', label: 'Duas', icon: BookOpen },
    { href: '/wishes', label: 'Wishes', icon: HeartHandshake },
    { href: '/celebrations', label: 'Celebrations', icon: Gift },
    { href: '/world', label: 'World', icon: Gift },
    { href: '/send', label: 'Send', icon: Send },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] px-6 lg:px-12 transition-all duration-500 flex items-center justify-between ${scrolled
                    ? 'h-20 bg-white/90 backdrop-blur-md border-b border-accent-border shadow-sm'
                    : 'h-24 bg-transparent'
                    }`}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Moon size={32} className="text-accent" />
                    </motion.div>
                    <div className="flex flex-col">
                        <h1 className="font-serif text-xl lg:text-2xl font-bold tracking-tight leading-none text-text-heading border-none pb-0">Eid <span className="text-accent border-none pb-0">Mubarak</span></h1>
                        <p className="text-accent text-[10px] font-sans tracking-[0.3em] leading-none mt-1 uppercase opacity-80">Eid Al-Fitr 2026</p>
                    </div>
                </Link>

                {/* Horizontal Desktop Links */}
                <div className="hidden lg:flex items-center gap-2">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${isActive
                                    ? 'text-white font-semibold'
                                    : 'text-text-body hover:text-accent'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-accent shadow-sm"
                                        style={{ borderRadius: '9999px' }}
                                    />
                                )}
                                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-accent/60 group-hover:text-accent group-hover:scale-110 transition-transform'}`}>
                                    <Icon size={14} />
                                </span>
                                <span className="relative z-10 font-sans text-xs font-semibold tracking-wider uppercase">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle & Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden p-3 bg-secondary rounded-full text-accent shadow-sm"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <Link
                        href="/send"
                        className="hidden md:flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-accent-hover transition-all"
                    >
                        Send Wish
                    </Link>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 z-[999] bg-primary/95 backdrop-blur-3xl p-8 pt-32 flex flex-col items-center justify-center gap-12"
                    >
                        <div className="w-full space-y-4">
                            {NAV_LINKS.map((link, idx) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-center py-4 text-2xl font-serif rounded-2xl transition-all ${isActive
                                                ? 'bg-accent text-white'
                                                : 'text-text-heading border border-accent-border'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="flex justify-center gap-6 mb-8">
                            {[Instagram, MessageCircle, Facebook].map((SocialIcon, idx) => (
                                <a key={idx} href="#" className="p-4 rounded-full bg-white border border-accent-border text-accent hover:text-accent-hover transition-all shadow-sm">
                                    <SocialIcon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
