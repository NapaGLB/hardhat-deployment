
## Description

- This project will help you deploy, verify and public your smart contracts to etherscan
### Step:
    - Add your .sol file to contracts folder
    - Write new scripts file to deploy your .sol
    - Run script deploy
    - Write arguments file which has params exactly match with your .sol constructor
    - Prepare .env file at root
    - Run script verify

    - If you want to estimate gas, update file ./task/estimateGas.js and run script estimate gas below

## Installation

```bash
$ npm install
```

## Deploy

```bash
# at root folder
# deploy all
$ npx hardhat run ./scripts/*

# deploy each file
$ npx hardhat run ./scripts/deployNP.js
```

## Estimate gas

```bash
# estimate gas with gas price is 10 gwei
npx hardhat h:estimate --gasprice 10
```

## Select network

*If run on testnet/mainnet : add --network params, example*
```bash
npx hardhat --network rinkeby ...
```

## Verify + public source code on etherscan

1. Create new constructor params file in arguments folder
2.
```bash
npx hardhat --network rinkeby verify --constructor-args ./arguments/deployArgs.js DEPLOYED_CONTRACT_ADDRESS
```
More info about how to verify with complex arguments at [hardhat-etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)

