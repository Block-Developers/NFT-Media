const { network, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");

//const verify = require("../helper-hardhat-config");
const dotenv = require("dotenv");
module.exports = async function ({ getNamedAccounts, deployments }) {
  console.log("entering");
  const { deploy } = deployments;
  console.log("1 out");
  const { deployer } = await getNamedAccounts();
  // const chainId = network.config.chainId;
  const nftmedia = await deploy("NftMedia", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmation: network.config.blockConfirmation || 1,
  });
  console.log("success");
};
module.exports.tags = ["all", "nftmedia"];
