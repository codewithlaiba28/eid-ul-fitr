'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CELEBRATIONS = [
    {
        title: "Chand Raat",
        desc: "The 'Night of the Moon' marks the end of Ramadan. Markets buzz with life as people shop for clothes and apply intricate Mehndi (henna).",
        icon: "🌙"
    },
    {
        title: "Eid-ul-Fitr Prayer",
        desc: "Muslims gather in large open spaces or mosques for a special congregational prayer, expressing gratitude for the strength given during Ramadan.",
        icon: "🕌"
    },
    {
        title: "Zakat-ul-Fitr",
        desc: "Before the prayer, every Muslim gives charity to the needy, ensuring that everyone can participate in the joy of the festival.",
        icon: "⚖️"
    },
    {
        title: "The Sweet Feast",
        desc: "Often called 'Meethi Eid', traditional sweets like Sheer Khurma and Baklava are prepared and shared with guests and neighbors.",
        icon: "🧁"
    }
];

export default function CelebrationsContent() {
    return (
        <div className="bg-primary flex-grow py-24 px-6 lg:px-20 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {CELEBRATIONS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-accent-border p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="text-4xl mb-6 bg-secondary w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-text-heading mb-4 font-bold">{item.title}</h3>
                            <p className="text-text-body font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-secondary rounded-[3rem] p-12 text-center border border-accent-border">
                    <h2 className="text-3xl lg:text-4xl font-serif text-text-heading mb-6 font-bold">The Spirit of Eidi</h2>
                    <p className="text-text-body max-w-2xl mx-auto leading-relaxed mb-8">
                        Eidi is a cherished tradition where elders gift cash or presents to children. It's a gesture that fosters love, generosity, and excitement for the younger generation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-2 bg-white border border-accent-border rounded-full text-sm font-bold text-accent uppercase tracking-widest">Generosity</span>
                        <span className="px-6 py-2 bg-white border border-accent-border rounded-full text-sm font-bold text-accent uppercase tracking-widest">Family Bonds</span>
                        <span className="px-6 py-2 bg-white border border-accent-border rounded-full text-sm font-bold text-accent uppercase tracking-widest">Joy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
