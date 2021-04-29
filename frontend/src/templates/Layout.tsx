import React, { ReactNode } from 'react';

import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <div className="max-w-screen-md mx-4 md:mx-auto">
      <div className="flex items-center justify-between border-b border-gray-300 pt-8 pb-8">
        <div>
          <div className="font-bold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
      </div>
    </div>
    <div className="py-5 max-w-screen-md mx-4 md:mx-auto">{props.children}</div>
  </div>
);

export { Layout };
