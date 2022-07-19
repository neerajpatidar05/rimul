const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Georim Test Cases", function () {
  let Rimule;
  let rimule;
  let Georim;
  let georim;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let zeroAddress = `0x0000000000000000000000000000000000000000`;
  let MAX_SUPPLY = Math.pow(2, 36);

  console.log(`------Starting Testing-----`);
  beforeEach(async () => {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    Rimule = await ethers.getContractFactory("Rimule");
    rimule = await Rimule.deploy(MAX_SUPPLY, addr1.address, addr2.address);

    Georim = await ethers.getContractFactory("Georim");
    georim = await Georim.deploy(rimule.address);
  });

  describe("NFT Details", async () => {
    it("Should deploy the contract correctly", () => {
      expect(georim.address).not.be.empty;
    });
    it("has name", async () => {
      const name = await georim.name();
      expect(name).to.be.equals("Georim");
    });
    it("has symbol", async () => {
      const symbol = await georim.symbol();
      expect(symbol).to.be.equals("GEORIM");
    });
  });

  describe("Zero Address Cases", async () => {
    it("Owner address can't be Zero Address", async () => {
      await expect(georim.owner + " ").not.be.equal(zeroAddress);
    });

    it("Rimule Address can't be Zero Address", async () => {
      await expect(rimule.address).not.be.equals(zeroAddress);
    });
  });

  describe("Tile Cases", async () => {
    it("Should revert if georim in not approved", async () => {
      await expect(
        georim
          .connect(addr1)
          .safeMint(5678, 2 ** 18 - 1, 18, "111222333", "444555666")
      ).to.be.revertedWith("ERC20: insufficient allowance");
    });

    it("User can mint tile if give 1 RILE", async () => {
      const approve = await rimule
        .connect(owner)
        .approve(georim.address, 1000000);

      if (approve) {
        await georim
          .connect(owner)
          .safeMint(1234, 2 ** 18 - 1, 18, "12345", "44332211");
      }

      const mintTileDetails = await georim.getTileInfo(1234, 2 * 18 - 1, 18);
      let x, y, zoom;
      [x, y, zoom] = mintTileDetails;

      const georimTokenBalance = await rimule.balanceOf(georim.address);
      expect(georimTokenBalance).to.be.equals("1000000");
      assert(x, 1234);
      assert(y, 2 ** 18 - 1);
      assert(zoom, 18);
    });

    it("Should revert if X Tile is not in Range", async () => {
      await expect(
        georim
          .connect(addr3)
          .safeMint(2 ** 18, 2 ** 18 - 1, 18, "111222333", "44433222")
      ).to.be.revertedWith("Invalid X");
    });

    it("Should revert if Y Tile is not in Range", async () => {
      await expect(
        georim
          .connect(addr3)
          .safeMint(2 ** 18 - 3, 2 ** 18, 18, "111222333", "44433222")
      ).to.be.revertedWith("Invalid Y");
    });

    it("Should revert if Tile is already minted", async () => {
      await rimule.connect(addr1).approve(georim.address, 2000000);
      await georim
        .connect(addr1)
        .safeMint(12345, 54321, 18, "112233", "332211");
    });
    await expect(
      georim.connect(addr1).safeMint(12345, 54321, 18, "12345", "332211")
    ).to.be.reverted;
  });
});
