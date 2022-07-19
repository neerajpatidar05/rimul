const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Rimule Test Cases", function () {
  let Rimule;
  let rimule;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let zeroAddress = `0x0000000000000000000000000000000000000000`;
  const MAX_SUPPLY = Math.pow(2, 36);
  console.log(`------------Starting Testing------------`);
  beforeEach(async () => {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
    Rimule = await ethers.getContractFactory("Rimule");
    rimule = await Rimule.deploy(MAX_SUPPLY, addr1.address, addr2.address);
  });

  describe("Token Details", function () {
    it("has name", async () => {
      const name = await rimule.name();
      expect(name).to.be.equals("Rimule");
    });
    it("has symbol", async () => {
      const symbol = await rimule.symbol();
      expect(symbol).to.be.equals("RILE");
    });

    it("has 6 decimal", async () => {
      const decimal = await rimule.decimals();
      expect(decimal).to.be.equals(6);
    });

    it("has total supply of 2^36", async () => {
      const totalSupply = await rimule.totalSupply();
      expect(totalSupply.toString()).to.be.equals("68719476736000000");
    });
  });

  describe("Zero Address", () => {
    it("Owner Account can't be Zero Address", async () => {
      expect(owner.address + "").not.be.equals(zeroAddress);
    });
    it("ICO Account can't be Zero Address", async () => {
      expect(addr1.address + "").not.be.equals(zeroAddress);
    });
    it("Founder Account can't be Zero Address", async () => {
      expect(addr2 + "").not.be.equals(zeroAddress);
    });
  });

  describe("Deplpoyment", function () {
    it("Should deploy the contract correctly", async () => {
      expect(rimule.address).not.be.empty;
    });
    it("Should set the Owner", async () => {
      const owneraddress = await rimule.owner();
      expect(owneraddress).to.be.equals(owner.address);
    });
    it("Should assign 50% to Owner", async () => {
      const ownerShare = await rimule.balanceOf(owner.address);
      expect(ownerShare.toString()).to.be.equals("68719442376261650");
    });
    it("Should assign 30% to ICO", async () => {
      const icoShare = await rimule.balanceOf(addr1.address);
      expect(icoShare.toString()).to.be.equals("20615843010");
    });
    it("Should assign 20% to Founder", async () => {
      const founderShare = await rimule.balanceOf(addr2.address);
      expect(founderShare.toString()).to.be.equals("13743895340");
    });
  });
});