import { useCallback, useEffect, useRef, useState } from "react";
import { StellarWalletsKit } from "@creit.tech/stellar-wallets-kit/sdk";
import { defaultModules } from "@creit.tech/stellar-wallets-kit/modules/utils";
import { SwkAppDarkTheme } from "@creit.tech/stellar-wallets-kit/types";
import { getNetworkPassphrase } from "@x402/stellar";
import type { Network } from "@x402/core/types";

export type UseSWKConnectionReturn = {
    kitReady: boolean;
    address: string | null;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    error: string | null;
};

/**
 * Manages Stellar Wallet Kit connection state.
 *
 * @param network - CAIP-2 network identifier (e.g. "stellar:testnet").
 * @returns Connection state and methods.
 */
export function useSWKConnection(network: Network): UseSWKConnectionReturn {
    const [kitReady, setKitReady] = useState(false);
    const [address, setAddress] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const initRef = useRef(false);

    // Initialize the wallet kit once
    useEffect(() => {
        if (initRef.current) return;
        initRef.current = true;

        try {
            const networkPassphrase = getNetworkPassphrase(network);
            StellarWalletsKit.init({
                network: networkPassphrase as any,
                theme: SwkAppDarkTheme,
                modules: defaultModules(),
            });
            setKitReady(true);
        } catch (err) {
            console.error("Failed to initialize Stellar Wallet Kit", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to initialize Stellar Wallet Kit."
            );
        }
    }, [network]);

    const connect = useCallback(async () => {
        if (!kitReady) {
            setError("Wallet kit is not ready.");
            return;
        }

        try {
            setError(null);
            const { address: walletAddress } = await StellarWalletsKit.authModal();

            if (!walletAddress) {
                throw new Error("Failed to get wallet address.");
            }

            // Verify the wallet is on the correct network
            const { networkPassphrase: swkNetworkPassphrase } =
                await StellarWalletsKit.getNetwork();
            if (swkNetworkPassphrase) {
                const desiredNetworkPassphrase = getNetworkPassphrase(network);
                if (swkNetworkPassphrase !== desiredNetworkPassphrase) {
                    const networkName =
                        network === "stellar:pubnet" ? "Mainnet" : "Testnet";
                    throw new Error(
                        `Please switch your wallet to ${networkName} network, then try again.`
                    );
                }
            }

            setAddress(walletAddress);
        } catch (err) {
            console.error("Failed to connect wallet", err);
            setError(
                err instanceof Error ? err.message : "Failed to connect to wallet."
            );
            setAddress(null);
        }
    }, [kitReady, network]);

    const disconnect = useCallback(async () => {
        try {
            await StellarWalletsKit.disconnect();
        } catch (err) {
            console.error("Failed to disconnect wallet", err);
        }
        setAddress(null);
        setError(null);
    }, []);

    return {
        kitReady,
        address,
        connect,
        disconnect,
        error,
    };
}
