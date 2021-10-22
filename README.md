
## Description

[Solidity](https://docs.soliditylang.org/en/v0.8.4/) Smart contract language ETH.
[Hardhat](https://hardhat.org/) framework Ethereum Platform

Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract. Check out the [plugin list](https://hardhat.org/plugins/) to use it with your existing tools.

Developed by [Nomic Labs](https://nomiclabs.io/) and funded by an Ethereum Foundation grant.

Join [Hardhat Support Discord server](https://hardhat.org/discord) to stay up to date on new releases, plugins and tutorials.

## Installation

```bash
$ npm install
```

## Test

```bash
# unit tests
$ npx hardhat test

# UT for each file test
$ npx hardhat test PATH_TO_FILE

```

## Deploy

```bash
# at root folder
# deploy all
$ npx hardhat run ./scripts/*

# deploy each file
$ npx hardhat run ./scripts/deployNP.js

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
npx hardhat --network rinkeby verify --constructor-args ./arguments/argNAPAToken.js DEPLOYED_CONTRACT_ADDRESS
```
More info about how to verify with complex arguments at [hardhat-etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)

## Documentation

On [Hardhat's website](https://hardhat.org) you will find:

- [Guides to get started](https://hardhat.org/getting-started/)
- [Hardhat Network](https://hardhat.org/hardhat-network/)
- [Plugin list](https://hardhat.org/plugins/)

## Happy buidling!

👷‍♀️👷‍♂️👷‍♀️👷‍♂️👷‍♀️👷‍♂️👷‍♀️👷‍♂️👷‍♀️👷‍♂️👷‍♀️👷‍♂️👷‍♀️👷‍♂️
