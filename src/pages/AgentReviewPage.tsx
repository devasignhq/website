import React, { useState, useCallback } from "react";
import { x402Client, x402HTTPClient } from "@x402/fetch";
import { ExactStellarScheme } from "@x402/stellar";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { useSWKConnection } from "../hooks/useSWKConnection";
import { useSWKSigner } from "../hooks/useSWKSigner";
import { SEO } from '../components/SEO';
import { HeroSection } from '../components/layout/HeroSection';

const NETWORK = "stellar:testnet" as const;
const apiUrl = import.meta.env.VITE_API_URL;
const rpcUrl = import.meta.env.VITE_RPC_URL;

export const AgentReviewPage = () => {
    const [prUrl, setPrUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        toast.info(
            "Wallet disconnected. To fully disconnect some wallets, you may need to disconnect from the wallet app itself."
        );
    }, [disconnect]);

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
                <div className="flex-shrink-0">
                    <HeroSection>
                        <div className="w-full flex justify-center items-center">

                            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12 w-full">
                                {/* Title */}
                                <h1 className="font-geist-regular text-white text-center text-3xl md:text-5xl lg:text-[64px] tracking-[-3.2px] max-w-[950px] leading-tight md:leading-normal">
                                    Agentic PR Review
                                </h1>

                                {/* Description */}
                                <p className="font-geist-medium text-white text-center text-sm md:text-base tracking-[-0.32px] opacity-60 max-w-[600px] leading-relaxed">
                                    Get an instant AI-powered code review for any public <br /> GitHub Pull Request.
                                </p>

                                {/* Form / Content Box */}
                                <div className="w-full max-w-[600px] shadow-2xl pt-12 pb-12 bg-[#131313] rounded-xl px-8 flex flex-col gap-6">

                                    <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">Fixed Price</p>
                                                <p className="text-sm text-[#aaaaaa]">Pay-per-use via Stellar Network</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-white">0.50</p>
                                            <p className="text-xs text-amber-100">USDC</p>
                                        </div>
                                    </div>

                                    {/* Wallet connection section */}
                                    <div className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-2.5 h-2.5 rounded-full ${address ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]" : "bg-[#444444]"}`} />
                                            <div>
                                                <p className="text-sm font-medium text-amber-100">
                                                    {address ? "Wallet Connected" : "No Wallet Connected"}
                                                </p>
                                                {address && (
                                                    <p className="text-xs text-white font-mono">
                                                        {truncateAddress(address)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {/* Explicit connect/disconnect buttons — replaces the built-in SWK button */}
                                        <div className="flex items-center gap-2">
                                            {!address ? (
                                                <button
                                                    onClick={handleConnect}
                                                    disabled={!kitReady}
                                                    className="join-waitlist-btn bg-[#fe891f] px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {kitReady ? "Connect" : "Loading..."}
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleDisconnect}
                                                    className="join-waitlist-btn bg-amber-100 px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors inline-block"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Disconnect
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Connection error display */}
                                    {connectionError && (
                                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                                            <p className="text-sm text-red-400 text-center">
                                                {connectionError}
                                            </p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                                        <div className="space-y-2">
                                            <label className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                                Pull Request URL
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
                                            className="join-waitlist-btn bg-[#fe891f] text-[#090603] px-7 py-3.5 font-geist-extrabold text-[15px] tracking-[-0.3px] transition-colors w-full rounded-md flex items-center justify-center gap-2"
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
                    </HeroSection>
                </div>
            </div>
        </>
    );
};
