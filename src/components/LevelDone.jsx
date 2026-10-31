import { LEVELS } from '../data/levels'

export default function LevelDone({ state, onNext }) {
  const level = LEVELS[state.levelIdx]
  const next = LEVELS[state.levelIdx + 1]
  return (
    <div className="card center celebrate" style={{ '--c': level.color }}>
      <div className="big-emoji pop">{level.treasure.emoji}</div>
      <h2>You found the {level.treasure.name}!</h2>
      <p className="lead">{level.name} conquered. Treasures collected: {state.treasures.length} / {LEVELS.length}</p>
      <div className="treasure-row">
        {state.treasures.map((t) => (
          <span key={t.name} title={t.name}>
            {t.emoji}
          </span>
        ))}
      </div>
      {next && (
        <p className="story">
          Up next: <strong>{next.emoji} {next.name}</strong> — {next.topic}
        </p>
      )}
      <button className="btn primary" onClick={onNext}>
        Continue the hunt ➜
      </button>
    </div>
  )
}
