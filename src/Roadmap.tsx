import { useMemo, useState } from 'react'
import './App.css'
import { ROADMAP, type RoadmapItem } from './roadmapData'

type VoteState = {
  counts: Record<string, number>
  liked: Record<string, boolean>
}

const COUNTS_KEY = 'shieldtx:roadmap:counts:v1'
const LIKED_KEY = 'shieldtx:roadmap:liked:v1'

function safeParseJson<T>(value: string | null): T | null {
  if (!value) return null
  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

function loadVoteState(items: RoadmapItem[]): VoteState {
  const counts = safeParseJson<Record<string, number>>(localStorage.getItem(COUNTS_KEY)) ?? {}
  const liked = safeParseJson<Record<string, boolean>>(localStorage.getItem(LIKED_KEY)) ?? {}

  // Ensure keys exist for known items (but do not display counts until liked).
  for (const item of items) {
    if (typeof counts[item.id] !== 'number') counts[item.id] = 0
    if (typeof liked[item.id] !== 'boolean') liked[item.id] = false
  }

  return { counts, liked }
}

function saveVoteState(state: VoteState) {
  localStorage.setItem(COUNTS_KEY, JSON.stringify(state.counts))
  localStorage.setItem(LIKED_KEY, JSON.stringify(state.liked))
}

export default function Roadmap() {
  const year = new Date().getFullYear()
  const [voteState, setVoteState] = useState<VoteState>(() => loadVoteState(ROADMAP))
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  const items = useMemo(() => {
    const indexed = ROADMAP.map((item, idx) => ({ item, idx }))
    indexed.sort((a, b) => {
      const ca = voteState.counts[a.item.id] ?? 0
      const cb = voteState.counts[b.item.id] ?? 0
      if (cb !== ca) return cb - ca
      return a.idx - b.idx
    })
    return indexed.map((x) => x.item)
  }, [voteState.counts])

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
            <span className="brandTag">Roadmap</span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a href="/">Home</a>
            <a href="/vault">Vault</a>
            <a href="/roadmap" aria-current="page">
              Roadmap
            </a>
          </nav>

          <div className="headerCta">
            <a className="btn btnPrimary" href="/#early-access">
              Request early access
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Roadmap</h2>
              <p>
                Vote on what matters most. Help shape ShieldTX by telling us what you want to see built next.
              </p>
            </div>

            <div className="roadmapList" role="list">
              {items.map((feature) => {
                const liked = voteState.liked[feature.id] ?? false
                const count = voteState.counts[feature.id] ?? 0
                const showCount = revealed[feature.id] ?? false

                return (
                  <article key={feature.id} className="roadmapItem" role="listitem">
                    <div className="roadmapText">
                      <h3 className="roadmapTitle">{feature.title}</h3>
                      <p className="roadmapDesc">{feature.description}</p>
                    </div>

                    <div className="roadmapVote">
                      <button
                        type="button"
                        className={`likeBtn ${liked ? 'liked' : ''}`}
                        aria-pressed={liked}
                        aria-label={liked ? 'Liked' : 'Like this feature'}
                        onClick={() => {
                          if (liked) return
                          setRevealed((prev) => ({ ...prev, [feature.id]: true }))
                          setVoteState((prev) => {
                            const next: VoteState = {
                              counts: { ...prev.counts },
                              liked: { ...prev.liked },
                            }
                            next.counts[feature.id] = (next.counts[feature.id] ?? 0) + 1
                            next.liked[feature.id] = true
                            saveVoteState(next)
                            return next
                          })
                        }}
                      >
                        <span className="likeIcon" aria-hidden="true">
                          ♥
                        </span>
                      </button>

                      {showCount ? <div className="likeCount">{count} votes</div> : <div className="likeCount hidden" />}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <div className="brandName">ShieldTX</div>
            <div className="footerNote">Roadmap votes are stored locally in your browser.</div>
          </div>
          <div className="footerLinks" aria-label="Footer">
            <a href="/">Home</a>
            <a href="/vault">Vault</a>
            <a href="/roadmap">Roadmap</a>
          </div>
          <div className="footerCopy">© {year} ShieldTX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

