'use client';
import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { toPng } from 'html-to-image';

const BACKGROUND_OPTIONS = [
    { id: 1, name: 'Royal Gold', url: '/images/eid_bg_light_1.png', isLight: true },
    { id: 2, name: 'Floral Dream', url: '/images/eid_bg_light_2.png', isLight: true },
    { id: 3, name: 'Modern Blue', url: '/images/eid_bg_light_3.png', isLight: true },
    { id: 4, name: 'Mint Geometric', url: '/images/eid_bg_light_4.png', isLight: true },
];

export default function SendPage() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        senderName: '',
        recipientName: '',
        message: ''
    });
    const [selectedBg, setSelectedBg] = useState(BACKGROUND_OPTIONS[0]);
    const [copied, setCopied] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCopyImage = async () => {
        if (!cardRef.current) return;

        setIsCapturing(true);
        // Small delay to ensure any hover states or UI elements are cleared
        setTimeout(async () => {
            try {
                const dataUrl = await toPng(cardRef.current!, {
                    cacheBust: true,
                    pixelRatio: 2, // High quality
                    backgroundColor: '#ffffff',
                });

                const blob = await (await fetch(dataUrl)).blob();
                const item = new ClipboardItem({ [blob.type]: blob });
                await navigator.clipboard.write([item]);

                setCopied(true);
                // Fire some confetti for celebration
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#B45309', '#D97706', '#FFFFFF', '#FCD34D']
                });

                setTimeout(() => setCopied(false), 3000);
            } catch (err) {
                console.error('Failed to copy image: ', err);
                alert("Could not copy image to clipboard. Please try using a modern browser like Chrome or Edge.");
            } finally {
                setIsCapturing(false);
            }
        }, 100);
    };

    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Create Wish Card"
                subtitle="Design your personalized Eid card and copy it to share with family and friends."
                icon="✨"
                bgImage="/hero_image.png"
            />

            <div className="bg-primary flex-grow py-8 px-6 lg:px-20 relative overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10 items-start mt-4">

                    {/* Left Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-4/12 space-y-6 lg:pt-8"
                    >
                        <div className="bg-white/70 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] border border-accent-border shadow-xl ring-1 ring-black/5">
                            <h2 className="text-2xl font-serif text-text-heading mb-6 flex items-center gap-3">
                                <span className="p-2 bg-accent/10 rounded-xl text-accent">
                                    <Sparkles size={20} />
                                </span>
                                Customize Your Card
                            </h2>

                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold pl-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="senderName"
                                        value={formData.senderName}
                                        onChange={handleInputChange}
                                        className="input-custom py-3 px-4 text-sm"
                                        placeholder="e.g. Ali Rahman"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold pl-1">Recipient's Name</label>
                                    <input
                                        type="text"
                                        name="recipientName"
                                        value={formData.recipientName}
                                        onChange={handleInputChange}
                                        className="input-custom py-3 px-4 text-sm"
                                        placeholder="e.g. Sarah Hussain"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold pl-1">Personal Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="input-custom resize-none py-3 px-4 text-sm"
                                        placeholder="Write your heartfelt wish here..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Background Selection */}
                        <div className="bg-white/70 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] border border-accent-border shadow-xl ring-1 ring-black/5">
                            <h2 className="text-xl font-serif text-text-heading mb-4 flex items-center gap-3">
                                <span className="p-2 bg-accent/10 rounded-xl text-accent">
                                    <ImageIcon size={18} />
                                </span>
                                Select Background
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {BACKGROUND_OPTIONS.map((bg) => (
                                    <button
                                        key={bg.id}
                                        onClick={() => setSelectedBg(bg)}
                                        className={`relative aspect-[3.8/5] rounded-xl overflow-hidden border-2 transition-all group ${selectedBg.id === bg.id ? 'border-accent ring-2 ring-accent/20 scale-[0.98]' : 'border-transparent hover:border-accent/40'
                                            }`}
                                    >
                                        <img src={bg.url} alt={bg.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        <div className={`absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors ${selectedBg.id === bg.id ? 'bg-transparent' : ''}`} />
                                        <div className="absolute bottom-1 left-0 right-0 text-[8px] font-bold uppercase tracking-tighter text-white drop-shadow-md py-1 px-2 text-center bg-black/20 backdrop-blur-[2px]">
                                            {bg.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleCopyImage}
                            disabled={isCapturing}
                            className="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-accent/30 transition-all active:scale-95 disabled:opacity-70"
                        >
                            {isCapturing ? (
                                <span className="flex items-center gap-2">
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >⏳</motion.span>
                                    Generating...
                                </span>
                            ) : copied ? (
                                <><span>Card Copied!</span> <Check size={22} /></>
                            ) : (
                                <><span>Copy Card as Image</span> <Copy size={22} /></>
                            )}
                        </button>

                        <p className="text-center text-text-muted text-[10px] mt-4 font-medium opacity-80 leading-relaxed">
                            ✨ Pro Tip: After copying, just paste (Ctrl+V) into WhatsApp, Telegram, or any chat!
                        </p>
                    </motion.div>

                    {/* Right Side: Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-8/12 flex flex-col items-center pt-0"
                    >
                        <div className="mb-4 text-text-muted text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                            Live Preview
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>

                        <div
                            ref={cardRef}
                            className="w-full max-w-[450px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-[2.5rem] relative overflow-hidden bg-white border border-accent/20 ring-1 ring-black/5"
                            style={{ aspectRatio: '1/1' }}
                        >
                            {/* Background Image */}
                            <div
                                key={selectedBg.url}
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                                style={{ backgroundImage: `url('${selectedBg.url}')` }}
                            />

                            {/* Gradient overlays for depth and legibility - Adjusted for light theme */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 ${selectedBg.isLight ? 'bg-gradient-to-t from-white/40 via-transparent to-white/20' : 'bg-gradient-to-t from-black/50 via-transparent to-black/20'}`} />

                            {/* Subtle dark gradient at bottom for text legibility if needed */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2.5rem]" />

                            {/* Content */}
                            <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10 ${selectedBg.isLight ? 'text-slate-800' : 'text-white'}`}>
                                <div className={`absolute inset-6 rounded-[2rem] border border-white/10 backdrop-blur-[2px] ${selectedBg.isLight ? 'bg-white/10' : 'bg-black/5'}`} />

                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="mb-3 relative z-10"
                                >
                                    <span className="text-5xl drop-shadow-sm">🌙</span>
                                </motion.div>

                                <div className="space-y-3 w-full px-2 relative z-10">
                                    <h3 className={`text-4xl lg:text-5xl font-serif font-black uppercase tracking-[0.1em] leading-tight ${selectedBg.isLight ? 'text-accent drop-shadow-sm' : 'text-glow-accent drop-shadow-lg'}`}>
                                        Eid <br /> Mubarak
                                    </h3>

                                    <div className="flex items-center justify-center gap-3 py-1">
                                        <div className={`h-px w-10 ${selectedBg.isLight ? 'bg-accent/30' : 'bg-white/40'}`} />
                                        <Sparkles size={14} className={selectedBg.isLight ? 'text-accent/60' : 'text-white/80'} />
                                        <div className={`h-px w-10 ${selectedBg.isLight ? 'bg-accent/30' : 'bg-white/40'}`} />
                                    </div>

                                    <div className="space-y-1">
                                        <p className={`text-[9px] uppercase tracking-[0.4em] font-bold opacity-70`}>To my beloved</p>
                                        <h4 className={`text-2xl font-serif font-bold italic tracking-wide capitalize ${selectedBg.isLight ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
                                            {formData.recipientName || 'Recipient Name'}
                                        </h4>
                                    </div>

                                    <div className="py-1 px-4 relative min-h-[60px] flex items-center justify-center">
                                        <p className={`text-base font-serif italic leading-relaxed ${selectedBg.isLight ? 'text-slate-700' : 'text-white/95 drop-shadow-md'}`}>
                                            {formData.message || 'May Allah bless you with happiness and grace your home with warmth and peace.'}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <p className={`text-[8px] uppercase tracking-[0.5em] mb-0.5 opacity-60 font-bold`}>From the heart of</p>
                                        <p className={`text-xl font-serif font-black tracking-widest capitalize ${selectedBg.isLight ? 'text-accent' : 'text-white drop-shadow-lg'}`}>
                                            {formData.senderName || 'Sender Name'}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-0 right-0 opacity-40 z-10">
                                    <p className={`text-[7px] uppercase tracking-[0.6em] font-bold ${selectedBg.isLight ? 'text-slate-600' : 'text-white'}`}>Eid Al-Fitr 2026</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4 opacity-80 group animate-pulse hover:animate-none transition-all">
                            <div className="p-2 bg-white/50 backdrop-blur-sm rounded-xl border border-accent/20 shadow-sm">
                                <Sparkles size={16} className="text-accent" />
                            </div>
                            <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest">
                                Your Custom Card Is Ready
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
