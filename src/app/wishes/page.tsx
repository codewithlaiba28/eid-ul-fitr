import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import FeaturedWishes from '@/components/home/FeaturedWishes';
import Footer from '@/components/layout/Footer';

export default function WishesPage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <PageHeader
                title="Eid Wishes 2026"
                subtitle="Share the joy and blessings with your loved ones through our curated collection of aesthetic cards."
                icon="💌"
                bgImage="/hero_image.png"
            />

            <div className="bg-primary flex-grow py-20">
                <FeaturedWishes />
            </div>

            <Footer />
        </div>
    );
}
