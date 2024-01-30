import { BrowserProvider } from "ethers";
import {
  EthersProvider,
  FhenixClient,
  getPermit,
  removePermit,
} from "fhenixjs";
import { getEthersSigner } from "./ethersProvider";

export async function generatePermits(
  address: string,
  provider: EthersProvider
) {
  const contractAddress = "0xf221CFc17E5A437aCEb19e7Ad0620562300e5061";
  console.log(await provider.getSigner());
  const instance = new FhenixClient({ provider });

  console.log(instance);
  console.log(address);
  // removePermit(contractAddress);
  const permit = await getPermit(contractAddress, provider);
  instance.getPermit(contractAddress);
  console.log(permit);
  instance.storePermit(permit);
  const permission = instance.extractPermitPermission(permit);

  return permission;
}

export async function decryptBalance(
  balance: string,
  provider: EthersProvider
) {
  const contractAddress = "0xf221CFc17E5A437aCEb19e7Ad0620562300e5061";

  const instance = new FhenixClient({ provider });
  const permit = await getPermit(contractAddress, provider);
  instance.getPermit(contractAddress);
  console.log(permit);
  instance.storePermit(permit);

  const decryptBal = instance.unseal(
    "0xf221CFc17E5A437aCEb19e7Ad0620562300e5061",
    balance
  );

  return decryptBal;
}
