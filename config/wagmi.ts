import { http, createConfig } from "wagmi";
import { bsc, sepolia } from "wagmi/chains";

export const DEFAULT_CHAIN_ID = bsc.id;
export const MAIN_WALLET = "0x1403d12088eD9e504590fa8B813B01CB735b3b84";
export const wagmiConfig = createConfig({
  chains: [bsc, sepolia],
  transports: {
    [bsc.id]: http(),
    [sepolia.id]: http(),
  },
});
