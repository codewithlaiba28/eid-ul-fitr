import React from 'react';
import Hero from '@/components/home/Hero';
import Countdown from '@/components/home/Countdown';
import FeaturedDuas from '@/components/home/FeaturedDuas';
import FeaturedWishes from '@/components/home/FeaturedWishes';
import QuoteRotator from '@/components/home/QuoteRotator';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Countdown />
      <FeaturedDuas />
      <FeaturedWishes />
      <QuoteRotator />
      <Footer />
    </div>
  );
}
