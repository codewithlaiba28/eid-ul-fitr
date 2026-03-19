'use client';
import React from 'react';
import { IslamicPattern } from '@/components/ui/svg/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-6 lg:px-20 z-10 bg-primary">
            {/* Dynamic Backgrounds */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] mix-blend-multiply overflow-hidden">
                <IslamicPattern opacity={1} className="text-accent scale-110" />
            </div>

            {/* Glowing Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none"
            />

            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full mb-8 inline-flex items-center gap-3 border border-accent-border shadow-sm mx-auto lg:mx-0"
                    >
                        <span className="text-lg">✨</span>
                        <span className="text-[10px] font-black text-accent tracking-[0.3em] uppercase">Eid ul Fitr 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-text-heading leading-[1.2] mb-8 tracking-tight"
                    >
                        Celebrate the <br />
                        <span className="accent-gradient">Joy of Eid</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <p className="font-arabic text-3xl lg:text-4xl text-accent mb-4 leading-normal">
                            عيد مبارك
                        </p>
                        <p className="text-text-body text-base lg:text-lg max-w-xl leading-relaxed mb-8 font-light">
                            &quot;A blessed time to harvest the fruits of spirituality and share the warmth of community and love.&quot;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <Link href="/send" className="btn-primary group px-8 py-3.5 text-sm">
                            Send Eid Wishes
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="/guide" className="btn-outline px-8 py-3.5 text-sm">
                            View Guide
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex-1 relative max-w-lg lg:max-w-2xl w-full"
                >
                    <div className="relative aspect-[3/2] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]">
                        <img
                            src="/hero_image.png"
                            alt="Eid Celebration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Decorative Background Element */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
                </motion.div>
            </div>

            {/* TWINKLING STARS overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.1]">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-accent"
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2}px`,
                            height: `${Math.random() * 2}px`,
                        }}
                    />
                ))}
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent z-10" />
        </section>
    );
}
