// app/graphic/page.tsx
"use client";

import { useEffect } from "react";
import SidebarPage from "../components/SidebarPage";
import ContactSection from "../components/ContactSection";

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

const works = [
  {
    num: "01",
    title: "MODERN LIVING: THE ART OF BALANCE",
    concept: "本作品は、家具デザインにおける緻密な設計と、グラフィックデザインにおけるグリッドシステムの間に存在する「構造的な調和」をテーマにした展覧会ポスターです。デザインの骨子として、バウハウスのモダニズムを象徴する機能主義的な思考を基盤に、黄金比を用いた幾何学的構成を採用しました。\n\n視覚的な中心となる家具のイラストレーションは、感覚的な配置ではなく、背後に存在するグリッドや黄金螺旋に厳密に沿ってレイアウトされており、工学的とも言えるインテリア設計のプロセスを表現しています。原色を基調としたミニマルなカラーパレットと、情報の優先順位を整理したサンセリフ体のタイポグラフィを組み合わせることで、数学的秩序がもたらす普遍的な美しさとモダンな感性を紙面上に融合させました。",
    durationTotal: "4 Days",
    durationBreakdown: ["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"],
    tools: ["Illustrator", "Photoshop"],
    roles: ["企画・構成、デザイン制作"],
  },
  {
    num: "02",
    title: "Tokyo. REDEFINED. 2026",
    concept: "絶えず変容を続ける巨大都市「東京」の断片を、厳格なグリッドシステムによって再構築したポスター作品です。デザインの着想源は、かつての新聞紙面が持っていた情報の密度感や、縦書きの赤帯による見出し文化。そこに現代的なミニマリズムを融合させることで、ノスタルジーと近未来が同居する東京の多層的な魅力を表現しました。\n\n視覚的な核となるのは、正方形のグリッドの中に断片化された都市の情景です。スカイツリーやスクランブル交差点といった記号的なモチーフをあえて解体・配置し直すことで、固定化された「東京」のイメージを再定義（REDEFINED）することを試みています。また、わび・さびの概念や青海波、桜といった伝統的なエッセンスを、フォトモンタージュの隙間にモダンなグラフィックとして挿入。グリッドという合理的な枠組みを用いることで、情報の雑多さを洗練された視覚体験へと昇華させました。",
    durationTotal: "4 Days",
    durationBreakdown: ["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"],
    tools: ["Illustrator", "Photoshop"],
    roles: ["企画・構成、デザイン制作"],
  },
  {
    num: "03",
    title: "STRUCTURAL DEFINITION 2026",
    concept: "都市を構成する建築物の「機能」ではなく、そこに潜む「構造」と「光影」の対話をテーマにしたポスター作品です。2026年という近未来的なタイムラインを背景に、強固なコンクリートの質感や鉄骨のリズミカルなパターンを、厳格なグリッドシステムを用いてアーカイブ化することを試みました。\n\n視覚的な特徴として、モノクロームの建築写真に対し、鮮やかなブルーの幾何学シェイプを対比させています。このブルーのエレメントは、無機質な都市空間における「境界線」や「視点の誘導」を象徴しており、垂直・水平・斜線のラインを強調する役割を果たしています。ビジュアルを解体・整理し、完璧なアライメント（整列）で再定義することで、鑑賞者に都市空間の新たな幾何学的調和を提示することを目指しました。",
    durationTotal: "4 Days",
    durationBreakdown: ["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"],
    tools: ["Illustrator", "Photoshop"],
    roles: ["企画・構成、デザイン制作"],
  },
  {
    num: "04",
    title: "BOTANICAL 2026 Spring/Summer Concept",
    concept: "本作品は、人間の内面に潜む生命力と自然界のエネルギーの融合をテーマにしたコンセプトポスターです。無機質で静謐なグレーの背景に対し、黒のタートルネックを纏った人物の頭部を、色鮮やかで力強い植物のブーケに置き換えるシュルレアリスム的な手法を採用。思考や感情といった目に見えない「人間の内面」を、外に向かって開花する植物の生命力として視覚化しました。\n\n表現の核となるのは、ファッションが持つ洗練されたモダンさと、ボタニカルが持つ有機的で野性的なエネルギーのコントラストです。人物の背後にあえて不自然な影を配置することで、夢と現実が交錯するような独特の違和感と奥行きを演出しました。深いグリーンのセリフ体タイポグラフィと繊細なフォトモンタージュにより、現代社会における「自然への回帰」と、内なる自己の再発見をエモーショナルに描き出すことを目指した作品です。",
    durationTotal: "4 Days",
    durationBreakdown: ["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"],
    tools: ["Illustrator", "Photoshop"],
    roles: ["企画・構成、デザイン制作"],
  },
  {
    num: "05",
    title: "Style Check - The Standards of Beauty",
    concept: "Webサイトでお馴染みの「画像認証（CAPTCHA）」をモチーフに、遊び心溢れるアイデアで再構築したグラフィック作品です。本来、人間であることを証明するための無機質なシステムを、洗練されたファッションの断片を選択するプロセスへと置き換えることで、機械的なインターフェースと自由なビジュアル感度をユーモアたっぷりに融合させました。\n\n雑誌の表紙やアパレルコンテンツのポスターを想定し、あえて多角的な視点でディテールを切り抜くことで、日常的なデジタル体験をファッショナブルな視覚体験へとハックしています。当たり前にある「UIコンポーネント」をデザインの素材として捉え直し、直感的な面白さとグラフィックとしての美しさを両立させることを目指しました。",
    durationTotal: "4 Days",
    durationBreakdown: ["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"],
    tools: ["Illustrator", "Photoshop"],
    roles: ["企画・構成、デザイン制作"],
  },
];

