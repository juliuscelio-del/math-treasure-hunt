// ─── All level content lives here. Add, remove or reorder levels freely. ───
//
// Each level:  id, name, emoji, color, topic, story, treasure { name, emoji }, questions[]
// Each question:
//   q       – the question text
//   answer  – the correct answer (number or string; fractions like "3/4" are fine)
//   alt     – (optional) array of other accepted answers
//   hint    – (optional) shown when the player spends a hint
//   unit    – (optional) small label shown next to the input, e.g. "cm²"
//
// Numeric answers are compared as numbers, so "3/4", "0.75" and ".75" all match.

export const LEVELS = [
  {
    id: 1,
    name: 'Sandy Shore',
    emoji: '🏖️',
    color: '#f4c95d',
    topic: 'Addition & Subtraction',
    story:
      'Your ship washes up on a sandy beach. A weathered bottle holds the first clue: solve the sums to find the Captain’s Compass.',
    treasure: { name: 'Captain’s Compass', emoji: '🧭' },
    questions: [
      { q: '245 + 378 = ?', answer: 623, hint: 'Add the ones first, then tens, then hundreds. Remember to carry.' },
      { q: '902 − 457 = ?', answer: 445, hint: 'Borrow from the hundreds to subtract the tens.' },
      { q: '1,250 + 875 = ?', answer: 2125, hint: '1,250 + 800 = 2,050, then add 75.' },
      { q: '3,000 − 1,468 = ?', answer: 1532, hint: 'Think: 3,000 − 1,500 = 1,500, then add back 32.' },
      {
        q: 'A pirate has 586 coins and finds 247 more. He then gives 150 coins to his crew. How many coins does he have now?',
        answer: 683,
        hint: 'Add first (586 + 247), then subtract 150.',
      },
    ],
  },
  {
    id: 2,
    name: 'Jungle Trail',
    emoji: '🌴',
    color: '#6cc070',
    topic: 'Multiplication',
    story:
      'Vines block the path! Multiply your way through the jungle to claim the Emerald Map Piece.',
    treasure: { name: 'Emerald Map Piece', emoji: '🗺️' },
    questions: [
      { q: '12 × 8 = ?', answer: 96, hint: '10 × 8 = 80, and 2 × 8 = 16.' },
      { q: '35 × 6 = ?', answer: 210, hint: '30 × 6 = 180, and 5 × 6 = 30.' },
      { q: '24 × 15 = ?', answer: 360, hint: '24 × 10 = 240, 24 × 5 = 120.' },
      { q: '7 × 9 × 3 = ?', answer: 189, hint: 'Do 7 × 9 = 63 first, then × 3.' },
      {
        q: '8 monkeys each hold 14 bananas. How many bananas are there in total?',
        answer: 112,
        hint: '8 × 14 = 8 × 10 + 8 × 4.',
      },
    ],
  },
  {
    id: 3,
    name: 'Crystal Cave',
    emoji: '🦇',
    color: '#8fa8ff',
    topic: 'Division',
    story:
      'Deep inside the cave, glowing crystals hide the Sapphire Key. Divide the gems to light the way.',
    treasure: { name: 'Sapphire Key', emoji: '🗝️' },
    questions: [
      { q: '144 ÷ 12 = ?', answer: 12, hint: '12 × 12 is a square number you may know!' },
      { q: '252 ÷ 6 = ?', answer: 42, hint: '6 × 40 = 240. How many more 6s fit in 12?' },
      { q: '1,000 ÷ 8 = ?', answer: 125, hint: 'Half of 1,000 is 500, half of that is 250, half again is…' },
      { q: '156 ÷ 4 = ?', answer: 39, hint: 'Halve it twice: 156 → 78 → …' },
      {
        q: '95 gems are shared equally among 7 pirates. How many gems are left over?',
        answer: 4,
        hint: '7 × 13 = 91. What is 95 − 91?',
      },
    ],
  },
  {
    id: 4,
    name: 'Misty Mountain',
    emoji: '⛰️',
    color: '#b79cf2',
    topic: 'Fractions & Decimals',
    story:
      'A cold wind howls on the peak. Solve the mountain spirit’s riddles to receive the Silver Amulet. (Fractions like 3/4 or decimals are both fine.)',
    treasure: { name: 'Silver Amulet', emoji: '🔮' },
    questions: [
      { q: '1/2 + 1/4 = ?', answer: '3/4', alt: ['0.75'], hint: 'Change 1/2 into fourths first.' },
      { q: 'What is 3/5 of 40?', answer: 24, hint: 'Find 1/5 of 40 first, then multiply by 3.' },
      { q: '0.6 + 0.75 = ?', answer: 1.35, hint: 'Line up the decimal points: 0.60 + 0.75.' },
      { q: '5.2 − 2.85 = ?', answer: 2.35, hint: 'Write 5.2 as 5.20 before subtracting.' },
      { q: 'What is 3/4 of 36?', answer: 27, hint: '36 ÷ 4 = 9. Now multiply by 3.' },
    ],
  },
  {
    id: 5,
    name: 'Ancient Ruins',
    emoji: '🏛️',
    color: '#e8946a',
    topic: 'Patterns & Algebra',
    story:
      'Stone tablets cover the crumbling walls. Crack the patterns to unlock the Golden Crown.',
    treasure: { name: 'Golden Crown', emoji: '👑' },
    questions: [
      { q: 'What comes next?  3, 6, 12, 24, ?', answer: 48, hint: 'Each number is multiplied by the same amount.' },
      { q: 'x + 17 = 52.  What is x?', answer: 35, hint: 'Subtract 17 from both sides.' },
      { q: '4n = 76.  What is n?', answer: 19, hint: 'Divide both sides by 4.' },
      { q: '2x + 5 = 21.  What is x?', answer: 8, hint: 'Subtract 5, then divide by 2.' },
      {
        q: 'What comes next?  5, 8, 13, 20, 29, ?',
        answer: 40,
        hint: 'Look at the gaps: 3, 5, 7, 9… what gap comes next?',
      },
    ],
  },
  {
    id: 6,
    name: 'Treasure Vault',
    emoji: '🏴‍☠️',
    color: '#ff7a7a',
    topic: 'Geometry & Mixed Challenge',
    story:
      'The final vault door has six locks! Solve the last challenges to open the Great Treasure Chest.',
    treasure: { name: 'Great Treasure Chest', emoji: '💰' },
    questions: [
      { q: 'A rectangle is 12 cm long and 7 cm wide. What is its perimeter?', answer: 38, unit: 'cm', hint: 'Perimeter = 2 × (length + width).' },
      { q: 'A rectangle is 9 m by 6 m. What is its area?', answer: 54, unit: 'm²', hint: 'Area = length × width.' },
      { q: 'A triangle has base 10 cm and height 8 cm. What is its area?', answer: 40, unit: 'cm²', hint: 'Area = ½ × base × height.' },
      { q: 'Two angles of a triangle are 65° and 55°. What is the third angle?', answer: 60, unit: '°', hint: 'Angles in a triangle add up to 180°.' },
      { q: '(6 + 4) × 5 − 18 ÷ 3 = ?', answer: 44, hint: 'Brackets first, then × and ÷, then −.' },
    ],
  },
]
