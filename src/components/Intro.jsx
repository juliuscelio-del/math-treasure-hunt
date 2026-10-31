import { useState } from 'react'
import { GAME } from '../config'
import { LEVELS } from '../data/levels'

export default function Intro({ onStart, resumeName }) {
  const [name, setName] = useState(resumeName || '')
  return (
    <div className="card center">
      <div className="big-emoji">🏴‍☠️</div>
      <h1>{GAME.title}</h1>
      <p className="lead">
        Sail through {LEVELS.length} islands, solve the math puzzles, and collect every treasure
        before the {GAME.totalMinutes}-minute timer runs out!
      </p>
      <ul className="rules">
        <li>✅ Each correct answer earns {GAME.pointsPerQuestion} points.</li>
        <li>❌ A wrong answer costs {GAME.wrongPenaltySeconds} seconds.</li>
        <li>💡 A hint costs {GAME.hintPenaltySeconds} seconds.</li>
        <li>🖨️ Need paper? Every level has a printable worksheet.</li>
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onStart(name)
        }}
      >
        <input
          className="input"
          placeholder="Your pirate name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
          autoFocus
        />
        <button className="btn primary" type="submit">
          Set sail ⛵
        </button>
      </form>
    </div>
  )
}