const sectionIds = ["work-01", "work-02", "work-03", "work-04", "work-05", "contact"];

export default function Graphic() {
  useEffect(() => {
    const scrollContainer = document.querySelector('[style*="scroll-snap-type"]') as Element;
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-section-visible');
          }
        });
      },
      { root: scrollContainer || null, threshold: 0.05 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F2EFE9]">
      <div className="fixed inset-0 pointer-events-none z-0" style={gridBg} />
      <SidebarPage sectionIds={sectionIds} />

      <main className="relative z-10 ml-[81px]">
        {/* Heading */}
        <section id="graphic-top" className="px-16 pt-20 pb-16 border-b border-[#1a1a1a] fade-section">
          <h1 className="text-[96px] leading-none" style={{ ...blippo, color: "#1a1a1a", textAlign: "left" }}>
            Graphic
          </h1>
          <p className="mt-4 text-sm" style={{ ...noto, color: "#555" }}>
            Graphic Design Works — 01 to 05
          </p>
        </section>

        {/* Works */}
        {works.map(({ num, title, concept, durationTotal, durationBreakdown, tools, roles }, i) => (
          <section
            key={num}
            id={`work-0${i + 1}`}
            className="px-16 py-16 border-b border-[#1a1a1a] fade-section"
          >
            {/* 番号 + コンテンツの横並び */}
            <div className="flex gap-8 items-start">
              {/* 左：番号 */}
              <p
                className="text-[48px] leading-none shrink-0 w-16"
                style={{ ...blippo, color: "#1a1a1a", textAlign: "left" }}
              >
                {num}
              </p>

              {/* 中央：作品画像 */}
<div
  className="shrink-0 border border-[#1a1a1a] overflow-hidden"
  style={{ width: "min(35vw, 420px)", aspectRatio: "1 / 1.414", backgroundColor: "#ddd8d0" }}
>
  <img
    src={`/images/graphic-0${i + 1}.jpg`}
    alt={title}
    className="w-full h-full object-cover"
  />
</div>

              {/* 右：テキスト情報 */}
              <div className="flex-1 pt-2 pl-8">
                {/* Title */}
                <div className="mb-6">
                  <p className="text-xs mb-1" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                    Title
                  </p>
                  <div className="border-b border-[#1a1a1a] pb-4">
                    <p className="text-[16px] leading-tight" style={{ ...noto, color: "#1a1a1a" }}>
                      {title}
                    </p>
                  </div>
                </div>

                {/* Concept */}
                <div className="mb-8">
                  <p className="text-xs mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                    Concept
                  </p>
                  <div className="border-b border-[#1a1a1a] pb-6">
                    {concept.split("\n\n").map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`text-sm leading-7 ${idx > 0 ? "mt-4" : ""}`}
                        style={{ ...noto, color: "#444" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Duration / Tool / Role */}
                <div className="flex gap-16 pt-2">
                  {/* Duration */}
                  <div>
                    <p className="text-sm mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                      Duration: {durationTotal}
                    </p>
                    <div className="flex flex-col gap-1">
                      {durationBreakdown.map((item) => (
                        <p key={item} className="text-sm" style={{ ...noto, color: "#444" }}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Tool */}
                  <div>
                    <p className="text-sm mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                      Tool
                    </p>
                    <div className="flex flex-col gap-1">
                      {tools.map((t) => (
                        <p key={t} className="text-sm" style={{ ...noto, color: "#444" }}>
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <p className="text-sm mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                      Role
                    </p>
                    <div className="flex flex-col gap-1">
                      {roles.map((r) => (
                        <p key={r} className="text-sm" style={{ ...noto, color: "#444" }}>
                          {r}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <ContactSection />
      </main>
    </div>
  );
}