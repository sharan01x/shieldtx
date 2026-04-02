# Shield TX — Key Messaging Document

**Status:** Draft — for team review
**Last updated:** March 2026
**Purpose:** Single source of truth for messaging. Use this before writing outreach, copy, content, or product descriptions. Replaces scattered references across other docs.

---

## Phase 1 Messaging Strategy

**One audience. One track. No dilution.**

All outreach, copy, and conversion tooling at launch runs on a single track: the Copied Trader. This is the P0 acquisition target for private beta. Everything else is secondary until this segment is working.

Retail DeFi Traders are a secondary channel during beta — seeded through community presence, not dedicated outreach — and become a primary content target at public launch. Do not build dedicated tooling around retail until the P0 track is running.

Other audiences exist and are documented. We do not have enough data yet to determine which to prioritise next. That call gets made after private beta, informed by what we learn. Do not dilute P0 focus by running parallel outreach tracks.

---

## The Copied Trader

### One Line

> **You're losing upwards of 15bps per trade to copy traders. Shield TX closes that gap.**

Use this for generic comms and landing page copy. For 1:1 outreach, replace with the specific number from the detection tool — "You have [X] wallets copying your trades within 30 seconds" hits harder than a generic stat.

---

### Elevator Pitch

Every trade you place is leaking upwards of 15bps to copy traders. 12+ tools — Hyperbot, Dexly, SuperX, HyperDash, CoinGlass — auto-mirror wallets within seconds. Multi-wallet rotation doesn't fix it — Arkham and Nansen cluster wallets through temporal correlation anyway.

Shield TX executes natively on Hyperliquid — same order book, same liquidity, same fills — without your positions surfacing on the public book. Your entries, sizing, and liquidation levels stay off the radar. No performance cost. No operational overhead. One account.

---

### Problem Frame

Lead with their own data, not an explanation. The pain is real and documented — show it, don't pitch it.

> Every trade you place is leaking upwards of 15bps to copy traders — at any account size, not just $500K+. 12+ tools auto-mirror wallets within seconds: Hyperbot, Dexly, SuperX, HyperDash, CoinGlass. Temporal correlation shows 3+ follower wallets trading the same asset, same direction, within a 2–60 second lag. Multi-wallet rotation doesn't solve it — clustering tools like Arkham and Nansen link wallets through on-chain behaviour regardless.

The hook is personal: "You have [X] wallets copying your trades within 30 seconds. Here's the data." One personalised demo with their actual wallet data closes this persona. Do not open with product features.

---

### Solution Frame

> Shielded execution. Native fills. Your edge stays yours.

Shield TX is the purpose-built replacement for the multi-wallet workaround — same outcome, no operational overhead, no clustering exposure, and no regulatory risk.

---

### Key Messages

- Full execution shielding — positions don't surface on the public book
- Fill parity with native HL — no performance cost for shielding
- No latency degradation
- Clean withdrawal guarantees [TBD — confirm before outreach]
- Compliant by design — no mixer architecture, no obfuscation

---

### Pricing

5bps on entry, 5bps on exit (10bps round trip).

Copy traders are taking at least 15bps per trade from you — Shield TX costs less than the leak it closes. This is the ROI frame: the fee pays for itself many times over if execution parity holds. Lead with this when price comes up; do not wait for the objection.

---

### GTM Approach

1. Copy-trade detection script is built — a version also runs on the landing page for inbound use. Use the script to generate a ranked lead list from Dexly/HyperDash/CoinGlass leaderboards
2. Cross-ref leaderboard wallets with X/TG handles
3. Personalised 1:1 DMs with their own exposure data — not a pitch, a data drop
4. Scrape top 200 (not just top 50) across multiple dashboards

---

### Tone

Peer-to-peer. No fluff. They can smell a template. Reference their actual situation — specific wallet data, specific tools copying them.

**Never:** Lead with product features. Use "privacy." Send a generic pitch.

---

## Retail DeFi Traders (Secondary — beta seeding, primary at public launch)

