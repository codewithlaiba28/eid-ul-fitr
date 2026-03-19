'use client';
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import CelebrationsContent from '@/components/content/CelebrationsContent';

export default function CelebrationsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Eid Celebrations 2026"
                subtitle="Dive into the heartwarming traditions and joyful moments that make Eid unforgettable."
                icon="🎉"
                bgImage="/hero_image.png"
            />
            <CelebrationsContent />
            <Footer />
        </div>
    );
}
