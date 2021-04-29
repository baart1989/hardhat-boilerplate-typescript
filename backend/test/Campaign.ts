import { Campaign, CampaignFactory } from '../typechain';
import { ethers } from 'hardhat';
import { formatUnits, parseEther, parseUnits } from 'ethers/lib/utils';
import { solidity } from 'ethereum-waffle';
import { use, expect, assert } from 'chai';

use(solidity);

describe('Campaign', () => {
  let factory: CampaignFactory;
  let contractMinContribution = parseEther('1');

  let campaign: Campaign;
  let campaignAddress: string;

  beforeEach(async () => {
    const [owner] = await ethers.getSigners();
    const campaignFactory = await ethers.getContractFactory('CampaignFactory', owner);
    factory = (await campaignFactory.deploy()) as CampaignFactory;

    await factory.createCampaign(contractMinContribution);
    [campaignAddress] = await factory.getDeployedCampaigns();

    campaign = (await ethers.getContractAt('Campaign', campaignAddress)) as Campaign;
  });

  describe('Campaigns', async () => {
    it('deploys a factory and a campaign', async () => {
      assert.ok(factory.address);
      assert.ok(campaign.address);
    });
    it('should set min contribution', async () => {
      expect(await campaign.minContribution()).to.eq(parseEther('1'));
    });
    it('marks caller as the campaign manager', async () => {
      const [owner] = await ethers.getSigners();
      expect(await campaign.manager()).to.eq(owner.address);
    });
    it('allows people to contribute money and marks them as approvers', async () => {
      const [, contributor1, contributor2] = await ethers.getSigners();
      await campaign.connect(contributor1).contribute({ value: parseEther('10') });
      assert.ok(await campaign.approvers(contributor1.address));
      assert.notOk(await campaign.approvers(contributor2.address));
    });
    it('requires a minimum contribution', async () => {
      const [, contributor] = await ethers.getSigners();
      try {
        await campaign.connect(contributor).contribute({ value: parseEther('0.1') });
        assert(false);
      } catch (err) {
        assert(err);
      }
    });
    it('allows a manager to make a payment request', async () => {
      const [owner, recipient] = await ethers.getSigners();
      await campaign.connect(owner).createRequest('Buy batteries', parseEther('5'), recipient.address);
      expect((await campaign.requests(0)).description).to.eq('Buy batteries');
    });
    it('process requests', async () => {
      const [owner, contributor1, contributor2, recipient] = await ethers.getSigners();

      const recipientBalanceBefore = await recipient.getBalance();

      await campaign.connect(contributor1).contribute({ value: parseEther('10') });
      await campaign.connect(contributor2).contribute({ value: parseEther('5') });

      await campaign.createRequest('Buy batteries', parseEther('4'), recipient.address);

      await campaign.connect(contributor1).approveRequest(0);
      await campaign.connect(contributor2).approveRequest(0);

      await campaign.finalizeRequest(0);

      const diff = (await recipient.getBalance()).sub(recipientBalanceBefore);
      expect(diff).to.eq(parseEther('4'));
    });
  });
});
