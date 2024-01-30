import { create } from "zustand";

interface ContractState {
  erc20: any;
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
