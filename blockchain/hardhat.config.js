require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
require("dotenv").config();
 
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.API_URL,
      accounts: [
        process.env.PRIVATE_KEY,
        process.env.PRIVATE_KEY1,
        process.env.PRIVATE_KEY2,
      ],
    },
    matic: {
      url: process.env.MATIC_URL,
      accounts: [
        process.env.PRIVATE_KEY,
        process.env.PRIVATE_KEY1,
        process.env.PRIVATE_KEY2,
      ],
    },

  },
  etherscan:{
    apiKey:process.env.POLYSCAN_API_KEY
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  }
};