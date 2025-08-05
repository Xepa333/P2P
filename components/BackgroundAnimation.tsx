import React, { useState, useEffect } from 'react';

// Memoized Dot to prevent re-renders on parent state change
const Dot = React.memo(({ style, className }: { style: React.CSSProperties; className: string }) => (
  <div className={`absolute rounded-full bg-white/30 ${className}`} style={style} />
));
Dot.displayName = 'Dot';

const BackgroundAnimation = () => {
    const [dots, setDots] = useState<{ id: number; style: React.CSSProperties; className: string }[]>([]);

    useEffect(() => {
        const generatedDots = Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 2 + 1; // 1px to 3px
            const animationDuration = `${Math.random() * 40 + 20}s`; // 20-60 seconds duration
            const animationDelay = `-${Math.random() * 60}s`; // Start at a random point in the animation

            return {
                id: i,
                style: {
                    width: `${size}px`,
                    height: `${size}px`,
                    top: '110vh', // Start just below the viewport
                    left: `${Math.random() * 100}%`,
                    animationDuration,
                    animationDelay,
                },
                className: 'animate-drift'
            };
        });
        setDots(generatedDots);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
            aria-hidden="true"
        >
             {dots.map((dot) => (
                <Dot key={dot.id} style={dot.style} className={dot.className} />
            ))}
        </div>
    );
};

export default BackgroundAnimation;