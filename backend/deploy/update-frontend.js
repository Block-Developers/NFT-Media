const { ethers } = require("hardhat");
const fs = require("fs");
const FRONT_END_ADDRESS_FILE =
  "../../NFT_media-master/constants/contractAddresses.json";
const FRONT_END_ABI_FILE = "../../NFT_media-master/constants/abi.json";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating frontend");
    updateContractAddresses();
  }
};

async function updateContractAddresses() {
  const nftmedia = await ethers.getContract("NftMedia");
  const currentAddress = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESS_FILE, "utf8")
  );
}
