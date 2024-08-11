import React from 'react';
import { noticesData } from '@/utils/notices';

const Notices: React.FC = () => {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold">Club Notices</h2>
        <div className="mt-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {/* Replace '300px' with your desired height */}
          {noticesData.map((notice, index) => (
            <div key={index} className="bg-white p-2 rounded-md mt-2">
              <h3 className="text-sm font-semibold">{notice.title}</h3>
              <p className="text-sm">{notice.content}</p>
                { notice.url =="" ?(<div></div>):(<a className='text-blue-600' href={notice.url} target="_blank" rel="noopener noreferrer">Details</a>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
