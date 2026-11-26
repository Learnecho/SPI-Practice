// Tutorials: step-by-step guides for obtaining views, making measurements, and telling normal from abnormal.
// Original teaching text and simple schematic drawings only (no course or textbook material).
// Each entry: id, cat, title, sum, steps[], good[] (what a good image shows), pit[] (common mistakes),
// norm[] ([label, value]) optional, fig optional (LV key from labels.js or an inline SVG string),
// calc optional {inp:[[key,label,default]], f:function(v){return html}}, q: search word for related practice questions.
var TCAT=[["views","Getting the views"],["meas","How to measure"],["nva","Normal vs abnormal"]];
var TUT=[
// ---------- Views ----------
{id:"plax",cat:"views",title:"Parasternal long axis (PLAX)",q:"parasternal long",fig:"plax",
sum:"The first view of most studies. It shows the LV, LA, aortic root, aortic and mitral valves, and the RV outflow tract.",
steps:["Position the patient on the left side (left lateral decubitus), with the left arm raised above the head.","Place the transducer just left of the sternum, usually in the 3rd or 4th intercostal space.","Point the transducer marker toward the patient's right shoulder (about 10 o'clock).","Start with a depth of about 16 cm so you can see the descending aorta behind the LA, then reduce depth if possible.","Slide up or down one rib space to find the clearest window, then rock and tilt until the aortic and mitral valves both open in the same plane.","Rotate slightly so the septum and the posterior wall lie almost horizontal and parallel.","Record a 2–3 beat loop, then add color over the mitral and aortic valves."],
good:["The LV apex is not seen (it lies off the left side of the screen).","The septum and posterior wall are horizontal and parallel.","Both aortic and mitral leaflets are clearly seen opening and closing.","The aortic root and LA are lined up behind each other.","The descending aorta appears as a small circle behind the LA."],
pit:["A visible, rounded apex means the plane is too low or oblique, so LV size may be wrong.","Septum and posterior wall at an angle make linear measurements too large.","Too much depth makes the heart small and lowers the frame rate."]},
{id:"psax",cat:"views",title:"Parasternal short axis (PSAX) levels",q:"short-axis",
sum:"Shows the heart in cross section at four levels: aortic valve, mitral valve, papillary muscles and apex.",
steps:["Start from a good PLAX view.","Rotate the transducer about 90° clockwise so the marker points toward the patient's left shoulder (about 2 o'clock).","Tilt the beam up toward the right shoulder to see the aortic valve level: three cusps in the middle (the 'Mercedes-Benz' sign), RA on the left of the screen, RVOT and pulmonic valve curving over the top and right.","Tilt down toward the apex to see the mitral valve level, with both leaflets opening like a 'fish mouth'.","Tilt further to see both papillary muscles (at about 4 and 8 o'clock).","Slide one rib space down and tilt for the apical level, a small round LV without papillary muscles.","Record a loop at each level."],
good:["The LV is round, not oval, at the mitral and papillary levels.","At the aortic level, all three cusps are seen equally.","At the papillary level, both muscles are visible at about 4 and 8 o'clock."],
pit:["An oval LV means the plane is oblique: adjust the rotation.","Missing the apical level misses apical wall motion problems.","Too fast a sweep can miss small defects or masses."]},
{id:"a4c",cat:"views",title:"Apical four-chamber (A4C)",q:"four-chamber",
sum:"Shows all four chambers, both AV valves and the septum. It is the main view for LV and RV size, function, and Doppler of inflow.",
steps:["Keep the patient on the left side. Feel for the point of maximal impulse, usually near the 5th intercostal space at the midclavicular or anterior axillary line.","Place the transducer there, pointing toward the right shoulder, with the marker toward the patient's left (about 3 o'clock).","Slide toward the true apex: it is the spot where the LV looks longest and its tip is thin and barely moves.","Tilt and rotate until both AV valves and the crux are in view, with the septum vertical in the middle.","Adjust depth so the atria are fully in view.","Record a loop, then color over the mitral and tricuspid valves, then PW at the mitral tips and tissue Doppler at the annulus."],
good:["The LV is long and bullet-shaped with a thin, rounded apex.","The tricuspid valve is slightly closer to the apex than the mitral valve.","Both atria are fully seen.","The RV is no more than about two-thirds of the LV width."],
pit:["Foreshortening (a short, round LV) underestimates volumes and misses apical problems. Move one rib space down and more lateral.","If the LVOT appears, the transducer is tilted too far anteriorly (that is the five-chamber view).","If the coronary sinus runs across the bottom, the transducer is tilted posteriorly."]},
{id:"a2c",cat:"views",title:"Apical two- and three-chamber views",q:["two-chamber","three-chamber","apical long-axis"],
sum:"The A2C shows the LV anterior and inferior walls; the A3C (apical long axis) shows the anteroseptal and inferolateral walls with the LVOT and aortic valve.",
steps:["From a good A4C, keep the apex in the center of the screen.","Rotate counterclockwise about 60° until the RV and RA disappear. This is the A2C: LV, mitral valve, LA and often the LA appendage.","Continue rotating counterclockwise about another 60° until the LVOT and aortic valve appear. This is the A3C.","Adjust tilt so the apex stays long and thin in both views.","Record a loop in each view for biplane EF and wall motion."],
good:["A2C: no RV seen; inferior wall on the left of the screen, anterior wall on the right.","A3C: aortic valve and LVOT seen; inferolateral wall on the left, anteroseptal wall on the right.","LV length is similar (within about 10%) to the A4C length."],
pit:["Seeing part of the RV in the A2C means you have not rotated enough.","A shorter LV than in the A4C means foreshortening."]},
{id:"a5c",cat:"views",title:"Apical five-chamber (A5C)",q:["five-chamber","LVOT"],
sum:"Used for LVOT and aortic valve Doppler. It adds the LVOT and aortic valve to the four-chamber view.",
steps:["Start from a good A4C.","Tilt the transducer slightly anteriorly (the beam moves up toward the front of the chest).","Stop when the LVOT and aortic valve open in the center of the image.","Align the Doppler cursor parallel with flow through the LVOT and aortic valve.","Place the PW sample volume in the LVOT just before the valve (about 0.5–1 cm), then use CW through the valve."],
good:["The LVOT and aortic valve are in the center with flow nearly parallel to the beam.","The PW LVOT signal is smooth and laminar with a clear envelope."],
pit:["Placing the PW gate too close to the valve picks up flow acceleration and overestimates VTI.","An oblique angle underestimates velocities; try A3C and other windows too."]},
{id:"subc",cat:"views",title:"Subcostal views and the IVC",q:"subcostal",
sum:"Best for patients with poor chest windows, the atrial septum, pericardial effusion, and IVC size for RA pressure.",
steps:["Lay the patient flat on the back with knees bent to relax the abdomen.","Place the transducer just below the xiphoid, almost flat on the abdomen, aiming toward the left shoulder, marker to the patient's left.","Ask the patient to breathe in deeply and hold: the heart moves down into view.","Use the liver as a window; adjust depth to see all four chambers (subcostal four-chamber).","Rotate counterclockwise about 90° for short-axis views.","For the IVC, turn the beam toward the patient's right and find the IVC entering the RA. Measure about 1–2 cm from the RA junction, then ask the patient to sniff."],
good:["The liver is at the top of the screen, with the heart behind it.","The IVC is traced into the RA, with a hepatic vein joining near the junction.","The interatrial septum is nearly perpendicular to the beam."],
pit:["Mistaking the aorta for the IVC: the aorta pulses, does not change with breathing, and does not enter the RA.","Measuring the IVC at an angle overestimates its size.","In ventilated patients, IVC size does not predict RA pressure the same way."]},
{id:"ssn",cat:"views",title:"Suprasternal notch view",q:"suprasternal",
sum:"Shows the aortic arch and its branches, the descending aorta, and the right pulmonary artery. Used for coarctation and AR flow reversal.",
steps:["Lay the patient flat with a pillow under the shoulders so the neck extends; turn the head slightly to the left.","Place the transducer in the suprasternal notch, pointing down toward the heart.","Rotate until the arch appears with the ascending aorta on the left of the screen and the descending aorta on the right.","Find the three branches: brachiocephalic, left common carotid and left subclavian.","Use color, then PW or CW in the descending aorta."],
good:["The whole arch and the start of the descending aorta are seen.","The right pulmonary artery appears as a round structure below the arch."],
pit:["Pressing too hard is uncomfortable for the patient.","Not aligning Doppler with the descending aorta underestimates coarctation gradients."]},
// ---------- Measurements ----------
{id:"lvlin",cat:"meas",title:"LV dimensions and wall thickness",q:["LVIDd","wall thickness","relative wall","LV mass"],
sum:"Linear measurements from PLAX: septum (IVSd), LV internal diameter (LVIDd and LVIDs) and posterior wall (PWd).",
steps:["Get an on-axis PLAX view with the septum and posterior wall horizontal.","Freeze and scroll to end-diastole: the frame just after mitral valve closure (or the largest LV size, near the R wave).","Measure at the level of the mitral leaflet tips, perpendicular to the long axis of the LV.","Measure from the blood–tissue interface (inner edge): septum thickness, LV cavity, and posterior wall thickness.","Scroll to end-systole (smallest LV, just before mitral opening) and measure LVIDs.","Calculate relative wall thickness: RWT = 2 × PWd ÷ LVIDd."],
good:["Calipers are perpendicular to the walls, not at an angle.","RV trabeculations, false tendons and mitral chordae are not included in wall thickness."],
pit:["An oblique cut overestimates all dimensions.","Including RV muscle bands in the septum overestimates wall thickness and LV mass."],
norm:[["IVSd and PWd","About 6–10 mm"],["LVIDd (women)","About 38–52 mm"],["LVIDd (men)","About 42–58 mm"],["RWT","0.42 or less"]]},
{id:"ef",cat:"meas",title:"LV ejection fraction (biplane Simpson)",q:["ejection fraction","biplane","Simpson"],
sum:"The recommended 2D method for LV volumes and EF, using tracings from the apical four- and two-chamber views.",
steps:["Get non-foreshortened A4C and A2C views with the whole endocardium visible (use contrast if two or more segments are not seen).","In the A4C, freeze at end-diastole (largest LV) and trace the endocardium from one side of the mitral annulus to the other, keeping papillary muscles and trabeculations inside the cavity.","Close the trace with a straight line across the mitral annulus.","Trace again at end-systole (smallest LV).","Repeat in the A2C. The machine calculates EDV, ESV and EF.","Check that LV length in the two views is similar (within about 10%)."],
good:["The apex is thin and long, not round.","Traces follow the compact myocardium, not the outer trabeculations."],
pit:["Foreshortening underestimates volumes.","Tracing inside the trabeculations underestimates volume.","Using a frame that is not true end-systole overestimates ESV and lowers EF."],
norm:[["LVEF (men)","About 52–72%"],["LVEF (women)","About 54–74%"],["Mildly reduced","About 41–51% (men) / 41–53% (women)"],["Severely reduced","Under 30%"]],
calc:{inp:[["edv","EDV (mL)",120],["esv","ESV (mL)",50]],f:function(v){var sv=v.edv-v.esv,ef=sv/v.edv*100;return "Stroke volume <b>"+sv.toFixed(0)+" mL</b>, EF <b>"+ef.toFixed(0)+"%</b>"}}},
{id:"la",cat:"meas",title:"Left atrial volume",q:["LA volume","LAVI","left atrial volume"],
sum:"LA volume indexed to body surface area (LAVI) is the preferred measure of LA size.",
steps:["Use A4C and A2C views focused on the LA (not foreshortened; the LA should look longest).","Freeze at end-systole, the frame just before the mitral valve opens, when the LA is largest.","Trace the LA wall, starting and ending at the mitral annulus hinge points, closing the trace with a straight line across the annulus.","Leave out the LA appendage and pulmonary veins.","The machine calculates biplane volume. Divide by BSA for LAVI."],
good:["The LA is not cut off at the bottom of the screen.","The trace does not go into the pulmonary veins."],
pit:["Using LV-focused views can foreshorten the LA and underestimate volume."],
norm:[["LAVI normal","34 mL/m² or less"],["Mildly enlarged","35–41 mL/m²"],["Moderately enlarged","42–48 mL/m²"],["Severely enlarged","Over 48 mL/m²"]],
calc:{inp:[["vol","LA volume (mL)",60],["bsa","BSA (m²)",1.8]],f:function(v){var x=v.vol/v.bsa;return "LAVI <b>"+x.toFixed(0)+" mL/m²</b> — "+(x<=34?"normal":x<=41?"mildly enlarged":x<=48?"moderately enlarged":"severely enlarged")}}},
{id:"ava",cat:"meas",title:"Aortic valve area (continuity equation)",q:["aortic valve area","continuity","AVA","DVI"],
fig:'<svg class="dg" viewBox="0 0 440 250" role="img" aria-label="Schematic of the three measurements for the continuity equation"><text class="m" x="20" y="22">LV outflow tract</text><text class="m" x="300" y="22">Aorta</text><path class="b" d="M20 80 L190 80 M20 160 L190 160"/><path class="b" d="M190 80 L220 110 M190 160 L220 130"/><path class="b" d="M230 110 Q258 72 300 66 L430 66 M230 130 Q258 168 300 174 L430 174"/><text class="m" x="196" y="62">valve</text><path class="a" d="M150 80 L150 160"/><path class="a" d="M150 80 L150 44"/><text x="96" y="38">① LVOT diameter</text><path class="g" d="M20 120 L205 120"/><rect x="128" y="112" width="20" height="16" fill="none" stroke="var(--accent)" stroke-width="2"/><path class="a" d="M138 128 L138 196"/><text x="20" y="214">② LVOT VTI (PW gate)</text><path class="r" d="M215 120 L430 120"/><path class="r" d="M340 120 L340 196"/><text x="236" y="214">③ Aortic valve VTI (CW)</text><text class="m" x="20" y="240">AVA = LVOT area × ② ÷ ③</text></svg>',
sum:"AVA = (LVOT area × LVOT VTI) ÷ aortic valve VTI. It uses the principle that the same blood volume passes through the LVOT and the narrowed valve.",
steps:["LVOT diameter: in a zoomed PLAX view, measure in mid-systole, inner edge to inner edge, at or within about 0.5–1 cm of the valve, parallel to the aortic valve plane.","LVOT VTI: in the A5C (or A3C), place a PW sample volume in the LVOT at the same level as the diameter measurement. Trace the dense outer edge (modal velocity) of the signal.","Aortic valve VTI: use CW through the valve from several windows (apical, right parasternal, suprasternal), and trace the highest, clearest envelope.","LVOT area = 0.785 × diameter² (π × radius²).","AVA = LVOT area × LVOT VTI ÷ AV VTI.","Also calculate the dimensionless index (DVI) = LVOT VTI ÷ AV VTI, which does not need the diameter."],
good:["The LVOT PW signal is laminar with no aliasing.","The CW jet envelope is dense and complete.","In AF, average at least 5 beats."],
pit:["The diameter is squared, so a 1 mm error causes a large error in area. A diameter measured too small underestimates AVA.","Using only the apical window may miss the highest AS velocity.","A PW gate too close to the valve overestimates LVOT VTI and AVA."],
norm:[["Normal AVA","About 3–4 cm²"],["Severe AS","1.0 cm² or less (indexed 0.6 cm²/m² or less)"],["Severe AS DVI","0.25 or less"],["Severe AS velocity / gradient","4 m/s or more / 40 mmHg or more"]],
calc:{inp:[["d","LVOT diameter (cm)",2.0],["v1","LVOT VTI (cm)",20],["v2","AV VTI (cm)",80]],f:function(v){var a=0.785*v.d*v.d,ava=a*v.v1/v.v2,dvi=v.v1/v.v2;return "LVOT area <b>"+a.toFixed(2)+" cm²</b>, AVA <b>"+ava.toFixed(2)+" cm²</b>, DVI <b>"+dvi.toFixed(2)+"</b>"+(ava<=1||dvi<=0.25?" — in the severe range":"")}}},
{id:"asgrad",cat:"meas",title:"Aortic stenosis velocity and gradients",q:"aortic stenosis",
sum:"Peak velocity, peak gradient and mean gradient from CW Doppler through the aortic valve.",
steps:["Use CW Doppler from the apical (A5C or A3C) window first.","Then try right parasternal (patient on the right side, ideally with a pencil CW probe) and suprasternal windows.","Adjust scale and baseline so the jet fills about two-thirds of the display; lower the gain until the envelope is clean.","Measure peak velocity at the outer edge of the dense envelope, ignoring faint 'feathering'.","Trace the whole envelope to get the VTI and mean gradient (the machine averages instantaneous gradients).","Peak gradient = 4 × peak velocity²."],
good:["The highest clear velocity from any window is reported, along with which window it came from."],
pit:["Mistaking an MR jet for AS: MR starts earlier (during isovolumic contraction), lasts longer and is usually faster.","Missing the best window underestimates severity."],
norm:[["Normal peak velocity","Under about 2.5 m/s"],["Mild AS","2.6–2.9 m/s"],["Moderate AS","3.0–3.9 m/s, mean 20–39 mmHg"],["Severe AS","4.0 m/s or more, mean 40 mmHg or more"]],
calc:{inp:[["v","Peak velocity (m/s)",4.0]],f:function(v){return "Peak gradient <b>"+(4*v.v*v.v).toFixed(0)+" mmHg</b>"}}},
{id:"mva",cat:"meas",title:"Mitral valve area (MS)",q:"mitral stenosis",
sum:"Planimetry in PSAX and pressure half-time (PHT) from CW Doppler are the main methods. Also report the mean gradient and heart rate.",
steps:["Planimetry: in PSAX, sweep from the base to the leaflet tips and find the smallest opening in mid-diastole. Trace the inner edge of the orifice. (3D helps find the true tip level.)","PHT: from the apical view, use CW through the mitral valve. Measure the slope of the E wave from peak to the end of the slope.","MVA by PHT = 220 ÷ PHT.","Mean gradient: trace the CW mitral inflow envelope. Report the heart rate, because faster rates raise the gradient."],
good:["Planimetry plane is exactly at the leaflet tips.","The PHT slope is drawn along the main straight part of the deceleration, not the early steep part."],
pit:["Planimetry above the tips overestimates area.","PHT is unreliable right after balloon valvuloplasty, with significant AR, or with very stiff LVs."],
norm:[["Normal MVA","About 4–6 cm²"],["Severe MS","1.5 cm² or less"],["PHT in severe MS","About 150 ms or more"]],
calc:{inp:[["p","PHT (ms)",220]],f:function(v){var a=220/v.p;return "MVA <b>"+a.toFixed(2)+" cm²</b>"+(a<=1.5?" — severe MS range":"")}}},
{id:"rvsp",cat:"meas",title:"RV systolic pressure (RVSP)",q:"RVSP",
sum:"RVSP = 4 × (peak TR velocity)² + RA pressure. Without pulmonic stenosis, RVSP equals PA systolic pressure.",
steps:["Find the TR jet with color in the A4C, RV-focused view, parasternal RV inflow view and subcostal view.","Use CW aligned with the jet in the window that gives the highest clear velocity.","Measure the peak velocity at the edge of the dense envelope.","Estimate RA pressure from the IVC: 2.1 cm or less and collapses more than 50% with sniff → 3 mmHg; over 2.1 cm and collapses less than 50% → 15 mmHg; anything in between → 8 mmHg.","Add the two together."],
good:["A clear, complete TR envelope.","If the signal is faint, agitated saline can improve it."],
pit:["A faint or incomplete signal underestimates RVSP.","In severe free-flowing TR, the simplified Bernoulli equation can underestimate pressure."],
norm:[["TR velocity (low PH probability)","2.8 m/s or less"],["Intermediate","2.9–3.4 m/s"],["High","Over 3.4 m/s"]],
calc:{inp:[["v","TR peak velocity (m/s)",3.0],["ra","RA pressure (mmHg)",8]],f:function(v){return "RVSP <b>"+(4*v.v*v.v+v.ra).toFixed(0)+" mmHg</b>"}}},
{id:"rvfx",cat:"meas",title:"RV function: TAPSE, s′ and FAC",q:"TAPSE",
sum:"Simple measures of RV systolic function from the RV-focused apical four-chamber view.",
steps:["Get an RV-focused A4C, with the RV apex and free wall in full view.","TAPSE: place the M-mode cursor through the lateral tricuspid annulus, aligned with its motion. Measure how far the annulus moves toward the apex from end-diastole to peak systole.","s′: place a tissue Doppler sample at the lateral tricuspid annulus and measure the systolic peak.","FAC: trace the RV area at end-diastole and end-systole (trabeculations inside the cavity). FAC = (EDA − ESA) ÷ EDA."],
good:["The M-mode line is parallel to annular motion.","The whole RV free wall is visible."],
pit:["An angled cursor underestimates TAPSE.","TAPSE only reflects longitudinal function at one spot."],
norm:[["TAPSE","17 mm or more"],["RV s′","9.5 cm/s or more"],["RV FAC","35% or more"]]},
{id:"dia",cat:"meas",title:"Diastolic function (normal EF)",q:"diastolic",
sum:"The 2016 ASE/EACVI approach for patients with normal EF uses four variables.",
steps:["Measure mitral inflow E (PW at the leaflet tips, A4C).","Measure septal and lateral e′ with tissue Doppler at the mitral annulus; average them.","Calculate average E/e′.","Measure peak TR velocity.","Measure LAVI.","Count how many are abnormal: average E/e′ over 14; septal e′ under 7 or lateral e′ under 10 cm/s; TR over 2.8 m/s; LAVI over 34 mL/m².","More than half abnormal → diastolic dysfunction; less than half → normal; exactly half → indeterminate."],
good:["Doppler sample volumes are well placed with low wall filter for tissue Doppler.","E/A, deceleration time and pulmonary vein flow add supporting information."],
pit:["E/A alone cannot tell normal from pseudonormal filling.","The algorithm differs for reduced EF, AF and some conditions (e.g., MS, HCM)."],
calc:{inp:[["e","Mitral E (cm/s)",90],["es","Septal e′ (cm/s)",6],["el","Lateral e′ (cm/s)",8]],f:function(v){var r=v.e/((v.es+v.el)/2);return "Average E/e′ <b>"+r.toFixed(1)+"</b>"+(r>14?" — over 14 (abnormal)":" — 14 or less")}}},
{id:"pisa",cat:"meas",title:"MR severity by PISA",q:"PISA",
sum:"PISA estimates the effective regurgitant orifice area (EROA) and regurgitant volume.",
steps:["In the A4C, zoom on the mitral valve with color.","Shift the color baseline in the direction of the jet to lower the aliasing velocity to about 30–40 cm/s.","Freeze in mid-systole and measure the radius (r) from the first aliasing line to the leaflet orifice.","Flow rate = 2π × r² × aliasing velocity.","Measure the MR peak velocity and VTI with CW.","EROA = flow rate ÷ MR peak velocity. Regurgitant volume = EROA × MR VTI."],
good:["A clear hemispheric convergence zone.","The radius is measured along the line of the jet."],
pit:["Because r is squared, small errors matter.","PISA is less accurate for eccentric jets or non-round orifices."],
norm:[["Severe primary MR EROA","0.40 cm² or more"],["Severe regurgitant volume","60 mL or more"]],
calc:{inp:[["r","PISA radius (cm)",0.8],["va","Aliasing velocity (cm/s)",40],["vm","MR peak velocity (cm/s)",500],["vti","MR VTI (cm)",150]],f:function(v){var fl=2*Math.PI*v.r*v.r*v.va,er=fl/v.vm,rv=er*v.vti;return "Flow <b>"+fl.toFixed(0)+" mL/s</b>, EROA <b>"+er.toFixed(2)+" cm²</b>, RVol <b>"+rv.toFixed(0)+" mL</b>"}}},
{id:"sv",cat:"meas",title:"Stroke volume and cardiac output",q:"stroke volume",
sum:"SV = LVOT area × LVOT VTI. Cardiac output = SV × heart rate.",
steps:["Measure the LVOT diameter in zoomed PLAX (mid-systole).","Measure LVOT VTI with PW in the A5C at the same level.","SV = 0.785 × diameter² × VTI.","CO = SV × HR. Cardiac index = CO ÷ BSA."],
good:["The PW signal is laminar and the VTI is traced at the modal velocity."],
pit:["Errors in the diameter are squared."],
norm:[["LVOT VTI","About 18–22 cm"],["Stroke volume index","Over 35 mL/m²"],["Cardiac index","About 2.5–4.0 L/min/m²"]],
calc:{inp:[["d","LVOT diameter (cm)",2.0],["vti","LVOT VTI (cm)",20],["hr","Heart rate (bpm)",70],["bsa","BSA (m²)",1.8]],f:function(v){var sv=0.785*v.d*v.d*v.vti,co=sv*v.hr/1000;return "SV <b>"+sv.toFixed(0)+" mL</b>, CO <b>"+co.toFixed(1)+" L/min</b>, CI <b>"+(co/v.bsa).toFixed(1)+" L/min/m²</b>"}}},
// ---------- Normal vs abnormal ----------
{id:"nlv",cat:"nva",title:"LV size and function",q:["dilated cardiomyopathy","LV hypertrophy","ejection fraction"],
sum:"How to tell a normal LV from a dilated, hypertrophied or poorly contracting one.",
steps:["Look first: does the LV look normal size, with the walls thickening and moving inward evenly?","Measure LVIDd and biplane volumes, and compare with sex-specific normal values.","Measure wall thickness and RWT to classify geometry: normal, concentric remodeling, concentric hypertrophy or eccentric hypertrophy.","Measure EF and, if available, GLS."],
good:["Normal: walls 6–10 mm, normal cavity size, all segments thicken by more than about 30–40% in systole, EF in the normal range, GLS around −20%."],
pit:["Abnormal — dilated: large, round LV, thin walls, low EF (e.g., DCM).","Abnormal — hypertrophied: walls over about 11–12 mm; very thick (15 mm or more) suggests HCM.","Abnormal — infiltrative: thick walls with low ECG voltage and apical-sparing strain suggests amyloid.","A normal EF does not always mean normal function: GLS may already be reduced."]},
{id:"nwm",cat:"nva",title:"Wall motion: normal vs abnormal",q:"wall motion",
sum:"Judge each of the 17 segments by how much it thickens and moves inward in systole.",
steps:["Review PLAX, PSAX (all levels), A4C, A2C and A3C views.","For each segment, watch thickening, not just motion (scar can be pulled along by neighbors).","Score: 1 normal, 2 hypokinetic, 3 akinetic, 4 dyskinetic.","Match abnormal segments to coronary territories: LAD (anterior, anteroseptal, apex), RCA (inferior, inferoseptal), LCx (anterolateral, inferolateral)."],
good:["Normal: every segment thickens and moves inward together."],
pit:["Hypokinetic: reduced thickening.","Akinetic: little or no thickening (under about 10%).","Dyskinetic: the segment bulges outward in systole.","A thin, bright, akinetic segment suggests old scar.","An abnormality crossing coronary territories suggests Takotsubo or myocarditis.","LBBB and pacing cause abnormal septal motion with normal thickening."]},
{id:"nval",cat:"nva",title:"Valves: normal vs abnormal",q:"valve",
sum:"Quick checks for each valve in 2D, color and Doppler.",
steps:["Look at the leaflets: thin and mobile, or thick, calcified, restricted, prolapsing or flail?","Use color for regurgitation and for turbulent flow from stenosis.","Use PW or CW to measure velocities and gradients.","Grade regurgitation with several measures together: jet features, vena contracta, PISA, and flow reversal in veins or the aorta."],
good:["Normal aortic valve: three thin cusps, peak velocity under about 2.5 m/s, no more than trace AR.","Normal mitral valve: thin leaflets that open fully, E velocity about 0.6–1.3 m/s, trace MR can be normal.","Trace TR and PR are normal in most people."],
pit:["AS: thick, calcified cusps with reduced opening and velocity 2.6 m/s or more.","Rheumatic MS: thick tips, commissural fusion, diastolic doming ('hockey stick'), fish-mouth orifice in PSAX.","MR: prolapse (over 2 mm above the annulus in PLAX), flail tip, or tethered leaflets in a dilated LV.","AR: dilated root or abnormal cusps; severe if vena contracta is 0.6 cm or more or there is holodiastolic reversal in the descending aorta."]},
{id:"npe",cat:"nva",title:"Pericardial effusion and tamponade",q:"tamponade",
sum:"How to tell a normal pericardium from effusion, and effusion from tamponade.",
steps:["Look for an echo-free space around the heart in PLAX, PSAX, apical and subcostal views.","Measure its size in diastole: small under 10 mm, moderate 10–20 mm, large over 20 mm.","In PLAX, check where it lies: pericardial fluid is in front of the descending aorta; pleural fluid extends behind it.","Look for chamber collapse: RA in systole, RV in diastole.","Check the IVC: dilated and not collapsing suggests high RA pressure.","Measure respiratory variation in mitral inflow (more than about 25%) and tricuspid inflow (more than about 40%)."],
good:["Normal: only a thin line of fluid, and a small anterior clear space alone is often epicardial fat."],
pit:["Tamponade is a clinical diagnosis: echo signs support it. Tell the physician immediately.","Loculated effusion after surgery may compress one chamber only; TEE may be needed.","Patients with severe PH may not show RV collapse."]},
{id:"nrv",cat:"nva",title:"RV and pulmonary hypertension signs",q:"pulmonary hypertension",
sum:"Signs that the right heart is under strain, and how they separate pressure from volume overload.",
steps:["Compare RV size with the LV in A4C: a normal RV is smaller (about two-thirds of LV width).","Check RV function: TAPSE, s′, FAC.","Look at the septum in PSAX: flattening in systole means pressure overload; in diastole means volume overload.","Measure TR velocity, PA size, RVOT acceleration time and RA size.","Check the IVC and for pericardial effusion."],
good:["Normal: RV smaller than the LV, TAPSE 17 mm or more, round LV in PSAX, TR velocity 2.8 m/s or less."],
pit:["Acute PE: dilated RV with apical sparing (McConnell's sign), but TR velocity may be only mildly raised.","Chronic PH: thick RV wall (over 5 mm), high TR velocity, dilated PA.","ASD or anomalous veins: large RV with diastolic septal flattening — look carefully at the atrial septum."]},
{id:"ndop",cat:"nva",title:"Normal Doppler patterns",q:"mitral inflow",
sum:"What normal Doppler signals look like, so abnormal ones stand out.",
steps:["Mitral inflow (A4C, PW at tips): E wave then A wave above the baseline; in young adults E is larger than A.","LVOT (A5C, PW): smooth, narrow signal below the baseline in systole with a clear window.","Pulmonary veins (A4C, PW 1–2 cm into the vein): S and D waves above the baseline, small Ar wave below.","Hepatic veins (subcostal): S and D waves toward the heart (below the baseline), small reversals.","Tissue Doppler (mitral annulus): s′ above and e′ and a′ below the baseline in the apical view; e′ is larger than a′ in young adults."],
good:["Laminar signals have a clear 'window' under the envelope."],
pit:["Impaired relaxation: small E, large A, long deceleration time.","Restrictive filling: tall E, tiny A, short deceleration time.","Systolic reversal in pulmonary veins suggests severe MR; in hepatic veins suggests severe TR.","Spectral broadening filling the window suggests turbulence."]}
];
var tuId=null,tuCat="views",tuV={};
function tuIds(t){var w=[].concat(t.q).map(function(x){return x.toLowerCase()});return ids(function(q){var s=(q[1]+" "+q[4]).toLowerCase();return w.some(function(x){return s.indexOf(x)>=0})})}
function tuPractice(i){start(tuIds(TUT[i]))}
function tutorCard(){return '<div class="card"><h2>Tutorials</h2><p class="mute" style="margin:0 0 8px">Step-by-step guides: getting each view, making key measurements, and telling normal from abnormal.</p><button class="primary" onclick="tuId=null;go(\'tutor\')">Open tutorials</button></div>'}
function tuCalc(t){var c=t.calc,v={};c.inp.forEach(function(x){var e=document.getElementById("tu_"+x[0]);v[x[0]]=e?parseFloat(e.value):x[2]});var ok=Object.keys(v).every(function(k){return isFinite(v[k])&&v[k]>0});var o=document.getElementById("tu_out");if(o)o.innerHTML=ok?c.f(v):"Enter positive numbers."}
function tuList(items,cls){return '<ol class="tul'+(cls?" "+cls:"")+'">'+items.map(function(s){return '<li>'+s+'</li>'}).join("")+'</ol>'}
function tuUl(items){return '<ul class="tul">'+items.map(function(s){return '<li>'+s+'</li>'}).join("")+'</ul>'}
function tutor(){var h=nav();
if(!tuId){
h+='<div class="card"><h2>Tutorials</h2><p class="mute" style="margin:0">Pick a topic. Each guide has steps, what a good image looks like, common mistakes and normal values. Some have a calculator.</p><div class="seg">'+TCAT.map(function(c){return '<button class="'+(tuCat==c[0]?"on":"")+'" onclick="tuCat=\''+c[0]+'\';tutor()">'+c[1]+'</button>'}).join("")+'</div>'+
TUT.filter(function(t){return t.cat==tuCat}).map(function(t){return '<button class="ghost tuitem" onclick="tuId=\''+t.id+'\';tutor();window.scrollTo(0,0)"><b>'+t.title+'</b><span class="mute">'+t.sum+'</span></button>'}).join("")+'</div>';
A.innerHTML=h;return}
var t=TUT.filter(function(x){return x.id==tuId})[0];if(!t){tuId=null;tutor();return}
var idx=TUT.indexOf(t),same=TUT.filter(function(x){return x.cat==t.cat}),si=same.indexOf(t);
h+='<div class="card"><button class="ghost" onclick="tuId=null;tutor()">All tutorials</button><h2 style="margin-top:12px">'+t.title+'</h2><p>'+t.sum+'</p>';
if(t.fig){if(window.LV&&LV[t.fig]){var v=LV[t.fig];h+='<svg class="lv" viewBox="-40 0 480 345" role="img" aria-label="'+v.name+' schematic">'+v.svg+v.marks.map(function(m){return '<g class="mk"><circle cx="'+m[1]+'" cy="'+m[2]+'" r="13"/><text x="'+m[1]+'" y="'+(m[2]+4.5)+'" text-anchor="middle">'+m[0]+'</text></g>'}).join("")+'</svg><p class="mute" style="margin:0 0 6px">'+v.marks.map(function(m){return m[0]+'. '+m[3]}).join(' · ')+'</p><p class="mute">Simplified drawing, not a real scan.</p>'}else h+=t.fig}
h+='<h3 class="tuh">Steps</h3>'+tuList(t.steps);
h+='<h3 class="tuh">'+(t.cat=="nva"?"What normal looks like":"What a good image shows")+'</h3>'+tuUl(t.good);
h+='<h3 class="tuh">'+(t.cat=="nva"?"What abnormal looks like":"Common mistakes")+'</h3>'+tuUl(t.pit);
if(t.norm)h+='<h3 class="tuh">Reference values (adults)</h3><table class="tut">'+t.norm.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'}).join("")+'</table><p class="mute">Values follow common ASE guideline cutoffs; your lab may use slightly different ranges.</p>';
if(t.calc){h+='<h3 class="tuh">Try it</h3>'+t.calc.inp.map(function(x){return '<label class="tuin">'+x[1]+'<input id="tu_'+x[0]+'" type="number" inputmode="decimal" step="any" value="'+x[2]+'" oninput="tuCalc(TUT['+idx+'])"></label>'}).join("")+'<div class="exp good" id="tu_out" aria-live="polite"></div>'}
if(t.q&&window.ids){var n=tuIds(t).length;if(n)h+='<button class="primary" onclick="tuPractice('+idx+')">Practice related questions ('+n+')</button>'}
if(t.fig=="plax"&&window.LV)h+='<button class="ghost" style="width:100%" onclick="lvId=\'plax\';lvAns={};lvChecked=false;go(\'label\')">Label this view</button>';
h+='<div class="row">'+(si>0?'<button class="ghost" onclick="tuId=\''+same[si-1].id+'\';tutor();window.scrollTo(0,0)">← '+same[si-1].title+'</button>':'<span></span>')+(si<same.length-1?'<button class="ghost" onclick="tuId=\''+same[si+1].id+'\';tutor();window.scrollTo(0,0)">'+same[si+1].title+' →</button>':'')+'</div></div>';
A.innerHTML=h;if(t.calc)tuCalc(t)}
