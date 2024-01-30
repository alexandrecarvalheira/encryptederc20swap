import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { WagmiProvider } from "../components/context/WagmiProvider";
import ContractProvider from "@/components/context/ContractProvier";

export const metadata: Metadata = {
  title: "Encrypted ERC20 Transfer",
  description: "Encrypted ERC20 Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider>
          <ContractProvider>{children}</ContractProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
