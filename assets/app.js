/* ===== CONFIGURACIÓN ===== */
const LOGO_SRC = "assets/logo-emblema.jpg";
const LOGO_FULL = "assets/logo-completo.jpg";            // AQUÍ SE PEGA LA RUTA O data: URI DEL LOGOTIPO ORIGINAL (sin deformarlo)
const CONTACT_ENDPOINT = "";    // AQUÍ SE CONFIGURA EL BACKEND DEL FORMULARIO (POST JSON)
const WHATSAPP = "";            // AQUÍ SE PONE EL NÚMERO, ej. "5218310000000"
const SOCIALS = [];             // AQUÍ SE AGREGAN REDES: {n:"Instagram",u:"https://..."}

/* ===== REGISTRO CENTRAL DE CATEGORÍAS (editar solo aquí) ===== */
const CATS = [
 {id:"desarrollo-web",n:"Desarrollo web",e:"🖥️",c:"#7b4dff",d:"Sitios que se navegan y se usan, no capturas de pantalla.",subs:[
  {id:"restaurantes",n:"Restaurantes y cafeterías",pts:["Menús digitales","Reservaciones","Pedidos por WhatsApp","Catálogos de alimentos y bebidas"]},
  {id:"inmobiliarias",n:"Catálogos inmobiliarios",pts:["Filtros de búsqueda","Galerías de fotos","Fichas de inmuebles","Formularios de contacto"]},
  {id:"educacion",n:"Plataformas educativas",pts:["Catálogo de cursos","Paneles de estudiantes","Seguimiento de progreso","Evaluaciones"]},
  {id:"empresariales",n:"Sitios empresariales",pts:["Páginas corporativas","Landing pages","Sitios para profesionales","Portafolios personales"]},
  {id:"eventos",n:"Eventos y experiencias",pts:["Registro de asistentes","Programación","Páginas promocionales","Sitios interactivos"]}]},
 {id:"invitaciones",n:"Invitaciones digitales",e:"💌",c:"#e0399b",d:"Invitaciones con cuenta regresiva, ubicación, confirmación y lista de invitados.",subs:[
  {id:"bodas",n:"Bodas",pts:["Galería","Itinerario","Confirmación de asistencia"]},{id:"xv",n:"XV años",pts:["Música opcional","Cuenta regresiva","Códigos QR"]},
  {id:"cumpleanos",n:"Cumpleaños",pts:["Diseño personalizado","Ubicación"]},{id:"graduaciones",n:"Graduaciones",pts:["Registro de invitados"]},{id:"posadas",n:"Posadas",pts:["Intercambio de regalos","Confirmación de asistencia","Ubicación"]},
  {id:"eventos-emp",n:"Eventos empresariales",pts:["Panel administrativo","Exportación de listas"]},{id:"especiales",n:"Celebraciones especiales",pts:["Diseño a medida"]}]},
 {id:"software",n:"Software empresarial",e:"🧾",c:"#2f7bff",d:"Sistemas administrativos a la medida del negocio.",subs:[
  {id:"comerciales",n:"Sistemas comerciales",pts:["Ferreterías","Abarrotes","Papelerías","Tiendas minoristas"]},
  {id:"servicios",n:"Sistemas de servicios",pts:["Barberías","Salones de belleza","Talleres","Gimnasios","Clínicas"]},
  {id:"generales",n:"Soluciones generales",pts:["Inventarios","Punto de venta","Clientes","Empleados","Facturación fiscal","Pedidos","Reportes"]}]},
 {id:"creadores",n:"Herramientas para creadores",e:"🎬",c:"#25d0e8",d:"Utilidades para editores, YouTubers, streamers y gente de redes.",subs:[
  {id:"video",n:"Edición de video",pts:["Subtítulos inteligentes","Recorte de silencios","Horizontal a vertical","Generación de clips","Conversión de formatos"]},
  {id:"audio",n:"Audio",pts:["Eliminación de ruido","Normalización","Transcripción","Sincronización de guiones"]},
  {id:"diseno-c",n:"Diseño",pts:["Miniaturas","Publicaciones","Plantillas","Adaptación de formatos"]},
  {id:"productividad",n:"Productividad",pts:["Organizador de guiones","Calendario de publicaciones","Descripciones","Planificación"]}]},
 {id:"automatizacion",n:"Automatización e IA",e:"⚙️",c:"#a368ff",d:"Menos tareas manuales: cada solución explica qué problema resuelve.",subs:[
  {id:"documentos",n:"Documentos y archivos",pts:["Extracción de PDF","Archivos Excel","Reportes automáticos"]},
  {id:"procesos",n:"Procesos",pts:["Tareas empresariales","Clasificación de información","Integraciones entre plataformas","Asistentes inteligentes"]}]},
 {id:"diseno",n:"Diseño digital y multimedia",e:"🎨",c:"#ff5fb0",d:"Diseño que acompaña al software.",subs:[
  {id:"ui",n:"UI/UX e identidad",pts:["Diseño de interfaces","Identidad visual"]},{id:"grafico",n:"Gráfico y video",pts:["Miniaturas","Redes sociales","Edición de video","Motion graphics","Animaciones"]}]}
];

