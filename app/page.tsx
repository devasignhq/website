/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";
import WaitlistForm from "./WaitlistForm";

export default function Home() {
    const [openWaitlistForm, setOpenWaitlistForm] = useState(false);

    return (
        <>
            <header className="monument sm:py-[44px] py-[30px] max-md:px-[50px] max-sm:px-5 md:text-center">
                <h3 className="sm:text-[21px] text-[17px] sm:leading-[25px] leading-[20px] text-white">
                    dev<span className="text-primary">/asign</span>
                </h3>
            </header>
            <img 
                src="/bg_vector.svg" 
                alt="" 
                className="fixed bottom-0 lg:right-0 2xl:min-w-[1850px] xl:min-w-[1600px] lg:min-w-[1300px] max-md:min-w-[1200px]"
            />
            <main className="md:text-center md:mx-auto text-white sm:pt-[107px] pt-[50px] max-md:px-[50px] max-sm:px-5 relative z-[99]">
                <div className="sm:h-2.5 h-1.5 sm:w-[110px] w-[90px] rounded-[20px] bg-primary opacity-50 md:mx-auto" />
                <h1 className="monument pt-[30px] pb-[15px] tracking-[-0.25px] sm:text-[40px] text-2xl sm:leading-[64px] leading-10">
                    Powering open-source collaboration 
                    <br className="max-lg:hidden" />
                    {" "}with blockchain payments
                </h1>
                <div className="pptelegraf mb-10 space-y-[15px] max-sm:text-sm leading-normal">
                    <div className="sm:w-fit flex md:items-center gap-3 md:mx-auto">
                        <div>
                            <ImCheckboxChecked className="text-primary max-md:mt-0.5" />
                        </div>
                        <p>Project owners gets an integrated platform that manages tasks and payments for contributors.</p>
                    </div>
                    <div className="sm:w-fit flex md:items-center gap-3 md:mx-auto">
                        <div>
                            <ImCheckboxChecked className="text-primary max-md:mt-0.5" />
                        </div>
                        <p>Software developers receive immediate compensation for open-source contributions.</p>
                    </div>
                </div>
                <div className="sm:w-fit w-full flex max-sm:flex-col gap-5 md:mx-auto pptelegraf font-extrabold sm:text-xl text-base leading-[24px]">
                    <button
                        className="py-[15px] px-[30px] bg-primary text-black max-sm:w-full text-center"
                        onClick={() => setOpenWaitlistForm(true)}
                    >
                        Join Waitlist
                    </button>
                    {/* <Link 
                        href=""
                        target="_blank"
                        className="py-[15px] pl-[25px] pr-[30px] border border-primary text-primary flex items-center justify-center gap-2.5"
                    >
                        <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
                            <FaDiscord className="text-black" />
                        </div>
                        <span>Community</span>
                    </Link> */}
                </div>
            </main>
            <footer className="sm:fixed sm:bottom-[70px] max-sm:mt-[100px] max-sm:pb-10 w-full">
                <div className="w-fit flex items-center gap-[15px] mx-auto text-white text-[22.5px]">
                    <Link href="https://www.linkedin.com/company/devasign/" target="_blank">
                        <FaLinkedinIn />
                    </Link>
                    <Link href="https://x.com/devasign" target="_blank">
                        <FaXTwitter />
                    </Link>
                </div>
                <p className="text-center text-[#F7F7F7] pptelegraf mt-[30px] max-sm:text-sm">© 2024 DevAsign</p>
            </footer>
            {openWaitlistForm && (
                <WaitlistForm
                    toggleWaitlistForm={() => setOpenWaitlistForm(false)}
                />
            )}
        </>
    );
}
