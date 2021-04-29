import { useState } from 'react';
import { Meta } from '../../layout/Meta';
import { Layout } from '../../templates/Layout';
import factory from '../../components/factory';
import provider from '../../utils/Provider';
import { ErrorPanel } from '../../components/ErrorPanel';
import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const initialState = {
  minimumContrbution: '',
  errors: undefined as any, 
  isLoading: false,
};

const Page = () => {

  const router = useRouter();
  const [data, changeData] = useState(initialState);

  const handleUpdate = (event: any) => {
    changeData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    changeData({ ...data, isLoading: true });
    try {
      const signer = provider.getSigner();
      await factory.connect(signer).createCampaign(data.minimumContrbution);
      alert('Campaign created!');
      router.push('/');
    } catch (err) {
      console.error(err);
    } finally {
      changeData({ ...data, isLoading: false, minimumContrbution: '' });
    }
  };

  const clearError = () => {
    changeData({ ...data, errors: undefined, isLoading: false });
  }

  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
        />
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Create a Campaign</h1>
        <button disabled={data.isLoading} onClick={onSubmit} type="submit" className="inline-flex items-center btn btn-primary">
          {data.isLoading && <XIcon className="h-5 w-5 animate-spin mr-1" />}
          <span>Save</span>
        </button>
      </div>
      <ErrorPanel errors={data.errors} onClose={clearError} />
      <div className="space-y-6">
        <div className="bg-white py-5 sm:rounded-lg">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Minimum Contrbution</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        WEI
                      </span>
                      <input
                        value={data.minimumContrbution}
                        onChange={handleUpdate}
                        type="number"
                        name="minimumContrbution"
                        id="minimumContrbution"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Minimum contrbution"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
