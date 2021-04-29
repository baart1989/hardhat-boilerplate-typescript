import { Contract } from 'ethers';
import { artifacts, ethers, network } from 'hardhat';
import * as fs from 'fs';

// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === 'hardhat') {
    console.warn(
      'You are trying to deploy a contract to the Hardhat Network, which' +
        'gets automatically created and destroyed every time. Use the Hardhat' +
        " option '--network localhost'",
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log('Deploying the contracts with the account:', await deployer.getAddress());
  console.log('Account balance:', (await deployer.getBalance()).toString());

  const Factory = await ethers.getContractFactory('CampaignFactory');

  const factory = await Factory.deploy();
  await factory.deployed();

  // We also save the contract's artifacts and address in the frontend directory
  await saveFrontendFiles(factory);
}

async function saveFrontendFiles(contract: Contract) {
  const contractsDir = __dirname + '/../../frontend/src/contracts';
  const contractsDirExists = fs.existsSync(contractsDir);

  if (contractsDirExists) {
    fs.rmSync(contractsDir, { force: true, recursive: true });
  }

  fs.mkdirSync(contractsDir);
  fs.writeFileSync(
    contractsDir + '/contract-address.json',
    JSON.stringify({ Address: contract.address }, undefined, 2),
  );

  console.log('Contract address:', contract.address);

  const paths = await artifacts.getArtifactPaths();

  paths.forEach(path => {
    if (path.indexOf('console.json') !== -1) {
      return;
    }
    const artifactName = path.slice(path.lastIndexOf('/') + 1).replace('.json', '');
    const artifact = artifacts.readArtifactSync(artifactName);
    fs.writeFileSync(`${contractsDir}/${artifactName}.json`, JSON.stringify(artifact, null, 2));
  });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
