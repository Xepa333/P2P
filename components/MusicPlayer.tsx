
import React from 'react';
import { SpeakerOnIcon, SpeakerOffIcon } from './ui/Icons';

interface MusicPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
}

const MusicPlayer = ({ isPlaying, onToggle }: MusicPlayerProps) => {
    return (
        <button
            onClick={onToggle}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
        >
            <span className="sr-only">{isPlaying ? 'Pause music' : 'Play music'}</span>
            {isPlaying ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
        </button>
    );
};

export default MusicPlayer;
