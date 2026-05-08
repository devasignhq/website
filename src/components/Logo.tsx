import iconBlack from "../assets/icon-black.png";

interface LogoProps {
    size?: "sm" | "md";
    onLight?: boolean;
}

export function Logo({ size = "md", onLight = false }: LogoProps) {
    const dims = size === "sm" ? "h-[22px] w-[22px]" : "h-[26px] w-[26px] md:h-[28px] md:w-[28px]";
    const textSize = size === "sm" ? "text-[18px]" : "text-[20px] md:text-[22px]";
    return (
        <div className="flex items-center gap-[10px]">
            <img
                src={iconBlack}
                alt="DevAsign"
                className={`${dims} object-contain`}
            />
            <span
                className={`${textSize} leading-none tracking-[-0.02em] whitespace-pre`}
                style={{
                    fontFamily: '"Geist Mono", ui-monospace, monospace',
                    fontWeight: 800,
                    color: onLight ? "#0A0A0A" : "#F5F5F0",
                }}
            >
                DevAsign
            </span>
        </div>
    );
}
