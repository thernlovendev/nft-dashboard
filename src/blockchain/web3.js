import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.


const settings = {
  apiKey: "y4y96q8Q9pG57arRgf1-CjT9KNeTovu4", // Demo Project Alchemy
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// @Dev for ramdom Data you can use 

demoAddress = "vitalik.eth";

// Print the NFT floor price for a contract'

function getFloorPrice(addressCollection) {
  return alchemy.nft.getFloorPrice(addressCollection);
}

// Get NFTs of User Connected

function getNft(address) {
  return alchemy.nft.getNftsForOwner(address);
}


// Get NFT metadata

function getNftMeta(addressOfCollection,idToken) {
  return alchemy.nft.getNftMetadata(
    addressOfCollection,
    idToken);
}

//Get Collection Metadata
function getNftMeta(addressOfCollection) {
  return alchemy.nft
  .getContractMetadata(addressOfCollection);
}

export{getFloorPrice,getNft,getNftMeta}

