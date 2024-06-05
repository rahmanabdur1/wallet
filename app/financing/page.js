import React from 'react';

const Financing= () => {
  const transferHistory = [
    {
      time: '18:37 | 2/4/2024',
      from: '0x4D971bA8604...5145E6a50cAD208e',
      to: '0x0176b898E92e...0CEB571F70bD40',
      value: '0.49',
      token: 'Ethereum',
    },
    {
      time: '17:20 | 2/4/2024',
      from: '0x4D971bA8604...5145E6a50cAD208e',
      to: '0x0176b898E92e...0CEB571F70bD40',
      value: '0.3',
      token: 'Ethereum',
    },
    {
      time: '16:00 | 2/4/2024',
      from: '0x4D971bA8604...5145E6a50cAD208e',
      to: '0x0176b898E92e...0CEB571F70bD40',
      value: '0.2',
      token: 'Ethereum',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Financing</h2>
        <p className="mb-6">
          You have the option to move funds between your primary wallet and a newly created wallet. Please select your designated wallet you’d like to transfer funds to or from.
        </p>
        <div className="flex justify-between mb-6">
          <div className="w-1/2 mr-2">
            <h3 className="text-lg mb-2">Primary Wallet</h3>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <label className="block text-gray-400 mb-1">Address</label>
              <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" value="0x4D971bA8604491d058a2DAc5145E6a50cAD208e" readOnly />
              <label className="block text-gray-400 mt-4 mb-1">Balance</label>
              <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" value="12.13 Ethereum" readOnly />
            </div>
          </div>
          <div className="w-1/2 ml-2">
            <h3 className="text-lg mb-2">Secondary Wallet</h3>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <label className="block text-gray-400 mb-1">Address</label>
              <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" value="0x0176b898E92e81a0c6C379E508CEB571F70bD40" readOnly />
              <label className="block text-gray-400 mt-4 mb-1">Balance</label>
              <input type="text" className="w-full p-2 rounded bg-gray-900 text-white" value="0.16 Ethereum" readOnly />
            </div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/2">
            <label className="block text-gray-400 mb-1">Amount</label>
            <input type="number" className="w-full p-2 rounded bg-gray-900 text-white" value="0.49" readOnly />
          </div>
          <div className="flex items-center mx-4">
            <span className="text-gray-400 mx-2">To</span>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">Send</button>
          </div>
        </div>
        <h3 className="text-lg mb-4">Transfer History</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between mb-2 text-gray-400">
            <span>Time/Date</span>
            <span>From</span>
            <span>To</span>
            <span>Value</span>
            <span>Token</span>
          </div>
          {transferHistory.map((entry, index) => (
            <div key={index} className="flex justify-between mb-2 text-white">
              <span>{entry.time}</span>
              <span>{entry.from}</span>
              <span>{entry.to}</span>
              <span>{entry.value}</span>
              <span>{entry.token}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Financing;
