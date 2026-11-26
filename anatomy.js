// Interactive heart anatomy: original schematic frontal view. Tap to learn, or quiz.
var AN=[
["svc","Superior vena cava",'<path d="M94 30 H124 V138 H94 Z"/>',"Brings deoxygenated blood from the head, neck and arms into the top of the right atrium. Seen in the subcostal and suprasternal views."],
["ivc","Inferior vena cava",'<path d="M78 222 L110 226 L110 310 H78 Z"/>',"Brings deoxygenated blood from the lower body into the right atrium. Measured in the subcostal view: size and collapse with a sniff estimate right atrial pressure."],
["ra","Right atrium",'<path d="M66 132 Q58 205 98 236 L170 236 Q182 170 152 124 Q110 108 66 132 Z"/>',"Receives blood from the SVC, IVC and coronary sinus. Seen best in the apical four-chamber and subcostal views."],
["rv","Right ventricle",'<path d="M96 250 L204 242 Q224 290 246 338 Q150 322 96 250 Z"/>',"The most anterior chamber, triangular and trabeculated, with a moderator band. Pumps blood to the lungs through the pulmonic valve."],
["ivs","Interventricular septum",'<path d="M206 241 L234 229 L264 342 L248 339 Z"/>',"The muscular wall between the ventricles. Watch its motion: flattening suggests RV pressure or volume overload."],
["lv","Left ventricle",'<path d="M236 228 L302 210 Q344 262 302 348 Q278 354 266 342 Z"/>',"The thick-walled main pumping chamber. It forms the cardiac apex and pumps blood into the aorta."],
["la","Left atrium",'<path d="M196 140 Q228 112 292 128 Q308 168 292 200 L238 212 Q204 190 196 140 Z"/>',"The most posterior chamber. Receives oxygenated blood from the four pulmonary veins. Its volume is measured at end-systole."],
["pv","Pulmonary veins",'<path d="M290 140 H340 V152 H292 Z M292 172 H338 V184 H290 Z"/>',"Four veins that bring oxygenated blood from the lungs into the left atrium. Their Doppler pattern helps judge LA pressure."],
["ao","Aorta",'<path d="M196 220 V76 Q196 28 262 28 Q334 28 334 80 V132 H310 V84 Q310 52 262 52 Q222 52 222 78 V220 Z"/>',"Carries oxygenated blood from the LV to the body. The root, ascending aorta and arch are seen in PLAX and the suprasternal view."],
["pa","Pulmonary artery",'<path d="M158 262 L192 256 L262 112 L306 98 L300 84 L238 100 Z"/>',"Arises from the RV outflow tract, in front of the aorta, and carries deoxygenated blood to the lungs. Seen in the PSAX view at the aortic valve level."],
["tv","Tricuspid valve",'<path class="vl" d="M100 242 L156 241"/>',"Between the right atrium and right ventricle. It has three leaflets and sits slightly closer to the apex than the mitral valve."],
["mv","Mitral valve",'<path class="vl" d="M238 216 L298 206"/>',"Between the left atrium and left ventricle. It has two leaflets, anterior and posterior, held by chordae to the papillary muscles."],
["avl","Aortic valve",'<path class="vl" d="M197 222 L221 222"/>',"Between the LV outflow tract and the aorta. It has three cusps: right, left and non-coronary."],
["pvl","Pulmonic valve",'<path class="vl" d="M194 202 L216 202"/>',"Between the RV outflow tract and the pulmonary artery. The most anterior valve."],
["mb","Moderator band",'<path class="ln2" d="M140 286 L222 300"/>',"A muscle bundle crossing the RV near its apex, carrying part of the right bundle branch. It helps you tell the RV from the LV."],
["pm","Papillary muscles",'<path d="M272 300 Q284 276 296 300 Z M250 318 Q262 296 272 320 Z"/>',"Muscles in the LV wall that anchor the mitral chordae. The posteromedial one usually has a single blood supply, so it ruptures more often after MI."]
];
var anMode="learn",anSel=null,anQ=null;
function anSvg(){return '<svg class="an" viewBox="40 16 320 368" role="img" aria-label="Schematic heart in frontal view. Tap a structure.">'+AN.map(function(a){var c="ap "+a[0]+(anSel==a[0]?" on":"")+(anQ&&anQ.flash==a[0]?" "+anQ.fc:"");return '<g class="'+c+'" onclick="anTap(\''+a[0]+'\')">'+a[2]+'</g>'}).join("")+'<text x="56" y="378" class="ant">Patient\'s right</text><text x="344" y="378" text-anchor="end" class="ant">Patient\'s left</text></svg>'}
function anFind(k){for(var i=0;i<AN.length;i++)if(AN[i][0]==k)return AN[i]}
function anTap(k){var seg=function(m){return '<div class="seg"><button class="'+(m=="learn"?"on":"")+'" onclick="anLearn()">Learn</button><button class="'+(m=="quiz"?"on":"")+'" onclick="anStart()">Quiz me</button><button class="'+(m=="anim"?"on":"")+'" onclick="anAnim()">Animate</button></div>'};
if(anMode=="anim"){cancelAnimationFrame(ANI.raf);A.innerHTML=nav()+'<div class="card"><button class="ghost" onclick="go(\'images\')">Back to images</button><h2 style="margin-top:12px">Heart anatomy</h2><p class="mute" style="margin:0">One heartbeat, live: chambers squeeze, valves open and close, and blood moves. Blue is deoxygenated, red is oxygenated.</p>'+seg("anim")+'<div class="row" style="margin-top:0"><button class="ghost" id="apb" onclick="aniToggle()">'+(ANI.play?"Pause":"Play")+'</button><button class="ghost" onclick="aniStep()">Next phase</button></div><div class="spd seg"><button data-s="0.25" class="'+(ANI.spd==0.25?"on":"")+'" onclick="aniSpeed(0.25)">Slow</button><button data-s="0.45" class="'+(ANI.spd==0.45?"on":"")+'" onclick="aniSpeed(0.45)">Medium</button><button data-s="1" class="'+(ANI.spd==1?"on":"")+'" onclick="aniSpeed(1)">60 bpm</button></div><div class="exp good" style="min-height:132px"><strong id="phn"></strong><div id="phd"></div></div>'+aniSvg()+'</div>';aniInit();ANI.last=0;ANI.raf=requestAnimationFrame(aniFrame);return}
if(anMode=="learn"){anSel=k;anatomy();return}
if(!anQ||anQ.done||anQ.lock)return;var t=anQ.list[anQ.i],ok=k==t;if(ok)anQ.sc++;anQ.flash=ok?k:t;anQ.fc=ok?"good":"miss";anQ.last=ok?"Correct: "+anFind(t)[1]+".":"Not quite. That was the "+anFind(k)[1].toLowerCase()+". The "+anFind(t)[1].toLowerCase()+" is highlighted.";anQ.lock=1;anatomy();setTimeout(function(){anQ.lock=0;anQ.flash=null;anQ.i++;if(anQ.i>=anQ.list.length)anQ.done=1;if(view=="anatomy")anatomy()},ok?900:1800)}
function anStart(){anMode="quiz";anSel=null;anQ={list:shuffle(AN.map(function(a){return a[0]})).slice(0,10),i:0,sc:0};anatomy()}
function anLearn(){anMode="learn";anQ=null;anatomy()}
function anatomy(){var info,head;
var seg=function(m){return '<div class="seg"><button class="'+(m=="learn"?"on":"")+'" onclick="anLearn()">Learn</button><button class="'+(m=="quiz"?"on":"")+'" onclick="anStart()">Quiz me</button><button class="'+(m=="anim"?"on":"")+'" onclick="anAnim()">Animate</button></div>'};
if(anMode=="anim"){cancelAnimationFrame(ANI.raf);A.innerHTML=nav()+'<div class="card"><button class="ghost" onclick="go(\'images\')">Back to images</button><h2 style="margin-top:12px">Heart anatomy</h2><p class="mute" style="margin:0">One heartbeat, live: chambers squeeze, valves open and close, and blood moves. Blue is deoxygenated, red is oxygenated.</p>'+seg("anim")+'<div class="row" style="margin-top:0"><button class="ghost" id="apb" onclick="aniToggle()">'+(ANI.play?"Pause":"Play")+'</button><button class="ghost" onclick="aniStep()">Next phase</button></div><div class="spd seg"><button data-s="0.25" class="'+(ANI.spd==0.25?"on":"")+'" onclick="aniSpeed(0.25)">Slow</button><button data-s="0.45" class="'+(ANI.spd==0.45?"on":"")+'" onclick="aniSpeed(0.45)">Medium</button><button data-s="1" class="'+(ANI.spd==1?"on":"")+'" onclick="aniSpeed(1)">60 bpm</button></div><div class="exp good" style="min-height:132px"><strong id="phn"></strong><div id="phd"></div></div>'+aniSvg()+'</div>';aniInit();ANI.last=0;ANI.raf=requestAnimationFrame(aniFrame);return}
if(anMode=="learn"){var a=anSel&&anFind(anSel);info=a?'<div class="exp good" style="margin-top:0"><strong>'+a[1]+'.</strong> '+a[3]+'</div>':'<p class="mute">Tap any chamber, valve or vessel to learn about it.</p>';head=seg("learn")}
else{head=seg("quiz");
info=anQ.done?'<div class="exp '+(anQ.sc>=8?"good":"miss")+'" style="margin-top:0"><strong>'+anQ.sc+' of '+anQ.list.length+' correct.</strong> '+(anQ.sc>=8?"Great work.":"Switch to Learn to review, then try again.")+'</div><button class="primary" onclick="anStart()">Quiz again</button>':'<p style="font-size:18px;margin:0 0 6px"><strong>Tap the '+anFind(anQ.list[anQ.i])[1].toLowerCase()+'</strong></p><p class="mute" style="margin:0">Question '+(anQ.i+1)+' of '+anQ.list.length+' · Score '+anQ.sc+'</p>'+(anQ.lock&&anQ.last?'<div class="exp '+anQ.fc+'">'+anQ.last+'</div>':'')}
A.innerHTML=nav()+'<div class="card"><button class="ghost" onclick="go(\'images\')">Back to images</button><h2 style="margin-top:12px">Heart anatomy</h2><p class="mute" style="margin:0">A simplified front view, as if facing the patient. Right heart in blue, left heart in red.</p>'+head+info+anSvg()+'</div>'}
function anatomyCard(){return '<div class="card"><h2>Heart anatomy</h2><p class="mute" style="margin:0 0 8px">Tap chambers, valves and vessels to learn them, then quiz yourself.</p><button class="primary" onclick="anMode=\'learn\';anSel=null;anQ=null;view=\'anatomy\';draw()">Open heart anatomy</button></div>'}

