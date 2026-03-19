'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
    {
        text: "وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَى مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ",
        translation: "And to complete the period and to glorify Allah for that [to] which He has guided you, and perhaps you will be grateful.",
        translit: "Wa litukmiloo al-'iddata wa litukabbiroo Allaha 'ala ma hadakum wa la'allakum tashkuroon",
        source: "Quran 2:185"
    },
    {
        text: "إِنَّ لِكُلِّ قَوْمٍ عِيدًا وَهَذَا عِيدُنَا",
        translation: "Every nation has its festival, and this is our festival.",
        translit: "Inna likulli qawmin 'eedan wa hadha 'eeduna",
        source: "Sahih Bukhari"
    },
    {
        text: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ",
        translation: "Whoever gives food for a fasting person to break his fast, he will have a reward like theirs.",
        translit: "Man fattara sa'iman kana lahu mithlu ajrih",
        source: "Sunan at-Tirmidhi"
    }
];

export default function QuoteRotator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-24 bg-primary overflow-hidden border-y border-accent-border">
            {/* Decorative Stars */}
            <div className="absolute inset-0 z-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-accent animate-twinkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.3 + 0.1
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-5xl mx-auto px-6"
            >
                {/* Ornamental Divider Top */}
                <div className="flex items-center justify-center mb-10">
                    <div className="w-20 lg:w-32 h-px bg-gradient-to-r from-transparent to-accent/30" />
                    <div className="w-2.5 h-2.5 transform rotate-45 border border-accent/40 mx-4" />
                    <div className="w-20 lg:w-32 h-px bg-gradient-to-l from-transparent to-accent/30" />
                </div>

                <div className="min-h-[300px] flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center w-full"
                        >
                            <h3 className="font-arabic text-3xl lg:text-4xl text-accent mb-6 dir-rtl leading-loose">
                                {QUOTES[currentIndex].text}
                            </h3>
                            <p className="font-sans text-lg lg:text-xl text-text-heading mb-3 font-light max-w-2xl mx-auto leading-relaxed italic">
                                &quot;{QUOTES[currentIndex].translation}&quot;
                            </p>
                            <p className="text-text-muted mb-6 max-w-xl mx-auto text-[10px] uppercase tracking-widest font-semibold opacity-60">
                                {QUOTES[currentIndex].translit}
                            </p>
                            <div className="mt-6 flex justify-center">
                                <span className="bg-secondary px-5 py-1.5 rounded-full text-[9px] tracking-[0.2em] uppercase text-text-muted border border-accent-border font-bold shadow-sm">
                                    {QUOTES[currentIndex].source}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Ornamental Divider Bottom */}
                <div className="flex items-center justify-center mt-10">
                    <div className="w-20 lg:w-32 h-px bg-gradient-to-r from-transparent to-accent/30" />
                    <div className="w-2.5 h-2.5 transform rotate-45 border border-accent/40 mx-4" />
                    <div className="w-20 lg:w-32 h-px bg-gradient-to-l from-transparent to-accent/30" />
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {QUOTES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-accent w-6 shadow-sm' : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
