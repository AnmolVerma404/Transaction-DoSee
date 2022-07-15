# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


## Changes 

As ```ropsten``` is deprecated by Alchemy, therefore we are using Goerli
**Changes** a are followed :-
### 1)
```js
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `{http URL from Alchemy}`,
      accounts: [
        `{private KEY from Metamask}`,
      ],
    },
  },
};
```

### 2) Run this in the command line instead of using ropsten use goerli
```
npx hardhat run scripts/deploy.js --network goerli
```