/* ===== DEMOSTRACIONES: se cargan desde data/demos.json (ver LEEME.md) ===== */
let DEMOS=[];
/* ===== CREATIVE LAB: status = "terminado" | "desarrollo" | "prototipo" | "experimento" ===== */
const LAB = [
 // AQUÍ SE AGREGAN PROYECTOS DE CREATIVE LAB: {title,desc,status,tech:[],cover,route}
];
const LABST={terminado:"Producto terminado",desarrollo:"En desarrollo",prototipo:"Prototipo",experimento:"Experimento"};

/* ===== UTILIDADES ===== */
const $=(s,r=document)=>r.querySelector(s),app=$("#app");
const NAV=[["inicio","Inicio"],["soluciones","Soluciones"],["proyectos","Proyectos"],["lab","CreativCloud Lab"],["nosotros","Nosotros"],["contacto","Contacto"]];
$("#lg").innerHTML=(LOGO_SRC?`<span class="lb"><img src="${LOGO_SRC}" alt=""></span><span>CreativCloud</span>`:`<span class="mark"><i></i></span><span>CreativCloud</span>`);
$("#fl").src=LOGO_FULL;
$("#nv").innerHTML=NAV.map(n=>`<a href="#${n[0]}" data-r="${n[0]}">${n[1]}</a>`).join("");
$("#bt").onclick=()=>{const o=$("#nv").classList.toggle("o");$("#bt").setAttribute("aria-expanded",o)};
addEventListener("scroll",()=>$("#hd").classList.toggle("sc",scrollY>20),{passive:true});
const cat=id=>CATS.find(c=>c.id===id);
const ART={"desarrollo-web":'<div class="bw"><b></b><b></b><b></b><b></b></div>',invitaciones:'<div class="ph"><div><span>♥</span><br>Faltan<br>12 : 08 : 44</div></div>',software:'<div class="bc"><b></b><b></b><b></b><b></b><b></b><b></b></div>',creadores:'<div class="bc"><b></b><b></b><b></b><b></b><b></b><b></b></div>',automatizacion:'<div class="nd"><b></b><b></b><b></b></div>',diseno:'<div class="pl"><b></b><b></b><b></b><b></b></div>'};
const viewer=d=>{const fr=(u,x="")=>`<iframe title="${d.title}" src="${u}" ${x} style="width:100%;height:calc(100vh - 40px);margin-top:40px;border:0;background:#fff" referrerpolicy="no-referrer"></iframe>`;
 return d.src?fr(d.src):d.yt?fr("https://www.youtube-nocookie.com/embed/"+d.yt,"allowfullscreen"):d.video?`<div class="vw"><video src="${d.video}" controls playsinline preload="metadata"></video></div>`:`<div class="vw gl">${d.images.map(i=>`<img src="${i}" alt="${d.title}" loading="lazy">`).join("")}</div>`};
