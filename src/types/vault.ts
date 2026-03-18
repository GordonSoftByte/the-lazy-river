import type { VaultConfig } from '@yo-protocol/core'

// We extend the SDK's VaultConfig with our app-specific risk metadata
export interface EnrichedVault {
  config: VaultConfig
  // These come from useVault() — on-chain live data
  totalAssets?: bigint
  exchangeRate?: bigint
  totalSupply?: bigint
  // Our computed risk score (Phase 2 will make this real)
  riskScore?: number       // 1-5 scale
  strategyDescription?: string
  isAudited?: boolean
}

// For portfolio tracking
export interface VaultPosition {
  vaultAddress: string
  vaultName: string
  symbol: string
  shares: bigint
  assetsValue: bigint     // shares * exchangeRate
  allocationPct: number   // % of total portfolio
}