import "./globals.css";
import type { Metadata } from "next";

import { WagmiProvider } from "../components/context/WagmiProvider";
import ContractProvider from "../components/context/ContractProvider";

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
