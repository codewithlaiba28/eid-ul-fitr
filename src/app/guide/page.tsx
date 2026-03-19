'use client';
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

function GenericPageLayout({ title, subtitle, icon, introText, bulletPoints = [] }: any) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader title={title} subtitle={subtitle} icon={icon} bgImage="/hero_image.png" />
            <div className="bg-primary flex-grow py-20 px-6 lg:px-20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto bg-white p-12 rounded-3xl border border-accent-border shadow-sm">
                    <div className="mb-8">
                        <span className="text-4xl">✨</span>
                    </div>
                    <p className="text-text-body text-xl font-light leading-relaxed mb-12">
                        {introText}
                    </p>

                    {bulletPoints.length > 0 && (
                        <div className="space-y-6">
                            {bulletPoints.map((bp: string, i: number) => (
                                <div key={i} className="flex gap-4 items-start p-6 bg-secondary rounded-2xl border border-accent-border hover:border-accent/50 transition-colors shadow-sm">
                                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/30 text-sm font-bold shadow-sm">
                                        {i + 1}
                                    </span>
                                    <p className="text-text-heading font-light text-lg">{bp}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const GUIDE_STEPS = [
    {
        title: "Sunnah of Cleaning",
        text: "Perform Ghusl (ritual bath), wear your best clothes, and apply perfume (Atar) to welcome the blessed day with purity.",
        icon: "🚿"
    },
    {
        title: "The Pre-Prayer Date",
        text: "It is Sunnah to eat an odd number of dates before leaving for the Eid prayer, signifying that the fast is truly over.",
        icon: "🌴"
    },
    {
        title: "Payment of Zakat-ul-Fitr",
        text: "Ensure your Fitrana is paid before the prayer begins so that everyone in the community can enjoy a festive meal.",
        icon: "💰"
    },
    {
        title: "Congregational Prayer",
        text: "Join the community for the Eid Salah. Recite the Takbeerat loudly while walking to the Musalla (prayer ground).",
        icon: "🕌"
    },
    {
        title: "Al-Silah (Visiting)",
        text: "Visit relatives, neighbors, and friends. Maintain the bonds of kinship and share the joy of the festival.",
        icon: "🏠"
    }
];

export default function GuidePage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Eid Day Guide 2026"
                subtitle="A step-by-step Sunnah guide to making your Eid ul Fitr spiritually rewarding and joyful."
                icon="📖"
                bgImage="/hero_image.png"
            />

            <div className="bg-primary flex-grow py-24 px-6 lg:px-20 relative overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {GUIDE_STEPS.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex gap-8 items-start p-8 rounded-[2.5rem] bg-white border border-accent-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="text-4xl p-5 bg-secondary rounded-3xl shrink-0 leading-none">{step.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-serif text-text-heading font-black mb-4">{step.title}</h3>
                                    <p className="text-text-body font-light leading-relaxed">{step.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-accent/5 rounded-[3rem] border border-accent/10 flex flex-col items-center text-center">
                        <h2 className="text-3xl font-serif text-text-heading mb-6 font-bold">A Day of Divine Reward</h2>
                        <p className="text-text-body max-w-2xl leading-relaxed italic mb-8">
                            &quot;Eid is the day of winning for those who fasted and prayed during Ramadan. Enjoy every moment with gratitude.&quot;
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
