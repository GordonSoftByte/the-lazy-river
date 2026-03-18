'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Header() {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* River wave emoji as a cheap logo placeholder */}
          <span className="text-2xl">🌊</span>
          <span className="font-bold text-xl text-white">Lazy River</span>
          <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
            Base
          </span>
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}