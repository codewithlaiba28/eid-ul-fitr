'use client';
import React, { useState, useEffect } from 'react';
import { Crescent } from '@/components/ui/svg/Icons';
import { motion } from 'framer-motion';

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isEid, setIsEid] = useState(false);

    useEffect(() => {
        // Target date for Eid ul Fitr (Approx March 20, 2026)
        const eidDate = new Date('March 20, 2026 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = eidDate - now;

            if (difference <= 0) {
                setIsEid(true);
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const FlipCard = ({ label, value }: { label: string, value: number }) => (
        <div className="flex flex-col items-center mx-2 lg:mx-4">
            <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white w-16 lg:w-24 h-20 lg:h-28 rounded-xl flex items-center justify-center shadow-sm mb-3 relative overflow-hidden group border border-accent-border"
            >
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-accent/10 w-full z-10" />
                <span className="font-serif text-3xl lg:text-5xl font-bold text-accent z-20">
                    {value.toString().padStart(2, '0')}
                </span>
            </motion.div>
            <span className="text-text-muted font-sans text-[10px] lg:text-xs font-semibold tracking-[0.2em] uppercase">{label}</span>
        </div>
    );

    return (
        <section className="relative w-full py-28 bg-secondary flex flex-col items-center justify-center px-4 z-20 overflow-hidden border-t border-accent-border">
            {/* Background decorative elements removed for cleaner look */}

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="z-10 flex flex-col items-center text-center max-w-4xl w-full"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 text-accent mb-6"
                >
                    <Crescent className="w-full h-full" />
                </motion.div>

                <h2 className="text-3xl lg:text-5xl font-serif text-text-heading font-bold mb-3 tracking-wide">
                    Eid ul Fitr is <span className="text-accent">Almost Here</span>
                </h2>

                <p className="text-text-muted text-base lg:text-lg mb-12 font-light">
                    &quot;The blessed moon is almost upon us...&quot;
                </p>

                {isEid ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white border border-accent p-8 rounded-2xl shadow-sm"
                    >
                        <h3 className="text-3xl lg:text-4xl text-accent font-serif font-bold">🌙 Eid Mubarak! Today is Eid! ✨</h3>
                    </motion.div>
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-y-6">
                        <FlipCard label="Days" value={timeLeft.days} />
                        <FlipCard label="Hours" value={timeLeft.hours} />
                        <FlipCard label="Minutes" value={timeLeft.minutes} />
                        <FlipCard label="Seconds" value={timeLeft.seconds} />
                    </div>
                )}
            </motion.div>
        </section>
    );
}
