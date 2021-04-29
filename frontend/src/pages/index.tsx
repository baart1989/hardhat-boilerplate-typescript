import React from 'react';

import Link from 'next/link';
import { Meta } from '../layout/Meta';
import { Layout } from '../templates/Layout';
import factory from '../components/factory';
// import { BeakerIcon } from '@heroicons/react/solid';

type IndexProps = { campaigns: string[] };

const Index = ({ campaigns }: IndexProps) => {
  const renderCampaigns = () => {
    const items = campaigns.map((address) => {
      return (
        <div className="flex flex-col hover:bg-gray-50 w-full p-2 rounded-md" key={address}>
          <h2 className="uppercase">{address}</h2>
          <Link href={`/campaigns/${address}`}>
            <span className="hover:underline text-blue-500">View Campaign</span>
          </Link>
        </div>
      );
    });
    return <div className="flex flex-col space-y-2 mt-4">{items}</div>;
  };

  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
        />
      }
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          Open Campaigns {` `}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <Link href="/campaigns/new">
          <a className="btn btn-primary">Create Campaign</a>
        </Link>
      </div>

      {renderCampaigns()}
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const campaigns = await factory.getDeployedCampaigns();
  return { campaigns };
};

export default Index;
