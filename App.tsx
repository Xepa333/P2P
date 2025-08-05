import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { WhatIsInside, Context, Platforms, IntegrationStrategy, KpisAndMeasurement, BestPractices } from './components/ContentSections';
import { StrategicUseCases, PreLaunch, Launch, MatureBrands } from './components/LifecycleSections';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import MusicPlayer from './components/MusicPlayer';
import ScrollHint from './components/ui/ScrollHint';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (!audioElement) return;

    audioRef.current = audioElement;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);

    // Attempt to autoplay the music. Modern browsers often block this until
    // a user interacts with the page. We catch the error to prevent crashes.
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay was prevented by the browser. User interaction is required.");
        setIsPlaying(false);
      });
    }

    // Cleanup on unmount
    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed. User interaction might be required.", error);
      });
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="isolate text-gray-200">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <div className="relative z-10">
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
        </div>
      </main>
      <Footer />
      <MusicPlayer isPlaying={isPlaying} onToggle={togglePlay} />
      <ScrollHint />
    </div>
  );
}

export default App;