"use client";
import { ethers } from "ethers";
import { FhenixClient } from "fhenixjs";
import { Children, useEffect, useState } from "react";
import { contractStore } from "@/store/contractStore";
import { instanceStore } from "@/store/instanceStore";
import { abi } from "@/lib/EncryptedERC20_ABI.json";

export default function ContractProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  const setErc20 = contractStore((state) => state.setErc20);
  const setFhenix = instanceStore((state) => state.setFhenix);
  const setProvider = instanceStore((state) => state.setProvider);
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const contractAddress = "0xf221CFc17E5A437aCEb19e7Ad0620562300e5061";

  const HandleContractStore = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
    const signer = await provider.getSigner();

    const fhenix = new FhenixClient({ provider });
    setFhenix(fhenix);
    setContractAddress("0xf221CFc17E5A437aCEb19e7Ad0620562300e5061");
    const contract = new ethers.Contract(contractAddress, abi, signer);
    setErc20(contract);
    setMounted(true);
  };

  useEffect(() => {
    HandleContractStore();
  }, []);

  return <>{mounted && children}</>;
}