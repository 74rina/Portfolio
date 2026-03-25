export default function Home() {
  return (
    <div className="intro-wrap">
      <div className="intro-hero">
        <div className="intro-hero-text">
          <h1 className="intro-title">自己紹介</h1>
          <p className="intro-lead">はじめまして、骨なしチキンです！</p>
        </div>
        <div className="intro-hero-photo">
          <img className="hero-photo" src="/0.png" alt="プロフィール写真" />
        </div>
      </div>

      <section className="intro-section">
        <h2>取り組んでいること</h2>
        <ul className="intro-list">
          <li>Web開発</li>
          <li>プログラミングサークルの運営</li>
        </ul>
      </section>

      <section className="intro-section">
        <h2>SNS</h2>
        <ul className="intro-list">
          <li>
            <a href="https://x.com/74rina_">Xアカウント</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
