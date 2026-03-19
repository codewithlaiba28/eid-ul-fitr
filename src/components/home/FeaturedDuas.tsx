'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DUAS = [
    {
        title: "Dua for Eid Day Morning",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ",
        translit: "Allahumma inni as'aluka khayra hadhal yawm",
        english: "O Allah, I ask You for the goodness of this day."
    },
    {
        title: "Dua on seeing the Eid Moon",
        arabic: "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ",
        translit: "Allahu Akbar, Allahumma ahillahu 'alayna bil-amni wal-iman",
        english: "Allah is the Greatest. O Allah, bring this moon over us with security and faith."
    },
    {
        title: "Dua for Forgiveness",
        arabic: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا",
        translit: "Rabbana faghfir lana dhunoobana wa kaffir 'anna sayyi'atina",
        english: "Our Lord, so forgive us our sins and remove from us our misdeeds."
    }
];

export default function FeaturedDuas() {
    return (
        <section className="w-full py-24 bg-primary px-6 lg:px-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-deep/5 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 relative z-10"
            >
                <h2 className="text-3xl lg:text-5xl font-serif text-text-heading font-bold mb-4">
                    Sacred <span className="text-accent">Supplications for Eid</span>
                </h2>
                <p className="text-lg font-light text-text-muted">
                    &quot;Share these blessings with your beloved ones.&quot;
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10 max-w-7xl mx-auto">
                {DUAS.map((dua, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 border border-accent-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 relative group overflow-hidden flex flex-col h-full"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Arabesque corners */}
                        <svg className="absolute top-0 right-0 w-12 h-12 text-accent/10 m-4 group-hover:text-accent/30 transition-colors duration-500 transform rotate-90" viewBox="0 0 100 100">
                            <path d="M0,0 Q50,0 50,50 Q100,50 100,100" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                        </svg>

                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <span className="text-3xl">📖</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-sans font-bold text-black text-center mb-8">
                            {dua.title}
                        </h3>

                        <p className="font-arabic text-2xl md:text-3xl text-accent text-center mb-4 dir-rtl leading-relaxed">
                            {dua.arabic}
                        </p>

                        <p className="text-center mb-6 text-text-body text-[10px] uppercase tracking-widest font-semibold opacity-70">
                            &quot;{dua.translit}&quot;
                        </p>

                        <p className="text-text-body text-center text-sm mb-8 pb-4 border-b border-white/10 font-light flex-grow leading-relaxed">
                            {dua.english}
                        </p>

                        <div className="flex justify-center gap-4 mt-auto">
                            <button className="text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-xl border border-accent-border text-text-muted hover:bg-secondary transition-all">
                                Copy text
                            </button>
                            <button className="text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-xl bg-accent text-white shadow-sm hover:bg-accent-hover transition-all transform hover:-translate-y-0.5">
                                WhatsApp
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
                className="text-center relative z-10"
            >
                <Link
                    href="/duas"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-accent-border rounded-full text-sm text-accent hover:bg-accent hover:text-white uppercase tracking-widest font-bold transition-all duration-300 group shadow-sm"
                >
                    Explore All Duas
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
            </motion.div>
        </section>
    );
}
