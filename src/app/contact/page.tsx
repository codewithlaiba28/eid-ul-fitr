'use client';
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Share your suggestions, feedback, or Eid wishes with us."
                icon="📞"
            />

            <div className="bg-primary flex-grow py-24 px-6 lg:px-20 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white p-10 lg:p-16 rounded-3xl border border-accent-border shadow-sm relative z-10"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-text-muted text-sm uppercase tracking-wider font-medium pl-1">Name</label>
                                <input type="text" placeholder="Your Name" className="input-custom" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-text-muted text-sm uppercase tracking-wider font-medium pl-1">Email</label>
                                <input type="email" placeholder="Your Email" className="input-custom" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-text-muted text-sm uppercase tracking-wider font-medium pl-1">Message</label>
                            <textarea rows={6} placeholder="How can we help you?" className="input-custom resize-none"></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full lg:w-auto px-12 py-4 text-lg"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-16 pt-16 border-t border-white/10 text-center">
                        <p className="text-text-muted mb-6 font-light">Or reach out directly via WhatsApp for quicker responses:</p>
                        <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-full hover:bg-[#25D366]/20 transition-all font-medium">
                            <span>💬</span> WhatsApp Message
                        </a>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
