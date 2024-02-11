import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"
import {configDotenv} from "dotenv";
import "hardhat-deploy";
configDotenv();

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.20" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
  },
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY!],
    },
    linea: {
      chainId: 59144,
      url: "https://1rpc.io/linea",
      accounts: [process.env.PRIVATE_KEY!],
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      sepolia: 0,
      linea: 0,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY!
  },
}

export default config
