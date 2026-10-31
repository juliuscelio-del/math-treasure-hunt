import { useEffect, useRef, useState } from 'react'
import { GAME } from '../config'
import { LEVELS } from '../data/levels'

export default function Level({ state, onSubmit, onHint }) {
  const level = LEVELS[state.levelIdx]
  const question = level.questions[state.qIdx]
  const [value, setValue] = useState('')
  const [feedback, setFeedback] = useState(null) // 'wrong' | null
  const inputRef = useRef(null)

  // reset the box whenever the question changes
  useEffect(() => {
    setValue('')
    setFeedback(null)
    inputRef.current?.focus()
  }, [state.levelIdx, state.qIdx])

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    const ok = onSubmit(value)
    if (!ok) {
      setFeedback('wrong')
      setValue('')
      inputRef.current?.focus()
    }
  }

  return (
    <>
      <div className="card" style={{ '--c': level.color }}>
        <div className="level-head">
          <span className="level-emoji">{level.emoji}</span>
          <div>
            <div className="eyebrow">
              Level {level.id} of {LEVELS.length} · {level.topic}
            </div>
            <h2>{level.name}</h2>
          </div>
          <button className="btn ghost small print-btn" onClick={() => window.print()}>
            🖨️ Print worksheet
          </button>
        </div>

        {state.qIdx === 0 && <p className="story">{level.story}</p>}

        <div className="dots">
          {level.questions.map((_, i) => (
            <span key={i} className={`dot ${i < state.qIdx ? 'done' : ''} ${i === state.qIdx ? 'now' : ''}`} />
          ))}
        </div>

        <div className="question">
          <div className="eyebrow">
            Question {state.qIdx + 1} of {level.questions.length}
          </div>
          <p className="q-text">{question.q}</p>
        </div>

        <form onSubmit={handleSubmit} className="answer-row">
          <input
            ref={inputRef}
            className={`input ${feedback === 'wrong' ? 'shake' : ''}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Your answer"
            inputMode="decimal"
            autoComplete="off"
          />
          {question.unit && <span className="unit">{question.unit}</span>}
          <button className="btn primary" type="submit">
            Check
          </button>
        </form>

        {feedback === 'wrong' && (
          <p className="feedback wrong">Not quite! −{GAME.wrongPenaltySeconds}s. Try again.</p>
        )}

        <div className="hint-row">
          {state.hintShown ? (
            <p className="hint">💡 {question.hint || 'Read the question slowly and break it into smaller steps.'}</p>
          ) : (
            <button className="btn ghost small" onClick={onHint}>
              💡 Use a hint (−{GAME.hintPenaltySeconds}s)
            </button>
          )}
        </div>
      </div>

      {/* Printable worksheet: hidden on screen, shown only when printing */}
      <div className="print-sheet">
        <h1>
          {GAME.title} — Level {level.id}: {level.name}
        </h1>
        <p>
          Topic: {level.topic} &nbsp;|&nbsp; Name: ______________________ &nbsp;|&nbsp; Date: ____________
        </p>
        <ol>
          {level.questions.map((q, i) => (
            <li key={i}>
              <div>{q.q}</div>
              <div className="work-space">Answer: ____________________ {q.unit || ''}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
