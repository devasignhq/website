import svgPaths from "../imports/svg-mzil336qsi";

export function Logo() {
    return (
        <div className="flex gap-[5.717px] items-center">
            <div className="h-[30px] w-[30px] relative shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
                    <path d={svgPaths.p177efd00} fill="#FFC795" />
                    <path clipRule="evenodd" d={svgPaths.pffa9c00} fill="#FE891F" fillRule="evenodd" />
                </svg>
            </div>
            <p className="font-geist-ultrablack leading-normal text-2xl md:text-3xl text-white tracking-[-1.6909px] whitespace-pre">DevAsign</p>
        </div>
    );
}
