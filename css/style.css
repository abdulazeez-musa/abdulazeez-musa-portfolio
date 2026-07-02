/* ===================================================================
   ABDULAZEEZ MUSA — PORTFOLIO
   Design concept: "The Impact Ledger"
   A development leader whose whole public record is built on verified
   numbers — people reached, funds mobilized, proposals reviewed. The
   type system borrows from field reports and grant ledgers: a warm,
   serious serif for statements, and a tabular mono face for every
   figure, so numbers always read as entries, not decoration.
   =================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --ink:        #16202E;
  --indigo:     #1F3358;
  --indigo-dk:  #131F38;
  --sand:       #EFE7D3;
  --sand-lt:    #F8F4E9;
  --gold:       #B9862F;
  --green:      #3F6B4F;
  --white:      #FBF8F1;
  --line:       rgba(22,32,46,0.14);
  --line-lt:    rgba(251,248,241,0.22);

  --serif: 'Fraunces', Georgia, serif;
  --sans:  'Inter', -apple-system, sans-serif;
  --mono:  'IBM Plex Mono', monospace;

  --max: 1120px;
}

*{box-sizing:border-box; margin:0; padding:0;}
html{scroll-behavior:smooth;}
body{
  font-family: var(--sans);
  color: var(--ink);
  background: var(--sand-lt);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}
a{color:inherit; text-decoration:none;}
img{max-width:100%; display:block;}
ul{list-style:none;}

:focus-visible{outline:2px solid var(--gold); outline-offset:3px;}

@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.01ms !important; transition-duration:0.01ms !important;}
}

.wrap{max-width:var(--max); margin:0 auto; padding:0 28px;}
.eyebrow{
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}
h1,h2,h3{font-family:var(--serif); font-weight:500; line-height:1.12; letter-spacing:-0.01em;}
h1{font-size:clamp(2.4rem, 5vw, 4rem); font-weight:400;}
h2{font-size:clamp(1.7rem, 3vw, 2.5rem);}
h3{font-size:1.25rem;}
p{color:#3A4453;}
.lede{font-size:1.15rem; color:#2B3444; max-width:60ch;}

/* ---------- NAV ---------- */
.site-nav{
  position: sticky; top:0; z-index:50;
  background: var(--sand-lt);
  border-bottom:1px solid var(--line);
}
.site-nav .wrap{
  display:flex; align-items:center; justify-content:space-between;
  height:74px;
}
.brand{font-family:var(--serif); font-size:1.15rem; font-weight:500;}
.brand span{color:var(--gold);}
.nav-links{display:flex; gap:28px; align-items:center;}
.nav-links a{
  font-size:0.88rem; font-weight:500; color:var(--ink);
  padding:6px 2px; border-bottom:2px solid transparent;
}
.nav-links a:hover, .nav-links a.active{border-color:var(--gold);}
.nav-cta{
  background:var(--indigo); color:var(--white) !important;
  padding:9px 18px; border-radius:2px; font-size:0.85rem !important;
  border-bottom:none !important;
}
.nav-toggle{display:none; background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--ink);}

@media (max-width: 820px){
  .nav-links{
    position:absolute; top:74px; left:0; right:0; background:var(--sand-lt);
    flex-direction:column; align-items:flex-start; padding:18px 28px 26px;
    border-bottom:1px solid var(--line);
    display:none;
  }
  .nav-links.open{display:flex;}
  .nav-toggle{display:block;}
}

