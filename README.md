# Math Treasure Hunt 🏴‍☠️

A 60-minute, level-based math adventure built with React + Vite.

## Run it

```bash
npm install
npm run dev      # play locally at http://localhost:5173
npm run build    # production build in /dist (host anywhere)
```

## Where to edit things

| I want to…                                   | Edit                       |
| -------------------------------------------- | -------------------------- |
| Change total time, penalties, points         | `src/config.js`            |
| Add / change questions, levels, stories      | `src/data/levels.js`       |
| Change how answers are checked               | `src/checkAnswer.js`       |
| Change game rules / flow (scoring, phases)   | `src/hooks/useGame.js`     |
| Change screens                               | `src/components/*.jsx`     |
| Change colors, fonts, layout                 | `src/styles.css`           |

## Tips

- **Add a level:** copy one object in `LEVELS` and change the content. The map bar,
  progress dots and worksheet update automatically. Keep roughly 8–10 minutes of
  work per level for a 60-minute game.
- **Fractions & decimals:** `"3/4"`, `"0.75"` and `.75` are all accepted for `answer: '3/4'`.
- **Text answers:** non-numeric answers are compared case-insensitively.
- **Printable worksheets:** the "Print worksheet" button prints the current level's questions.
- **Resetting saved progress:** progress is stored in the browser. Change `saveKey` in
  `src/config.js` to invalidate everyone's old saves after you edit questions.
