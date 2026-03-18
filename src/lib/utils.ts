import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a raw BigInt APY (in basis points) to "5.23%" */
export function formatAPY(apyBps: bigint | number | undefined): string {
  if (apyBps == null) return '—'
  const pct = Number(apyBps) / 100
  return `${pct.toFixed(2)}%`
}

/** Format raw BigInt totalAssets (18 decimals) to "$1.23M" */
export function formatTVL(totalAssets: bigint | undefined, decimals = 18): string {
  if (totalAssets == null) return '—'
  const value = Number(totalAssets) / 10 ** decimals
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value)
}

/** Format a user's share balance to a clean number */
export function formatBalance(balance: bigint | undefined, decimals = 18): string {
  if (balance == null) return '0.00'
  return (Number(balance) / 10 ** decimals).toFixed(4)
}