**Role during beta:** Seeded through personal account posts in HL/DeFi communities. Drives inbound requests, usage data, and social proof pipeline. Do not build dedicated copy or tooling around this segment until the P0 track is running.

**Who this is:** Active DeFi users comfortable with perps. Aware of on-chain transparency as a problem. Already running wallet workarounds but know they're imperfect.

**Lead with:** Validation. They already know the problem — don't over-explain it. "You've been solving this badly. There's a better way."

**Key messages:**
- You've been solving this with workarounds — this is the purpose-built, compliant version
- Same execution as native HL
- Compliant by design — no mixer architecture, no obfuscation

**Tone:** Direct and validating. Lead with the frustration, not the fix. Keep compliance framing confident and matter-of-fact. Never use "privacy." Never lead with the product.

---

## Product Foundation

The following is the underlying product truth that all messaging draws from. It is not copy — it is the source layer. Pull from here when drafting outreach or content; do not use as a standalone pitch.

---

### What Shield TX Is

> **Shielded perp execution on Hyperliquid. Same fills, no footprint.**

---

### Core Value Props (Ranked)

**1. Execution parity**
Shield TX executes natively on Hyperliquid — same order book, same liquidity, same fills. No slippage premium for shielding. This is the primary trust gate: if fills aren't parity, nothing else matters.

**2. Shielded positioning**
Positions don't surface on the public book. Entries, sizing, and liquidation levels are not readable by copy traders, targeted sandwich attacks, or leaderboard watchers.

**3. Compliant by design**
No mixer architecture. No obfuscation. Full auditability. [TBD — hold until audit status confirmed; soften to "built for full auditability" if needed.] The differentiator from adjacent tools that carry regulatory risk. Say it confidently, not defensively.

**4. One account**
The clean, purpose-built replacement for the multi-wallet workaround most serious traders are already running.

---

### The Problem

> DeFi is transparent by default. That's mostly a good thing. But for traders with any edge worth protecting, it means your entries, your sizing, and your liquidation levels are readable by anyone.
>
> 12+ copy-trading tools — Hyperbot, Dexly, SuperX, HyperDash, CoinGlass, Nansen, open-source GitHub bots — auto-mirror wallets within seconds. This happens to $50K accounts, not just $500K+.
>
> The workaround everyone runs — multiple wallets, routing through CEXs — doesn't actually work. Clustering tools like Arkham and Nansen link wallets through temporal correlation anyway.

---

### The Solution

> Trade shielded. Execute natively.

Shield TX is the purpose-built, compliant version of what serious traders are already doing badly with workarounds. Same outcome, better UX, zero regulatory exposure.

---

## Language Guide

### Use
- Shielded execution
- Shielded positioning
- Edge protection
- Adversarial protection
- Confidential positioning
- Protect your order flow
- Trade without telegraphing your strategy
- Shields
- Compliant by design

### Never Use
- Privacy (in DeFi it triggers Tornado Cash / OFAC associations regardless of context)
- Hide your trades
- Anonymous trading
- Untraceable
- Private transactions
- Dark pool (acceptable as a single credibility line for TradFi audiences only — never as primary analogy or product explanation)

---

## Competitive Positioning

| Approach | UX | Effectiveness | Legitimacy |
|---|---|---|---|
| Multi-wallet rotation | Poor | Moderate | Fine |
| Tornado Cash / mixers | N/A for trading | N/A | Sanctioned/risky |
| Silhouette | Moderate | Moderate | Unknown (spot only, not perps) |
| Dexari | Mobile-first | Partial | Fine (privacy-adjacent via abstraction, not purpose-built) |
| **Shield TX** | Clean | High | Compliant |

**Primary frame:** Shield TX is the purpose-built, compliant alternative to the multi-wallet workaround traders are already running. Not a mixer, not a privacy tool — a professional-grade execution layer.

---

## Objection Handling

