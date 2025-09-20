'use client'

import { useState, useEffect } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { parseUnits } from 'viem'

const BASIC_MATH_ADDRESS = '0x2a50A417ee05D7527787C9f5ED7657CF9DaD3BFB' as const
const BASIC_MATH_ABI = [
  {
    "inputs": [{"internalType": "uint256", "name": "_a", "type": "uint256"}, {"internalType": "uint256", "name": "_b", "type": "uint256"}],
    "name": "adder",
    "outputs": [{"internalType": "uint256", "name": "sum", "type": "uint256"}, {"internalType": "bool", "name": "error", "type": "bool"}],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "_a", "type": "uint256"}, {"internalType": "uint256", "name": "_b", "type": "uint256"}],
    "name": "subtractor",
    "outputs": [{"internalType": "uint256", "name": "difference", "type": "uint256"}, {"internalType": "bool", "name": "error", "type": "bool"}],
    "stateMutability": "pure",
    "type": "function"
  }
] as const

export default function BasicMathCard() {
  const { isConnected } = useAccount()
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')
  const [result, setResult] = useState<{ value: string; error: boolean; operation: string } | null>(null)
  const [operation, setOperation] = useState<'add' | 'subtract'>('add')
  const [shouldCalculate, setShouldCalculate] = useState(false)

  // Use wagmi's useReadContract hook for better performance and rate limiting
  const { data: contractData, isLoading: isCalculating, error: contractError } = useReadContract({
    address: shouldCalculate && inputA && inputB ? BASIC_MATH_ADDRESS : undefined,
    abi: BASIC_MATH_ABI,
    functionName: operation === 'add' ? 'adder' : 'subtractor',
    args: shouldCalculate && inputA && inputB ? [BigInt(inputA), BigInt(inputB)] : undefined,
    query: {
      enabled: shouldCalculate && !!inputA && !!inputB && isConnected,
    }
  })

  // Update result when contract data changes
  useEffect(() => {
    if (contractData && shouldCalculate) {
      const [value, error] = contractData as [bigint, boolean]
      setResult({ 
        value: value.toString(), 
        error: error, 
        operation: operation === 'add' ? 'Addition' : 'Subtraction'
      })
      setShouldCalculate(false)
    }
  }, [contractData, shouldCalculate, operation])

  // Handle contract errors
  useEffect(() => {
    if (contractError && shouldCalculate) {
      console.error('Contract call error:', contractError)
      setResult({ value: '0', error: true, operation: operation === 'add' ? 'Addition' : 'Subtraction' })
      setShouldCalculate(false)
    }
  }, [contractError, shouldCalculate, operation])

  const handleCalculate = () => {
    if (!inputA || !inputB || !isConnected) return
    setShouldCalculate(true)
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl p-6 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">∑</span>
          </div>
          <h2 className="text-2xl font-bold text-white">BasicMath Contract</h2>
        </div>
        <div className="text-sm text-gray-400 text-right">
          <p className="font-mono">Contract: {BASIC_MATH_ADDRESS.slice(0, 6)}...{BASIC_MATH_ADDRESS.slice(-4)}</p>
          <div className="flex items-center justify-end space-x-1 mt-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Base Mainnet</span>
          </div>
        </div>
      </div>
      
      {!isConnected ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-400 mb-6">Please connect your wallet to interact with this contract</p>
          <appkit-button />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Value A</label>
              <input
                type="text"
                value={inputA}
                onChange={(e) => setInputA(e.target.value)}
                placeholder="Enter first number"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                disabled={isCalculating}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Value B</label>
              <input
                type="text"
                value={inputB}
                onChange={(e) => setInputB(e.target.value)}
                placeholder="Enter second number"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                disabled={isCalculating}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setOperation('add')}
              disabled={isCalculating}
              className={`p-4 rounded-lg font-medium transition-all duration-200 ${
                operation === 'add'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              ➕ Addition
            </button>
            <button
              onClick={() => setOperation('subtract')}
              disabled={isCalculating}
              className={`p-4 rounded-lg font-medium transition-all duration-200 ${
                operation === 'subtract'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              ➖ Subtraction
            </button>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!inputA || !inputB || isCalculating}
            className="w-full p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isCalculating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Calculating...</span>
              </div>
            ) : (
              `Calculate ${operation === 'add' ? 'Sum' : 'Difference'} on Contract`
            )}
          </button>

          {result && (
            <div className={`p-4 rounded-lg border-l-4 ${
              result.error 
                ? 'bg-red-500/10 border-red-500 text-red-400' 
                : 'bg-green-500/10 border-green-500 text-green-400'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg text-white">
                    {result.operation} Result: {result.value}
                  </p>
                  {result.error ? (
                    <p className="text-sm mt-1 text-red-300">
                      ⚠️ {operation === 'add' ? 'Overflow' : 'Underflow'} detected by smart contract
                    </p>
                  ) : (
                    <p className="text-sm mt-1 text-green-300">
                      ✅ Operation completed successfully on-chain
                    </p>
                  )}
                </div>
                <div className="text-2xl">
                  {result.error ? '❌' : '✅'}
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h3 className="font-medium text-white mb-3 flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Contract Functions</span>
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <code className="text-blue-300 bg-gray-900 px-2 py-1 rounded">adder(uint _a, uint _b)</code>
                  <p className="text-gray-400 text-xs mt-1">Safe addition with overflow protection</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <code className="text-blue-300 bg-gray-900 px-2 py-1 rounded">subtractor(uint _a, uint _b)</code>
                  <p className="text-gray-400 text-xs mt-1">Safe subtraction with underflow protection</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
