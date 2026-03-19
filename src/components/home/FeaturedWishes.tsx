'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WISHES = [
    {
        title: "Peace & Prosperity",
        description: "May this Eid bring you endless joy and prosperity in every walk of life.",
        english: "May this Eid bring you peace, prosperity and endless joy. Eid Mubarak!",
        urdu: "Eid Mubarak! Allah aapko khushiyan, sehat aur barkat ata farmaye."
    },
    {
        title: "Blessed Togetherness",
        description: "Wishing you a beautiful day filled with laughter and the warmth of family.",
        english: "Wishing you a blessed Eid filled with love, laughter and togetherness.",
        urdu: "Is Eid par apnon ke saath waqt guzarein, yahi asli khushi hai."
    },
    {
        title: "Magic of Happiness",
        description: "May the magic of this Eid fill your heart and home with eternal happiness.",
        english: "May the magic of Eid fill your heart with happiness. Eid Mubarak!",
        urdu: "Chand raat ki chaandni aur Eid ki khushiyan aap par sadqa ho jayen."
    },
    {
        title: "Warmest Greetings",
        description: "Sending our warmest greetings to you and your loved ones this festive season.",
        english: "Sending warm Eid greetings to you and your family.",
        urdu: "Subah ki pehli roshni ke saath Eid Mubarak ka paigham qubool karein."
    }
];

export default function FeaturedWishes() {
    return (
        <section className="w-full py-24 bg-secondary px-6 lg:px-20 relative overflow-hidden">
            {/* Background glow */}
            {/* Background glow removed for cleaner look */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 relative z-10"
            >
                <h2 className="text-3xl lg:text-5xl font-serif text-text-heading font-bold mb-4">
                    Heartfelt <span className="text-accent">Eid Greetings</span>
                </h2>
                <p className="text-lg font-light text-text-muted">
                    &quot;Send these warm wishes to your friends and family.&quot;
                </p>
            </motion.div>

            <div className="flex overflow-x-auto gap-6 pb-10 pt-4 px-4 snap-x snap-mandatory custom-scrollbar relative z-10 max-w-[100vw]">
                {WISHES.map((wish, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="snap-center shrink-0 w-72 lg:w-80 bg-white rounded-2xl p-6 border border-accent-border shadow-sm transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Hover Glare removed */}

                        {/* Top Corner Arabesque */}
                        <svg className="absolute top-0 right-0 w-16 h-16 text-accent/10 -mt-2 -mr-2 group-hover:text-accent/30 transition-colors duration-500" viewBox="0 0 100 100">
                            <path d="M0,0 Q50,0 50,50 Q100,50 100,100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>

                        <div className="mb-8">
                            <h3 className="text-xl font-serif text-text-heading mb-3 font-bold">{wish.title}</h3>
                            <p className="text-text-body text-sm font-medium leading-relaxed mb-6 opacity-90">
                                {wish.description}
                            </p>
                        </div>

                        <p className="text-text-muted mb-8 pb-4 border-b border-white/10 text-[10px] uppercase tracking-widest font-semibold opacity-60">
                            Available in English & Arabic
                        </p>

                        <div className="flex justify-between items-center mt-auto">
                            <button className="flex flex-col items-center gap-1 group/btn">
                                <span className="p-3 rounded-full bg-secondary group-hover/btn:bg-red-50 text-text-muted group-hover/btn:text-red-500 transition-colors border border-accent-border shadow-sm">
                                    ❤️
                                </span>
                                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Save</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 group/btn">
                                <span className="p-3 rounded-full bg-secondary group-hover/btn:bg-accent/10 text-text-muted group-hover/btn:text-accent transition-colors border border-accent-border shadow-sm">
                                    📋
                                </span>
                                <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">Copy</span>
                            </button>
                            <button className="flex flex-col items-center gap-1 group/btn">
                                <span className="p-3 rounded-full bg-accent text-white shadow-sm group-hover/btn:bg-accent-hover transition-all hover:scale-105">
                                    📤
                                </span>
                                <span className="text-[10px] text-accent uppercase tracking-wider font-bold">Share</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center mt-12 relative z-10"
            >
                <Link
                    href="/wishes"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-accent-border rounded-full text-sm text-accent hover:bg-accent hover:text-white uppercase tracking-widest font-bold transition-all duration-300 group shadow-sm"
                >
                    Explore All Wishes
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
            </motion.div>
        </section>
    );
}
