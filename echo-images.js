// Echo Image Library: gallery with filters, detail view and image quiz. Data lives in bank.js (EIMG).
var IA={},BK={mode:"grid",cat:"All",view:"All",dx:"All",i:0,q:null};
var VIEWS=["PLAX","PSAX","A4C","A5C","A2C","A3C","Subcostal","Suprasternal"];
var DXPOOL=["Normal","Aortic stenosis","Aortic regurgitation","Mitral stenosis","Mitral regurgitation","Mitral valve prolapse","Pericardial effusion","Dilated cardiomyopathy","Hypertrophic cardiomyopathy","LV thrombus","Atrial septal defect","Ventricular septal defect","Pulmonary hypertension","LV aneurysm","Endocarditis vegetation"];
function bkList(){var r=[];EIMG.forEach(function(m,i){if((BK.cat=="All"||m.cat==BK.cat.toLowerCase())&&(BK.view=="All"||m.view==BK.view)&&(BK.dx=="All"||m.dx==BK.dx))r.push(i)});return r}
function bkVals(k){var o=[];EIMG.forEach(function(m){if(m[k]&&o.indexOf(m[k])<0)o.push(m[k])});return o.sort()}
function bkSet(k,v){BK[k]=v;BK.mode="grid";images()}
function bkOpen(i){BK.mode="detail";BK.i=i;draw()}
function bkStep(d){var L=bkList(),p=L.indexOf(BK.i);if(p<0)p=0;BK.i=L[(p+d+L.length)%L.length];draw()}
function ipick(key,k){if(IA[key]!==undefined)return;IA[key]=k;var y=window.scrollY;images();window.scrollTo(0,y)}
function badges(m){return '<span class="badge '+(m.cat=="abnormal"?"ab":"no")+'">'+(m.cat=="abnormal"?"Abnormal":"Normal")+'</span><span class="badge">'+escA(m.view)+'</span>'+(m.dx&&m.dx!="Normal"?'<span class="badge">'+escA(m.dx)+'</span>':'')}
function qBlock(q,key){var a=IA[key];
var opts=q[1].map(function(o,k){var c="opt";if(a!==undefined){if(k==q[2])c+=" ok";else if(k==a)c+=" bad"}return '<button class="'+c+'" onclick="ipick(\''+key+'\','+k+')" '+(a!==undefined?"disabled":"")+'><b>'+"ABCD"[k]+'</b><span>'+o+'</span></button>'}).join("");
var ex=a!==undefined?'<div class="exp '+(a==q[2]?"good":"miss")+'"><strong>'+(a==q[2]?"Correct.":"Incorrect.")+'</strong> '+q[3]+'</div>':"";
return '<p class="stem" style="font-size:17px">'+q[0]+'</p>'+opts+ex}
function images(){
if(BK.mode=="detail")return bkDetail();
if(BK.mode=="quiz")return bkQuiz();
var L=bkList(),nN=0,nA=0;EIMG.forEach(function(m){if(m.cat=="abnormal")nA++;else nN++});
var sel=function(k,label,vals){return '<label class="mute" style="display:block;margin-top:10px">'+label+'</label><select onchange="bkSet(\''+k+'\',this.value)"><option>All</option>'+vals.map(function(v){return '<option'+(BK[k]==v?" selected":"")+'>'+escA(v)+'</option>'}).join("")+'</select>'};
A.innerHTML=nav()+(window.anatomyCard?anatomyCard():'')+(window.labelCard?labelCard():'')+
'<div class="card"><h2>Echo Image Library</h2><p class="mute" style="margin:0">'+EIMG.length+' images · '+nN+' normal · '+nA+' abnormal · '+EIMG.reduce(function(t,m){return t+m.qs.length},0)+' questions</p>'+
'<div class="seg">'+["All","Normal","Abnormal"].map(function(c){return '<button class="'+(BK.cat==c?"on":"")+'" onclick="bkSet(\'cat\',\''+c+'\')">'+c+'</button>'}).join("")+'</div>'+
sel("view","View",bkVals("view"))+sel("dx","Diagnosis",bkVals("dx"))+
'<button class="primary" '+(bkQuizList().length?"":"disabled")+' onclick="bkQuizStart()">Image quiz · '+Math.min(10,bkQuizList().length)+' images</button></div>'+
(L.length?'<div class="grid">'+L.map(function(i){var m=EIMG[i];return '<button class="tile" onclick="bkOpen('+i+')"><img src="'+(m.th||m.src)+'" alt="'+escA(m.title)+'" loading="lazy"><span><strong>'+escA(m.view)+'</strong> · '+(m.cat=="abnormal"?escA(m.dx):"Normal")+'</span></button>'}).join("")+'</div>':'<div class="card"><p class="mute">No images match these filters yet.</p></div>')+
'<div id="mine"></div>';loadMine()}
function bkDetail(){var L=bkList(),i=BK.i,m=EIMG[i],p=L.indexOf(i);
A.innerHTML=nav()+'<div class="card"><div class="row" style="margin:0 0 10px"><button class="ghost" onclick="BK.mode=\'grid\';draw()">Library</button><span class="mute">'+(p>=0?(p+1)+' of '+L.length:'')+'</span><span><button class="ghost" onclick="bkStep(-1)" aria-label="Previous image">‹</button> <button class="ghost" onclick="bkStep(1)" aria-label="Next image">›</button></span></div>'+
'<h2>'+escA(m.title)+'</h2><p style="margin:0 0 6px">'+badges(m)+'</p><p class="mute" style="margin:0 0 10px">'+escA(m.tag||"")+'</p><img src="'+m.src+'" alt="'+escA(m.title)+'" style="width:100%;border-radius:8px;display:block;background:#000">'+
(m.credit?'<p class="mute" style="font-size:13px;margin:6px 0 0">Source: '+escA(m.credit)+'</p>':'')+
'<ul style="padding-left:20px">'+m.notes.map(function(n){return '<li style="margin-bottom:6px">'+n+'</li>'}).join("")+'</ul>'+
m.qs.map(function(q,j){return qBlock(q,i+'-'+j)}).join("")+'</div>'}
function pick3(pool,not){return shuffle(pool.filter(function(x){return x!=not})).slice(0,3)}
function bkQuizList(){return bkList().filter(function(i){return !EIMG[i].noquiz})}
function bkQuizStart(){var L=shuffle(bkQuizList()).slice(0,10),dxs=bkVals("dx").concat(DXPOOL).filter(function(v,i,a){return a.indexOf(v)==i});
BK.q={i:0,sc:0,a:null,items:L.map(function(i){var m=EIMG[i],asDx=m.cat=="abnormal"&&Math.random()<0.7,right=asDx?m.dx:m.view,opts=shuffle([right].concat(pick3(asDx?dxs:VIEWS,right)));return{i:i,t:asDx?"What is the main finding?":"Which view is this?",o:opts,r:opts.indexOf(right)}})};BK.mode="quiz";draw()}
function bkAns(k){var q=BK.q;if(q.a!==null)return;q.a=k;if(k==q.items[q.i].r)q.sc++;images()}
function bkNext(){var q=BK.q;q.i++;q.a=null;draw()}
function bkQuiz(){var q=BK.q,n=q.items.length;
if(q.i>=n){A.innerHTML=nav()+'<div class="card"><h2>Image quiz complete</h2><div class="big">'+q.sc+' / '+n+'</div><div class="bar"><i style="width:'+pct(q.sc,n)+'%"></i></div><button class="primary" onclick="bkQuizStart()">New quiz</button><button class="ghost" style="width:100%;margin-top:8px" onclick="BK.mode=\'grid\';draw()">Back to library</button></div>';return}
var it=q.items[q.i],m=EIMG[it.i],a=q.a;
var opts=it.o.map(function(o,k){var c="opt";if(a!==null){if(k==it.r)c+=" ok";else if(k==a)c+=" bad"}return '<button class="'+c+'" onclick="bkAns('+k+')" '+(a!==null?"disabled":"")+'><b>'+"ABCD"[k]+'</b><span>'+escA(o)+'</span></button>'}).join("");
A.innerHTML=nav()+'<div class="card"><div class="row" style="margin:0 0 8px"><span class="mute">Image '+(q.i+1)+' of '+n+' · Score '+q.sc+'</span><button class="ghost" onclick="BK.mode=\'grid\';draw()">End</button></div><div class="bar"><i style="width:'+(100*q.i/n)+'%"></i></div><p class="stem">'+it.t+'</p><img src="'+m.src+'" alt="Echo image to identify" style="width:100%;border-radius:8px;display:block;background:#000;margin-bottom:12px">'+opts+
(a!==null?'<div class="exp '+(a==it.r?"good":"miss")+'"><strong>'+(a==it.r?"Correct.":"Incorrect.")+'</strong> '+escA(m.title)+(m.cat=="abnormal"?' · '+escA(m.dx):' · Normal')+'. <a href="#" onclick="bkOpen('+it.i+');return false">Open teaching notes</a></div><button class="primary" onclick="bkNext()">'+(q.i==n-1?"See score":"Next image")+'</button>':'')+'</div>'}
// My images: added from the phone, stored on this device (IndexedDB).
var MDB=null,mineMsg="",delArm=null;
function idb(){return new Promise(function(ok,no){if(MDB)return ok(MDB);if(!window.indexedDB)return no();var r=indexedDB.open("spi_images",1);r.onupgradeneeded=function(){r.result.createObjectStore("img",{keyPath:"id"})};r.onsuccess=function(){MDB=r.result;ok(MDB)};r.onerror=function(){no()}})}
function store(m,fn){return idb().then(function(db){return new Promise(function(ok,no){var t=db.transaction("img",m),q=fn(t.objectStore("img"));t.oncomplete=function(){ok(q&&q.result)};t.onerror=function(){no()}})})}
function escA(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function loadMine(){var el=document.getElementById("mine");if(!el)return;
var form='<div class="card"><h2>Add your own image</h2><p class="mute" style="margin:0">Crop off names, dates and MRNs in Photos first. Your images are saved on this phone only.</p><input type="file" id="mf" accept="image/*"><input type="text" id="mt" placeholder="Title, e.g. PLAX, dilated LA"><textarea id="mn" rows="3" placeholder="Notes or teaching points (optional)"></textarea><label style="display:flex;gap:10px;align-items:flex-start;margin-top:10px;font-size:15px"><input type="checkbox" id="mc" style="width:22px;height:22px;flex:none;margin-top:2px"><span>I confirm this image has no patient identifiers.</span></label><button class="primary" onclick="addMine()">Save image</button>'+(mineMsg?'<p>'+escA(mineMsg)+'</p>':'')+'</div>';
store("readonly",function(o){return o.getAll()}).then(function(list){list=(list||[]).sort(function(a,b){return b.id-a.id});
el.innerHTML=(list.length?'<div class="card"><h2>My images ('+list.length+')</h2><p class="mute" style="margin:0">Saved on this phone.</p></div>':'')+list.map(function(m){return '<div class="card"><h2>'+escA(m.t||"Untitled")+'</h2><p class="mute" style="margin:0 0 10px">Added '+new Date(m.id).toLocaleDateString()+'</p><img src="'+m.src+'" alt="'+escA(m.t||"Echo image")+'" style="width:100%;border-radius:8px;display:block;background:#000">'+(m.n?'<p style="white-space:pre-wrap">'+escA(m.n)+'</p>':'')+'<button class="ghost" onclick="delMine('+m.id+')">'+(delArm==m.id?"Tap again to delete":"Delete")+'</button></div>'}).join("")+form},function(){el.innerHTML='<div class="card"><p class="mute">This browser cannot save images.</p></div>'})}
function shrink(file){return new Promise(function(ok,no){var u=URL.createObjectURL(file),im=new Image();im.onload=function(){var k=Math.min(1,1400/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);ok(c.toDataURL("image/jpeg",0.85))};im.onerror=function(){no()};im.src=u})}
function addMine(){var f=document.getElementById("mf").files[0],t=document.getElementById("mt").value.trim(),n=document.getElementById("mn").value.trim(),c=document.getElementById("mc").checked;
if(!f){mineMsg="Choose an image first.";return loadMine()}if(!c){mineMsg="Tick the box to confirm there are no patient identifiers.";return loadMine()}
mineMsg="Saving…";shrink(f).then(function(src){return store("readwrite",function(o){return o.put({id:Date.now(),t:t,n:n,src:src})})}).then(function(){mineMsg="Saved.";loadMine()},function(){mineMsg="Could not save that image. Try a different one.";loadMine()})}
function delMine(id){if(delArm!==id){delArm=id;return loadMine()}delArm=null;store("readwrite",function(o){return o.delete(id)}).then(loadMine,loadMine)}
