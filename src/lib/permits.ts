"use client";
import { instanceStore } from "@/store/instanceStore";
import { BrowserProvider } from "ethers";
import {
  EthersProvider,
  FhenixClient,
  getPermit,
  removePermit,
} from "fhenixjs";

export async function generatePermits(
  contractAddress: string,
  fhenix: FhenixClient,
  provider: EthersProvider
) {
  const permit = await getPermit(contractAddress, provider!);

  fhenix.storePermit(permit);

  return fhenix;
}

export async function revokePermits(
  contractAddress: string,
  fhenix: FhenixClient,
  provider: EthersProvider
) {
  removePermit(contractAddress);

  return new FhenixClient({ provider });
}
