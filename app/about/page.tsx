"use client";

import { useEffect } from "react";
import Link from "next/link";
import SidebarPage from "../components/SidebarPage";
import ContactSection from "../components/ContactSection";
import WorksSlider from "../components/WorksSlider";
import ResumeSection from "../components/ResumeSection";
import PmSection from "../components/PmSection";

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

export default function About() {
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
    <div className="bg-[#F2EFE9]" style={{ height: "100vh" }}>
      <div className="fixed inset-0 pointer-events-none z-0" style={gridBg} />
      <SidebarPage />

      <main
        className="relative z-10 ml-[81px]"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >

        {/* ── Who? ── */}
        <section
          id="who"
          className="h-screen overflow-hidden flex fade-section"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Left: title + profile box */}
          <div className="flex flex-col pt-20 pb-8 shrink-0" style={{ paddingLeft: 100, paddingRight: 48 }}>
            <h2 className="text-[150px] leading-none mb-10" style={{ ...blippo, color: "#1a1a1a" }}>
              Who<span style={{ color: "#FFB703" }}>?</span>
            </h2>
            <div className="w-[555px] p-8 shrink-0" style={{ backgroundColor: "#FFB703", border: "10px solid #1a1a1a" }}>
              <p className="text-[40px] leading-none mb-1" style={{ ...blippo, color: "#1a1a1a" }}>
                ARAO MASAKI
              </p>
              <p className="text-[24px] mb-6" style={{ ...blippo, color: "#1a1a1a" }}>
                Production Management × Visual Creation
              </p>
              <p className="text-[24px] leading-8" style={{ ...noto, color: "#1a1a1a" }}>
                前職では複数拠点の進行管理を担い、繁忙期でも達成率110%・全国最高水準を維持。
                デジタルハリウッドにてPhotoshop・Illustrator・Figma・HTML/CSSを実践習得し、
                DTP個人受注の経験も持つ。Photoshopを用いたフォトモンタージュ・画像合成など、
                ブランドの世界観を視覚的に表現するコンテンツメイキングを得意とし、
                クライアントのコンセプトをデジタル領域に落とし込むことに最も注力している。
              </p>
            </div>
          </div>

          {/* Right: Bauhaus image × 2, full height */}
          <div className="flex h-screen overflow-hidden absolute right-0 top-0">
  {[0, 1].map((i) => (
    <div key={i} className="h-screen overflow-hidden shrink-0 mx-[26px]" style={{ width: "76px" }}>
      <img
        src="/images/Bauhaus.png"
        alt="Bauhaus"
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
        </section>

        {/* ── Works ── */}
        <WorksSlider />

        {/* ── PM ── */}
        <PmSection />

        <ResumeSection blippo={blippo} noto={noto} />

        <ContactSection />
      </main>
    </div>
  );
}
