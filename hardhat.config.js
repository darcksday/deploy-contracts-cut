require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
const wallets = require("./wallets.json");
require("hardhat-change-network");
require("hardhat/config")
// const { polygon, moonbeam } = require('wagmi/chains')


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.14",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  networks: {
    goerli: {
      url: "https://endpoints.omniatech.io/v1/eth/goerli/public",
      accounts: wallets.keys,
    },

    baseTest: {
      url: 'https://goerli.base.org',
      accounts: wallets.keys,
    },
    scroll: {
      url: 'https://alpha-rpc.scroll.io/l2',
      accounts: wallets.keys,
    },
    arbNova: {
      url: 'https://nova.arbitrum.io/rpc',
      accounts: wallets.keys,
    },

    moonbeam: {
      url: 'https://rpc.api.moonbeam.network',
      accounts: wallets.keys,


    },
    bnb_chain: {
      url: 'https://bsc-dataseed.binance.org',
      accounts: wallets.keys,

    },

    avalanche: {
      url: 'https://avalanche-c-chain.publicnode.com',
      accounts: wallets.keys,


    },
    polygon: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/Y6gKhRokFU_8Qx2yG6-H_oFz98j26so2',
      accounts: wallets.keys,
    },

    harmony: {
      url: 'https://api.harmony.one',
      accounts: wallets.keys,
    },


    zkSyncTest: {
      url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "goerli", // Can also be the RPC URL of the Ethereum network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
    zkSync: {
      url: "https://zksync2-mainnet.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
    },


  },
  etherscan: {
    apiKey: "FIG2APYTSQI5Z9P5D4NW84CSHZN2PFEI6Y"
  },

  paths: {
    artifacts: "./smart_contract/artifacts",
    sources: "./smart_contract/contracts",
    cache: "./smart_contract/cache",
    tests: "./smart_contract/test"
  }


};

task("deploy-default", "Deploy Default contract")
  .setAction(async () => {
    const { main } = require('./smart_contract/scripts/deployDefault.js')
    await main();

  });


task("deploy-nft", "Deploy Nft Contract and mint")
  .setAction(async () => {
    const { main } = require('./smart_contract/scripts/deployNft.js')
    await main();

  });


task("deploy-token", "Deploy Token Contract")
  .setAction(async () => {
    const { main } = require('./smart_contract/scripts/deployToken.js')
    await main();

  });


task("deploy-LZ", "Deploy && bridge Layer Zero")
  .addParam('bridgenetwork', 'Network to bridge. Network endpoint must be different. Details https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids')
  .addParam('ether', 'Required  ether from 0.5 to 1.5 depend of load network')
  .setAction(async (taskArgs) => {


  });

task("deploy-ZkSync", "Deploy Default")
  .setAction(async () => {


  });





