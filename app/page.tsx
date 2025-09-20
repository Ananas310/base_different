import WalletConnection from './components/WalletConnection'
import BasicMathCard from './components/BasicMathCard'
import ControlStructuresCard from './components/ControlStructuresCard'
import EmployeeStorageCard from './components/EmployeeStorageCard'
import ArraysExerciseCard from './components/ArraysExerciseCard'
import ErrorTriageExerciseCard from './components/ErrorTriageExerciseCard'
import AddressBookCard from './components/AddressBookCard'
import UnburnableTokenCard from './components/UnburnableTokenCard'
import WeightedVotingCard from './components/WeightedVotingCard'
import HaikuNFTCard from './components/HaikuNFTCard'
import FavoriteRecordsCard from './components/FavoriteRecordsCard'
import GarageManagerCard from './components/GarageManagerCard'
import InheritanceCard from './components/InheritanceCard'
import ImportsExerciseCard from './components/ImportsExerciseCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <main className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Base Smart Contracts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore and interact with cutting-edge smart contracts deployed on Base Mainnet. 
            Connect your wallet to unlock the full potential of decentralized applications.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live on Base Mainnet</span>
            </div>
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="max-w-4xl mx-auto mb-16">
          <WalletConnection />
        </div>

        {/* Contract Interaction Cards */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Smart Contract Playground</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BasicMathCard />
            <ControlStructuresCard />
            <EmployeeStorageCard />
            <ArraysExerciseCard />
            <ErrorTriageExerciseCard />
            <AddressBookCard />
            <UnburnableTokenCard />
            <WeightedVotingCard />
            <HaikuNFTCard />
            <FavoriteRecordsCard />
            <GarageManagerCard />
            <InheritanceCard />
            <ImportsExerciseCard />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-gray-400 font-medium">Base Smart Contracts</span>
          </div>
          <p className="text-gray-500">Built with Next.js, Wagmi, and Reown AppKit on Base Mainnet</p>
          <p className="text-gray-600 text-sm mt-2">Empowering the future of decentralized finance</p>
        </footer>
      </main>
    </div>
  )
}