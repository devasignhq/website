const W = 1280;
const H = 720;
const VP_X = 640;
const VP_Y = 340;

const RING_FACTORS = [0.92, 0.78, 0.64, 0.5, 0.38, 0.28, 0.18, 0.1];

type LineSide = "top" | "bottom" | "left" | "right";

function makeLines(side: LineSide, n: number, extend = 0.15) {
    const arr: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i <= n; i++) {
        const t = i / n;
        const span = (t * (1 + 2 * extend) - extend);
        let x1: number;
        let y1: number;
        if (side === "top") { x1 = span * W; y1 = 0; }
        else if (side === "bottom") { x1 = span * W; y1 = H; }
        else if (side === "left") { x1 = 0; y1 = span * H; }
        else { x1 = W; y1 = span * H; }
        arr.push({ x1, y1, x2: VP_X, y2: VP_Y });
    }
    return arr;
}

const ALL_LINES = [
    ...makeLines("bottom", 14),
    ...makeLines("top", 14),
    ...makeLines("left", 10),
    ...makeLines("right", 10),
];

const STARS = [
    { x: 100, y: 80, r: 1.4, o: 0.7 },
    { x: 250, y: 140, r: 1, o: 0.5 },
    { x: 380, y: 60, r: 1.2, o: 0.6 },
    { x: 540, y: 90, r: 0.8, o: 0.4 },
    { x: 720, y: 50, r: 1.6, o: 0.85 },
    { x: 830, y: 130, r: 1, o: 0.5 },
    { x: 980, y: 80, r: 0.9, o: 0.6 },
    { x: 1130, y: 110, r: 1.3, o: 0.7 },
    { x: 180, y: 580, r: 1.2, o: 0.6 },
    { x: 360, y: 640, r: 1, o: 0.5 },
    { x: 580, y: 600, r: 1.4, o: 0.7 },
    { x: 800, y: 670, r: 0.9, o: 0.5 },
    { x: 1000, y: 600, r: 1.1, o: 0.6 },
    { x: 1180, y: 650, r: 1.5, o: 0.8 },
    { x: 480, y: 380, r: 1.5, o: 0.85 },
    { x: 660, y: 360, r: 1.8, o: 1 },
    { x: 750, y: 330, r: 1.2, o: 0.65 },
    { x: 60, y: 350, r: 1, o: 0.55 },
    { x: 1230, y: 380, r: 1.1, o: 0.6 },
    { x: 880, y: 450, r: 0.9, o: 0.5 },
    { x: 320, y: 250, r: 1, o: 0.5 },
    { x: 1080, y: 250, r: 1.3, o: 0.65 },
    { x: 200, y: 460, r: 0.8, o: 0.45 },
    { x: 920, y: 540, r: 1, o: 0.5 },
];

const FRAGMENTS = [
    { x: 240, y: 80, w: 70, h: 6, o: 0.5 },
    { x: 80, y: 580, w: 50, h: 5, o: 0.45 },
    { x: 1100, y: 460, w: 60, h: 5, o: 0.4 },
    { x: 600, y: 610, w: 35, h: 6, o: 0.32 },
    { x: 460, y: 30, w: 32, h: 5, o: 0.4 },
    { x: 1090, y: 320, w: 8, h: 60, o: 0.45 },
    { x: 100, y: 380, w: 7, h: 50, o: 0.4 },
    { x: 350, y: 250, w: 7, h: 40, o: 0.35 },
    { x: 1180, y: 270, w: 8, h: 70, o: 0.4 },
    { x: 30, y: 220, w: 6, h: 36, o: 0.35 },
    { x: 480, y: 440, w: 14, h: 5, o: 0.4 },
    { x: 760, y: 490, w: 20, h: 6, o: 0.5 },
    { x: 200, y: 320, w: 16, h: 6, o: 0.4 },
    { x: 990, y: 380, w: 12, h: 5, o: 0.35 },
    { x: 410, y: 530, w: 20, h: 5, o: 0.4 },
];

