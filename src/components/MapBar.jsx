import { LEVELS } from '../data/levels'

// A simple progress strip showing every island and the treasures collected so far.
export default function MapBar({ levelIdx, phase }) {
  return (
    <div className="mapbar">
      {LEVELS.map((lv, i) => {
        const done = i < levelIdx || (i === levelIdx && phase === 'levelDone') || phase === 'won'
        const current = i === levelIdx && !done
        return (
          <div
            key={lv.id}
            className={`stop ${done ? 'done' : ''} ${current ? 'current' : ''}`}
            style={{ '--c': lv.color }}
            title={lv.name}
          >
            <span className="stop-icon">{done ? lv.treasure.emoji : lv.emoji}</span>
            <span className="stop-name">{lv.name}</span>
          </div>
        )
      })}
    </div>
  )
}
