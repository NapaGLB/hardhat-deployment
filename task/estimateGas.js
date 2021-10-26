const { task } = require('hardhat/config');


task(`h:estimate`, `Deploy NAPA Token contract`)
    .addParam('gasprice', '')
    .setAction(async ({ gasprice }) => {
        const NPT = artifacts.require('NAPAToken');

        let abi = NPT._json.abi;
        let bytecode = NPT._json.bytecode;
        let contract = new web3.eth.Contract(abi)
        await contract.deploy({
            data: bytecode,
            arguments: ["NAPAToken", "NAPA"]
        }).estimateGas((_, gas) => {
            let gasWei = web3.utils.toWei(gasprice, 'gwei');
            console.log("ETH fee estimate is : %s ETH", web3.utils.fromWei(web3.utils.toBN(gasWei).mul(web3.utils.toBN(gas)), 'ether'));
        });

    });


