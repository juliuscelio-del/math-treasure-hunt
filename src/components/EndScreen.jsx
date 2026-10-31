import { LEVELS } from '../data/levels'
import { formatTime } from './Timer'

export default function EndScreen({ state, onRestart }) {
  const won = state.phase === 'won'
  return (
    <div className="card center celebrate">
      <div className="big-emoji pop">{won ? '💰' : '⌛'}</div>
      <h1>{won ? `Treasure found, ${state.name}!` : 'Time’s up!'}</h1>
      <p className="lead">
        {won
          ? `You collected all ${LEVELS.length} treasures with ${formatTime(state.timeLeftOnWin)} to spare.`
          : `You collected ${state.treasures.length} of ${LEVELS.length} treasures. The sea claims the rest… this time.`}
      </p>
      <div className="treasure-row">
        {state.treasures.map((t) => (
          <span key={t.name} title={t.name}>
            {t.emoji}
          </span>
        ))}
      </div>
      <div className="stats">
        <div><strong>{state.score}</strong><span>Score</span></div>
        <div><strong>{state.mistakes}</strong><span>Wrong answers</span></div>
        <div><strong>{state.hintsUsed}</strong><span>Hints used</span></div>
      </div>
      <button className="btn primary" onClick={onRestart}>
        Play again
      </button>
    </div>
  )
}