const dirView=()=>`<div class="er">${CATS.map((c,i)=>`<a class="eo cc rv${i%2?" rev":""}" href="#c-${c.id}" style="--c:${c.c}"><div class="art">${ART[c.id]}</div><div class="et"><h2>${c.n}</h2><p>${c.d}</p><div class="ch">${c.subs.map(s=>`<span>${s.n}</span>`).join("")}</div><span class="go">Explorar ${c.subs.length} áreas, ${ready().filter(d=>d.cat===c.id).length} demos listas <i>›</i></span></div></a>`).join("")}</div>`;
const demoCard=d=>`<a class="card" style="--c:${cat(d.cat).c}" href="${!d.src&&d.link?d.link:"#demo-"+d.id}"${!d.src&&d.link?' target="_blank" rel="noopener"':""}><div class="ic">${/^(https?:|data:)/.test(d.cover)?`<img src="${d.cover}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:`<span>${d.cover}</span>`}</div><span class="tag ok">${d.src?"Demo interactiva":d.images?"Capturas":d.link?"Enlace":"Video"}</span><h3>${d.title}</h3><p>${d.desc}</p><p style="margin-top:12px;color:var(--cy)">${d.src?"Explorar sitio":d.link?"Ver más":"Ver"}</p></a>`;
const slot=t=>`<div class="card empty"><span class="tag pd">Pendiente</span><h3>${t}</h3><p style="margin:auto">Espacio disponible para una próxima demostración.</p></div>`;
const ready=()=>DEMOS.filter(d=>d.status==="ready");

