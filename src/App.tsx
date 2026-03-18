import './App.css'

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="container headerInner">
          <div className="brand" aria-label="ShieldTX">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandName">ShieldTX</span>
            <span className="brandTag">Non-custodial private trading with on-chain verification.</span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#fees">Fees</a>
            <a href="/roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="headerCta">
            <a className="btn btnPrimary" href="#early-access">
              Request early access
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">For copied traders on Hyperliquid</p>
              <h1>
                Stop leaking alpha.
                <br />
                Keep execution parity.
              </h1>
              <p className="lead">
                Copy-bots mirror entries and front-run exits within seconds. ShieldTX shields your execution so your
                deposits, positions, and withdrawals aren’t linkable on public trackers — while keeping state
                transitions verifiable via on-chain ZK proofs.
              </p>

              <div className="heroActions">
                <a className="btn btnPrimary" href="#early-access">
                  Request access
                </a>
                <a className="btn btnGhost" href="#features">
                  Explore features
                </a>
              </div>

              <div className="pillRow" aria-label="Highlights">
                <span className="pill">Execution shielding</span>
                <span className="pill">Fill parity with Hyperliquid</span>
                <span className="pill">Non-custodial design</span>
              </div>
            </div>

            <div className="heroCard" aria-label="Product preview">
              <div className="heroCardTop">
                <div className="signal">
                  <span className="dot dotOk" />
                  Shielded account: active
                </div>
                <div className="signal subtle">
                  <span className="dot dotMuted" />
                  Public trackers: no visibility
                </div>
              </div>

              <div className="previewGrid">
                <div className="miniCard">
                  <div className="miniK">Detect</div>
                  <div className="miniV">See who’s copying your wallet</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Trade</div>
                  <div className="miniV">You trade on HL directly</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Withdraw</div>
                  <div className="miniV">ZK-verified, permissionless claims</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Audit</div>
                  <div className="miniV">Proofs via viewing keys (optional)</div>
                </div>
              </div>

              <div className="pairs" aria-label="Supported pairs">
                <span className="pair">ETH-PERP</span>
                <span className="pair">BTC-PERP</span>
                <span className="pair">SOL-PERP</span>
                <span className="pair">HYPE-PERP</span>
                <span className="pair muted">Up to 10×</span>
              </div>
            </div>
          </div>
          <div className="heroGlow" aria-hidden="true" />
        </section>

        <section className="section" aria-label="Why ShieldTX">
          <div className="container">
            <div className="sectionHeader">
              <h2>Privacy that protects your edge</h2>
              <p>
                Copy-trading dashboards and bots (Hyperbot, Dexly, HyperDash, CoinGlass, Nansen, and more) can mirror
                your moves in seconds — even on mid-sized accounts. ShieldTX removes you from their radar.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statV">2–60s</div>
                <div className="statK">Copy-bot lag on entry/exit (typical)</div>
              </div>
              <div className="stat">
                <div className="statV">12+</div>
                <div className="statK">Copy tools watching Hyperliquid wallets</div>
              </div>
              <div className="stat">
                <div className="statV">Parity</div>
                <div className="statK">Execution that matches native HL (goal)</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section sectionSurface">
          <div className="container">
            <div className="sectionHeader">
              <h2>Key features</h2>
              <p>
                Ship privacy where it matters: execution. Keep the speed and liquidity you expect while preventing
                public wallet tracking and correlation.
              </p>
            </div>

            <div className="featureGrid">
              <article className="card">
                <h3>Execution shielding</h3>
                <p>Your positions don’t surface on public dashboards — protect entries and exits from mirror bots.</p>
                <ul className="list">
                  <li>Hide positions and sizing</li>
                  <li>Resist clustering & correlation</li>
                  <li>Preserve alpha for any account size</li>
                </ul>
              </article>

              <article className="card">
                <h3>Hyperliquid fill parity</h3>
                <p>Same markets and execution profile — designed to avoid latency degradation.</p>
                <ul className="list">
                  <li>ETH / BTC / SOL / HYPE perps</li>
                  <li>Market + limit orders</li>
                  <li>Real-time position tracking</li>
                </ul>
              </article>

              <article className="card">
                <h3>Copy-bot resistant by design</h3>
                <p>Remove the public signal copy tools rely on to mirror your timing and direction.</p>
                <ul className="list">
                  <li>Reduce mirroring within seconds</li>
                  <li>Protect exits from being crowded</li>
                  <li>Stop “alpha tax” from transparency</li>
                </ul>
              </article>

              <article className="card">
                <h3>Simple social login</h3>
                <p>Sign in with Google, Apple, or email — no extensions, no seed phrases.</p>
                <ul className="list">
                  <li>Instant account creation</li>
                  <li>Connect a wallet only to deposit</li>
                  <li>Private by default</li>
                </ul>
              </article>

              <article className="card">
                <h3>Shielded balance system</h3>
                <p>Your funds live in a protected vault as untraceable digital notes.</p>
                <ul className="list">
                  <li>Deposit from supported chains</li>
                  <li>Trade without exposing sizes</li>
                  <li>Withdraw with clean guarantees</li>
                </ul>
              </article>

              <article className="card">
                <h3>Private internal transfers</h3>
                <p>Move funds to other ShieldTX users privately and for free.</p>
                <ul className="list">
                  <li>Free internal transfers</li>
                  <li>Profit splits & payouts</li>
                  <li>Personal history stays private</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <h2>How it works</h2>
                <p>
                  Shield what’s easy to copy, while keeping funds under your control and state transitions verifiable.
                </p>
              </div>
              <ol className="steps">
                <li className="step">
                  <div className="stepN">1</div>
                  <div className="stepBody">
                    <div className="stepT">Deposit → shielded notes (Arbitrum)</div>
                    <div className="stepD">
                      You deposit USDC into an Arbitrum vault contract. Your balance becomes shielded notes you control.
                    </div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">2</div>
                  <div className="stepBody">
                    <div className="stepT">Open position via fresh HL account</div>
                    <div className="stepD">
                      A new, unlinkable HL account is created for the position. You sign orders and trade on HL directly.
                    </div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">3</div>
                  <div className="stepBody">
                    <div className="stepT">Close → settle → shielded balance</div>
                    <div className="stepD">
                      You close on HL and settlement returns proceeds to shielded notes (escrow + timeout protections).
                    </div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">4</div>
                  <div className="stepBody">
                    <div className="stepT">Withdraw with ZK proofs</div>
                    <div className="stepD">
                      Burn notes and claim from the vault using ZK + Merkle proofs. Claiming is permissionless and trustless.
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="fees" className="section sectionSurface">
          <div className="container">
            <div className="sectionHeader">
              <h2>Fees & key numbers</h2>
              <p>Clear costs and operational targets, aligned with the Nightshade trust model.</p>
            </div>

            <div className="tableWrap" role="region" aria-label="Fees and key numbers">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Deposit fee</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Trading fee</td>
                    <td>0.05% on open + 0.05% on close</td>
                  </tr>
                  <tr>
                    <td>Withdrawal fee</td>
                    <td>$2–5 flat</td>
                  </tr>
                  <tr>
                    <td>Position funding latency</td>
                    <td>Target under 30 seconds</td>
                  </tr>
                  <tr>
                    <td>Withdrawal time</td>
                    <td>1–2 hours (proving pipeline)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="note">
              You still trade on Hyperliquid directly. Any Hyperliquid fees apply in addition to the above.
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="callout">
              <div>
                <h2>Built-in compliance & safety</h2>
                <p>
                  ShieldTX is designed for legitimate traders who value privacy — not for hiding from authorities.
                </p>
              </div>
              <ul className="checklist">
                <li>Deposit screening against sanctions lists</li>
                <li>Geographic blocking at the frontend</li>
                <li>Optional verification for higher limits</li>
                <li>Viewing keys for audits & reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="early-access" className="section sectionSurface">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Get a private demo</h2>
                <p>
                  Join the waitlist for a personalized walkthrough. We’ll show how copy tools can mirror your wallet
                  — and how ShieldTX blocks the signal.
                </p>
              </div>
              <form
                className="ctaForm"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <label className="srOnly" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@domain.com"
                  required
                />
                <button className="btn btnPrimary" type="submit">
                  Request demo
                </button>
              </form>
              <p className="fineprint">
                No spam. One email to schedule. (Hook this form to your backend later.)
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Roadmap participation">
          <div className="container">
            <div className="callout">
              <div>
                <h2>Help shape the roadmap</h2>
                <p>
                  Vote on upcoming features and see what’s rising to the top. Your input helps us prioritize what we
                  ship next.
                </p>
              </div>
              <div>
                <a className="btn btnPrimary" href="/roadmap">
                  Visit Roadmap
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>FAQ</h2>
              <p>Answers to the most common questions we hear from active traders.</p>
            </div>

            <div className="faq">
              <details className="faqItem">
                <summary>What exactly is hidden?</summary>
                <div className="faqBody">
                  Your wallet identity, deposit/withdraw patterns, position sizes, and trading activity are hidden from
                  public blockchain observers and copy-trading dashboards.
                </div>
              </details>

              <details className="faqItem">
                <summary>Is anything still verifiable on-chain?</summary>
                <div className="faqBody">
                  Yes. ShieldTX is designed so activity can be recorded and verified, with optional proofs and viewing
                  keys when you need to demonstrate history for audits or compliance.
                </div>
              </details>

              <details className="faqItem">
                <summary>Do I need a wallet or seed phrase?</summary>
                <div className="faqBody">
                  Not to get started. You can sign in with Google, Apple, or email. You only connect an external wallet
                  if and when you want to deposit funds.
                </div>
              </details>

              <details className="faqItem">
                <summary>Which markets are supported?</summary>
                <div className="faqBody">
                  ETH-PERP, BTC-PERP, SOL-PERP, and HYPE-PERP with up to 10× leverage, plus market and limit orders.
                </div>
              </details>

              <details className="faqItem">
                <summary>How does this stop copy trading?</summary>
                <div className="faqBody">
                  Copy traders rely on quickly identifying and monitoring known wallets. ShieldTX removes your activity
                  from public view, preventing them from mirroring your entries or front-running exits based on your
                  on-chain footprint.
                </div>
              </details>

              <details className="faqItem">
                <summary>Will this affect my fills or latency?</summary>
                <div className="faqBody">
                  The goal is execution parity with native Hyperliquid — no latency degradation and no “worse fills”
                  trade-off. We’ll validate parity in your demo.
                </div>
              </details>

              <details className="faqItem">
                <summary>Are there gas fees for trading?</summary>
                <div className="faqBody">
                  Trading is gasless once your funds are deposited. You only pay network fees when depositing or
                  withdrawing.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <div className="brandName">ShieldTX</div>
            <div className="footerNote">
              Powered by{' '}
              <a href="https://availproject.org" target="_blank" rel="noreferrer">
                Avail
              </a>
              .
            </div>
          </div>
          <div className="footerLinks" aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#fees">Fees</a>
            <a href="/roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footerCopy">© {year} ShieldTX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
