// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

// We import this library to be able to use console.log
import "hardhat/console.sol";
import "./Campaign.sol";

// This is the main building block for smart contracts.
contract CampaignFactory {

  address[] public deployedCampaigns;

  function getDeployedCampaigns() public view returns (address[] memory) {
    return deployedCampaigns;
  }

  function createCampaign(uint minimum) public {
    address newCampaign = address(new Campaign(minimum, msg.sender));
    deployedCampaigns.push(newCampaign);
  }
}