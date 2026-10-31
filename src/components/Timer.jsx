export function formatTime(ms) {
  const total = Math.ceil(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function Timer({ ms }) {
  const low = ms < 5 * 60 * 1000
  return <div className={`timer ${low ? 'low' : ''}`}>⏱ {formatTime(ms)}</div>
}
