
import React from 'react';

export const DigitalLogo = ({ className = "h-16" }: { className?: string }) => (
    <div className={`flex items-center gap-4 ${className}`}>
        <svg className="h-full w-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Company Logo">
            <defs>
                <path id="swoosh" d="M 25,24 C 4,43 12,78 45,90 C 40,75 35,60 42,42 C 35,35 30,30 25,24 Z" />
            </defs>

            <use href="#swoosh" fill="#6D28D9" transform="rotate(20, 50, 50)" />
            <use href="#swoosh" fill="#FBBF24" transform="rotate(140, 50, 50)" />
            <use href="#swoosh" fill="#312E81" transform="rotate(260, 50, 50)" />

            <g>
                <circle cx="50" cy="50" r="22" fill="#312E81"/>
                <circle cx="50" cy="50" r="22" fill="none" stroke="#A5B4FC" strokeWidth="1.5"/>
                <ellipse cx="50" cy="50" rx="11" ry="22" fill="none" stroke="#A5B4FC" strokeWidth="1.5"/>
                <ellipse cx="50" cy="50" rx="20" ry="22" fill="none" stroke="#A5B4FC" strokeWidth="1.5"/>
                <path d="M28,42 C40,38 60,38 72,42" fill="none" stroke="#A5B4FC" strokeWidth="1.5"/>
                <path d="M28,58 C40,62 60,62 72,58" fill="none" stroke="#A5B4FC" strokeWidth="1.5"/>
            </g>
        </svg>
        <div className="text-white">
            <div className="font-bold text-lg tracking-wider">DIGITAL</div>
            <div className="text-sm tracking-widest">TRANSFORMATION</div>
            <div className="text-xs tracking-wider">& INNOVATION</div>
        </div>
    </div>
);

export const ViatrisLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M99.6 19.2C99.6 17 97.9 15.3 95.7 15.3C93.5 15.3 91.8 17 91.8 19.2C91.8 21.4 93.5 23.1 95.7 23.1C97.9 23.1 99.6 21.4 99.6 19.2ZM95.7 21.8C94.4 21.8 93.6 20.7 93.6 19.2C93.6 17.7 94.4 16.6 95.7 16.6C96.9 16.6 97.8 17.7 97.8 19.2C97.8 20.7 96.9 21.8 95.7 21.8Z" fill="currentColor"/>
        <path d="M84.4 15.6H86.2V22.8H88V15.6H89.8V14H84.4V15.6Z" fill="currentColor"/>
        <path d="M78.6 15.6H80.5L82.2 20.3L84 15.6H85.5V22.8H84V17.5L82.3 22.8H81.8L80.1 17.5V22.8H78.6V15.6Z" fill="currentColor"/>
        <path d="M72.2 21.2V14H70.4V21.2C70.4 22.8 71.3 23.2 72.2 23.1V21.2Z" fill="currentColor"/>
        <path d="M64.7 14H66.5V22.8H64.7V14Z" fill="currentColor"/><path d="M61.9 21.8V14H60.1V21.8C60.1 23.3 61.1 23.2 61.9 23.1V21.8Z" fill="currentColor"/>
        <path d="M57.6 19.2C57.6 17 55.9 15.3 53.7 15.3C51.5 15.3 49.8 17 49.8 19.2C49.8 21.4 51.5 23.1 53.7 23.1C55.9 23.1 57.6 21.4 57.6 19.2ZM53.7 21.8C52.4 21.8 51.6 20.7 51.6 19.2C51.6 17.7 52.4 16.6 53.7 16.6C54.9 16.6 55.8 17.7 55.8 19.2C55.8 20.7 54.9 21.8 53.7 21.8Z" fill="currentColor"/>
        <path d="M12.8 14.3C12.8 6.4 19.2 0 27.1 0C35 0 41.4 6.4 41.4 14.3C41.4 22.2 35 28.6 27.1 28.6C19.2 28.6 12.8 22.2 12.8 14.3ZM39.5 14.3C39.5 7.5 33.9 1.9 27.1 1.9C20.3 1.9 14.7 7.5 14.7 14.3C14.7 21.1 20.3 26.7 27.1 26.7C33.9 26.7 39.5 21.1 39.5 14.3Z" fill="currentColor"/>
        <path d="M3.4 12.8C3.4 5.7 8.9 0 15.8 0H27.1C19.2 0 12.8 6.4 12.8 14.3C12.8 16.5 13.1 18.6 13.8 20.6C8.8 19.3 5.4 16.6 3.4 12.8Z" fill="currentColor"/>
        <path d="M2.5 14.3C2.5 18.4 4.5 22.2 7.7 24.7C7 22.8 6.5 20.8 6.5 18.7C6.5 11.7 10.8 5.7 16.6 3.8C12.5 5.5 8.7 8.6 6 12.6C5.1 11.5 2.5 10.3 0 10.3C1.2 11.7 2.5 13 2.5 14.3Z" fill="currentColor"/>
    </svg>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg text-indigo-400">
        {children}
    </div>
);

export const TargetIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 10-7.072 7.072m7.072-7.072l-1.414-1.414m-5.658 8.486L7.05 15.536m0-7.072l-1.414 1.414m8.486 5.658l1.414-1.414M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
    </IconWrapper>
);

export const RocketIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    </IconWrapper>
);

export const CaseIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    </IconWrapper>
);

export const ChartIcon = () => (
    <IconWrapper>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </IconWrapper>
);

export const CheckIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </IconWrapper>
);

export const LightbulbIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    </IconWrapper>
);

export const SpeakerOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

export const SpeakerOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
);