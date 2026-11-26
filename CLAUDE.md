# Learn Echo (repo: SPI-Practice)

Static web app served by GitHub Pages and installed on the owner's iPhone Home Screen.

## Every change: bump the version
The app checks `version.json` when it opens and reloads itself if a newer version exists.
For any change to index.html, questions.js, q/*.js, bank.js, echo-images.js, labels.js or anatomy.js:
1. Increase `v` in `version.json` by 1.
2. Set `var APPV=` (top of the main inline script) in index.html to the same number.
3. Set the `?v=` on the script tags in index.html to the same number.

Without this, the owner's phone keeps showing the old version.

## Image library
Goal: ~100 normal and 300+ abnormal echo images.
- Data: `bank.js` (EIMG array; `IMG` is already used by questions.js for diagrams). Fields: src, th, view (PLAX, PSAX, A4C, A5C, A2C, A3C, Subcostal, Suprasternal), cat ("normal"/"abnormal"), noquiz (1 = leave out of the "Which view?" image quiz, e.g. spectral Doppler or M-mode), dx ("Normal" or the confirmed diagnosis), credit (source and permission), title, tag, notes[], qs[].
- Logic: `echo-images.js` (gallery with filters, detail view, image quiz, plus on-device "My images").
- Add images with `tools/add_image.py SOURCE echoN --crop TOP BOTTOM LEFT RIGHT`, which writes the full image and a thumbnail and strips EXIF.
- Only de-identified images: crop off names, dates, MRNs, hospital/college labels.
- Abnormal images need a confirmed diagnosis from the owner (report or instructor). Do not guess a diagnosis.
- Abnormal patient images come from a partner hospital in Afghanistan with permission; set credit to that source. Never add course or textbook images.

## Features
- Today's 20: mixes due reviews (~60%) with unseen questions.
- Smart review: spaced repetition in D.stats (b = box, d = due day number). Gaps 1, 2, 4, 7, 14, 30 days; a miss is due again the same day.
- Exam simulation: timed test mode, ~65.5 s per question, score by topic.
- My images: user uploads stored on the device in IndexedDB (`spi_images`), not in the text backup.
- Label the view: labels.js holds original schematic SVG views (LV object: svg + numbered marks). Never copy course or textbook diagrams into this public repo; draw original ones.
- Heart anatomy: anatomy.js, an original schematic frontal heart (AN array: key, name, SVG, description). Learn mode (tap for info) and quiz mode (tap the named structure, 10 per round).
- Animate mode (anatomy.js, ANI/ROUTES): one cardiac cycle with phase model phase(f); chambers scale, valves open via stroke-dasharray, blood particles move along polyline routes and queue at closed valves; synced ECG marker.

## Question bank (goal: 3,000)
- Progress is stored by question index, so question files are APPEND-ONLY: never reorder, delete or insert into an existing file. Fix a question by editing it in place. New files go at the END of the q/ script list in index.html.
- Order: questions.js (original 99), then q/*.js files, each doing Q.push(...).
- Write new batches as Python sources in tools/qsrc/<name>.py (topic, stem, correct, [3 distractors], explanation, "F"/"C"), then build with `python3 tools/build_questions.py <module> <q-file-name>`; it shuffles answer positions with a fixed seed.
- Row format: [topic, stem, options, answerIndex, explanation, 1 (= "New, unchecked" until owner reviews), "C" for Challenge].
- Weighting follows the ARDMS content outlines (BP object in index.html maps each topic name to an exam domain; keep topic names consistent with it):
  - SPI (V24.1), target 1,000: Perform exams 23% (Waves, Physics, Attenuation, Artifacts, Safety, Patient care) = 230; Transducers 7% = 70; Optimize images 26% (Resolution, Instrumentation) = 260; Doppler 34% (Doppler, Hemodynamics) = 340; Clinical safety & QA 10% (Quality assurance) = 100.
  - Adult Echo (V24.2), target 2,000: Anatomy & physiology 15% (Anatomy, Physiology) = 300; Pathology 40% (Coronary & wall motion, Transplant & devices, Valve disease, Cardiomyopathy, Pericardial disease, Congenital, Masses, Aorta) = 800; Clinical care & safety 11% (Clinical care) = 220; Measurements, maneuvers & views 25% (Echo views, Measurements) = 500; Instrumentation, optimization & contrast 9% (Echo instrumentation, Contrast) = 180.
  - Exam simulation draws questions by these weights; the Progress tab shows bank coverage against each target. Fill the biggest gaps first.
- Batches done: spi_doppler (107, Doppler + Hemodynamics); spi_transducers (102, Transducers + Resolution); spi_waves (96, Waves/pulsed echo + Physics + Attenuation); spi_instrument (92, Instrumentation + Artifacts).
