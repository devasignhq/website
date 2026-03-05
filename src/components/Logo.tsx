import iconBlack from "../assets/icon-black.png";

export function Logo() {
    return (
        <div className="flex gap-[5.717px] items-center">
            <img
                src={iconBlack}
                alt="DevAsign Icon"
                className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] object-cover"
            />
            <p className="font-geist-extrabold leading-normal text-lg md:text-xl text-white tracking-[-0.5px] whitespace-pre">DevAsign</p>
        </div>
    );
}
