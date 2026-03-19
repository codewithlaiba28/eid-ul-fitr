export const IslamicPattern = ({ className = "", opacity = 0.06 }: { className?: string; opacity?: number }) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={className} style={{ opacity }}>
        <defs>
            <pattern id="islamic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 100 50 L 50 100 L 0 50 Z M 25 25 L 75 75 M 25 75 L 75 25 M 0 0 L 100 100 M 0 100 L 100 0" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                <path d="M 50 15 L 60 40 L 85 50 L 60 60 L 50 85 L 40 60 L 15 50 L 40 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.8" />
            </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic)" />
    </svg>
);

export const Mosque = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 800 200" className={className} preserveAspectRatio="xMidYMax meet" fill="currentColor">
        <path d="M 0 200 L 800 200 L 800 180 L 750 180 L 750 140 L 700 140 L 700 180 L 600 180 L 600 100 A 50 50 0 0 0 500 100 L 500 180 L 450 180 L 450 80 A 60 60 0 0 0 330 80 L 330 180 L 250 180 L 250 100 L 150 100 L 150 180 L 80 180 L 80 120 L 30 120 L 30 180 L 0 180 Z" />
        <path d="M 500 100 Q 550 20 600 100 Z" />
        <path d="M 330 80 Q 390 -30 450 80 Z" />
        <path d="M 150 100 Q 200 40 250 100 Z" />

        <rect x="720" y="40" width="10" height="100" />
        <path d="M 715 40 L 735 40 L 725 10 Z" />
        <rect x="55" y="60" width="10" height="60" />
        <path d="M 50 60 L 70 60 L 60 30 Z" />
        <rect x="280" y="30" width="12" height="150" />
        <path d="M 275 30 L 297 30 L 286 0 Z" />

        <path d="M 370 180 L 370 130 A 20 20 0 0 1 410 130 L 410 180 Z" fill="transparent" stroke="var(--bg-primary)" strokeWidth="2" />
        <path d="M 530 180 L 530 150 A 20 20 0 0 1 570 150 L 570 180 Z" fill="transparent" stroke="var(--bg-primary)" strokeWidth="2" />
        <path d="M 180 180 L 180 140 A 20 20 0 0 1 220 140 L 220 180 Z" fill="transparent" stroke="var(--bg-primary)" strokeWidth="2" />
    </svg>
);

export const Crescent = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M 80 50 A 40 40 0 1 1 50 10 A 30 30 0 1 0 70 40 Z" />
        <circle cx="75" cy="20" r="3" fill="#FFF" className="animate-twinkle star-delay-1" />
        <path d="M 85 10 L 88 15 L 85 20 L 82 15 Z" fill="#FFF" className="animate-twinkle star-delay-2" />
        <path d="M 60 25 L 62 28 L 60 31 L 58 28 Z" fill="#FFF" className="animate-twinkle star-delay-3" />
    </svg>
);

export const Lantern = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="50" y1="0" x2="50" y2="40" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 40 40 L 60 40 L 68 60 L 75 60 L 70 120 L 50 150 L 30 120 L 25 60 L 32 60 L 40 40 Z" fill="currentColor" fillOpacity="0.05" />
        <path d="M 40 40 L 60 40 L 68 60 L 32 60 Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M 32 60 L 68 60 L 60 120 L 40 120 Z" />
        <path d="M 40 120 L 60 120 L 50 150 Z" fill="currentColor" fillOpacity="0.4" />

        {/* Inner glow representation */}
        <circle cx="50" cy="90" r="10" className="fill-accent/40 animate-pulse-slow" stroke="none" style={{ filter: 'blur(4px)' }} />
        <circle cx="50" cy="90" r="4" fill="#FFF" className="animate-pulse-slow" stroke="none" />

        <line x1="50" y1="150" x2="50" y2="170" />
        <path d="M 50 170 L 45 190 M 50 170 L 55 190 M 50 170 L 50 195" strokeWidth="1" opacity="0.7" />
    </svg>
);
