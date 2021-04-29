import { ethers } from 'ethers';

let web3: ethers.providers.Web3Provider;

if (typeof window !== 'undefined' && window.ethereum !== 'undefined') {
  // web3 = new ethers.providers.Web3Provider(window.ethereum);
  const url = 'http://localhost:8545';
  web3 = new ethers.providers.JsonRpcProvider(url) as any;
} else {
  // To connect to a custom URL:
  const url = 'http://localhost:8545';
  web3 = new ethers.providers.JsonRpcProvider(url) as any;
}

export default web3;
