const hre = require("hardhat");
const destIds = require("../../zkSyncIds.json");


const bridge = async (bridgeContract, signer3, ether, wasError = false) => {
  await new Promise(resolve => setTimeout(resolve, 35000))

  try {
    return await bridgeContract.connect(signer3).bridge(10000, { value: hre.ethers.utils.parseEther(ether) });
  } catch (e) {

    if (!wasError) {
      const wasError = true;
      return await bridge(bridgeContract, signer3, ether, wasError)
    } else {
      console.error(e);
    }
  }
}
exports.main = async (bridgeToNetwork, ether) => {
  const network = hre.network.name;
  const signers = await hre.ethers.getSigners();
  const LZero1 = await hre.ethers.getContractFactory("LayerZero");
  const LZero2 = await hre.ethers.getContractFactory("LayerZero");
  const destChainId1 = destIds[network]
  const destChainId2 = destIds[bridgeToNetwork]
  for (const signer of signers) {

    try {

      const deployed1 = await LZero1.connect(signer).deploy(destChainId2.chainId, destChainId1.endpoint);
      await deployed1.deployed();
      console.log("Deploy LZero1 deployed to:", network, deployed1.address);


      //change network
      hre.changeNetwork(bridgeToNetwork);
      const signer2 = await hre.ethers.getSigner(signer.address);

      const deployed2 = await LZero2.connect(signer2).deploy(destChainId1.chainId, destChainId2.endpoint);
      await deployed2.deployed();
      console.log("Deploy LZero2 deployed to:", bridgeToNetwork, deployed2.address);


      await deployed1.trustAddress(deployed2.address);

      console.log(`Set trusted ${deployed1.address} - ${deployed2.address}`)

      await deployed2.trustAddress(deployed1.address);
      console.log(`Set trusted ${deployed2.address} - ${deployed1.address}`)

      //bridged
      hre.changeNetwork(network);
      const signer3 = await hre.ethers.getSigner(signer.address);

      const bridgeContract = await hre.ethers.getContractAt('LayerZero', deployed1.address, signer3);

      const hash = await bridge(bridgeContract, signer3, ether);

      if (hash) {
        console.log(`Token successfully  bridget from ${network} ${deployed1.address}  to ${bridgeToNetwork} ${deployed2.address} tx hash: ${hash.hash}`)
      }


    } catch (e) {
      console.error(e);

    }


  }
}

