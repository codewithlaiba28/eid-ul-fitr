'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DUAS = [
    {
        title: "Eid Takbeer",
        arabic: "Allahu Akbar, Allahu Akbar, La ilaha illallah, Allahu Akbar, Allahu Akbar, wa lillahi-Hamd.",
        translit: "Allah is the Greatest, Allah is the Greatest, there is no god but Allah, Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.",
        benefit: "Recited while going to the Eid prayer and throughout the day.",
        icon: "🔊"
    },
    {
        title: "The Eid Greeting",
        arabic: "Taqabbalallahu minna wa minkum.",
        translit: "May Allah accept [good deeds] from us and from you.",
        benefit: "The traditional sunnah greeting when meeting fellow Muslims on Eid day.",
        icon: "🤝"
    },
    {
        title: "Gratitude for Ramadan",
        arabic: "Alhamdulillahilladhi hadana lishahril Ramadhan.",
        translit: "Praise be to Allah who guided us to the month of Ramadan.",
        benefit: "A beautiful expression of gratitude for completing the month of fasting.",
        icon: "⭐"
    },
    {
        title: "Dua for Parents & Family",
        arabic: "Rabbighfir li waliwalidayya walilmuminina yawma yaqumul hisab.",
        translit: "Our Lord! Forgive me and my parents and the believers on the Day of Account.",
        benefit: "A timeless Quranic prayer for the safety and forgiveness of our loved ones.",
        icon: "🏠"
    }
];

export default function DuasContent() {
    return (
        <div className="bg-primary flex-grow py-24 px-6 lg:px-20 relative overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {DUAS.map((dua, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white border border-accent-border p-10 rounded-[2rem] shadow-sm hover:border-accent/40 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-3xl p-4 bg-secondary rounded-2xl group-hover:bg-accent/10 transition-colors">{dua.icon}</span>
                                <h3 className="text-2xl font-serif text-text-heading font-black">{dua.title}</h3>
                            </div>
                            <p className="font-arabic text-3xl text-text-heading mb-6 leading-relaxed bg-accent/5 p-6 rounded-2xl text-center">
                                {dua.arabic}
                            </p>
                            <div className="space-y-4">
                                <p className="text-text-body text-sm italic font-light leading-relaxed border-l-2 border-accent/20 pl-4">
                                    &quot;{dua.translit}&quot;
                                </p>
                                <p className="text-[10px] text-accent font-black uppercase tracking-widest mt-6 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    {dua.benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-secondary rounded-[3rem] border border-accent-border text-center">
                    <h2 className="text-3xl font-serif text-text-heading mb-6 font-bold">The Essence of Dhikr</h2>
                    <p className="text-text-body max-w-2xl mx-auto leading-relaxed font-light">
                        Remembrance of Allah (Dhikr) on this day is not just about words; it's about the heart's deep gratitude for the spiritual journey of Ramadan.
                    </p>
                </div>
            </div>
        </div>
    );
}
