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

const sectionIds = ["web-top", "work-02", "contact"];

export default function Web() {
  useEffect(() => {
    const els = document.querySelectorAll(".web-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("web-section-visible");
          } else {
            entry.target.classList.remove("web-section-visible");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-[#F2EFE9]"
      style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}
    >
      <div className="fixed inset-0 pointer-events-none z-0" style={gridBg} />
      <SidebarPage sectionIds={sectionIds} />

      <main className="relative z-10 ml-[81px]">

        <section
          id="web-top"
          className="flex flex-col overflow-hidden"
          style={{ scrollSnapAlign: "start", height: "100vh", borderBottom: "5px solid #1a1a1a" }}
        >
          <div className="px-16 pt-6 pb-4 shrink-0 web-section" style={{ borderBottom: "5px solid #1a1a1a" }}>
            <p style={{ ...blippo, fontSize: "20px", color: "#1a1a1a" }}>Web Work / 01</p>
          </div>

          <div className="flex flex-1 overflow-hidden web-section" style={{ position: "relative" }}>
            {/* 赤ブロック下線をサイドバーまで伸ばす */}
            <div style={{ position: "absolute", top: "33%", left: 0, width: 550, height: 5, backgroundColor: "#1a1a1a", zIndex: 10 }} />

            <div className="flex flex-col" style={{ width: 380, padding: "0 32px 0 64px", borderRight: "5px solid #1a1a1a" }}>
              <div className="flex items-center justify-center" style={{ height: "33.33%" }}>
                <img
                  src="/images/JOH PURE FORM.png"
                  alt="JOH PURE FORM"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
              <div className="overflow-hidden" style={{ height: 188, width:300, border: "2px solid #1a1a1a", marginTop: "190px", boxShadow: "7px 6px 0px #1a1a1a",marginLeft: "-20px"  }}>
                <img src="/images/Joh-preview.jpg" alt="Joh Pure Form" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="flex flex-col shrink-0" style={{ width: 170, borderRight: "5px solid #1a1a1a" }}>
              <div className="flex-1" style={{ backgroundColor: "#F44336", borderBottom: "5px solid #1a1a1a" }} />
              <div className="flex-1" style={{ backgroundColor: "#FFB703", borderBottom: "5px solid #1a1a1a" }} />
              <div className="flex-1" style={{ backgroundColor: "#2986CC" }} />
            </div>

            <div className="flex flex-col flex-1 overflow-hidden" style={{ position: "relative" }}>

             <div className="px-12" style={{ borderBottom: "5px solid #1a1a1a", paddingTop: "32px", paddingBottom: "39px" }}>
                <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Title</p>
                <p className="text-sm" style={{ ...noto, color: "#1a1a1a" }}>Model Portfolio - Joh &quot;Pure Form&quot;</p>
              </div>

             <div className="px-12 flex-1" style={{ paddingTop: "50px" }}>
                <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Concept</p>
                <p className="text-sm leading-7" style={{ ...noto, color: "#444" }}>モデル・Joh氏のアイデンティティを可視化するためのプロフィールサイトです。モデル本人の持つ洗練されたスタイルと、徹底したミニマリズムをWebデザインへ落とし込みました。トップビューでは海外のポートフォリオサイトを彷彿とさせる、大胆なタイポグラフィと余白を活かしたレイアウトを採用。過度な装飾を削ぎ落とすことで、被写体の持つ力強い存在感を際立たせています。</p>
              </div>

              {/* 3本目ライン + Duration・Tool をbottom50%に固定 */}
              <div style={{ position: "absolute", bottom: "21%", left: 0, right: 0 }}>
                <div style={{ height: 5, backgroundColor: "#1a1a1a" }} />
                <div className="px-12 py-8 flex gap-16">
                  <div>
                    <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Duration: 35 Days</p>
                    <p className="text-sm" style={{ ...noto, color: "#444" }}>Planning &amp; UX Research: 5 Days</p>
                    <p className="text-sm" style={{ ...noto, color: "#444" }}>UI Design: 14 Days</p>
                    <p className="text-sm" style={{ ...noto, color: "#444" }}>Development: 14 Days</p>
                    <p className="text-sm" style={{ ...noto, color: "#444" }}>Testing &amp; Launch: 2 Days</p>
                  </div>
                  <div>
                    <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Tool</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        {["Photoshop", "Figma"].map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-sm"
                            style={{ ...noto, color: "#1a1a1a", border: "1px solid #1a1a1a" }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {["HTML", "CSS", "JavaScript"].map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-sm"
                            style={{ ...noto, color: "#1a1a1a", border: "1px solid #1a1a1a" }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-12 pb-6 flex items-baseline gap-8">
                  <span style={{ fontFamily: "'Didot', 'Bodoni MT', Georgia, serif", fontSize: "14px", color: "#1a1a1a" }}>Didot</span>
                  <span style={{ fontFamily: "'Didot', 'Bodoni MT', Georgia, serif", fontSize: "18px", color: "#1a1a1a", letterSpacing: "0.1em" }}>
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  </span>
                </div>
              </div>

              {/* 装飾四角 */}
              <div style={{ position: "absolute", bottom: 0, left: 0, display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: 100, height: 100, backgroundColor: "#FFB703" }} />
                <div style={{ width: 50, height: 50, backgroundColor: "#F44336" }} />
              </div>

              <div style={{ width: 350, height: 5, backgroundColor: "#1a1a1a", marginLeft: "auto" }} />

              <a href="https://amasaki10231023-blip.github.io/-joh-modelprofile/" target="_blank" rel="noopener noreferrer" className="flex items-center px-12 py-6 shrink-0" style={{ backgroundColor: "#FFB703", width: 350, marginLeft: "auto" }}>
                <span style={{ ...blippo, fontSize: "28px", color: "#1a1a1a" }}>View Project &#8594;</span>
              </a>

            </div>
          </div>
        </section>

        <section
  id="work-02"
  className="flex flex-col overflow-hidden"
  style={{ scrollSnapAlign: "start", height: "100vh", borderBottom: "5px solid #1a1a1a" }}
>
  {/* ヘッダー：02 + Web Work + Title 横並び */}
  <div className="flex shrink-0 items-stretch web-section" style={{ borderBottom: "5px solid #1a1a1a" }}>

    {/* 02：290×290の四角 */}
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: 290, height: 290, borderRight: "5px solid #1a1a1a" }}
    >
      <p style={{ ...blippo, fontSize: "88px", lineHeight: 1, color: "#1a1a1a" }}>02</p>
    </div>

    {/* Web Work 縦書き */}
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: 60, borderRight: "5px solid #1a1a1a" }}
    >
      <p
        style={{
          ...blippo,
          fontSize: "24px",
          color: "#1a1a1a",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.1em",
        }}
      >
        Web Work
      </p>
    </div>

    {/* Title */}
    <div className="flex flex-col justify-center px-10">
      <p style={{ ...blippo, fontSize: "13px", color: "#1a1a1a" }} className="mb-2">Title</p>
      <p style={{ fontFamily: "'Didot', 'Bodoni MT', Georgia, serif", fontSize: "56px", color: "#1a1a1a", lineHeight: 1.1 }}>
        Graphic Design Archive &quot;ARCHIVE&quot;
      </p>
    </div>

  </div>

  {/* メインエリア：左画像 + 右テキスト */}
  <div className="flex overflow-hidden shrink-0 web-section" style={{ height: 400 }}>

    {/* 左：サイト画像 */}
    <div className="shrink-0 flex items-center justify-center p-6" style={{ width: 390, borderRight: "5px solid #1a1a1a" }}>
      <div
        className="overflow-hidden"
        style={{ width: 348, height: 206, border: "2px solid #1a1a1a", boxShadow: "7px 6px 0px #1a1a1a" }}
      >
        <img
          src="/images/web-07.jpg"
          alt="ARCHIVE"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>

    {/* 右：カラーブロック + テキスト */}
    <div className="flex flex-col flex-1 overflow-hidden">

      {/* カラーブロック */}
      <div className="flex shrink-0" style={{ height: 45, borderBottom: "5px solid #1a1a1a" }}>
        <div style={{ flex: 1, backgroundColor: "#2986CC", borderRight: "5px solid #1a1a1a" }} />
        <div style={{ width: 280, backgroundColor: "#FFB703", borderRight: "5px solid #1a1a1a" }} />
        <div style={{ width: 180, backgroundColor: "#F44336" }} />
      </div>

      {/* テキストエリア：Concept + Duration + Tool 横並び */}
      <div className="flex flex-1 overflow-hidden">

        {/* Concept */}
        <div className="px-5 py-6 flex-1" style={{ borderRight: "5px solid #1a1a1a" }}>
          <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Concept</p>
          <p className="text-sm leading-7" style={{ ...noto, color: "#444" }}>
            自身のグラフィック制作物を集約した、シングルページ構成のアーカイブサイトです。ミニマルな情報の羅列と、視覚的なインパクトを放つ動的な背景アニメーションを融合させることで、鑑賞者の目を引く構成を目指しました。
          </p>
          <p className="text-sm leading-7 mt-4" style={{ ...noto, color: "#444" }}>
            最大の特徴は、右上のトグルスイッチによって「背景アニメーションの切り替え」と「アーカイブの全体閲覧」をシームレスに行えるインターフェースです。あえてシンプルなリスト形式を採用することで、グリッドシステムやフォトモンタージュを用いた各作品の個性を際立たせ、デジタル空間ならではの没入感と、図録のような情報の整理整頓を両立させています。
          </p>
        </div>

        {/* Duration */}
        <div className="px-8 py-6 shrink-0" style={{ width: 280, borderRight: "5px solid #1a1a1a" }}>
          <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Duration: 35 Days</p>
          {["Planning & UX Research: 5 Days", "UI Design: 14 Days", "Development: 14 Days", "Testing & Launch: 2 Days"].map((item) => (
            <p key={item} className="text-sm" style={{ ...noto, color: "#444" }}>{item}</p>
          ))}
        </div>

        {/* Tool */}
        <div className="px-8 py-6 shrink-0" style={{ width: 180 }}>
          <p style={{ ...blippo, fontSize: "24px", color: "#1a1a1a" }} className="mb-3">Tool</p>
          <div className="flex flex-col gap-2">
            {["Photoshop", "Figma", "HTML", "CSS", "JavaScript"].map((tool) => (
              <span key={tool} className="px-2 py-1 inline-block" style={{ ...noto, fontSize: "14px", color: "#1a1a1a", border: "1px solid #1a1a1a", width: "fit-content" }}>{tool}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* 下部：黒帯 */}
  <div className="flex shrink-0 items-stretch justify-between" style={{ borderTop: "5px solid #1a1a1a", flex: 1 }}>

    {/* カラーパレット */}
    <div className="flex flex-1 items-center justify-center">
      <div className="flex overflow-hidden" style={{ border: "2px solid #1a1a1a" }}>
        {[
          { color: "#F6F2E0", label: "#F6F2EC", width: 437 },
          { color: "#FFFFFE", label: "#FFFFEB", width: 111 },
          { color: "#A9D566", label: "#A9D566", width: 111 },
          { color: "#C2B09B", label: "#C2B09B", width: 111 },
        ].map((item) => (
          <div
            key={item.color}
            className="flex items-end p-3"
            style={{ width: item.width, height: 85, backgroundColor: item.color, borderRight: "1px solid #333" }}
          >
            <span style={{ ...blippo, fontSize: "10px", color: "#1a1a1a" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bodoni */}
    <div className="flex items-center gap-6 px-8" style={{ borderLeft: "5px solid #333" }}>
      <span style={{ fontFamily: "'Didot', 'Bodoni MT', Georgia, serif", fontSize: "16px", color: "#1a1a1a" }}>Bodoni</span>
      <span style={{ fontFamily: "'Didot', 'Bodoni MT', Georgia, serif", fontSize: "16px", color: "#1a1a1a", letterSpacing: "0.05em" }}>
        ABCDEFGHIJKLM<br />NOPQRSTUVWXYZ
      </span>
    </div>

    {/* View Project */}
    <a
      href="https://amasaki10231023-blip.github.io/Graphic-Design-Collection/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center shrink-0"
      style={{ backgroundColor: "#F44336", width: 64, alignSelf: "stretch", writingMode: "vertical-rl", borderLeft: "5px solid #1a1a1a", borderRight: "5px solid #1a1a1a", marginLeft: "auto" }}
    >
      <span style={{ ...blippo, fontSize: "14px", color: "#ffffff" }}>View Project &#8594;</span>
    </a>

  </div>
</section>

        <ContactSection />
      </main>
    </div>
  );
}
