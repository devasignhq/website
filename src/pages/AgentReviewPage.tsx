import React, { useState, useCallback, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { x402Client, x402HTTPClient } from "@x402/fetch";
import { ExactStellarScheme } from "@x402/stellar";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { useSWKConnection } from "../hooks/useSWKConnection";
import { useSWKSigner } from "../hooks/useSWKSigner";
import { SEO } from '../components/SEO';
import { Logo } from "../components/Logo";
import imgBgImage from "../assets/c8f0d3f13ac7dd476288c0403bdca511610a696b.png";

const NETWORK = "stellar:testnet" as const;
const apiUrl = import.meta.env.VITE_API_URL;
const rpcUrl = import.meta.env.VITE_RPC_URL;

export const AgentReviewPage = () => {
    const location = useLocation();
    const [prUrl, setPrUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [walletMenuOpen, setWalletMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const walletMenuRef = useRef<HTMLDivElement>(null);

    // Use the same hook pattern as the x402-stellar reference
    const { kitReady, address, connect, disconnect, error: connectionError } =
        useSWKConnection(NETWORK);

    const signer = useSWKSigner({
        address,
        network: NETWORK,
        kitReady,
    });

    const handleConnect = useCallback(async () => {
        await connect();
    }, [connect]);

    const handleDisconnect = useCallback(async () => {
        await disconnect();
        setWalletMenuOpen(false);
        toast.info(
            "Wallet disconnected. To fully disconnect some wallets, you may need to disconnect from the wallet app itself."
        );
    }, [disconnect]);

    // Close wallet menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (walletMenuRef.current && !walletMenuRef.current.contains(e.target as Node)) {
                setWalletMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        const githubPrRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+\/pull\/\d+\/?.*$/;
        if (!githubPrRegex.test(prUrl)) {
            toast.error("Please enter a valid GitHub PR URL");
            return;
        }

        if (!address || !signer) {
            toast.error("Please connect your wallet first.");
            return;
        }

        if (!apiUrl || !rpcUrl) {
            toast.error("API and RPC URLs are not configured.");
            return;
        }

        setIsLoading(true);

        try {
            // Setup x402 client with the SWK signer (same pattern as reference)
            const client = new x402Client()
                .register("stellar:testnet", new ExactStellarScheme(signer, { url: rpcUrl }));
            const httpClient = new x402HTTPClient(client);

            const firstTry = await fetch(`${apiUrl}/agent/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prUrl }),
            });

            // Grab response which includes instructions for payment
            const paymentRequired = httpClient.getPaymentRequiredResponse((name) =>
                firstTry.headers.get(name),
            );

            const paymentPayload = await client.createPaymentPayload(paymentRequired);

            const paymentHeaders = httpClient.encodePaymentSignatureHeader(paymentPayload);

            const response = await fetch(`${apiUrl}/agent/review`, {
                method: "POST",
                headers: {
                    ...paymentHeaders,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prUrl }),
            });

            const responseData = await response.json();

            if (responseData.data.taskId) {
                toast.success(`Payment successful! ${responseData.message}`);
                setPrUrl("");
            } else {
                toast.error(responseData.message || "Failed to submit PR for review");
            }
        } catch (error) {
            console.error("Error during PR submission:", error);
            if (error instanceof Error && error.message.includes("User declined")) {
                toast.error("Transaction was cancelled.");
            } else {
                toast.error("An error occurred during payment processing.");
            }
        } finally {
            setIsLoading(false);
        }
    }, [prUrl, address, signer]);

    const truncateAddress = (addr: string) =>
        `${addr.slice(0, 6)}...${addr.slice(-4)}`;

    return (
        <>
            <SEO
                title="Agentic PR Review - DevAsign"
                description="Get an instant AI-powered code review for any public GitHub Pull Request via Stellar Network."
                canonical="/agent-review"
            />
            <div className="bg-[#090603] min-h-screen w-full flex flex-col">
                {/* ── Dedicated Agent Review Navbar ── */}
                <nav className="absolute top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-6 md:py-10">
                    <div className="max-w-[1260px] mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4 md:gap-8">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <div className="hidden md:flex items-center">
                                <Link
                                    to="/docs"
                                    className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname.startsWith('/docs') ? 'active' : ''}`}
                                >
                                    Docs
                                </Link>
                                <Link
                                    to="/contributor"
                                    className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname === '/contributor' ? 'active' : ''}`}
                                >
                                    Devs
                                </Link>
                                <Link
                                    to="/agent-review"
                                    className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname === '/agent-review' ? 'active' : ''}`}
                                >
                                    x402
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block relative" ref={walletMenuRef}>
                            {!address ? (
                                <button
                                    onClick={handleConnect}
                                    disabled={!kitReady}
                                    className="signup-btn bg-[#fe891f] px-5 py-2.5 font-geist-extrabold text-[#090603] text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ cursor: kitReady ? "pointer" : "not-allowed" }}
                                >
                                    {kitReady ? "Connect Wallet" : "Loading..."}
                                </button>
                            ) : (
                                <div className="relative">
                                    <button
                                        onClick={() => setWalletMenuOpen(!walletMenuOpen)}
                                        className="agent-review-wallet-active-btn"
                                    >
                                        <span className="agent-review-wallet-dot" />
                                        <span className="agent-review-wallet-addr">
                                            {truncateAddress(address)}
                                        </span>
                                        <svg
                                            className={`w-3.5 h-3.5 transition-transform ${walletMenuOpen ? "rotate-180" : ""}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {walletMenuOpen && (
                                        <div className="agent-review-wallet-dropdown">
                                            <div className="agent-review-wallet-dropdown-header">
                                                <p className="text-xs text-[#888] mb-1">Connected Wallet</p>
                                                <p className="text-xs text-white font-mono break-all">{address}</p>
                                            </div>
                                            <button
                                                onClick={handleDisconnect}
                                                className="agent-review-wallet-disconnect-btn"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Disconnect Wallet
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <button 
                          className="md:hidden flex items-center justify-center p-2 text-white" 
                          onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 z-[100] bg-[#090603]/80 backdrop-blur-xl flex flex-col items-center justify-center">
                            <div className="absolute top-0 left-0 right-0 w-full px-4 md:px-8 py-6 md:py-10 flex items-center justify-between">
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Logo />
                                </Link>
                                <button 
                                    className="p-2 text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-8 w-full px-8 mt-12">
                                <div className="flex flex-col items-center gap-6">
                                    <Link
                                        to="/docs"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname.startsWith('/docs') ? 'opacity-100' : 'opacity-70'}`}
                                    >
                                        Docs
                                    </Link>
                                    <Link
                                        to="/contributor"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname === '/contributor' ? 'opacity-100' : 'opacity-70'}`}
                                    >
                                        Devs
                                    </Link>
                                    <Link
                                        to="/agent-review"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname === '/agent-review' ? 'opacity-100' : 'opacity-70'}`}
                                    >
                                        x402
                                    </Link>
                                </div>

                                <div className="flex flex-col items-center gap-4 w-full max-w-[250px] mt-12">
                                    {!address ? (
                                        <button
                                            onClick={handleConnect}
                                            disabled={!kitReady}
                                            className="signup-btn w-full bg-[#fe891f] px-5 py-3.5 font-geist-extrabold text-[#090603] text-lg tracking-[-0.3px] whitespace-nowrap transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{ cursor: kitReady ? "pointer" : "not-allowed" }}
                                        >
                                            {kitReady ? "Connect Wallet" : "Loading..."}
                                        </button>
                                    ) : (
                                        <div className="flex flex-col items-center w-full gap-3">
                                            <div className="agent-review-wallet-active-btn w-full justify-center">
                                                <span className="agent-review-wallet-dot" />
                                                <span className="agent-review-wallet-addr text-lg">
                                                    {truncateAddress(address)}
                                                </span>
                                            </div>
                                            <button
                                                onClick={handleDisconnect}
                                                className="w-full py-3 px-4 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2 font-medium"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Disconnect
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                {/* ── Hero Area (no shared Navigation) ── */}
                <div className="flex-shrink-0">
                    <section className="relative w-full overflow-hidden flex flex-col pt-[80px]">
                        {/* Background Image */}
                        <div className="absolute inset-0 pointer-events-none">
                            <img alt="" className="absolute h-[120%] w-full object-cover object-bottom opacity-100 top-0" src={imgBgImage} />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#090603] opacity-65 pointer-events-none" />

                        {/* Content */}
                        <div className="relative max-w-[1260px] mx-auto px-4 md:px-8 pt-16 md:pt-24 lg:pt-[100px] pb-0 flex flex-col w-full h-full">
                            <div className="w-full flex justify-center items-center">
                                <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12 w-full">
                                    {/* Banner */}
                                    <div className="flex items-center gap-4">
                                        <div className="h-[1px] w-16 md:w-24 bg-[#fe891f] opacity-80"></div>
                                        <span className="text-[#fe891f] text-center text-[11px] md:text-xs font-geist-medium tracking-[0.2em] uppercase">
                                            Stellar Agentic Hackathon · x402 + Soroban
                                        </span>
                                        <div className="h-[1px] w-16 md:w-24 bg-[#fe891f] opacity-80"></div>
                                    </div>

                                    {/* Title */}
                                    <h1 className="font-geist-regular text-white text-center text-3xl md:text-5xl lg:text-[64px] tracking-[-3.2px] max-w-[950px] leading-tight md:leading-normal">
                                        Code Review.
                                        <br />
                                        <span className="text-primary text-[#FEF3C7] italic">Pay per API call!</span>
                                    </h1>

                                    {/* Description */}
                                    <p className="font-geist-regular text-[#aaaaaa] text-center text-sm md:text-base tracking-[-0.32px] max-w-[600px] leading-[25px]">
                                        Paste any GitHub Pull Request. Pay $0.50 USDC via x402. Get an autonomous AI review in seconds — no account required.
                                    </p>

                                    {/* Connection error display */}
                                    {connectionError && (
                                        <div className="bg-red-500/10 border border-red-500/20 p-3 max-w-[600px] w-full">
                                            <p className="text-sm text-red-400 text-center">
                                                {connectionError}
                                            </p>
                                        </div>
                                    )}

                                    {/* Form / Content Box */}
                                    <div className="w-full max-w-[600px] shadow-2xl pt-12 pb-12 bg-[#131313] px-8 flex flex-col gap-6">

                                        <div className="bg-[#1a1a1a] p-4 flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-[#fe891f]/10">
                                                    <svg className="w-6 h-6 text-[#fe891f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-white">Fixed Price</p>
                                                    <p className="text-xs text-[#aaaaaa]">Pay-per-use via Stellar Network</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-base font-bold text-amber-100">0.50 USDC</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                                    GitHub Pull Request URL
                                                </label>
                                                <Input
                                                    placeholder="https://github.com/owner/repo/pull/123"
                                                    value={prUrl}
                                                    onChange={(e) => setPrUrl(e.target.value)}
                                                    disabled={isLoading}
                                                    className="h-[46px] pl-4 pr-4 bg-input border-[#2a2a2a] text-white placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
                                                    style={{ marginTop: "4px" }}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading || !prUrl || !address || !signer}
                                                className="join-waitlist-btn bg-[#fe891f] text-[#090603] px-7 py-3.5 font-geist-extrabold text-[15px] tracking-[-0.3px] transition-colors w-full flex items-center justify-center gap-2"
                                                style={{
                                                    opacity: (isLoading || !prUrl || !address || !signer) ? 0.7 : 1,
                                                    cursor: (isLoading || !prUrl || !address || !signer) ? "not-allowed" : "pointer",
                                                }}
                                            >
                                                {isLoading ? (
                                                    <>Processing payment...</>
                                                ) : !address ? "Connect Wallet to Continue" : "Submit for Review"}
                                            </button>
                                        </form>

                                    </div>

                                    <div className="mt-8 text-sm text-white flex items-center gap-3 relative z-50">
                                        <span>Powered by the x402 Protocol on</span>
                                        <img src="https://stellar.org/favicon.ico" alt="Stellar" className="w-4 h-4 grayscale opacity-70" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Bottom Gradient Overlay for fading mockups */}
                        <div className="absolute bottom-[-2px] left-0 right-0 h-[100px] bg-gradient-to-t from-[#090603] via-[#090603]/80 to-transparent z-20 pointer-events-none" />
                    </section>
                </div>
            </div>
        </>
    );
};
