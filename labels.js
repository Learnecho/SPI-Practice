// Label the view: original schematic diagrams with numbered structures.
// Each view: svg body drawn in a 400x330 box, and marks [number, x, y, answer].
var LV={
plax:{name:"Parasternal long axis (PLAX)",
tip:"Transducer at the top of the screen. The LV apex points to the left, the aorta to the right, and the left atrium sits under the aortic root.",
svg:
'<defs><clipPath id="lvsc"><path d="M200 8 L-33 241 A330 330 0 0 0 433 241 Z"/></clipPath></defs><path class="sec" d="M200 8 L-33 241 A330 330 0 0 0 433 241 Z"/><g clip-path="url(#lvsc)">'+
'<path class="ts" d="M200 8 L150 58 Q200 50 250 58 Z"/>'+
'<path class="ts" d="M150 58 Q200 50 250 58 L262 70 Q200 62 138 70 Z" opacity=".7"/>'+
'<path class="ts" d="M-40 150 Q120 116 232 106 L232 122 Q120 132 -40 172 Z"/>'+
'<path class="ts" d="M232 106 L350 104 L352 114 L232 120 Z"/>'+
'<path class="ts" d="M232 152 L352 150 L352 160 L240 162 Z"/>'+
'<path class="ln" d="M272 116 L292 132 M272 156 L292 134"/>'+
'<path class="ts" d="M236 160 Q224 178 206 196 L200 192 Q218 174 230 156 Z"/>'+
'<path class="ts" d="M246 224 Q236 214 222 206 L218 212 Q232 218 240 228 Z"/>'+
'<ellipse class="cav" cx="292" cy="190" rx="50" ry="26"/>'+
'<path class="ts" d="M-40 200 Q120 232 248 226 L250 250 Q120 256 -40 226 Z"/>'+
'<path class="br" d="M-40 238 Q120 270 330 262" />'+
'<path class="ts" d="M108 230 Q128 192 150 230 Z"/>'+
'<circle class="rim" cx="292" cy="282" r="15"/>'+
'<circle class="rim" cx="258" cy="236" r="6"/></g>',
marks:[[1,200,86,"Right ventricular outflow tract"],[2,60,134,"Interventricular septum"],[3,120,178,"Left ventricle"],[4,60,232,"Inferolateral (posterior) wall"],[5,320,132,"Aortic root"],[6,282,134,"Aortic valve"],[7,292,190,"Left atrium"],[8,212,180,"Anterior mitral leaflet"],[9,228,214,"Posterior mitral leaflet"],[10,292,282,"Descending aorta"],[11,40,252,"Pericardium"],[12,258,236,"Coronary sinus"],[13,128,218,"Papillary muscle"],[14,200,40,"Chest wall"]]}
};
var lvId="plax",lvAns={},lvChecked=false;
function lvOpts(v){var o=v.marks.map(function(m){return m[3]}).sort();return o}
function lvSvg(v,chk){return '<svg class="lv" viewBox="-40 0 480 345" role="img" aria-label="'+v.name+' diagram with numbered structures">'+v.svg+v.marks.map(function(m){var st=chk?(lvAns[m[0]]===m[3]?" ok":" bad"):"";return '<g class="mk'+st+'"><circle cx="'+m[1]+'" cy="'+m[2]+'" r="13"/><text x="'+m[1]+'" y="'+(m[2]+5)+'" text-anchor="middle">'+m[0]+'</text></g>'}).join("")+'</svg>'}
function lvSet(n,val){lvAns[n]=val}
function lvCheck(){lvChecked=true;var y=window.scrollY;label();window.scrollTo(0,y)}
function lvReset(){lvAns={};lvChecked=false;label()}
function label(){var v=LV[lvId],opts=lvOpts(v),sc=0;
v.marks.forEach(function(m){if(lvAns[m[0]]===m[3])sc++});
A.innerHTML=nav()+'<div class="card"><button class="ghost" onclick="go(\'images\')">Back to images</button><h2 style="margin-top:12px">Label the view: '+v.name+'</h2><p class="mute" style="margin:0">'+v.tip+' This is a simplified drawing, not a real scan.</p>'+lvSvg(v,lvChecked)+
(lvChecked?'<div class="exp '+(sc==v.marks.length?"good":"miss")+'"><strong>'+sc+' of '+v.marks.length+' correct.</strong> '+(sc==v.marks.length?"Every structure labeled correctly.":"Wrong numbers show in red, with the right answer under each one.")+'</div>':'')+
v.marks.map(function(m){var a=lvAns[m[0]],ok=a===m[3];return '<div class="lrow"><span class="lnum'+(lvChecked?(ok?" ok":" bad"):"")+'">'+m[0]+'</span><div style="flex:1"><select aria-label="Structure '+m[0]+'" onchange="lvSet('+m[0]+',this.value)" '+(lvChecked?"disabled":"")+'><option value="">Choose…</option>'+opts.map(function(o){return '<option'+(a===o?" selected":"")+'>'+o+'</option>'}).join("")+'</select>'+(lvChecked&&!ok?'<div class="mute" style="margin:-8px 0 8px">Answer: '+m[3]+'</div>':'')+'</div></div>'}).join("")+
(lvChecked?'<button class="primary" onclick="lvReset()">Try again</button>':'<button class="primary" onclick="lvCheck()">Check answers</button>')+'</div>'}
function labelCard(){return '<div class="card"><h2>Label the view</h2><p class="mute" style="margin:0 0 8px">Match each numbered structure on a drawn echo view.</p>'+Object.keys(LV).map(function(k){return '<button class="ghost" style="width:100%;margin-bottom:8px;text-align:left" onclick="lvId=\''+k+'\';lvReset()">'+LV[k].name+'</button>'}).join("")+'</div>'}
