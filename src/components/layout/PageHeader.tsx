'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, icon, bgImage }: { title: string, subtitle: string, icon: string, bgImage?: string }) {
    return (
        <div className={`relative w-full pt-32 pb-24 px-6 lg:px-20 overflow-hidden ${bgImage ? 'bg-dark' : 'bg-secondary'} border-b border-accent-border`}>
            {/* Background Image with Overlay */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-40 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </div>
            )}

            {/* Background Orbs */}
            {!bgImage && (
                <>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
                </>
            )}

            {/* Decorative Stars */}
            <div className={`absolute inset-0 z-0 ${bgImage ? 'opacity-30' : 'opacity-20'}`}>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full ${bgImage ? 'bg-white' : 'bg-accent'} animate-twinkle`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center ${bgImage ? 'text-white' : 'text-text-heading'}`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-20 h-20 ${bgImage ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white border-accent-border shadow-sm'} border rounded-2xl flex items-center justify-center text-4xl mb-8`}
                >
                    {icon}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={`text-4xl lg:text-7xl font-serif font-black ${bgImage ? 'text-white' : 'text-text-heading'} mb-6 drop-shadow-lg`}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className={`text-lg lg:text-2xl font-light ${bgImage ? 'text-white/90' : 'text-text-muted'} max-w-2xl leading-relaxed`}
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>
    );
}
