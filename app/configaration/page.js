// src/Configuration.js
import React from 'react';

const Configuration = () => {
  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-2xl font-semibold mb-4">Configurations</h2>
      <p className="mb-6">Here you can review your user profile and notifications, and also customize the settings within the AirdropFarming platform.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Profile Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">User Profile</h3>
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p>Primary Wallet:</p>
              <p>0x4D......915aB2dA6C5145E6a50CAD208e</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Subscription:</p>
            <p>50 Wallets / 6 Months</p>
            <p>Subscription Ends: 08/21/2024</p>
          </div>
        </div>

        {/* Recent Notifications Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Notifications</h3>
          <div className="mb-4">
            <p className="font-semibold">Error Notification 14:24 | 2/27/2024</p>
            <p>There was an error during the exchange process while swapping 91 USDT for 0.028 ETH through Syncswap.</p>
          </div>
          <div>
            <p className="font-semibold">Subscriptions 14:24 | 2/27/2024</p>
            <p>Your billing of $1300 has been approved and your subscription has been extended until 08/21/2024.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Platform Settings Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Platform Settings</h3>
          <div className="flex flex-col space-y-4">
            <div>
              <h4 className="font-semibold">General</h4>
              <p>View and edit your AirdropFarming settings.</p>
            </div>
            <div>
              <h4 className="font-semibold">Wallets</h4>
              <p>View and edit your wallet settings.</p>
            </div>
            <div>
              <h4 className="font-semibold">Subscriptions</h4>
              <p>View and edit your subscriptions.</p>
            </div>
            <div>
              <h4 className="font-semibold">Billing</h4>
              <p>Manage your billing information.</p>
            </div>
            <div>
              <h4 className="font-semibold">Notifications</h4>
              <p>Manage notifications sent to you.</p>
            </div>
            <div>
              <h4 className="font-semibold">Download History</h4>
              <p>Download your transaction history.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
