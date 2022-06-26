import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'OgreTown',
  tokenName: 'ogretown',
  tokenSymbol: 'OGT',
  hiddenMetadataUri: 'ipfs://Qmd3GrMUnBrraQUXk8tgs9xPRihpihL4nBdE4GEXokTjqY/hidden.json',
  maxSupply: 6000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x02E83054b17d98905d6d04797842854eb5c253f7",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