### "Is this like Tornado Cash / a mixer?"
No. Shield TX doesn't obfuscate transactions or pool funds. It executes natively on Hyperliquid — same order book, same counterparties. It's fully auditable and compliant by design. The difference: Tornado Cash hides the transaction. Shield TX shields your position data while keeping execution fully on-chain and transparent.

### "Who controls the vault / my funds?"
You do. Funds are locked in a smart contract on Arbitrum — core operations are permissionless and verified by zero-knowledge proofs, no admin key required. See the full breakdown in the trust model (`/context/trust-model-public.md`).

### "What happens during a liquidation cascade or stress event?"
[TBD — performance under load documentation still required. Do not answer this until confirmed.]

### "What's the audit status?"
[TBD — confirm with team. If in progress: "Audit is underway with [auditor]. We'll publish the report at completion."]

### "Why not just use multiple wallets?"
You probably already do. The problem is that clustering tools like Arkham and Nansen link them anyway — temporal correlation analysis is good enough to tie your wallets together from on-chain behaviour. Shield TX breaks that linkability cleanly. One account, no operational overhead, no clustering exposure.

### "What are the fees?"
5bps on entry, 5bps on exit. Copy traders are taking upwards of 15bps per trade from you.

### "Is there an API / can I integrate this?"
API access is on the roadmap post-MVP. If you're a builder, reach out directly — early access and sandbox docs available for integration conversations.

---

## What's Still TBD (Do Not Answer Until Confirmed)

| Gap | Status |
|---|---|
| Withdrawal guarantees and vault access controls | ⚠️ Pending — required before outreach |
| Performance under load / stress event behaviour | ⚠️ Pending |
| Audit status and timeline | ⚠️ Pending |
| Fee model | ✓ Confirmed — 5bps entry, 5bps exit |
| How It Works (product flow steps) | ⚠️ Pending |
| "Full auditability" claim | ⚠️ Hold until audit confirmed |

---

## Roadmap Items to Signal Early

Don't let users discover gaps themselves. These weren't in MVP but came up repeatedly in research — proactively communicating they're coming keeps relevant users engaged:

| Feature | Why it matters |
|---|---|
| Selective disclosure / partial opacity | Most common feature request across all interviews; required to unlock brand traders and fund manager segments |
| ZK-attestation (prove PnL without revealing strategy) | Institutional wedge — fund managers need LP transparency without telegraphing positions |
| API access | Integration and distribution; systematic traders need programmatic access |
| Mobile parity | Table stakes — if it doesn't work on mobile, that segment is lost entirely |

---

## Additional Audiences (Post-Beta Scope)

We have research on six additional audience segments beyond Copied Traders. None are in scope for launch. Which of these to prioritise next — if any — will be determined by what we learn during the private beta phase. These segments and their priority order are subject to change as market data comes in.

| Segment | Why interesting | What's needed to serve them |
|---|---|---|
| Vault Managers | High WTP, strong structural need — their strategy is fully public on HL | Dedicated developer work; not yet scoped |
| Brand Traders (e.g. Borg, HypeTrader) | Natural amplifiers; dual-mode use case (public brand + shielded execution) | Selective disclosure feature |
| Ecosystem Builders (e.g. Dexter, HYPEconomist) | Distribution leverage — Dexter as top-of-funnel; HYPEconomist as community credibility | API access + sandbox docs for Dexter; early access for HYPEconomist |
| Institutional Traders (e.g. sl2riches) | Highest WTP; unlocks fund manager segment | ZK-attestation + bulletproof trust model + longest sales cycle |
| DeFi Lifers (e.g. degenomics) | Already running workarounds; motivated if shielding is demonstrably better | Technical proof of linkability breaking; education-led |
| Mobile Pragmatists (e.g. Caed) | Volume play via Dexari integration | Mobile parity + Dexari partnership |

For full segment detail see `/context/personas-jtbd.md`.

---

*For acquisition strategy and phase plan see `/context/marketing-strategy.md` and `/context/go-to-market.md`.*
