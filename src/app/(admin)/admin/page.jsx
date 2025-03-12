'use client'
import React, { useState } from 'react'
import { formPagesData } from '../utils/utils'
import DataEntryPage from '../Pages/dataEntryPage'

const MainPage = () => {
  const [tabId, setTabId] = useState(null);

  return (
    <div className="w-screen h-screen">
      {tabId ? (
        <div className='relative w-screen h-screen p-12 bg-gray-200'>
          {<DataEntryPage tabId={tabId} />}
          <button onClick={() => setTabId(null)} className="p-2 m-2 bg-gray-300 rounded absolute top-0 left-0">
            Back
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {formPagesData.map((data) => (
            <button
              key={data.tabId}
              onClick={() => setTabId(data.tabId)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {data.tabLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


export default MainPage;
