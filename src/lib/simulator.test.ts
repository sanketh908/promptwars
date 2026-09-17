import { beforeEach, describe, expect, it } from 'vitest'
import { castVote, getChoice, getTally, hasVoted, resetSimulation } from './simulator'

beforeEach(() => {
  localStorage.clear()
})

describe('castVote', () => {
  it('records a first vote and updates the tally', () => {
    const tally = castVote('sun')
    expect(tally).toEqual({ sun: 1 })
    expect(hasVoted()).toBe(true)
    expect(getChoice()).toBe('sun')
  })

  it('prevents double voting for the same browser', () => {
    castVote('sun')
    const secondTally = castVote('leaf')

    expect(secondTally).toEqual({ sun: 1 })
    expect(getChoice()).toBe('sun')
  })

  it('accumulates tallies across multiple candidates within a session', () => {
    castVote('sun')
    // simulate more voters on the same device without resetting in between
    localStorage.removeItem('eap:hasVoted')
    castVote('leaf')
    localStorage.removeItem('eap:hasVoted')
    castVote('leaf')

    expect(getTally()).toEqual({ sun: 1, leaf: 2 })
  })
})

describe('resetSimulation', () => {
  it('clears voted state so a new vote can be cast', () => {
    castVote('sun')
    resetSimulation()

    expect(hasVoted()).toBe(false)
    expect(getChoice()).toBeNull()
  })

  it('wipes the tally so the demo restarts from scratch', () => {
    castVote('sun')
    resetSimulation()

    expect(getTally()).toEqual({})
  })
})
