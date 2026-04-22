"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navIcons = [
  // 丸: 黄 + 黒stroke 2px
  <span
    key="about"
    style={{
      display: "block",
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "#FFB703",
      border: "2px solid #1a1a1a",
      flexShrink: 0,
    }}
  />,
  // 四角: 赤 + 黒stroke 2px
  <span
    key="works"
    style={{
      display: "block",
      width: 32,
      height: 32,
      backgroundColor: "#F44336",
      border: "2px solid #1a1a1a",
      flexShrink: 0,
    }}
  />,
  // 三角: 青 SVG + 黒stroke 2px
  <svg key="pm" width="32" height="32" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
    <polygon
      points="20,4 38,36 2,36"
      fill="#2986CC"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>,
  // 横線: 黒 32×2px
  <span
    key="resume"
    style={{
      display: "block",
      width: 32,
      height: 2,
      backgroundColor: "#1a1a1a",
      flexShrink: 0,
    }}
  />,
  // 縦線: 幅16px・高さ32px・白背景・黒枠・白縦線
  <span
    key="contact"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 32,
      border: "2px solid #1a1a1a",
      backgroundColor: "#ffffff",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        display: "block",
        width: 2,
        height: 20,
        backgroundColor: "#ffffff",
      }}
    />
  </span>,
];

const navHrefs = ["/about", "/about#works", "/about#pm", "/about#resume", "/about#contact"];

interface Props {
  sectionIds?: string[];
}

export default function SidebarPage({ sectionIds = ["who", "works", "pm", "resume", "contact"] }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0, rootMargin: "-60% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return (
    <aside
      className="fixed top-0 left-0 z-20 flex flex-col items-center"
      style={{ width: 81, height: "100vh", backgroundColor: "#F2EFE9", borderRight: "1px solid #1a1a1a" }}
    >
      {/* Nav icons */}
      <nav className="flex flex-col items-center gap-8 pt-10">
        {navIcons.map((icon, i) => (
          <Link
            key={i}
            href={navHrefs[i]}
            className="flex items-center justify-center hover:opacity-50 transition-opacity"
          >
            {icon}
          </Link>
        ))}
      </nav>

      {/* Section dots */}
      <div className="mt-auto mb-10 flex flex-col items-center gap-4">
        {sectionIds.map((_, i) => (
          <span
            key={i}
            className="rounded-full transition-all duration-300"
            style={
              i === activeIndex
                ? { width: 8, height: 8, backgroundColor: "#1a1a1a" }
                : { width: 5, height: 5, backgroundColor: "transparent", border: "1px solid #aaa" }
            }
          />
        ))}
      </div>
    </aside>
  );
}