/* ===== VISTAS ===== */
const V={
 inicio:()=>`<div class="w hero"><div class="in"><h1>Transformamos ideas en experiencias digitales.</h1><p class="sub">Desarrollamos software, plataformas y soluciones digitales donde la tecnología y el diseño trabajan juntos para crear algo extraordinario.</p><div class="row" style="align-items:center;gap:22px"><a class="btn" href="#proyectos">Explorar proyectos</a><a href="#soluciones" style="color:var(--mu)">o conoce las soluciones</a></div></div>
 <div class="stage"><div class="win big"><div class="dots"><b></b><b></b><b></b><span class="tabs" style="margin-left:auto"><button>Menú</button><button>Reportes</button><button>Invitación</button></span></div><div class="sb"><div class="sl"><div class="tb"><b class="a">Entradas</b><b>Fuertes</b><b>Postres</b></div><div class="rw"><span>Tostada de atún</span><span>$120</span></div><div class="rw"><span>Sopa de la casa</span><span>$95</span></div><div class="rw"><span>Ensalada de temporada</span><span>$110</span></div></div><div class="sl"><span>Ventas de la semana (ilustrativo)</span><div class="bc" style="height:170px;margin-top:14px;gap:12px"><b></b><b></b><b></b><b></b><b></b><b></b></div></div><div class="sl" style="text-align:center"><div style="font-size:2.4rem;color:var(--mg)">♥</div><h3>Nos casamos</h3><div class="bar" style="width:70%;margin:10px auto"></div><div class="rw" style="justify-content:center;gap:18px"><span>12 d</span><span>08 h</span><span>44 m</span></div></div></div></div></div></div>
 <section><div class="w ct"><div><b data-n="${CATS.length}">0</b><span>Especialidades</span></div><div><b data-n="${CATS.reduce((a,c)=>a+c.subs.length,0)}">0</b><span>Áreas de trabajo</span></div><div><b data-n="${ready().length}">0</b><span>Demos interactivas</span></div><div><b data-n="6">0</b><span>Etapas por proyecto</span></div></div></section><section><div class="w"><h2>Lo que hacemos</h2><p class="sub">Seis áreas, un mismo cuidado por el detalle. Elige una para ver ejemplos y demos.</p>${dirView()}<p style="margin-top:36px"><a class="btn g" href="#soluciones">Ver todas las soluciones</a></p></div></section>
 <section><div class="w"><h2>Proyectos destacados</h2><div class="grid">${DEMOS.filter(d=>d.featured&&d.status==="ready").map(demoCard).join("")||slot("Próximo proyecto destacado")}</div></div></section>
 <section><div class="w"><h2>Más que programas que funcionan</h2><p class="sub">Cuidamos que cada herramienta sea intuitiva, agradable de usar y útil desde el primer minuto. Si algo funciona pero estorba, todavía no está terminado.</p></div></section>
 <section><div class="w cta rv"><h2>Desarrollemos tu idea</h2><p class="sub">Cuéntanos qué necesitas y te decimos cómo llevarlo a una pantalla.</p><a class="btn" href="#contacto">Iniciar un proyecto</a></div></section>`,
 soluciones:()=>`<div class="w" style="padding-top:110px"><h1>Soluciones</h1><p class="sub">Elige una especialidad para ver sus subcategorías y demostraciones.</p>${dirView()}</div>`,
 proyectos:()=>`<div class="w" style="padding-top:110px"><h1>Proyectos</h1><div class="fl" id="pf"><button class="on" data-f="">Todos</button>${CATS.map(c=>`<button data-f="${c.id}">${c.n}</button>`).join("")}</div><div class="grid" id="pg"></div></div>`,
 lab:()=>`<div class="w" style="padding-top:110px"><h1>CreativCloud Lab</h1><p class="sub">Productos propios, prototipos y experimentos en curso.</p><div class="fl">${Object.values(LABST).map(s=>`<span class="tag">${s}</span>`).join("")}</div><div class="grid">${LAB.map(l=>`<a class="card" href="#${l.route||"lab"}"><div class="ic" style="--c:#7b4dff">${l.cover||"🧪"}</div><span class="tag">${LABST[l.status]}</span><h3>${l.title}</h3><p>${l.desc}</p><p>${(l.tech||[]).join(", ")}</p></a>`).join("")||slot("Aún no hay proyectos en el Lab")}</div></div>`,
 nosotros:()=>`<div class="w" style="padding-top:110px"><h1>Nosotros</h1><p class="sub">Una herramienta que solo funciona se queda a medias: buscamos que además sea agradable, clara y cuidada hasta el detalle.</p><div class="grid">${[["Creatividad","Ideas que no se ven como las de todos."],["Innovación","Probamos lo nuevo antes de ofrecerlo."],["Funcionalidad","Primero que sirva, siempre."],["Diseño","Cada pantalla se piensa, no se rellena."],["Experiencia de usuario","Si hay que explicarlo, aún no está listo."],["Soluciones personalizadas","A la medida de tu negocio."],["Atención al detalle","Lo pequeño también se nota."]].map(v=>`<div class="fp rv" tabindex="0"><div><div class="f"><h3 style="margin:0">${v[0]}</h3></div><div class="bq">${v[1]}</div></div></div>`).join("")}</div><h2 style="margin-top:56px">Cómo trabajamos</h2><div class="tl"><i></i>${["Idea y análisis","Planificación","Diseño","Desarrollo","Pruebas","Entrega y soporte"].map((s,i)=>`<div class="step"><b>${i+1}</b><span>${s}</span></div>`).join("")}</div></div>`,
 contacto:()=>`<div class="w" style="padding-top:110px"><h1>Contacto</h1><form id="cf" novalidate><label>Nombre<input name="n" autocomplete="name"><span class="er"></span></label><label>Correo electrónico<input name="e" type="email" autocomplete="email"><span class="er"></span></label><label>Tipo de proyecto<select name="t">${CATS.map(c=>`<option>${c.n}</option>`).join("")}<option>Otro</option></select></label><label>Describe lo que necesitas<textarea name="d" rows="5"></textarea><span class="er"></span></label><label>Presupuesto aproximado (opcional)<input name="b"></label><button class="btn" id="cs">Enviar solicitud</button><div id="co" role="status"></div></form><p style="margin-top:24px">${WHATSAPP?`<a class="btn g" href="https://wa.me/${WHATSAPP}">WhatsApp</a>`:"WhatsApp: se activará al configurar el número."} ${SOCIALS.map(s=>`<a href="${s.u}">${s.n}</a>`).join(" ")}</p></div>`
};
function catView(c){return `<div class="w"><a class="crumb" href="#soluciones">Soluciones</a><h1>${c.n}</h1><p class="sub">${c.d}</p>${c.subs.map(s=>{const ds=ready().filter(d=>d.cat===c.id&&d.sub===s.id);return `<div class="sec rv"><h2 style="font-size:1.6rem">${s.n}</h2><ul>${s.pts.map(p=>`<li>${p}</li>`).join("")}</ul><div class="grid">${ds.map(demoCard).join("")||slot("Demostración de "+s.n)}</div></div>`}).join("")}</div>`}