/* ---------- HERO ---------- */
.hero{
  background: var(--indigo);
  color: var(--white);
  padding: 96px 0 84px;
  position:relative;
  overflow:hidden;
}
.hero::after{
  content:"";
  position:absolute; right:-10%; top:-30%;
  width:640px; height:640px;
  border:1px solid var(--line-lt);
  border-radius:50%;
}
.hero .wrap{position:relative; z-index:1;}
.hero .eyebrow{color:#D9B871; margin-bottom:18px;}
.hero h1{color:var(--white); max-width:16ch; margin-bottom:22px;}
.hero .lede{color:#D8DEE9; margin-bottom:34px;}
.hero-actions{display:flex; gap:14px; flex-wrap:wrap;}
.btn{
  display:inline-block; font-family:var(--sans); font-weight:600;
  font-size:0.92rem; padding:13px 24px; border-radius:2px;
  border:1px solid transparent; cursor:pointer;
}
.btn-primary{background:var(--gold); color:var(--indigo-dk);}
.btn-primary:hover{background:#CD9A44;}
.btn-ghost{border-color: var(--line-lt); color:var(--white);}
.btn-ghost:hover{background:rgba(255,255,255,0.08);}
.btn-dark{background:var(--indigo); color:var(--white);}
.btn-dark:hover{background:var(--indigo-dk);}

/* ---------- SECTION SHELL ---------- */
section{padding:76px 0;}
.section-head{max-width:640px; margin-bottom:44px;}
.section-head .eyebrow{margin-bottom:14px; display:block;}
.divider{border:none; border-top:1px solid var(--line); margin:0;}

/* ---------- ABOUT PREVIEW ---------- */
.about-grid{display:grid; grid-template-columns: 1.1fr 1fr; gap:56px; align-items:start;}
@media (max-width:820px){.about-grid{grid-template-columns:1fr;}}
.about-portrait{
  aspect-ratio:4/5; background:var(--indigo);
  border-radius:2px; position:relative; overflow:hidden;
}
.about-portrait img{width:100%; height:100%; object-fit:cover;}
.about-portrait .cap{
  position:absolute; bottom:0; left:0; right:0;
  padding:14px 16px; font-family:var(--mono); font-size:0.72rem;
  color:var(--white); background:linear-gradient(transparent, rgba(0,0,0,0.55));
}

/* ---------- FOCUS CARDS ---------- */
.card-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line);}
@media (max-width:820px){.card-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:560px){.card-grid{grid-template-columns:1fr;}}
.focus-card{background:var(--sand-lt); padding:30px 26px; min-height:180px; display:flex; flex-direction:column; justify-content:space-between;}
.focus-card .num{font-family:var(--mono); color:var(--gold); font-size:0.78rem;}
.focus-card h3{margin:16px 0 8px;}
.focus-card p{font-size:0.92rem;}

/* ---------- IMPACT LEDGER (signature element) ---------- */
.ledger{background:var(--indigo-dk); color:var(--white); padding:70px 0;}
.ledger .section-head .eyebrow{color:#D9B871;}
.ledger .section-head h2{color:var(--white);}
.ledger-rows{border-top:1px solid var(--line-lt);}
.ledger-row{
  display:grid; grid-template-columns: 140px 1fr auto; gap:22px; align-items:baseline;
  padding:20px 0; border-bottom:1px solid var(--line-lt);
}
.ledger-row .figure{font-family:var(--mono); font-size:1.7rem; color:var(--gold); font-variant-numeric:tabular-nums;}
.ledger-row .label{font-size:0.98rem; color:#E4E8EF;}
.ledger-row .tag{font-family:var(--mono); font-size:0.68rem; color:#9FAAC0; letter-spacing:0.06em; text-transform:uppercase; text-align:right;}
@media (max-width:640px){
  .ledger-row{grid-template-columns:1fr; gap:4px;}
  .ledger-row .tag{text-align:left;}
}

/* ---------- ROLES ---------- */
.role-list{display:grid; gap:1px; background:var(--line); border:1px solid var(--line);}
.role-item{background:var(--sand-lt); padding:26px 28px; display:grid; grid-template-columns: 1fr auto; gap:18px; align-items:center;}
.role-item h3{font-size:1.05rem;}
.role-item .org{font-family:var(--mono); font-size:0.78rem; color:var(--gold); margin-top:4px; display:block;}
.role-item .period{font-family:var(--mono); font-size:0.76rem; color:#6B7484; white-space:nowrap;}
@media (max-width:600px){.role-item{grid-template-columns:1fr;} .role-item .period{margin-top:6px;}}

/* ---------- TIMELINE ---------- */
.timeline{position:relative; padding-left:28px; border-left:1px solid var(--line);}
.tl-item{position:relative; padding-bottom:34px;}
.tl-item:last-child{padding-bottom:0;}
.tl-item::before{
  content:""; position:absolute; left:-33px; top:4px;
  width:9px; height:9px; border-radius:50%; background:var(--gold);
  border:2px solid var(--sand-lt);
}
.tl-item .yr{font-family:var(--mono); color:var(--gold); font-size:0.8rem; margin-bottom:4px; display:block;}
.tl-item h3{font-size:1.05rem; margin-bottom:4px;}
.tl-item p{font-size:0.92rem;}

/* ---------- AFFILIATIONS ---------- */
.affil-strip{background:var(--sand); padding:44px 0;}
.affil-row{display:flex; flex-wrap:wrap; gap:14px 34px; align-items:center;}
.affil-row span{font-family:var(--mono); font-size:0.82rem; color:var(--ink); opacity:0.75;}

/* ---------- CONTACT / NEWSLETTER ---------- */
.contact-band{background:var(--indigo); color:var(--white); padding:70px 0;}
.contact-grid{display:grid; grid-template-columns:1fr 1fr; gap:50px;}
@media (max-width:820px){.contact-grid{grid-template-columns:1fr;}}
.contact-band h2{color:var(--white);}
.contact-links a{display:block; padding:12px 0; border-bottom:1px solid var(--line-lt); font-size:0.98rem;}
.field{margin-bottom:16px;}
.field label{display:block; font-family:var(--mono); font-size:0.72rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:6px; color:#C9D1E0;}
.field input, .field textarea{
  width:100%; background:rgba(255,255,255,0.06); border:1px solid var(--line-lt);
  color:var(--white); padding:11px 12px; font-family:var(--sans); font-size:0.94rem; border-radius:2px;
}
.field textarea{min-height:110px; resize:vertical;}
.field input::placeholder, .field textarea::placeholder{color:#8C97AC;}

/* ---------- FOOTER ---------- */
footer{background:var(--indigo-dk); color:#9FAAC0; padding:36px 0; font-size:0.84rem;}
footer .wrap{display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;}
footer a{color:#C9D1E0;}

/* ---------- GENERIC PAGE HEADER (inner pages) ---------- */
.page-header{background:var(--indigo); color:var(--white); padding:64px 0 54px;}
.page-header h1{color:var(--white); font-size:clamp(2rem,4vw,2.8rem); max-width:22ch;}
.page-header .lede{color:#D8DEE9; margin-top:14px;}

/* ---------- ACHIEVEMENT / PROJECT CARDS ---------- */
.stack{display:grid; gap:22px;}
.achv-card{
  background:var(--sand-lt); border:1px solid var(--line); padding:30px 28px;
  display:grid; grid-template-columns: 150px 1fr; gap:26px;
}
@media (max-width:680px){.achv-card{grid-template-columns:1fr; gap:10px;}}
.achv-card .stat{font-family:var(--mono); color:var(--gold); font-size:1.5rem; font-variant-numeric:tabular-nums;}
.achv-card .stat small{display:block; font-size:0.65rem; color:#6B7484; text-transform:uppercase; letter-spacing:0.06em; margin-top:4px;}
.achv-card h3{margin-bottom:8px;}
.achv-card p{font-size:0.94rem;}

.proj-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:var(--line); border:1px solid var(--line);}
@media (max-width:720px){.proj-grid{grid-template-columns:1fr;}}
.proj-card{background:var(--sand-lt); padding:30px 28px;}
.proj-card .eyebrow{margin-bottom:10px; display:block;}
.proj-card h3{margin-bottom:10px;}
.proj-card p{font-size:0.92rem; margin-bottom:14px;}
.proj-card ul{font-size:0.85rem; color:#3A4453;}
.proj-card li{padding-left:16px; position:relative; margin-bottom:6px;}
.proj-card li::before{content:"—"; position:absolute; left:0; color:var(--gold);}

/* ---------- GALLERY ---------- */
.gallery-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:12px;}
@media (max-width:720px){.gallery-grid{grid-template-columns:repeat(2,1fr);}}
.gallery-item{aspect-ratio:1; background:var(--sand); border:1px solid var(--line); display:flex; align-items:center; justify-content:center;}
.gallery-item span{font-family:var(--mono); font-size:0.7rem; color:#8A8060; text-align:center; padding:10px;}
.gallery-item img{width:100%; height:100%; object-fit:cover;}

/* ---------- BLOG ---------- */
.post-list{display:grid; gap:1px; background:var(--line); border:1px solid var(--line);}
.post-item{background:var(--sand-lt); padding:26px 28px; display:grid; grid-template-columns:120px 1fr; gap:24px;}
@media (max-width:600px){.post-item{grid-template-columns:1fr; gap:8px;}}
.post-item .date{font-family:var(--mono); font-size:0.76rem; color:var(--gold);}
.post-item h3{margin-bottom:6px;}
.post-item p{font-size:0.92rem;}
.empty-note{
  border:1px dashed var(--line); padding:34px; text-align:center;
  font-family:var(--mono); font-size:0.85rem; color:#6B7484;
}

/* ---------- AWARDS LIST ---------- */
.award-item{padding:20px 0; border-bottom:1px solid var(--line); display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;}
.award-item .yr{font-family:var(--mono); color:var(--gold); font-size:0.85rem;}

/* ---------- SKILLS ---------- */
.chip-row{display:flex; flex-wrap:wrap; gap:10px;}
.chip{
  font-family:var(--mono); font-size:0.78rem; padding:8px 14px;
  border:1px solid var(--line); border-radius:2px; color:var(--ink);
}
