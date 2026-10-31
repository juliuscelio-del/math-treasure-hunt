// Turns "1,250", " 3/4 ", "0.75", ".5" into a number (or null if it isn't one).
export function toNumber(input) {
  const s = String(input).trim().replace(/,/g, '').replace(/\s+/g, '')
  if (s === '') return null
  if (/^-?\d*\.?\d+$/.test(s)) return parseFloat(s)
  const m = s.match(/^(-?\d+)\/(\d+)$/)
  if (m && Number(m[2]) !== 0) return Number(m[1]) / Number(m[2])
  return null
}

export function isCorrect(input, question) {
  const accepted = [question.answer, ...(question.alt || [])]
  const given = toNumber(input)
  return accepted.some((a) => {
    const target = toNumber(a)
    if (given !== null && target !== null) return Math.abs(given - target) < 1e-9
    return String(input).trim().toLowerCase() === String(a).trim().toLowerCase()
  })
}
