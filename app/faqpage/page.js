import React from 'react';

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
     

      <main className="mt-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="mb-6">Here is a compilation of commonly asked questions. If your problem continues, you can contact our team by sending a message at the bottom of this page.</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">What cryptocurrencies or tokens are supported in the Airdrop Farming software?</h3>
              <p>The Airdrop Farming software currently supports a variety of protocols, allowing users to farm various cryptocurrencies and tokens. As of now, the supported protocols include Base, Linea, Scroll, and zkSync.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What are the risks associated with Airdrop Farming?</h3>
              <p>...</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Helpdesk</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="topic">Topic</label>
              <input
                type="text"
                id="topic"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                placeholder="Enter topic"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="question">Please type your question here</label>
              <textarea
                id="question"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                placeholder="Type your question"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
