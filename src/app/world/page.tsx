'use client';
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import WorldContent from '@/components/content/WorldContent';

export default function WorldPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Eid Around the World 2026"
                subtitle="One ummah, diverse cultures. Explore how various nations celebrate this blessed day."
                icon="🌍"
                bgImage="/hero_image.png"
            />
            <WorldContent />
            <Footer />
        </div>
    );
}
