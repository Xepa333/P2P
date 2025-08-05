
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { WhatIsInside, Context, Platforms, IntegrationStrategy, KpisAndMeasurement, BestPractices, ExternalBestPractices } from './components/ContentSections';
import { StrategicUseCases, PreLaunch, Launch, MatureBrands } from './components/LifecycleSections';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollHint from './components/ui/ScrollHint';

function App() {
  return (
    <div className="text-gray-200 bg-[#0d1124]">
      {/* Static Background for Hero */}
      <div className="fixed top-0 left-0 w-full h-screen -z-20">
        <img src="https://images.unsplash.com/photo-1524122269999-9701b2858716?q=80&w=2670&auto=format&fit=crop" alt="Golden Gate Bridge at dusk" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <BackgroundAnimation />

      <div className="relative z-10 isolate">
        <Header />
        <main>
          <Hero />
          {/* This container provides a solid background for content sections after the hero */}
          <div className="bg-[#0d1124]">
            <WhatIsInside />
            <Context />
            <Platforms />
            <StrategicUseCases />
            <PreLaunch />
            <Launch />
            <MatureBrands />
            <IntegrationStrategy />
            <KpisAndMeasurement />
            <BestPractices />
            <ExternalBestPractices />
          </div>
        </main>
        <Footer />
        <ScrollHint />
      </div>
    </div>
  );
}

export default App;
