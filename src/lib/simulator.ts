export interface Candidate {
  id: string
  name: string
  party: string
  symbol: string
  color: string
}

export const CANDIDATES: Candidate[] = [
  { id: 'sun', name: 'Aisha Verma', party: 'Sunrise Alliance', symbol: '☀️', color: '#f59e0b' },
  { id: 'leaf', name: 'Rohan Mehta', party: 'Green Path', symbol: '🌿', color: '#22c55e' },
  { id: 'wave', name: 'Priya Nair', party: 'Blue Wave Union', symbol: '🌊', color: '#3b82f6' },
  { id: 'star', name: 'Kabir Singh', party: "People's Star", symbol: '⭐', color: '#8b5cf6' },
  { id: 'dove', name: 'Meera Iyer', party: 'Unity Dove Front', symbol: '🕊️', color: '#ec4899' },
]

export type VoteTally = Record<string, number>

const VOTE_KEY = 'eap:hasVoted'
const CHOICE_KEY = 'eap:choice'
const TALLY_KEY = 'eap:tally'

export function hasVoted(): boolean {
  try {
    return localStorage.getItem(VOTE_KEY) === 'true'
  } catch {
    return false
  }
}

export function getChoice(): string | null {
  try {
    return localStorage.getItem(CHOICE_KEY)
  } catch {
    return null
  }
}

export function getTally(): VoteTally {
  try {
    const raw = localStorage.getItem(TALLY_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as VoteTally
  } catch {
    return {}
  }
}

/** Records a vote once per browser. Returns the updated tally, or the existing tally unchanged if already voted. */
export function castVote(candidateId: string): VoteTally {
  if (hasVoted()) return getTally()

  const tally = getTally()
  tally[candidateId] = (tally[candidateId] ?? 0) + 1

  try {
    localStorage.setItem(VOTE_KEY, 'true')
    localStorage.setItem(CHOICE_KEY, candidateId)
    localStorage.setItem(TALLY_KEY, JSON.stringify(tally))
  } catch {
    // localStorage unavailable (private mode, storage full, etc.) — vote still
    // reflects in memory for this render, just won't persist across reloads.
  }

  return tally
}

export function resetSimulation(): void {
  try {
    localStorage.removeItem(VOTE_KEY)
    localStorage.removeItem(CHOICE_KEY)
    localStorage.removeItem(TALLY_KEY)
  } catch {
    // ignore
  }
}