export function HeroBackground() {
    const cometPath = "M 220 560 Q 700 280 1180 160";

    return (
        <svg
            className="da-hero-bg"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="hb-bg" cx="50%" cy="50%" r="75%">
                    <stop offset="0%" stopColor="#0a0a0a" />
                    <stop offset="60%" stopColor="#050505" />
                    <stop offset="100%" stopColor="#000000" />
                </radialGradient>
                <linearGradient id="hb-comet" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="48%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="78%" stopColor="#ffd29c" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fe891f" stopOpacity="0.95" />
                </linearGradient>
                <radialGradient id="hb-head" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="55%" stopColor="#fff5d6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ffd29c" stopOpacity="0" />
                </radialGradient>
                <filter id="hb-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" />
                </filter>
                <filter id="hb-glow-lg" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="14" />
                </filter>
            </defs>

            {/* Background */}
            <rect width={W} height={H} fill="url(#hb-bg)" />

            {/* Perspective grid lines */}
            <g className="hb-scene" stroke="#5a6480" strokeWidth="0.5" opacity="0.22">
                {ALL_LINES.map((l, i) => (
                    <line key={i} {...l} />
                ))}
            </g>

            {/* Concentric depth rings */}
            <g className="hb-scene" stroke="#5a6480" strokeWidth="0.5" fill="none" opacity="0.18">
                {RING_FACTORS.map((f, i) => (
                    <rect
                        key={i}
                        x={VP_X - (W * f) / 2}
                        y={VP_Y - (H * f) / 2}
                        width={W * f}
                        height={H * f}
                    />
                ))}
            </g>

            {/* Floating debris fragments */}
            <g className="hb-scene" fill="#9aa3b8" opacity="0.55">
                {FRAGMENTS.map((f, i) => (
                    <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} opacity={f.o} />
                ))}
            </g>

            {/* Star dots */}
            <g className="hb-scene" fill="#ffffff" opacity="0.7">
                {STARS.map((s, i) => (
                    <circle key={i} cx={s.x} cy={s.y} r={s.r} opacity={s.o} />
                ))}
            </g>

            {/* Shooting star */}
            <g className="hb-comet">
                {/* Outer halo */}
                <path
                    d={cometPath}
                    stroke="url(#hb-comet)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#hb-glow-lg)"
                    opacity="0.45"
                />
                {/* Mid glow */}
                <path
                    d={cometPath}
                    stroke="url(#hb-comet)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#hb-glow)"
                />
                {/* Bright core */}
                <path
                    d={cometPath}
                    stroke="url(#hb-comet)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Head halo + bright dot */}
                <circle cx="1180" cy="160" r="38" fill="url(#hb-head)" />
                <circle cx="1180" cy="160" r="7" fill="#ffffff" filter="url(#hb-glow)" />
                <circle cx="1180" cy="160" r="3.2" fill="#ffffff" />

                {/* Sparkle particles trailing behind the head */}
                <g className="hb-sparks">
                    <circle cx="1142" cy="180" r="1.6" fill="#ffd29c" />
                    <circle cx="1118" cy="196" r="1.2" fill="#ffd29c" />
                    <circle cx="1090" cy="210" r="1" fill="#fe891f" />
                    <circle cx="1062" cy="222" r="0.9" fill="#fe891f" />
                    <circle cx="1035" cy="232" r="0.7" fill="#fe891f" />
                    <circle cx="1170" cy="180" r="1.5" fill="#fff5d6" />
                    <circle cx="1152" cy="166" r="1" fill="#fff5d6" />
                    <circle cx="1200" cy="195" r="1.3" fill="#ffd29c" />
                    <circle cx="1106" cy="178" r="0.9" fill="#fff5d6" />
                </g>
            </g>
        </svg>
    );
}