/* ===== ROUTER ===== */
function go(){const h=location.hash.slice(1)||"inicio";$("#nv").classList.remove("o");
 let html,init,bare=false;
 if(h.startsWith("c-")&&cat(h.slice(2)))html=catView(cat(h.slice(2)));
 else if(h.startsWith("demo-")&&DEMOS.some(d=>d.id===h.slice(5)&&d.status==="ready"&&(d.src||d.yt||d.video||d.images))){const d=DEMOS.find(x=>x.id===h.slice(5));bare=true;html=`<div class="bk"><span>${d.title} — demostración de CreativCloud</span><span>${d.src?'<button data-d="d">Escritorio</button><button data-d="m">Móvil</button>':""}<a href="#c-${d.cat}">Volver a CreativCloud</a></span></div><div id="dv">${viewer(d)}</div>`;init=()=>app.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>$("#dv").classList.toggle("m",b.dataset.d==="m"))}
 else if(V[h]){html=V[h]();init=INIT[h]}else{html=V.inicio();}
 document.title=(bare?"Demo — ":"")+"CreativCloud — Design & Tech Solutions";
 $("#hd").style.display=bare?"none":"flex";
 app.innerHTML=html;scrollTo(0,0);
 document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("on",h===a.dataset.r||(h.startsWith("c-")&&a.dataset.r==="soluciones")));
 init&&init();
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("v");io.unobserve(e.target)}}),{threshold:.1});
 app.querySelectorAll(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+"ms";io.observe(el)});}
