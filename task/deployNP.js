const { task } = require('hardhat/config');


task(`d:napatoken`, `Deploy NAPA Token contract`)
    .addFlag('verify')
    .addParam('name', '')
    .addParam('symbol', '')
    .setAction(async ({ name, symbol }) => {
        const NPT = artifacts.require('NAPAToken');
        const npt = await NPT.new(name, symbol);
        console.log('NAPA TOKEN deployed at:', npt.address);
    });


