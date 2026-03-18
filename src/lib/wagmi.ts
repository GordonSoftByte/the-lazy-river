import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'

export const wagmiConfig = getDefaultConfig({
  appName: 'Lazy River',
  // Get your project ID from https://cloud.walletconnect.com
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [base],
  ssr: true, // Required for Next.js App Router
})