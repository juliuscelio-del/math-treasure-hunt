// ─── Game settings: tweak these without touching any other code ───
export const GAME = {
  title: 'The Lost Treasure of Numeria',
  totalMinutes: 60,          // total time to finish the whole hunt
  wrongPenaltySeconds: 10,   // time lost for each wrong answer
  hintPenaltySeconds: 30,    // time lost when a hint is used
  pointsPerQuestion: 10,
  bonusPointsPerMinuteLeft: 5, // bonus if the treasure is found
  saveKey: 'math-treasure-hunt-save-v1', // change this to reset everyone's saved progress
}
