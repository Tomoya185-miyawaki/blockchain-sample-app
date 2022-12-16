// https://eth-goerli.g.alchemy.com/v2/FjXZz6VjF48QronqEcE_ccerU-fQmGy9
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [
        process.env.GOERLI_ACCOUNT,
      ]
    }
  }
};
