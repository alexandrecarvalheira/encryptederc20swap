import { FhenixClient, Permission, getPermit, EthersProvider } from "fhenixjs";

export interface FheInstance {
  instance: FhenixClient;
  permission: Permission;
}

export async function UseCreateFheInstance(
  contractAddress: string
): Promise<FheInstance> {
  const instance = new FhenixClient({ provider });

  const permit = await getPermit(contractAddress, provider);

  instance.storePermit(permit);
  const permission = instance.extractPermitPermission(permit);

  return Promise.all([instance, permission]).then(([instance, permission]) => ({
    instance,
    permission,
  }));
}
