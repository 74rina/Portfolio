const works = [
  {
    title: "City Flow Dashboard",
    summary:
      "都市交通データを直感的に読み解くためのダッシュボード。情報階層とタイポグラフィを再設計。",
    role: "UX設計 / UIデザイン / 実装",
    tags: ["React", "Data Viz", "Design System"],
  },
  {
    title: "Atelier Commerce",
    summary:
      "D2Cブランドの世界観を伝えるEC体験。商品ページのストーリーテリングに集中。",
    role: "Art Direction / UI",
    tags: ["E-commerce", "Storytelling", "Brand"],
  },
  {
    title: "Horizon Learning",
    summary:
      "学習プラットフォームの新規立ち上げ。オンボーディングの導線を整理し、継続率を改善。",
    role: "Product Design / Prototyping",
    tags: ["EdTech", "Prototyping", "Growth"],
  },
];

export default function WorksPage() {
  return (
    <div className="site-container">
      <section className="section-card fade-up">
        <p className="section-kicker">Works</p>
        <h1 className="section-title">作品・プロジェクト</h1>
        <p className="lead">
          「静かな熱量」を感じてもらえるようなプロジェクトを厳選。
          表現だけでなく、プロダクトの意図やチームの意思決定にも寄り添っています。
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {works.map((work, index) => (
          <article
            key={work.title}
            className={`section-card fade-up ${
              index === 0
                ? "fade-delay-1"
                : index === 1
                ? "fade-delay-2"
                : "fade-delay-3"
            }`}
          >
            <p className="section-kicker">Project {index + 1}</p>
            <h2 className="section-title">{work.title}</h2>
            <p className="lead">{work.summary}</p>
            <p className="mt-6 text-[0.95rem] font-semibold">
              {work.role}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
