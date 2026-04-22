"use client";

import { useState, useEffect } from "react";
import SidebarPage from "../components/SidebarPage";
import ContactSection from "../components/ContactSection";

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

const sectionIds = ["work-01", "work-02", "contact"];

const shopPosterSlides = [
  {
    src: "/images/shop-poster-01.jpg",
    title: "MELLOW EYE LAB.",
    colors: ["#DIA594", "#FFFFFF"],
  },
  {
    src: "/images/shop-poster-02.jpg",
    title: "yoga poster",
    colors: ["#F5F1E9", "#D8A692"],
  },
  {
    src: "/images/shop-poster-03.jpg",
    title: "nail salon poster",
    colors: ["#8E503A", "#4C2318"],
  },
];

export default function Dtp() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (shopPosterSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % shopPosterSlides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

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

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % shopPosterSlides.length);
  };

  const currentSlide = shopPosterSlides[current];

  return (
    <div
      className="bg-[#F2EFE9]"
      style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}
    >
      <div className="fixed inset-0 pointer-events-none z-0" style={gridBg} />
      <SidebarPage sectionIds={sectionIds} />

      <main className="relative z-10 ml-[81px]">
        {/* dtp-top + work-01: 統合セクション */}
        <section
          id="dtp-top"
          className="px-16 border-b border-[#1a1a1a] flex flex-col overflow-hidden fade-section"
          style={{ scrollSnapAlign: "start", height: "100vh" }}
        >
          {/* ヘッダー */}
          <div className="px-16 pt-10 pb-8 border-b border-[#1a1a1a] -mx-16 shrink-0">
            <h1 className="text-[96px] leading-none" style={{ ...blippo, color: "#1a1a1a", textAlign: "left" }}>
              Dtp
            </h1>
            <p className="mt-4 text-sm" style={{ ...noto, color: "#555" }}>
              DTP Works — 01 to 02
            </p>
          </div>

          {/* work-01コンテンツ */}
          <div id="work-01" className="flex-1 py-10 flex gap-8 items-start overflow-hidden">

            {/* 左：番号 */}
            <p
              className="text-[48px] leading-none shrink-0 w-16"
              style={{ ...blippo, color: "#1a1a1a", textAlign: "left" }}
            >
              01
            </p>

            {/* 中央：作品画像 */}
            <div
              className="shrink-0 border border-[#1a1a1a] overflow-hidden"
              style={{ width: "min(35vw, 420px)", aspectRatio: "1 / 1.414", backgroundColor: "#ddd8d0" }}
            >
              <img
                src="/images/Business card.jpg"
                alt="Business card"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 右：テキスト情報 */}
            <div className="flex-1 pt-2 pl-4" style={{ maxWidth: "700px" }}>

              {/* Title */}
              <div className="mb-6">
                <p className="text-xs mb-1" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                  Title
                </p>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <p className="text-[16px] leading-tight" style={{ ...noto, color: "#1a1a1a" }}>
                    Business card / OLTA Fumiya Minami
                  </p>
                </div>
              </div>

              {/* Concept */}
              <div className="mb-8">
                <p className="text-xs mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                  Concept
                </p>
                <div className="border-b border-[#1a1a1a] pb-6">
                  {`ヘアサロン「OLTA」の店長、南 郁弥氏の名刺制作プロジェクトです。サロンの持つ洗練された空気感を、淡いトーンによって表現しました。\n\n最大の特徴は、クライアントの強い要望であった「愛犬（フレンチブルドッグ）」の要素を、名刺全体のミニマルな世界観を損なうことなく融合させた点にあります。新たに描き起こしたオリジナルイラストを裏面に配置し、表面のストイックな文字組みとの対比を作ることで、プロフェッショナルな信頼感と親しみやすさが同居するデザインを目指しました。`.split("\n\n").map((paragraph, idx) => (
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

              {/* Duration / Tool / Print & Material */}
              <div className="flex gap-16 pt-2">

                {/* Duration */}
                <div>
                  <p className="text-sm mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                    Duration: 4 Days
                  </p>
                  <div className="flex flex-col gap-1">
                    {["Planning & Concept: 2 Days", "Production: 1 Day", "Final Polish: 1 Day"].map((item) => (
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
                    {["Illustrator", "InDesign"].map((t) => (
                      <p key={t} className="text-sm" style={{ ...noto, color: "#444" }}>
                        {t}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Print & Material */}
                <div>
                  <p className="text-sm mb-3" style={{ ...blippo, color: "#1a1a1a", fontSize: "24px" }}>
                    Print & Material
                  </p>
                  <span style={{ ...noto, color: "#1a1a1a", whiteSpace: "pre-line", fontSize: "14px" }}>
                    {"手にした時の質感と発色の良さを重視し、紙質は\n「ヴァンヌーボV ホワイト 235kg」を選択"}
                  </span>
                </div>

              </div>
            </div>

          </div>{/* work-01コンテンツ end */}
        </section>

        {/* 02: Shop poster — フルスクリーンスライドショー */}
        <section
          id="work-02"
          className="relative border-b border-[#1a1a1a] overflow-hidden cursor-pointer fade-section"
          style={{ height: "100vh", scrollSnapAlign: "start" }}
          onClick={handleClick}
        >
          {/* 背景画像（フェード切り替え） */}
          {shopPosterSlides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[600ms]"
              style={{ opacity: i === current ? 1 : 0 }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          ))}

          {/* フォールバック背景 */}
          <div className="absolute inset-0" style={{ backgroundColor: "#c8c3bb", zIndex: -1 }} />

          {/* 左上：番号 + タイトル */}
          <div className="absolute top-8 left-8 z-10">
            <p style={{ ...blippo, fontSize: "32px", color: "#ffffff", textAlign: "left" }}>02&nbsp;&nbsp;Shop poster</p>
          </div>

          {/* 右下：スライドタイトル + カラーコード */}
          <div className="absolute bottom-8 right-8 z-10 flex gap-2 items-center">
            <p style={{ ...blippo, fontSize: "18px", color: "#ffffff", marginRight: "32px" }}>{currentSlide.title}</p>
            {currentSlide.colors.map((color) => (
              <p key={color} style={{ ...blippo, fontSize: "18px", color: "#ffffff" }}>{color}</p>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}
