import React from 'react';

const Transaction = () => {
    const transactions = [
        { id: 1, date: '14:24 | 2/27/2024', wallet: '0x4D9f1...', task: 'Swapped 91 USDT to 0.028 ETH', platform: 'Syncswap', result: 'Success' },
        { id: 2, date: '14:24 | 2/27/2024', wallet: '0x4D9f1...', task: 'Swapped 91 USDT to 0.028 ETH', platform: 'Syncswap', result: 'Error' },
        { id: 3, date: '14:24 | 2/27/2024', wallet: '0x4D9f1...', task: 'Swapped 91 USDT to 0.028 ETH', platform: 'Syncswap', result: 'Success' },
        { id: 4, date: '14:24 | 2/27/2024', wallet: '0x4D9f1...', task: 'Swapped 91 USDT to 0.028 ETH', platform: 'Syncswap', result: 'Success' },
        { id: 5, date: '14:24 | 2/27/2024', wallet: '0x4D9f1...', task: 'Swapped 91 USDT to 0.028 ETH', platform: 'Syncswap', result: 'Success' },
      ];
    
      return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
         
    
          <main className="flex-1 p-4 mt-16">
            <div className="bg-custom-bg p-6 rounded-lg">
              <h2 className="text-lg font-bold ">Transactions</h2>
              <p>Here is an overview of all recent transactions made by the automated farming process. </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                <div className="bg-custom-blue p-4 rounded text-center">
                  <p className="text-xl">Active Wallets</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-custom-blue p-4 rounded text-center">
                  <p className="text-xl">Active Protocols</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-custom-blue p-4 rounded text-center">
                  <p className="text-xl">Completed Tasks</p>
                  <p className="text-2xl font-bold">3465</p>
                </div>
                <div className="bg-custom-blue p-4 rounded text-center">
                  <p className="text-xl">Success</p>
                  <p className="text-2xl font-bold">3462</p>
                </div>
                <div className="bg-custom-blue p-4 rounded text-center">
                  <p className="text-xl">Error</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
              <div className="bg-custom-blue p-4 rounded overflow-x-auto">
                <h3 className="text-xl mb-2">Task Overview</h3>
                <table className="w-full text-left ">
                  <thead>
                    <tr className='bg-custom-black rounded-sm'>
                      <th className="p-2">Time/Date</th>
                      <th className="p-2">Wallet</th>
                      <th className="p-2">Task</th>
                      <th className="p-2">Platform</th>
                      <th className="p-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr className='border-b border-custom-black' key={transaction.id} >
                        <td className="p-2 ">{transaction.date}</td>
                        <td className="p-2">{transaction.wallet}</td>
                        <td className="p-2">{transaction.task}</td>
                        <td className="p-2">{transaction.platform}</td>
                        <td className={`p-2 ${transaction.result === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                          {transaction.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      );
    }
export default Transaction;