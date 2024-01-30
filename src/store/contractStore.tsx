import { create } from "zustand";
import { EncryptedERC20_ABI } from "../types/EncryptedERC20_ABI";

interface ContractState {
  erc20: EncryptedERC20_ABI | null;
  setErc20: (erc20: any) => void;
  contractAddress: string | null;
  setContractAddress: (contractAddress: string) => void;
}

export const contractStore = create<ContractState>((set) => ({
  erc20: null,
  setErc20: (erc20: any) => set({ erc20 }),
  contractAddress: null,
  setContractAddress: (contractAddress: string) => set({ contractAddress }),
}));
