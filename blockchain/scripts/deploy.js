const { ethers } = require("hardhat");

async function main() {
  const MAX_SUPPLY = Math.pow(2, 36);
  const [deployer, ico, founder] = await ethers.getSigners();

  console.log("Deploying Contract with the account:", deployer.address);
  console.log(
    "Account Balance:",
    await (await deployer.getBalance()).toString()
  );

  const Rimule = await ethers.getContractFactory("Rimule");
  const rimule = await Rimule.deploy(MAX_SUPPLY, ico.address, founder.address);

  await rimule.deployed();
  const Georim = await ethers.getContractFactory("Georim");
  const georim = await Georim.deploy(rimule.address);

  await georim.deployed();

  console.log("Rimule deployed to:", rimule.address);

  console.log("Georim deployed to:", georim.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