// ---- Live animation: beating heart, valves and blood flow through one cardiac cycle ----
var ANI={on:false,raf:0,t0:0,f:0,spd:0.45,play:true,parts:[]};
var ROUTES=[
{c:"#2f5fa8",pts:[[109,34],[112,150],[118,215],[128,241],[160,290],[196,252],[203,202],[250,118],[302,92]],gates:[[3,"tv"],[6,"pvl"]]},
{c:"#2f5fa8",pts:[[94,300],[104,232],[128,241],[160,290],[196,252],[203,202],[250,118],[302,92]],gates:[[2,"tv"],[5,"pvl"]]},
{c:"#9b1c17",pts:[[340,146],[262,166],[268,211],[292,300],[262,262],[226,232],[209,222],[209,80],[262,40],[322,80],[322,130]],gates:[[2,"mv"],[6,"avl"]]},
{c:"#9b1c17",pts:[[338,178],[262,180],[268,211],[292,300],[262,262],[226,232],[209,222],[209,80],[262,40],[322,80],[322,130]],gates:[[2,"mv"],[6,"avl"]]}];
function rPrep(r){var d=[0];for(var i=1;i<r.pts.length;i++){var a=r.pts[i-1],b=r.pts[i];d.push(d[i-1]+Math.hypot(b[0]-a[0],b[1]-a[1]))}r.cum=d;r.len=d[d.length-1];r.g=r.gates.map(function(g){return[d[g[0]],g[1]]})}
ROUTES.forEach(rPrep);
function rAt(r,s){var d=r.cum;for(var i=1;i<d.length;i++)if(s<=d[i]){var a=r.pts[i-1],b=r.pts[i],k=(s-d[i-1])/(d[i]-d[i-1]||1);return[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]}return r.pts[r.pts.length-1]}
// Phase model for one beat, f in [0,1)
function phase(f){
if(f<0.12)return{n:"Atrial systole",d:"The atria contract and top up the ventricles. Mitral and tricuspid valves open; aortic and pulmonic valves closed. This is the A wave on mitral Doppler.",av:1,sl:0};
if(f<0.16)return{n:"Isovolumic contraction",d:"The ventricles start to squeeze. All four valves are closed, so pressure rises with no change in volume. Mitral closure makes S1.",av:0,sl:0};
if(f<0.45)return{n:"Ventricular systole (ejection)",d:"Aortic and pulmonic valves open and blood is ejected into the aorta and pulmonary artery. Meanwhile the atria fill from the veins.",av:0,sl:1};
if(f<0.5)return{n:"Isovolumic relaxation",d:"The ventricles relax. Aortic and pulmonic valves close (S2) and all four valves are briefly closed.",av:0,sl:0};
return{n:"Diastole (rapid and slow filling)",d:"Mitral and tricuspid valves open and blood flows from the atria into the ventricles. This is the E wave on mitral Doppler.",av:1,sl:0}}
function ease(x){return 0.5-0.5*Math.cos(Math.PI*Math.max(0,Math.min(1,x)))}
function squeeze(f){ // ventricles: contract during 0.12-0.45, relax 0.45-0.62
if(f<0.12)return 0;if(f<0.45)return ease((f-0.12)/0.2);if(f<0.62)return 1-ease((f-0.45)/0.17);return 0}
function atrialSq(f){if(f<0.12)return Math.sin(Math.PI*f/0.12);return 0}
function ecgY(x){ // x in [0,1): simple ECG shape, returns offset (up is negative)
function g(c,w,h){return h*Math.exp(-Math.pow((x-c)/w,2))}
return -g(0.03,0.025,7)+g(0.095,0.008,5)-g(0.11,0.012,26)+g(0.125,0.008,8)-g(0.34,0.045,9)}
function ecgPath(){var p="";for(var i=0;i<=200;i++){var x=i/200;p+=(i?"L":"M")+(50+x*300).toFixed(1)+" "+(30+ecgY(x)).toFixed(1)}return p}
function aniSvg(){
var ch={atria:["ra","la"],vent:["rv","lv","ivs","pm","mb"]};
var body=AN.map(function(a){var vl=/vl/.test(a[2]);return '<g id="ag-'+a[0]+'" class="ap '+a[0]+'">'+a[2]+'</g>'}).join("");
var parts=ROUTES.map(function(r,ri){var n=Math.round(r.len/26),s="";for(var j=0;j<n;j++)s+='<circle id="bp-'+ri+'-'+j+'" r="3.4" fill="'+r.c+'" stroke="#fff" stroke-width="1"/>';return s}).join("");
return '<svg class="an" id="anisvg" viewBox="40 16 320 368" role="img" aria-label="Animated heart showing chambers contracting, valves opening and closing, and blood flow">'+body+parts+'<text x="56" y="378" class="ant">Patient\'s right</text><text x="344" y="378" text-anchor="end" class="ant">Patient\'s left</text></svg>'+
'<svg class="ecg" viewBox="40 0 320 50" aria-hidden="true"><path d="'+ecgPath()+'" fill="none" stroke="#3fae6e" stroke-width="2"/><line id="ecgm" x1="50" y1="2" x2="50" y2="48" stroke="var(--ink)" stroke-width="1.5"/><text x="50" y="48" class="ant">ECG</text></svg>'}
function aniInit(){ANI.parts=ROUTES.map(function(r,ri){var n=Math.round(r.len/26),a=[];for(var j=0;j<n;j++)a.push(r.len*j/n);return a});
var c={};["ra","la","rv","lv","ivs","pm","mb"].forEach(function(k){var e=document.getElementById("ag-"+k);if(e){var b=e.getBBox();c[k]=[b.x+b.width/2,b.y+b.height/2]}});
// ventricles squeeze toward the base center, atria toward their own center
c.vent=[230,250];ANI.c=c;
["tv","mv","avl","pvl"].forEach(function(k){var p=document.querySelector("#ag-"+k+" path");if(p){var L=p.getTotalLength();ANI[k]=[p,L]}})}
function setValve(k,open){var v=ANI[k];if(!v)return;var L=v[1];v[0].style.strokeDasharray=open?(L*0.22)+" "+(L*0.56)+" "+(L*0.22):"none";v[0].style.opacity=open?"0.8":"1"}
function aniFrame(ts){
if(view!="anatomy"||anMode!="anim"){ANI.on=false;return}
var dt=ANI.last?Math.min(0.05,(ts-ANI.last)/1000):0;ANI.last=ts;
if(ANI.play){ANI.f=(ANI.f+dt*ANI.spd)%1}
var f=ANI.f,ph=phase(f),sq=squeeze(f),as=atrialSq(f);
var vs=1-0.09*sq,as2=1-0.07*as;
["rv","lv","ivs","pm","mb"].forEach(function(k){var e=document.getElementById("ag-"+k),c=ANI.c.vent;if(e)e.setAttribute("transform","translate("+c[0]+" "+c[1]+") scale("+vs+") translate("+(-c[0])+" "+(-c[1])+")")});
["ra","la"].forEach(function(k){var e=document.getElementById("ag-"+k),c=ANI.c[k];if(e&&c)e.setAttribute("transform","translate("+c[0]+" "+c[1]+") scale("+as2+") translate("+(-c[0])+" "+(-c[1])+")")});
setValve("tv",ph.av);setValve("mv",ph.av);setValve("avl",ph.sl);setValve("pvl",ph.sl);
var open={tv:ph.av,mv:ph.av,avl:ph.sl,pvl:ph.sl};
ROUTES.forEach(function(r,ri){var P=ANI.parts[ri],v=150*ANI.spd*(ANI.play?1:0)*dt;
var order=P.map(function(p,i){return i}).sort(function(a,b){return P[b]-P[a]});
var ahead=null;order.forEach(function(i){var s=P[i],ns=s+v;
r.g.forEach(function(g){if(!open[g[1]]&&s<=g[0]&&ns>g[0])ns=g[0]-0.5});
if(ahead!==null&&ahead>s&&ns>ahead-7)ns=Math.max(s,ahead-7);
if(ns>=r.len){ns-=r.len}
P[i]=ns;ahead=ns<s?null:ns;
var pt=rAt(r,ns),e=document.getElementById("bp-"+ri+"-"+i);if(e){e.setAttribute("cx",pt[0].toFixed(1));e.setAttribute("cy",pt[1].toFixed(1))}})});
var m=document.getElementById("ecgm");if(m){var x=50+300*f;m.setAttribute("x1",x);m.setAttribute("x2",x)}
var pn=document.getElementById("phn"),pd=document.getElementById("phd");if(pn&&pn.textContent!=ph.n){pn.textContent=ph.n;pd.textContent=ph.d}
ANI.raf=requestAnimationFrame(aniFrame)}
function anAnim(){anMode="anim";anQ=null;anatomy()}
function aniToggle(){ANI.play=!ANI.play;var b=document.getElementById("apb");if(b)b.textContent=ANI.play?"Pause":"Play"}
function aniSpeed(s){ANI.spd=s;document.querySelectorAll(".spd button").forEach(function(b){b.className=(+b.dataset.s==s)?"on":""})}
function aniStep(){ANI.play=false;var b=document.getElementById("apb");if(b)b.textContent="Play";var cuts=[0,0.12,0.16,0.45,0.5],i=0;while(i<cuts.length&&cuts[i]<=ANI.f+0.001)i++;ANI.f=i<cuts.length?cuts[i]+0.001:0.001}
