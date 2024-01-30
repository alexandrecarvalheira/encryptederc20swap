"use client";
import { instanceStore } from "@/store/instanceStore";
import { BrowserProvider } from "ethers";
import { EthersProvider, FhenixClient, getPermit } from "fhenixjs";

export async function generatePermits(
  contractAddress: string,
  fhenix: FhenixClient,
  provider: EthersProvider
) {
  const permit = await getPermit(contractAddress, provider!);
  console.log(permit);

  fhenix.storePermit(permit);

  return fhenix;
}
