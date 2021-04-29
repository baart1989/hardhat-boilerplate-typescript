import CampaignFactoryJSON from '../contracts/CampaignFactory.json';
import contractAddress from '../contracts/contract-address.json';
import { CampaignFactory } from '../../../backend/typechain';
import { ethers } from 'ethers';
import provider from '../utils/Provider';

const instance = new ethers.Contract(
  contractAddress.Address,
  CampaignFactoryJSON.abi,
  provider
) as CampaignFactory;
export default instance;
