import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "demo", 
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

alchemy.nft
  .getContractMetadata("0x61fce80d72363b731425c3a2a46a1a5fed9814b2")
  .then(console.log);
