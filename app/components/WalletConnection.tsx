'use client';

import { useAccount, useDisconnect } from 'wagmi';

export default function WalletConnection() {
  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl p-8 mb-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Wallet Connection</h2>
      </div>
      
      {!isConnected ? (
        <div className="text-center py-8">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-gray-300 mb-6 text-lg">Connect your wallet to unlock smart contract interactions</p>
          </div>
          <appkit-button />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-1">Connected Address:</p>
              <p className="text-lg font-mono text-white break-all">{address}</p>
            </div>
            <button
              onClick={() => disconnect()}
              className="ml-4 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 border border-red-500/30 hover:border-red-500"
            >
              Disconnect
            </button>
          </div>
          
          {chain && (
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">Network:</p>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <p className="text-xl text-white font-medium">{chain.name}</p>
                <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">ID: {chain.id}</span>
              </div>
            </div>
          )}
          
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-green-400 font-semibold text-lg">Wallet Connected Successfully!</p>
                <p className="text-green-300 text-sm">Ready to interact with smart contracts below</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
