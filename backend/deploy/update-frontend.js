const { ethers, network } = require("hardhat");
const fs = require("fs");
const FRONT_END_ADDRESS_FILE =
  "../NFT_media-master/constants/contractAddresses.json";
const FRONT_END_ABI_FILE = "../NFT_media-master/constants/abi.json";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating frontend");
    updateContractAddresses();
    updateAbi();
  }
};

async function updateAbi() {
  const nftmedia = await ethers.getContract("NftMedia");
  fs.writeFileSync(
    FRONT_END_ABI_FILE,
    nftmedia.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  const nftmedia = await ethers.getContract("NftMedia");
  const chainId = network.config.chainId.toString();
  const currentAddress = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESS_FILE, "utf8")
  );
  if (network.config.chainId.toString() in currentAddress) {
    if (!currentAddress[chainId].includes(nftmedia.address)) {
      currentAddress[chainId].push(nftmedia.address);
    }
  }
  {
    currentAddress[chainId] = [nftmedia.address];
  }
  fs.writeFileSync(FRONT_END_ADDRESS_FILE, JSON.stringify(currentAddress));
}
module.exports.tags = ["all", "frontend"];
