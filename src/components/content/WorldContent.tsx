'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TRADITIONS = [
    {
        country: "Turkey",
        name: "Seker Bayrami",
        desc: "Known as the 'Sugar Feast', children go door-to-door for sweets like Turkish Delight and Baklava. Respect is shown by kissing the hands of elders.",
        icon: "🇹🇷"
    },
    {
        country: "Indonesia",
        name: "Mudik & Lebaran",
        desc: "Millions travel back to their hometowns (Mudik) and ask for forgiveness from family and neighbors (Halal bi Halal). Ketupat is a must-have dish.",
        icon: "🇮🇩"
    },
    {
        country: "Egypt",
        name: "Kahk Celebrations",
        desc: "Public parks are filled with families. Specialized butter cookies called Kahk, filled with nuts or honey, are the highlight of the festival.",
        icon: "🇪🇬"
    },
    {
        country: "Saudi Arabia",
        name: "Hospitality & Mogalgal",
        desc: "Saudis show immense hospitality, placing rugs and food outside their homes for strangers. Special lamb dishes and Arabic coffee are served.",
        icon: "🇸🇦"
    }
];

export default function WorldContent() {
    return (
        <div className="bg-primary flex-grow py-24 px-6 lg:px-20 relative overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-serif text-text-heading font-black mb-6">A Global Tapestry of Faith</h2>
                    <p className="text-text-body text-lg max-w-2xl mx-auto font-light">
                        Witness the beautiful diversity of our Ummah as we celebrate one faith through unique cultural lenses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {TRADITIONS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white border border-accent-border p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:border-accent/30 transition-colors group"
                        >
                            <span className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">{item.icon}</span>
                            <h3 className="text-accent text-[12px] font-black tracking-[0.3em] uppercase mb-2">{item.country}</h3>
                            <h4 className="text-2xl font-serif text-text-heading mb-4 font-bold">{item.name}</h4>
                            <p className="text-text-body font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
