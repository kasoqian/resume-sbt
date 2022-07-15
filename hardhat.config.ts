import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import privateKey from "./config";

const config: HardhatUserConfig = {
  defaultNetwork: "rinkeby", // "hardhat" or "rinkeby"
  networks: {
    hardhat: {
      chainId:31337,
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde", // 节点的url
      accounts: privateKey
    }
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};

export default config;
