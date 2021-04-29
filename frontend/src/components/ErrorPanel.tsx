import React from 'react';
import { XCircleIcon, XIcon } from '@heroicons/react/solid';

type Props = { errors?: string[], onClose: any }

export const ErrorPanel = ({ errors = [], onClose }: Props) => {

  if (errors.length === 0) return null;

  return (
    <div className="rounded-md bg-red-50 p-4 mt-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <XCircleIcon className="h-5 w-5 text-red-400" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-red-800">
        Something went wrong...
      </p>
    </div>
    <div className="ml-auto pl-3">
      <div className="-mx-1.5 -my-1.5">
        <button onClick={onClose} type="button" className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
          <span className="sr-only">Dismiss</span>
          <XIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</div>

  )

}

{/* <div className="rounded-md bg-red-50 p-4 my-2">
  <div className="flex">
    <div className="flex-shrink-0">
      <XCircleIcon className="h-5 w-5 text-red-400" />
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">
        There were {errors.length} errors with your submission
      </h3>
      <div className="mt-2 text-sm text-red-700">
        <ul className="list-disc pl-5 space-y-1">
          {errors.map((err, index) => {
          <li key={index}>
            {err}
          </li>
          })}
        </ul>
      </div>
    </div>
  </div>
</div> */}