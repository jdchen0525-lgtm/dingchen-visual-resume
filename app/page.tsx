import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="江定承首頁"><span>JD</span><span className="brand-copy">JIANG<br />DING-CHENG</span></Link>
        <nav aria-label="主要選單"><Link className="nav-link is-active" href="/">履歷</Link><Link className="nav-link" href="/works">作品集 <Arrow /></Link></nav>
      </header>

      <section className="profile-hero">
        <div className="profile-meta"><span>01 / PROFILE</span><span>KAOHSIUNG · TAIWAN</span><span>AVAILABLE FOR WORK</span></div>
        <div className="profile-layout">
          <div className="profile-lead">
            <p className="profile-overline">VIDEO EDITOR<br />& PHOTOGRAPHER</p>
            <h1>江定承</h1>
            <div className="profile-brief">
              <p>22 歲，來自高雄。<br />剪輯短影音，也拍人像。</p>
              <Link href="/works" className="small-arrow-link">VIEW WORKS <Arrow /></Link>
            </div>
          </div>
          <figure className="profile-photo">
            <img src={`${basePath}/profile/jiang-dingcheng.jpg`} alt="江定承個人形象照" />
            <figcaption><span>SELF / 2026</span><span>01 — 03</span></figcaption>
            <b className="photo-mark">JD</b>
          </figure>
        </div>
        <div className="profile-ticker" aria-hidden="true"><span>EDIT</span><i>•</i><span>PORTRAIT</span><i>•</i><span>MOTION</span><i>•</i><span>STORY</span></div>
      </section>

      <section className="compact-info" aria-labelledby="info-title">
        <div className="compact-intro"><span>ABOUT / 關於我</span><h2 id="info-title">用節奏整理畫面，<br />用影像留下感覺。</h2></div>
        <dl className="info-cards">
          <div><dt>AGE</dt><dd>22</dd></div>
          <div><dt>EDUCATION</dt><dd>國立高雄科技大學｜大學畢業</dd></div>
          <div><dt>PHONE</dt><dd><a href="tel:0906998113">0906 998 113</a></dd></div>
          <div><dt>E-MAIL</dt><dd><a href="mailto:dingchen0525@gmail.com">dingchen0525@gmail.com</a></dd></div>
        </dl>
      </section>

      <section className="experience experience-v2" aria-labelledby="experience-title">
        <div className="section-label light"><span>EXPERIENCE / 01</span><span>工作經歷</span></div>
        <article className="job-layout">
          <div><p className="job-year">WORK</p><p className="experience-company">85 國際電商平台</p></div>
          <h2 id="experience-title">短影音部門<br />剪輯師</h2>
          <div className="job-detail"><p>短影音剪輯、節奏編排<br />社群內容與聲音處理</p><Link href="/works">查看剪輯作品 <Arrow /></Link></div>
        </article>
        <Link className="works-banner works-banner-v2" href="/works"><span>SELECTED WORKS</span><strong>攝影 × 動態影像</strong><Arrow /></Link>
      </section>
      <footer><p>JIANG DING-CHENG © 2026</p><a href="mailto:dingchen0525@gmail.com">LET&apos;S WORK TOGETHER <Arrow /></a></footer>
    </main>
  );
}
