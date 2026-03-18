export type RoadmapItem = {
  id: string
  title: string
  description: string
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: 'execution-privacy',
    title: 'Execution shielding',
    description:
      'Trade without broadcasting your wallet activity. Positions and sizing stay off public trackers while outcomes remain verifiable.',
  },
  {
    id: 'hl-parity',
    title: 'Fill parity with Hyperliquid',
    description:
      'Match native HL execution performance and liquidity. Parity validation is part of onboarding for serious traders and vault managers.',
  },
  {
    id: 'copybot-detection',
    title: 'Copy-trade exposure report',
    description:
      'Detect wallets that mirror your entries/exits within seconds using temporal correlation. Use the report for a personalized demo.',
  },
  {
    id: 'selective-disclosure',
    title: 'Selective disclosure for vaults',
    description:
      'Share PnL and reporting outputs with depositors without exposing positions, timing, or allocation changes to competitors.',
  },
  {
    id: 'shielded-balance',
    title: 'Shielded balance vault',
    description:
      'Funds are represented as shielded notes so only you can see balances and history while trading remains gasless after deposit.',
  },
  {
    id: 'market-limit',
    title: 'Market & limit orders',
    description:
      'Trade the way you want with market execution and limit price control, while keeping your intent private.',
  },
  {
    id: 'realtime-positions',
    title: 'Real-time position tracking',
    description:
      'Track entry, mark price, unrealized PnL, margin, leverage, and liquidation warnings—updated live.',
  },
  {
    id: 'position-management',
    title: 'Flexible position management',
    description:
      'Close partially or fully, adjust leverage and margin, and take profits without revealing your moves publicly.',
  },
  {
    id: 'social-login',
    title: 'Simple social login',
    description:
      'Sign in with Google, Apple, or email. No seed phrases or extensions. Connect a wallet only when you want to deposit.',
  },
  {
    id: 'private-transfers',
    title: 'Private transfers',
    description:
      'Send funds to other ShieldTX users privately and for free—useful for team operations, payouts, and profit splits.',
  },
  {
    id: 'history',
    title: 'Personal private history',
    description:
      'Your deposits, trades, withdrawals, and transfers are visible only to you—useful for performance tracking and tax reporting.',
  },
  {
    id: 'notifications',
    title: 'Smart notifications',
    description:
      'Get alerts for fills, position changes, liquidation proximity, and deposit/withdraw events—without leaking context publicly.',
  },
  {
    id: 'compliance',
    title: 'Compliance & safety controls',
    description:
      'Deposit screening, geo-blocking, optional verification, and viewing keys for audits—built for legitimate use cases.',
  },
  {
    id: 'mobile',
    title: 'Mobile-friendly design',
    description:
      'A responsive interface that works on desktop, tablet, and mobile so you can manage risk on the go.',
  },
]

