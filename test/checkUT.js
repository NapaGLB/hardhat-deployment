const NPT = artifacts.require("NAPAToken");

describe("UT contract", function () {

    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();

        admin = accounts[0]
        user = accounts[1]

        npt = await NPT.new("NAPA Token", "NAPA", { from: admin });

    });

    describe("Deployment 1", () => {
        it("Check name", async () => {
            let name = await npt.name()
            assert.equal(name, "NAPA Token");
        });

    });
});