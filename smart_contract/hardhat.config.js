// https://eth-goerli.g.alchemy.com/v2/A-UgNceveMTcWH-ZB4QEi8EZeX449fRd

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/A-UgNceveMTcWH-ZB4QEi8EZeX449fRd",
      accounts: [
        "52c230dc9c1f88204c9db03467b5f6b0e46a8a227159c72035da140439ac3e98",
      ],
    },
  },
};
