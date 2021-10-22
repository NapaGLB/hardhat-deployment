const hre = require('hardhat');


async function main() {
    // Loading contract factory
    const NPT = await hre.ethers.getContractFactory('NAPAToken');
    // Deploying contract
    const npt = await NPT.deploy("NAPA Token", "NAPA");
    await npt.deployed();
    console.log('NAPA TOKEN deployed at:', npt.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });