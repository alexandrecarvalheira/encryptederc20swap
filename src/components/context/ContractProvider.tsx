"use client";
import { ethers } from "ethers";
import { FhenixClient } from "fhenixjs";
import { ReactNode, useEffect, useState } from "react";
import { contractStore } from "../../store/contractStore";
import { instanceStore } from "../../store/instanceStore";
import { abi } from "../../lib/EncryptedERC20_ABI.json";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ContractProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { address } = useAccount();
  const setErc20 = contractStore((state) => state.setErc20);
  const setProvider = instanceStore((state) => state.setProvider);
  const setContractAddress = contractStore((state) => state.setContractAddress);
  const contractAddress = "0xf377E352868aCc71619A9d98Ec1B0F901aef23d4";

  const HandleContractStore = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log(provider);
    setProvider(provider);
    const signer = await provider.getSigner();

    setContractAddress(contractAddress);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    setErc20(contract);
    setMounted(true);
  };

  useEffect(() => {
    HandleContractStore();
  }, [address]);

  return <>{mounted && children}</>;
}
