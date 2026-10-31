import { GAME } from './config'
import { useGame } from './hooks/useGame'
import Intro from './components/Intro'
import Level from './components/Level'
import LevelDone from './components/LevelDone'
import EndScreen from './components/EndScreen'
import MapBar from './components/MapBar'
import Timer from './components/Timer'

export default function App() {
  const { state, timeLeftMs, start, submit, useHint, nextLevel, reset } = useGame()
  const inGame = state.phase === 'playing' || state.phase === 'levelDone'

  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">🏴‍☠️ {GAME.title}</span>
        {inGame && (
          <div className="topbar-right">
            <span className="score">⭐ {state.score}</span>
            <Timer ms={timeLeftMs} />
          </div>
        )}
      </header>

      {inGame && <MapBar levelIdx={state.levelIdx} phase={state.phase} />}

      <main>
        {state.phase === 'intro' && <Intro onStart={start} />}
        {state.phase === 'playing' && <Level state={state} onSubmit={submit} onHint={useHint} />}
        {state.phase === 'levelDone' && <LevelDone state={state} onNext={nextLevel} />}
        {(state.phase === 'won' || state.phase === 'timeup') && <EndScreen state={state} onRestart={reset} />}
      </main>

      {inGame && (
        <footer>
          <button
            className="link"
            onClick={() => window.confirm('Abandon this hunt and start over?') && reset()}
          >
            Restart game
          </button>
        </footer>
      )}
    </div>
  )
}
