// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

exports.main = async () => {

  const signers = await hre.ethers.getSigners();
  const Nft = await hre.ethers.getContractFactory("DeployNft");

  for (const signer of signers) {
    try {
      const deployed = await Nft.connect(signer).deploy();
      await deployed.deployed();
      console.log("DeployNft deployed to:", deployed.address);
      const walletAddress = signer.getAddress();
      await deployed.mint(walletAddress);
    } catch (e) {
      console.error(e);
    }
  }


}

