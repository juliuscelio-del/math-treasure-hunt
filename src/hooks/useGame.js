import { useCallback, useEffect, useRef, useState } from 'react'
import { GAME } from '../config'
import { LEVELS } from '../data/levels'
import { isCorrect } from '../checkAnswer'

// phases: intro → playing → levelDone → (playing …) → won | timeup
const fresh = () => ({
  phase: 'intro',
  name: '',
  endAt: null,       // timestamp (ms) when time runs out
  levelIdx: 0,
  qIdx: 0,
  score: 0,
  treasures: [],
  mistakes: 0,
  hintsUsed: 0,
  hintShown: false,  // is the hint for the current question open?
  timeLeftOnWin: 0,
})

function load() {
  try {
    const raw = localStorage.getItem(GAME.saveKey)
    return raw ? { ...fresh(), ...JSON.parse(raw) } : fresh()
  } catch {
    return fresh()
  }
}

export function useGame() {
  const [state, setState] = useState(load)
  const [now, setNow] = useState(Date.now())
  const stateRef = useRef(state)
  stateRef.current = state

  // persist progress so a page refresh doesn't lose the game
  useEffect(() => {
    try {
      localStorage.setItem(GAME.saveKey, JSON.stringify(state))
    } catch {}
  }, [state])

  // clock tick
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [])

  const timeLeftMs =
    state.phase === 'playing' || state.phase === 'levelDone'
      ? Math.max(0, (state.endAt ?? now) - now)
      : 0

  // time's up?
  useEffect(() => {
    if ((state.phase === 'playing') && state.endAt && timeLeftMs <= 0) {
      setState((s) => ({ ...s, phase: 'timeup' }))
    }
  }, [timeLeftMs, state.phase, state.endAt])

  const start = useCallback((name) => {
    setState({
      ...fresh(),
      phase: 'playing',
      name: name.trim() || 'Adventurer',
      endAt: Date.now() + GAME.totalMinutes * 60 * 1000,
    })
  }, [])

  const penalise = (s, seconds) => ({ ...s, endAt: s.endAt - seconds * 1000 })

  // returns true/false so the UI can show feedback
  const submit = useCallback((answer) => {
    const s = stateRef.current
    const level = LEVELS[s.levelIdx]
    const question = level.questions[s.qIdx]
    if (!isCorrect(answer, question)) {
      setState((cur) => ({ ...penalise(cur, GAME.wrongPenaltySeconds), mistakes: cur.mistakes + 1 }))
      return false
    }
    setState((cur) => {
      const score = cur.score + GAME.pointsPerQuestion
      const lastQuestion = cur.qIdx + 1 >= level.questions.length
      if (!lastQuestion) return { ...cur, score, qIdx: cur.qIdx + 1, hintShown: false }
      const treasures = [...cur.treasures, level.treasure]
      const lastLevel = cur.levelIdx + 1 >= LEVELS.length
      if (lastLevel) {
        const minsLeft = Math.floor(Math.max(0, cur.endAt - Date.now()) / 60000)
        return {
          ...cur,
          treasures,
          score: score + minsLeft * GAME.bonusPointsPerMinuteLeft,
          phase: 'won',
          timeLeftOnWin: Math.max(0, cur.endAt - Date.now()),
          hintShown: false,
        }
      }
      return { ...cur, score, treasures, phase: 'levelDone', hintShown: false }
    })
    return true
  }, [])

  const useHint = useCallback(() => {
    setState((cur) =>
      cur.hintShown ? cur : { ...penalise(cur, GAME.hintPenaltySeconds), hintShown: true, hintsUsed: cur.hintsUsed + 1 }
    )
  }, [])

  const nextLevel = useCallback(() => {
    setState((cur) => ({ ...cur, phase: 'playing', levelIdx: cur.levelIdx + 1, qIdx: 0 }))
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(GAME.saveKey)
    setState(fresh())
  }, [])

  return { state, timeLeftMs, start, submit, useHint, nextLevel, reset }
}