const INIT={
 inicio:()=>{const h=$(".hero h1");h.innerHTML=h.textContent.split(" ").map((w,i)=>`<span style="display:inline-block;animation:up .8s ${.15+i*.09}s both">${w}</span>`).join(" ");
  const sl=[...app.querySelectorAll(".sl")],tb=[...app.querySelectorAll(".tabs button")],set=k=>{sl.forEach((s,j)=>s.classList.toggle("on",j===k));tb.forEach((b,j)=>b.classList.toggle("a",j===k))};tb.forEach((b,j)=>b.onclick=()=>set(j));set(0);
  
  app.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n;new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();let t0;const st=t=>{t0=t0||t;const k=calm?1:Math.min((t-t0)/1200,1);el.textContent=Math.round(n*k);k<1&&requestAnimationFrame(st)};requestAnimationFrame(st)}).observe(el)});},
 nosotros:()=>{const tl=$(".tl"),st=[...tl.querySelectorAll(".step")];const u=()=>{if(!tl.isConnected)return removeEventListener("scroll",u);let h=0;st.forEach(s=>{const on=s.getBoundingClientRect().top<innerHeight*.7;s.classList.toggle("on",on);if(on)h=s.offsetTop+30});tl.style.setProperty("--h",h+"px")};addEventListener("scroll",u,{passive:true});u()},
 proyectos:()=>{const g=$("#pg");const draw=f=>{g.classList.remove("pop");g.innerHTML=ready().filter(d=>!f||d.cat===f).map(demoCard).join("")||slot("Sin proyectos en esta categoría");void g.offsetWidth;g.classList.add("pop")};draw("");
  $("#pf").onclick=e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#pf button").forEach(x=>x.classList.toggle("on",x===b));draw(b.dataset.f)}},
 contacto:()=>{const f=$("#cf");f.onsubmit=async e=>{e.preventDefault();const er=f.querySelectorAll(".er");er.forEach(x=>x.textContent="");let ok=true;
  if(!f.n.value.trim()){er[0].textContent="Escribe tu nombre.";ok=false}
  if(!/^\S+@\S+\.\S+$/.test(f.e.value)){er[1].textContent="Escribe un correo válido.";ok=false}
  if(f.d.value.trim().length<10){er[2].textContent="Cuéntanos un poco más (mínimo 10 caracteres).";ok=false}
  if(!ok)return;const o=$("#co");
  if(!CONTACT_ENDPOINT){o.innerHTML='<p class="msg">El envío todavía no está configurado, así que tu solicitud no se envió. Define CONTACT_ENDPOINT en el código para activarlo.</p>';return}
  $("#cs").disabled=true;$("#cs").textContent="Enviando…";
  try{const r=await fetch(CONTACT_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});if(!r.ok)throw 0;o.innerHTML='<p class="msg">Solicitud enviada. Te responderemos pronto.</p>';f.reset()}
  catch{o.innerHTML='<p class="msg">No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.</p>'}
  $("#cs").disabled=false;$("#cs").textContent="Enviar solicitud"}}
};
app.addEventListener("pointermove",e=>{const c=e.target.closest(".card");if(!c)return;const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty("--mx",x+"px");c.style.setProperty("--my",y+"px");if(c.classList.contains("cc")&&!matchMedia("(prefers-reduced-motion:reduce)").matches){c.style.transitionDelay="0s";c.style.transform=`perspective(800px) rotateX(${(.5-y/r.height)*6}deg) rotateY(${(x/r.width-.5)*8}deg) translateY(-6px)`}});
app.addEventListener("pointerout",e=>{const c=e.target.closest(".cc");if(c&&!c.contains(e.relatedTarget))c.style.transform=""});
const calm=matchMedia("(prefers-reduced-motion:reduce)").matches,rt=document.documentElement;
$("#th").onclick=e=>{const cur=rt.dataset.theme||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"),nx=cur==="dark"?"light":"dark",ap=()=>{rt.dataset.theme=nx};if(!document.startViewTransition||calm){ap();return}const x=e.clientX,y=e.clientY,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));document.startViewTransition(ap).ready.then(()=>rt.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:600,easing:"ease-in",pseudoElement:"::view-transition-new(root)"}))};
function nav(){if(calm){go();return}const h=location.hash.slice(1),c=h.startsWith("c-")?cat(h.slice(2)):h.startsWith("demo-")?cat("desarrollo-web"):null,cv=$("#cv");cv.style.setProperty("--cc",c?c.c:"#7b4dff");cv.classList.remove("in");void cv.offsetWidth;cv.classList.add("in");setTimeout(go,330)}
addEventListener("hashchange",nav);
fetch("data/demos.json",{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject()).then(d=>{DEMOS=d.map(x=>x.src||x.video||x.yt||x.images||x.link?x:{...x,src:`demos/${x.cat}/${x.sub}/${x.id}/index.html`});go()},()=>{app.innerHTML='<div class="w" style="padding-top:140px"><p class="msg">No se pudo cargar data/demos.json. Abre el sitio con un servidor local (ver LEEME.md) o desde tu hosting; no funciona con doble clic.</p></div>'});

setTimeout(()=>$("#ld").classList.add("h"),calm?0:900);
