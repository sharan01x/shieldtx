import './App.css'

export default function Vault() {
  const year = new Date().getFullYear()

  return (
    <div className="page themeLight">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="container headerInner">
          <div className="brand" aria-label="ShieldTX">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandName">ShieldTX</span>
            <span className="brandTag">Non-custodial vault execution with selective disclosure.</span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#disclosure">Disclosure</a>
            <a href="/roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="headerCta">
            <a className="btn btnPrimary" href="#demo">
              Request a vault demo
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">For Hyperliquid vault managers</p>
              <h1>
                Run a transparent fund.
                <br />
                Keep the strategy private.
              </h1>
              <p className="lead">
                Hyperliquid vaults are public by design — positions, allocations, and timing can be reverse-engineered.
                ShieldTX provides shielded execution for vault trades so competitors can’t front-run your book, while
                enabling selective disclosure of performance to depositors. Funds remain under your control via an
                Arbitrum vault + ZK-verified withdrawals, with escrow + timeout protections around settlement.
              </p>

              <div className="heroActions">
                <a className="btn btnPrimary" href="#demo">
                  Request a vault demo
                </a>
                <a className="btn btnGhost" href="#features">
                  See how it works
                </a>
              </div>

              <div className="pillRow" aria-label="Highlights">
                <span className="pill">Shielded vault trades</span>
                <span className="pill">Selective PnL disclosure</span>
                <span className="pill">Fill parity is the bar</span>
              </div>
            </div>

            <div className="heroCard" aria-label="Vault preview">
              <div className="heroCardTop">
                <div className="signal">
                  <span className="dot dotOk" />
                  Vault execution: shielded
                </div>
                <div className="signal subtle">
                  <span className="dot dotMuted" />
                  Depositors: performance visible
                </div>
              </div>

              <div className="previewGrid">
                <div className="miniCard">
                  <div className="miniK">Risk to manage</div>
                  <div className="miniV">Strategy leakage → ROI erosion</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Required</div>
                  <div className="miniV">Execution parity with native HL</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Investors need</div>
                  <div className="miniV">PnL + reporting without positions</div>
                </div>
                <div className="miniCard">
                  <div className="miniK">Outcome</div>
                  <div className="miniV">Privacy without losing transparency</div>
                </div>
              </div>

              <div className="pairs" aria-label="Ideal vault size">
                <span className="pair">$500K–$5M AUM</span>
                <span className="pair muted">High structural need</span>
              </div>
            </div>
          </div>
          <div className="heroGlow" aria-hidden="true" />
        </section>

        <section className="section" aria-label="Why vault managers choose ShieldTX">
          <div className="container">
            <div className="sectionHeader">
              <h2>Protect the business model</h2>
              <p>
                Vaults are benchmarked in public. If competitors can copy your entries, front-run your exits, or
                replicate allocations, LP capital takes a hit for reasons unrelated to market performance.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statV">Public</div>
                <div className="statK">Positions, performance, and allocation are readable</div>
              </div>
              <div className="stat">
                <div className="statV">45s</div>
                <div className="statK">Typical follower lag vault managers observe</div>
              </div>
              <div className="stat">
                <div className="statV">$300–$1k</div>
                <div className="statK">Monthly WTP (depends on AUM)</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section sectionSurface">
          <div className="container">
            <div className="sectionHeader">
              <h2>Key features for vault operations</h2>
              <p>Ship privacy where it matters, while keeping investor-facing transparency where it’s required.</p>
            </div>

            <div className="featureGrid">
              <article className="card">
                <h3>Shielded execution for vault trades</h3>
                <p>Vault trades don’t surface as a public position feed competitors can replay.</p>
                <ul className="list">
                  <li>Hide position timing and sizing</li>
                  <li>Reduce front-running & crowding</li>
                  <li>Maintain operational simplicity</li>
                </ul>
              </article>

              <article className="card">
                <h3>Selective disclosure</h3>
                <p>Show depositors what they need (PnL, reporting) without exposing positions.</p>
                <ul className="list">
                  <li>Performance visibility for LPs</li>
                  <li>Private positions by default</li>
                  <li>Viewing keys when necessary</li>
                </ul>
              </article>

              <article className="card">
                <h3>Execution parity is non-negotiable</h3>
                <p>Vault performance is benchmarked against native HL — parity is the bar.</p>
                <ul className="list">
                  <li>No latency degradation (goal)</li>
                  <li>Same markets & order types</li>
                  <li>Parity validation in demo</li>
                </ul>
              </article>

              <article className="card">
                <h3>Operational controls</h3>
                <p>Built for legitimate managers operating at scale.</p>
                <ul className="list">
                  <li>Deposit screening</li>
                  <li>Geographic restrictions</li>
                  <li>Optional verification for higher limits</li>
                </ul>
              </article>

              <article className="card">
                <h3>Clean withdrawal guarantees</h3>
                <p>Withdrawals designed to avoid obvious linkage back to prior activity.</p>
                <ul className="list">
                  <li>Predictable withdrawal paths</li>
                  <li>Auditable when required</li>
                  <li>LP-friendly reporting</li>
                </ul>
              </article>

              <article className="card">
                <h3>Fast onboarding</h3>
                <p>Reduce ops overhead with simple login and controlled wallet connectivity.</p>
                <ul className="list">
                  <li>Google / Apple / email</li>
                  <li>Connect wallet only to deposit</li>
                  <li>Designed for team workflows</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="disclosure" className="section">
          <div className="container">
            <div className="split">
              <div>
                <h2>Selective disclosure model</h2>
                <p>
                  Investors want transparency. Competitors want your book. ShieldTX separates those two needs so you can
                  publish performance without donating your edge.
                </p>
              </div>
              <ol className="steps">
                <li className="step">
                  <div className="stepN">1</div>
                  <div className="stepBody">
                    <div className="stepT">Shield execution</div>
                    <div className="stepD">Vault trades execute privately so strategies can’t be replayed.</div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">2</div>
                  <div className="stepBody">
                    <div className="stepT">Disclose PnL (not positions)</div>
                    <div className="stepD">Depositors see performance metrics without exposing entries/exits.</div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">3</div>
                  <div className="stepBody">
                    <div className="stepT">Prove when required</div>
                    <div className="stepD">Use viewing keys for auditors, regulators, or internal reporting.</div>
                  </div>
                </li>
                <li className="step">
                  <div className="stepN">4</div>
                  <div className="stepBody">
                    <div className="stepT">Benchmark parity</div>
                    <div className="stepD">Validate fills/latency against native HL for your vault’s pairs.</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section sectionSurface">
          <div className="container">
            <div className="sectionHeader">
              <h2>Pricing that scales with AUM</h2>
              <p>
                Vault managers pay for structural protection — not cosmetics. Execution parity is the bar; pricing is
                sized to AUM and operational needs.
              </p>
            </div>

            <div className="tableWrap" role="region" aria-label="Pricing">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Vault size</th>
                    <th scope="col">Typical plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$500K–$1M AUM</td>
                    <td>$300–$500 / month</td>
                  </tr>
                  <tr>
                    <td>$1M–$5M AUM</td>
                    <td>$500–$1,000 / month</td>
                  </tr>
                  <tr>
                    <td>Custom</td>
                    <td>Volume-based (parity-dependent)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="note">
              Conversion trigger: we show you evidence of strategy leakage (followers within ~45s) using your vault’s
              last trades.
            </div>

            <div className="note">
              Platform fees (in addition to Hyperliquid fees): <strong>0.05% on open + 0.05% on close</strong>, deposits
              free, withdrawals <strong>$2–5</strong>. Withdrawal time target <strong>1–2 hours</strong>.
            </div>
          </div>
        </section>

        <section id="demo" className="section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Get a vault leakage report</h2>
                <p>
                  Join the waitlist for a 1:1 demo. We’ll show which wallets are opening identical positions within
                  seconds of your vault — and validate execution parity.
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
                  placeholder="you@fund.com"
                  required
                />
                <button className="btn btnPrimary" type="submit">
                  Request report
                </button>
              </form>
              <p className="fineprint">No spam. One email to schedule. (Hook this form to your backend later.)</p>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Roadmap participation">
          <div className="container">
            <div className="callout">
              <div>
                <h2>Prioritize what we build next</h2>
                <p>
                  Vault managers have the highest structural need for privacy. Vote on roadmap items to help prioritize
                  vault features like selective disclosure and parity tooling.
                </p>
              </div>
              <div>
                <a className="btn btnPrimary" href="/roadmap">
                  Vote on Roadmap
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>FAQ</h2>
              <p>Vault-specific questions we hear from managers and LPs.</p>
            </div>

            <div className="faq">
              <details className="faqItem">
                <summary>What does “selective disclosure” mean?</summary>
                <div className="faqBody">
                  LPs can see performance and reporting outputs, without exposing the vault’s live positions, sizing, or
                  timing to competitors.
                </div>
              </details>

              <details className="faqItem">
                <summary>Will this hurt fills or add latency?</summary>
                <div className="faqBody">
                  Execution parity with native Hyperliquid is the bar. We validate parity against your vault’s markets
                  during onboarding.
                </div>
              </details>

              <details className="faqItem">
                <summary>Can competitors still reverse-engineer allocation?</summary>
                <div className="faqBody">
                  Shielded execution removes the public signal competitors use to reconstruct entries/exits and
                  allocation changes over time.
                </div>
              </details>

              <details className="faqItem">
                <summary>Is compliance supported?</summary>
                <div className="faqBody">
                  Yes. Deposit screening, geo-blocking, and optional verification are built in. Viewing keys can support
                  audits and reporting when needed.
                </div>
              </details>

              <details className="faqItem">
                <summary>How do you find vault managers to onboard?</summary>
                <div className="faqBody">
                  Vaults are discoverable via the HL interface. We focus on $500K–$5M AUM vaults and run 1:1 outreach
                  with a leakage report derived from your vault’s recent trades.
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
              Not financial advice. Trading involves risk. Privacy is not anonymity. Powered by{' '}
              <a href="https://availproject.org" target="_blank" rel="noreferrer">
                Avail
              </a>
              .
            </div>
          </div>
          <div className="footerLinks" aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#disclosure">Disclosure</a>
            <a href="/roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footerCopy">© {year} ShieldTX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

