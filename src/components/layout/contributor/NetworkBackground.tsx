const NetworkBackground = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
            className="absolute inset-0 w-full h-full opacity-[0.17]"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#fe891f" />
                    <circle cx="100" cy="40" r="1" fill="#fe891f" />
                    <circle cx="180" cy="80" r="1.5" fill="#fe891f" />
                    <circle cx="60" cy="120" r="1" fill="#fe891f" />
                    <circle cx="140" cy="160" r="1.5" fill="#fe891f" />
                    <circle cx="40" cy="180" r="1" fill="#fe891f" />
                    <circle cx="160" cy="20" r="1" fill="#fe891f" />
                    <line x1="20" y1="20" x2="100" y2="40" stroke="#fe891f" strokeWidth="0.5" />
                    <line x1="100" y1="40" x2="180" y2="80" stroke="#fe891f" strokeWidth="0.5" />
                    <line x1="100" y1="40" x2="60" y2="120" stroke="#fe891f" strokeWidth="0.5" />
                    <line x1="60" y1="120" x2="140" y2="160" stroke="#fe891f" strokeWidth="0.5" />
                    <line x1="180" y1="80" x2="140" y2="160" stroke="#fe891f" strokeWidth="0.3" />
                    <line x1="20" y1="20" x2="160" y2="20" stroke="#fe891f" strokeWidth="0.3" />
                    <line x1="40" y1="180" x2="140" y2="160" stroke="#fe891f" strokeWidth="0.5" />
                    <line x1="40" y1="180" x2="60" y2="120" stroke="#fe891f" strokeWidth="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
        {/* Radial glow from top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#fe891f]/5 rounded-full blur-[120px]" />
    </div>
);

export default NetworkBackground;
