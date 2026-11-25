# Learn Echo (repo: SPI-Practice)

Static web app served by GitHub Pages and installed on the owner's iPhone Home Screen.

## Every change: bump the version
The app checks `version.json` when it opens and reloads itself if a newer version exists.
For any change to index.html, questions.js, echo-images.js or labels.js:
1. Increase `v` in `version.json` by 1.
2. Set `var APPV=` in index.html to the same number.
3. Set the `?v=` on the script tags in index.html to the same number.

Without this, the owner's phone keeps showing the old version.

## Images
Echo images live in `img/` and are listed in `echo-images.js` (EIMG array; `IMG` is already used by questions.js for diagrams). Only add de-identified images: crop off names, dates, MRNs.

## Features
- Today's 20: mixes due reviews (~60%) with unseen questions.
- Smart review: spaced repetition in D.stats (b = box, d = due day number). Gaps 1, 2, 4, 7, 14, 30 days; a miss is due again the same day.
- Exam simulation: timed test mode, ~65.5 s per question, score by topic.
- My images: user uploads stored on the device in IndexedDB (`spi_images`), not in the text backup.
- Label the view: labels.js holds original schematic SVG views (LV object: svg + numbered marks). Never copy course or textbook diagrams into this public repo; draw original ones.
