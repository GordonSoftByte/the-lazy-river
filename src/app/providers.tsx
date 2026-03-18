'use client'

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { YieldProvider } from '@yo-protocol/react'
import { wagmiConfig } from '@/lib/wagmi'
import '@rainbow-me/rainbowkit/styles.css'

// Create QueryClient outside component to avoid recreation on re-render
const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* YieldProvider MUST be inside both of the above — per YO docs */}
        <YieldProvider
          partnerId="lazy-river"
          defaultSlippageBps={50}
          onError={(error) => console.error('[YO SDK Error]', error)}
        >
          <RainbowKitProvider theme={darkTheme()}>
            {children}
          </RainbowKitProvider>
        </YieldProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}