import { Network, Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";
import { OpenSeaSDK, Chain } from "opensea-js";
import {fetch} from 'node-fetch';


const tokensID = ['tether','wrapped-bitcoin',"usd-coin","weth"];

var tokensAddress = {
  tether: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  wrappedbitcoin: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  usdcoin: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
}



// Getting Price in USD
async function getPrice(tokenId) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
  }
}


// Provider Web for SDK OpenSea
//const provider = new ethers.providers.JsonRpcProvider(connection);
const providerweb = new ethers.JsonRpcProvider(window.ethereum
);

// Instance OpenSeaSDK
const openseaSDK = new OpenSeaSDK(providerweb, {
  chain: Chain.Mainnet,
  apiKey: "dab3faeb253a4a54a68adff8ce2ebdad",
});


// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "y4y96q8Q9pG57arRgf1-CjT9KNeTovu4", // Demo Project Alchemy
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// @Dev for ramdom Data you can use 
//const demoAddress = "vitalik.eth";

// Print the NFT floor price for a contract'

async function getFloorPrice(addressCollection) {
  return await alchemy.nft.getFloorPrice(addressCollection);
}

// Get NFTs of User Connected

async function getNft(address) {
  return await alchemy.nft.getNftsForOwner(address);
}


// Get NFT metadata

async function getNftMeta(addressOfCollection,idToken) {
  return await alchemy.nft.getNftMetadata(
    addressOfCollection,
    idToken);
}

//Get Collection Metadata
async function getNftMeta(addressOfCollection) {
  return await alchemy.nft
  .getContractMetadata(addressOfCollection);
}

//Get Balance Of Token
async function getBalance(addressOfUser,tokens) {
  alchemy.core.getTokenBalances(addressOfUser,tokens);
}

// Sell Nft
async function listNFT(walletAddress,contract_address, token_id, price, endTimeSeconds) {
  const listing = await openseaSDK.createSellOrder({
      asset: {
        token_id,
        contract_address,
      },
      accountAddress : walletAddress,
      startAmount: price,
      endAmount: price,
      expirationTime: endTimeSeconds,
    });
}

export{getFloorPrice,getNft,getNftMeta,getBalance,listNFT,getPrice}

