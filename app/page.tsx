import Link from "next/link";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";

export default function Home() {
    return (
        <>
            <header className="py-[44px] text-center monument">
                <h3 className="text-[20.89px] leading-[25.07px] text-white">
                    dev<span className="text-primary">/asign</span>
                </h3>
            </header>
            <div 
                className="flex flex-col justify-between pt-[107px] pb-[70px]"
                style={{ height: "calc(100svh - 133px)" }}
            >
                <main className="text-center mx-auto text-white">
                    <div className="h-2.5 w-[110px] rounded-[20px] bg-primary opacity-50 mx-auto" />
                    <h1 className="monument pt-[30px] pb-[15px] tracking-[-0.25px] text-[40px] leading-[64px]">
                        Powering open-source collaboration 
                        <br />
                        with blockchain payments
                    </h1>
                    <div className="pptelegraf mb-10 space-y-[15px]">
                        <div className="w-fit flex lg:items-center gap-3 mx-auto">
                            <ImCheckboxChecked className="text-primary" />
                            <p>Project owners gets an integrated platform that manages tasks and payments for contributors.</p>
                        </div>
                        <div className="w-fit flex lg:items-center gap-3 mx-auto">
                            <ImCheckboxChecked className="text-primary" />
                            <p>Software developers receive immediate compensation for open-source contributions.</p>
                        </div>
                    </div>
                    <div className="w-fit flex gap-5 mx-auto pptelegraf font-extrabold text-xl leading-[24px]">
                        <button
                            className="py-[15px] px-[30px] bg-primary text-black"
                            // onClick={() => {}}
                        >
                            Join Waitlist
                        </button>
                        <Link 
                            href=""
                            className="py-[15px] pl-[25px] pr-[30px] border border-primary text-primary flex items-center gap-2.5"
                        >
                            <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
                                <FaDiscord className="text-black" />
                            </div>
                            <span>Community</span>
                        </Link>
                    </div>
                </main>
                <footer>
                    <div className="w-fit flex items-center gap-[15px] mx-auto text-white text-[22.5px]">
                        <Link href="https://www.linkedin.com/company/devasign/">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://x.com/devasign">
                            <FaXTwitter />
                        </Link>
                    </div>
                    <p className="text-center text-[#F7F7F7] pptelegraf mt-[30px]">© 2024 DevAsign</p>
                </footer>
            </div>
        </>
    );
}
