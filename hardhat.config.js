require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-etherscan");

require('./task/estimateGas');

require('dotenv').config();


const config = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            accounts: { count: 100 },
            allowUnlimitedContractSize : true
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            // gas: 8100000,
            gasPrice: 8000000000
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [`${process.env.PRIVATE_KEY}`]
        },
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [`${process.env.PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: `${process.env.ETHERSCAN_KEY}`
    },
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    
                }
            }
        ],
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        args: "./arguments"
    },
    mocha: {
        timeout: 200000
    }
};

module.exports = config;


