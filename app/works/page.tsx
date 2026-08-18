import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const films = [
  { src: `${basePath}/videos/edit-01.mp4`, poster: `${basePath}/posters/edit-01.jpg`, no: "01", title: "SOCIAL CUT 01", duration: "00:54", tone: "coral" },
  { src: `${basePath}/videos/edit-02.mp4`, poster: `${basePath}/posters/edit-02.jpg`, no: "02", title: "SOCIAL CUT 02", duration: "00:54", tone: "blue" },
  { src: `${basePath}/videos/edit-03.mp4`, poster: `${basePath}/posters/edit-03.jpg`, no: "03", title: "SOCIAL CUT 03", duration: "00:55", tone: "violet" },
];

function EditingSuite({ film }: { film: typeof films[number] }) {
  return (
    <div className={`editing-suite ${film.tone}`} aria-label={`剪輯作品 ${film.no} 的工作區`}>
      <div className="suite-titlebar"><div><i /><i /><i /></div><span>JDD_CUT_{film.no}.prproj — Editing</span><b>⌘</b></div>
      <aside className="project-bin">
        <div className="panel-tab">PROJECT: JDD_{film.no}</div>
        <div className="search-field">⌕&nbsp;&nbsp; Search</div>
        <ul><li>▾&nbsp; JDD_{film.no}</li><li>&nbsp;&nbsp;⌑&nbsp; MEDIA</li><li>&nbsp;&nbsp;⌑&nbsp; AUDIO</li><li>&nbsp;&nbsp;⌑&nbsp; GRAPHICS</li></ul>
        <div className="bin-grid"><img src={film.poster} alt="" /><img src={film.poster} alt="" /><span>IMG_0412</span><span>IMG_0418</span></div>
      </aside>
      <section className="program-monitor">
        <div className="panel-tab"><span>PROGRAM: JDD_CUT_{film.no}</span><span>FIT ▾</span></div>
        <div className="video-stage"><video controls playsInline preload="metadata" poster={film.poster}><source src={film.src} type="video/mp4" /></video></div>
        <div className="transport"><span>▮◀</span><span>◀</span><b>▶</b><span>▶</span><span>▶▮</span><time>00:00:18:12</time></div>
      </section>
      <aside className="effect-panel">
        <div className="panel-tab">EFFECT CONTROLS</div>
        <p>▾ MOTION</p><dl><div><dt>Position</dt><dd>540.0&nbsp; 960.0</dd></div><div><dt>Scale</dt><dd>100.0</dd></div><div><dt>Rotation</dt><dd>0.0</dd></div></dl>
        <p>▾ OPACITY</p><dl><div><dt>Opacity</dt><dd>100.0%</dd></div><div><dt>Blend Mode</dt><dd>Normal</dd></div></dl>
        <div className="audio-meter"><span style={{height:"38%"}} /><span style={{height:"62%"}} /><span style={{height:"48%"}} /><span style={{height:"76%"}} /><i>-12&nbsp;&nbsp;-6&nbsp;&nbsp;0</i></div>
      </aside>
      <section className="real-timeline">
        <div className="timeline-tabs"><span>≡</span><b>JDD_CUT_{film.no}</b><span>×</span><time>00:00:18:12</time></div>
        <div className="timeline-ruler"><span>00:00</span><span>00:10</span><span>00:20</span><span>00:30</span><span>00:40</span><span>00:50</span></div>
        <div className="timeline-body">
          <div className="track-head"><span>V3</span><span>V2</span><span>V1</span><span>A1&nbsp; M&nbsp; S</span><span>A2&nbsp; M&nbsp; S</span></div>
          <div className="track-stack">
            <div className="real-track graphic"><b className="clip c1">Adjustment Layer</b><b className="clip c2">TEXT_02</b></div>
            <div className="real-track broll"><b className="clip c3">B_ROLL_07.mp4</b><b className="clip c4">B_ROLL_12.mp4</b><b className="clip c5">CUTAWAY</b></div>
            <div className="real-track primary"><b className="clip c6">A001_C004.mp4</b><b className="clip c7">A001_C009.mp4</b><b className="clip c8">A002_C003.mp4</b></div>
            <div className="real-track dialogue"><b className="clip waveform c9">A001_C004</b><b className="clip waveform c10">A001_C009</b></div>
            <div className="real-track music"><b className="clip waveform c11">MUSIC_FINAL.wav</b></div>
            <span className="real-playhead" />
          </div>
        </div>
        <div className="timeline-status"><span>48 kHz</span><span>00:00:53:28</span><span>23.976 fps</span></div>
      </section>
    </div>
  );
}

export default function Works() {
  return (
    <main className="works-page">
      <header className="site-header works-header"><Link className="brand" href="/" aria-label="回履歷首頁"><span>JD</span><span className="brand-copy">JIANG<br />DING-CHENG</span></Link><nav aria-label="主要選單"><Link className="nav-link" href="/">履歷</Link><Link className="nav-link is-active" href="/works">作品集 ↗</Link></nav></header>
      <section className="works-intro works-intro-v2"><div className="works-kicker"><span>02 / SELECTED WORKS</span><span>PHOTOGRAPHY · VIDEO</span></div><h1>把故事，<br /><em>變成畫面。</em></h1><p>攝影與剪輯，<br />都是整理情緒的方法。</p></section>
      <section className="photo-archive" aria-labelledby="photo-title"><div className="section-heading"><div><span>PHOTOGRAPHY / 01</span><h2 id="photo-title">攝影作品集</h2></div><a href="https://allen052.github.io/jdd-film/" target="_blank" rel="noreferrer">另開完整作品集 ↗</a></div><div className="portfolio-frame"><div className="frame-bar"><span /><span /><span /><p>JDD FILM — PHOTOGRAPHY ARCHIVE</p></div><iframe title="江定承攝影作品集" src="https://allen052.github.io/jdd-film/" loading="lazy" /></div></section>
      <section className="video-section" aria-labelledby="video-title"><div className="section-heading inverse"><div><span>VIDEO EDITING / 02</span><h2 id="video-title">短影音剪輯</h2></div><p>3 SELECTED CUTS</p></div><div className="film-list">{films.map((film)=><article className="film-card film-card-v2" key={film.no}><div className="film-meta"><span>/{film.no}</span><div><h3>{film.title}</h3><p>VERTICAL FILM · {film.duration}</p></div></div><EditingSuite film={film} /></article>)}</div></section>
      <section className="contact-cta contact-cta-v2"><p>AVAILABLE FOR SELECTED PROJECTS</p><h2>一起做出<br />值得停留的畫面。</h2><a href="mailto:dingchen0525@gmail.com">dingchen0525@gmail.com ↗</a></section>
      <footer><p>JIANG DING-CHENG © 2026</p><a href="tel:0906998113">0906 998 113</a></footer>
    </main>
  );
}
