"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "viem";
import { ReactNode } from "react";

// Create modal
const Fhenix = {
  id: 412346,
  name: "Fhenix Frontier",
  network: "Fhenix Frontier",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://test01.fhenix.zone/evm"],
    },
    public: {
      http: ["https://test01.fhenix.zone/evm"],
    },
  },
  blockExplorers: {
    default: {
      name: "Fhenix Frontier",
      url: "https://demoexplorer.fhenix.io/",
    },
  },
} as const satisfies Chain;

const { chains, publicClient } = configureChains([Fhenix], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function WagmiProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} initialChain={Fhenix}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
