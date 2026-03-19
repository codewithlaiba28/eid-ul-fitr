import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import DuasContent from '@/components/content/DuasContent';

export default function DuasPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Sacred Duas"
                subtitle="Spiritual invocations to enrich your soul and celebrate the gratitude of Eid ul Fitr 2026."
                icon="🤲"
                bgImage="/hero_image.png"
            />

            <DuasContent />
            <Footer />
        </div>
    );
}
