import React from 'react';
import Link from 'next/link';
import { Moon, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-secondary relative border-t border-accent-border pt-16 pb-8 overflow-hidden">
            {/* Background removed for cleaner look */}

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row flex-wrap justify-between gap-12">
                {/* Brand Col */}
                <div className="w-full lg:w-1/4">
                    <div className="flex items-center gap-3 mb-4">
                        <Moon size={30} className="text-accent" />
                        <div>
                            <h2 className="font-serif text-xl font-bold text-text-heading border-none pb-0 leading-none">Eid Mubarak</h2>
                            <p className="font-sans text-accent text-[10px] tracking-widest uppercase opacity-70 mt-1">Eid Al-Fitr 2026</p>
                        </div>
                    </div>
                    <p className="text-text-body text-xs font-light leading-relaxed mb-4">
                        A complete platform to celebrate the joy of Eid ul Fitr. Featuring duas, minimal wishes, aesthetic fashion, and rich traditions.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 bg-white border border-accent-border rounded-full text-accent hover:bg-accent hover:text-white transition-all shadow-sm">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-3 bg-white border border-accent-border rounded-full text-accent hover:bg-accent hover:text-white transition-all shadow-sm">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="p-3 bg-white border border-accent-border rounded-full text-accent hover:bg-accent hover:text-white transition-all shadow-sm">
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/4 lg:w-1/5">
                    <h3 className="text-text-heading font-serif text-base mb-4 font-bold">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'Duas & Prayers', 'Wishes & Cards', 'Fashion & Decor', 'Contact'].map(link => (
                            <li key={link}>
                                <Link href="#" className="text-text-body hover:text-accent transition-colors text-sm font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div className="w-full md:w-1/4 lg:w-1/5">
                    <h3 className="text-text-heading font-serif text-base mb-4 font-bold">Eid Resources</h3>
                    <ul className="space-y-3">
                        {['Eid Dua Guide', 'Zakat ul Fitr Info', 'Eid Namaz Guide', 'Chand Raat Traditions'].map(link => (
                            <li key={link}>
                                <Link href="#" className="text-text-body hover:text-accent transition-colors text-sm font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Share Col */}
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <h3 className="text-text-heading font-serif text-base mb-4 font-bold">Share with Loved Ones</h3>
                    <p className="text-text-body text-xs font-light mb-4 text-balance">
                        &quot;Spread the joy of Eid by sharing this library of blessings with your friends.&quot;
                    </p>
                    <button className="w-full py-3 bg-white border border-accent-border rounded-xl text-accent font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all flex justify-center items-center gap-2.5 text-[10px] shadow-sm">
                        <MessageCircle size={16} /> Share via WhatsApp
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-accent-border flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-center md:text-left">
                <p className="text-text-body text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 font-medium">
                    Made with <Heart size={10} className="text-red-400 fill-red-400" /> for every Muslim
                </p>
                <p className="font-sans text-accent text-[10px] uppercase tracking-widest font-bold">Eid Mubarak to everyone celebrating</p>
                <p className="text-text-body text-[10px] font-medium opacity-70">© 2026 Eid Mubarak. All rights reserved.</p>
            </div>
        </footer>
    );
}
