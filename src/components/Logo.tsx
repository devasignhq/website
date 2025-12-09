import iconBlack from "../assets/icon-black.png";

export function Logo() {
    return (
        <div className="flex gap-[5.717px] items-center">
            <div className="h-[30px] w-[30px] relative shrink-0">
                <img
                    src={iconBlack}
                    alt="DevAsign Icon"
                    className="block size-full object-contain"
                />
            </div>
            <p className="font-geist-ultrablack leading-normal text-xl md:text-3xl text-white tracking-[-0.5px] md:tracking-[-1.6909px] whitespace-pre">DevAsign</p>
        </div>
    );
}
