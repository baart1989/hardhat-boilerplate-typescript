// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

// We import this library to be able to use console.log
import "hardhat/console.sol";


// This is the main building block for smart contracts.
contract Campaign {
  struct Request {
    string description;
    uint value;
    address payable recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }
  // Some string type variables to identify the token.
  Request[] public requests;
  address public manager;
  uint public minContribution;
  uint public approversCount;
  mapping (address=>bool) public approvers;

  modifier restricted() { 
    require(msg.sender == manager, "Only manager can modify this contract"); 
    _; 
  }

  constructor(uint minimum, address creator) {
      manager = creator;
      minContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minContribution, 'Value is lower then minimal contribution for the project');
    approvers[msg.sender] = true;
    approversCount++;
  }

  function createRequest(string memory desc, uint value, address payable recipient) public restricted {
    Request storage newRequest = requests.push();
    newRequest.description = desc;
    newRequest.value = value;
    newRequest.recipient = recipient;
    newRequest.complete = false;
    newRequest.approvalCount = 0;
  }

  function approveRequest(uint index) public {
    Request storage request = requests[index];

    require(approvers[msg.sender], 'Access denied');
    require(!request.approvals[msg.sender], 'User already approved request');
    
    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  function finalizeRequest(uint index) public {
    Request storage request = requests[index];
    
    require(request.approvalCount > (approversCount / 2));
    require(!request.complete);
    
    request.recipient.transfer(request.value);
    request.complete = true;
  }

}
