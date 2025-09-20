# 🚀 Base Smart Contracts - Advanced Web3 Learning Platform

[![Base](https://img.shields.io/badge/Base-Mainnet-blue)](https://base.org)
[![Base Sepolia](https://img.shields.io/badge/Base-Sepolia-green)](https://sepolia.base.org)
[![WalletConnect](https://img.shields.io/badge/WalletConnect-Integrated-orange)](https://walletconnect.com)
[![Reown AppKit](https://img.shields.io/badge/Reown-AppKit-purple)](https://reown.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![Foundry](https://img.shields.io/badge/Foundry-Framework-red)](https://getfoundry.sh)

> **A comprehensive smart contract learning platform built on Base blockchain with seamless WalletConnect integration**

## 🌟 Overview

This project is a cutting-edge Web3 learning platform that showcases the power of **Base blockchain** combined with **WalletConnect** technology. Experience the future of decentralized applications with our collection of 15+ production-ready smart contracts deployed on both **Base Mainnet** and **Base Sepolia**.

### 🎯 Why Base?

**Base** is Coinbase's secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain. Our platform leverages Base's:

- ⚡ **Lightning-fast transactions** - Sub-second confirmation times
- 💰 **Ultra-low gas fees** - Fraction of Ethereum mainnet costs  
- 🛡️ **Enterprise security** - Backed by Coinbase's infrastructure
- 🌐 **Seamless onboarding** - Easy fiat-to-crypto experience
- 🔗 **Ethereum compatibility** - Full EVM support

### 🔌 WalletConnect Integration

Powered by **Reown AppKit** (formerly WalletConnect), our platform provides:

- 🎨 **One-click wallet connection** - Connect 300+ wallets instantly
- 📱 **Mobile-first experience** - Seamless mobile wallet integration
- 🔐 **Secure authentication** - Industry-standard WalletConnect protocol
- 🌍 **Universal compatibility** - Works with all major wallets
- ⚙️ **Smart account support** - Next-gen account abstraction

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Base Smart Contracts                     │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Base      │  │ WalletConnect│  │   Next.js   │        │
│  │  Mainnet    │◄─┤   AppKit     │◄─┤  Frontend   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │    Base     │  │    Wagmi     │  │   Foundry   │        │
│  │   Sepolia   │◄─┤   Hooks      │◄─┤   Scripts   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Smart Contract Collection

### 🔥 **Deployed on Base Mainnet & Base Sepolia**

| Contract | Base Mainnet | Base Sepolia | Features |
|----------|--------------|--------------|----------|
| **BasicMath** | [0x5ce7b3d...](https://basescan.org/address/0x5ce7b3d39c2e89d04d9d24b1b37598f9ac50ce71) | [0x509A589...](https://sepolia.basescan.org/address/0x509a5892afcfae5872aa13602a89b5b1d33106c3) | Safe arithmetic operations |
| **UnburnableToken** | [0xb1fa62e...](https://basescan.org/address/0xb1fa62e4a5485f475ccc800249ff0ac06ea5115d) | [0x9125182...](https://sepolia.basescan.org/address/0x91251829756b1608f09d3757467fab693edc6822) | ERC20 with claim mechanism |
| **HaikuNFT** | [0xd614b6b...](https://basescan.org/address/0xd614b6bccd2d1432929b0726b41a84dd22f80cab) | [0x31ed450...](https://sepolia.basescan.org/address/0x31ed45095850360225f162feff06f8164e207a14) | Poetry NFT collection |
| **WeightedVoting** | [0x27a4d54...](https://basescan.org/address/0x27a4d546c317735d06a9e04bcf6dc4f8ef4c8454) | [0xA5677ef...](https://sepolia.basescan.org/address/0xa5677ef95aa4e04a0a01ec2b8127cc15f1d942d0) | DAO governance system |
| **GarageManager** | [0x1550b93...](https://basescan.org/address/0x1550b93c82eb6e28d871e5432ace6b70b87fd997) | [0x0CB7F55...](https://sepolia.basescan.org/address/0x0cb7f5501aa38df1e50c27d10e4e2691cd95ca60) | Vehicle management system |

*...and 10+ more contracts! [View all deployments](#-deployment-addresses)*

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Base wallet with ETH for gas fees
- WalletConnect compatible wallet (MetaMask, Coinbase Wallet, etc.)

### 1. Clone & Install

```bash
git clone https://github.com/your-username/base-smart-contracts.git
cd base-smart-contracts
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Add your Base project configuration
NEXT_PUBLIC_PROJECT_ID="your_walletconnect_project_id"
NEXT_PUBLIC_ONCHAINKIT_API_KEY="your_base_api_key"
```

### 3. Run on Base

```bash
# Start the development server
npm run dev

# Open browser and connect your Base wallet
# Navigate to http://localhost:3000
```

### 4. Connect Your Base Wallet

1. Click **"Connect Wallet"** 
2. Select your preferred wallet (MetaMask, Coinbase Wallet, etc.)
3. **Switch to Base network** when prompted
4. Start interacting with Base smart contracts!

## 🔗 WalletConnect Integration

Our platform uses **Reown AppKit** for seamless WalletConnect integration:

### Features

- **300+ Wallet Support**: Connect any WalletConnect-compatible wallet
- **Base Network Detection**: Automatic Base network switching
- **Mobile Optimized**: Perfect mobile wallet experience
- **QR Code Connection**: Scan and connect instantly
- **Session Management**: Persistent wallet connections

### Configuration

```typescript
// config/index.tsx
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  networks: [base, baseSepolia], // Base networks
})
```

## 🏗️ Base Deployment Guide

### Deploy to Base Mainnet

```bash
cd contracts

# Set your private key and Base RPC
export PRIVATE_KEY="your_private_key"
export ETHERSCAN_API_KEY="your_basescan_api_key"

# Deploy to Base Mainnet
forge script script/YourContract.s.sol --rpc-url base --broadcast --verify
```

### Deploy to Base Sepolia (Testnet)

```bash
# Deploy to Base Sepolia for testing
forge script script/YourContract.s.sol --rpc-url base_sepolia --broadcast --verify
```

## 🧪 Testing on Base

### Interactive Testing

```bash
# Test contracts with WalletConnect integration
node scripts/test_basicmath.js
node scripts/unburnable_token_interaction.js
node scripts/haiku_nft_interaction.js

# Run comprehensive test suite
node scripts/interact_with_contracts.js
```

### Base Network Configuration

```javascript
// Automatic Base network switching
const base = {
  id: 8453,
  name: 'Base',
  network: 'base',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://mainnet.base.org'] },
    public: { http: ['https://mainnet.base.org'] }
  },
  blockExplorers: {
    default: { name: 'BaseScan', url: 'https://basescan.org' }
  }
}
```

## 🎨 Frontend Features

### Base-Optimized UI

- **Base Branding**: Custom Base-themed components
- **Network Indicators**: Clear Base network status
- **Gas Optimization**: Base-specific gas estimation
- **Transaction History**: BaseScan integration
- **Mobile Responsive**: Perfect mobile experience

### WalletConnect Components

```jsx
// One-click wallet connection
<appkit-button />

// Custom wallet connection with Base network
<WalletConnection />

// Base-specific contract interactions
<BasicMathCard />
<UnburnableTokenCard />
<HaikuNFTCard />
```

## 📊 Base Analytics

Track your Base interactions:

- **Transaction Count**: Monitor Base transaction volume
- **Gas Usage**: Optimize for Base's low fees  
- **User Engagement**: WalletConnect session analytics
- **Contract Performance**: Base-specific metrics

## 🔧 Development Tools

### Base Development Stack

- **Foundry**: Smart contract development and testing
- **Base RPC**: Official Base network endpoints
- **BaseScan**: Block explorer and contract verification
- **Base Faucet**: Testnet ETH for Base Sepolia

### WalletConnect Tools

- **Reown AppKit**: Latest WalletConnect integration
- **Wagmi Hooks**: React hooks for Web3 interactions
- **Viem**: TypeScript Ethereum library
- **TanStack Query**: Data fetching and caching

## 📋 Deployment Addresses

### 🔵 Base Mainnet (Chain ID: 8453)

```
BasicMath:           0x5ce7b3d39c2e89d04d9d24b1b37598f9ac50ce71
ControlStructures:   0x9c9844918f610e8dd275d7d616ac942da5fe1ebf
EmployeeStorage:     0x50974760e8eba50a68c2779d91e744187466c042
ArraysExercise:      0x27f45d703ed0da3a8788f469aa4cddc45fc33dd6
ErrorTriageExercise: 0xd483ceb1f75752eccec25822c4917f0be3f9f810
AddressBookFactory:  0x7bb4ba6a6c4f6281ede53b42c46c6e9a9bf4bf50
UnburnableToken:     0xb1fa62e4a5485f475ccc800249ff0ac06ea5115d
WeightedVoting:      0x27a4d546c317735d06a9e04bcf6dc4f8ef4c8454
HaikuNFT:            0xd614b6bccd2d1432929b0726b41a84dd22f80cab
FavoriteRecords:     0x91dd217fd6c11a112db1411649d8d893bd7f912f
GarageManager:       0x1550b93c82eb6e28d871e5432ace6b70b87fd997
Salesperson:         0xbaa17b24489f9baf52b3d9132ccffaa5c30ab306
EngineeringManager:  0xf9800621c40ab04d712ad31f8e88544889cf59d8
InheritanceSubmission: 0xdde65303e47e5fba7cacba03e88d0ef436295e80
ImportsExercise:     0xaface816acb1c1cecbd335407bf1e81625310572
```

### 🟢 Base Sepolia (Chain ID: 84532)

```
BasicMath:           0x509A5892aFCFAe5872aa13602A89B5B1d33106c3
ControlStructures:   0x4D0A0cA1aa0e07804F31588A1db4E5B3619f4029
EmployeeStorage:     0x9c26fbaa985D26a61eF6bf87cE460e3b48629a81
ArraysExercise:      0xEfe49D84e1D3D55461ADfe408963E13687C26D2C
ErrorTriageExercise: 0x6Cf63EdaBeDed0F35f8FF365406F6B0750544d87
AddressBookFactory:  0xB2625009B5495CA33637d0eAa18bd22F9F170bc0
UnburnableToken:     0x91251829756B1608F09D3757467Fab693EDc6822
WeightedVoting:      0xA5677ef95aA4e04A0A01EC2b8127Cc15F1D942D0
HaikuNFT:            0x31ed45095850360225f162fEff06f8164e207a14
FavoriteRecords:     0x8d865d691026A57eBe57dC9E45550AE176361077
GarageManager:       0x0CB7F5501aa38Df1E50C27d10E4E2691cD95Ca60
Salesperson:         0xc7B2c067F0729aAE803B2fDE2dA87bdB7760f99f
EngineeringManager:  0xDA7bd840dfd540a0bAB7dC4d4d93D6C1c841ED3c
InheritanceSubmission: 0xFEBb1d6031E1cA6De10d2235959fe6bF0dc40BE4
ImportsExercise:     0x79193ae42708F74D3Ba96047dd2b04B328C66Ade
```

## 🤝 Contributing

We welcome contributions to enhance Base and WalletConnect integration!

### Development Flow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/base-enhancement`
3. Test on Base Sepolia first
4. Deploy to Base Mainnet
5. Submit pull request

### Base-Specific Guidelines

- Always test on Base Sepolia before mainnet
- Optimize for Base's low gas costs
- Use BaseScan for contract verification
- Follow Base naming conventions

## 🔗 Resources

### Base Ecosystem

- [Base Official Website](https://base.org)
- [Base Documentation](https://docs.base.org)
- [BaseScan Explorer](https://basescan.org)
- [Base Sepolia Testnet](https://sepolia.base.org)
- [Base Bridge](https://bridge.base.org)

### WalletConnect & Reown

- [Reown AppKit Docs](https://docs.reown.com/appkit)
- [WalletConnect Protocol](https://walletconnect.com)
- [Wagmi Documentation](https://wagmi.sh)
- [Viem Documentation](https://viem.sh)

### Development Tools

- [Foundry Book](https://book.getfoundry.sh)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **Base Team** - For building the future of Ethereum L2
- **Reown/WalletConnect** - For seamless wallet connectivity
- **Coinbase** - For making Base accessible to everyone
- **Foundry** - For excellent smart contract tooling

---

<div align="center">

**Built with ❤️ on Base | Powered by WalletConnect**

[🌐 Live Demo](https://your-base-app.vercel.app) | [📖 Documentation](https://docs.your-base-app.com) | [🐦 Twitter](https://twitter.com/your-handle)

</div>