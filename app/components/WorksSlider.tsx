"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/works-1.jpg",
  "/images/works-2.jpg",
];

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };

export default function WorksSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(Math.floor(Math.random() * images.length));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="works"
      className="relative w-full h-screen overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Slider backgrounds */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      ))}

      {/* Fallback background */}
      <div className="absolute inset-0" style={{ backgroundColor: "#c8c3bb", zIndex: -1 }} />

      {/* Right links */}
      <div className="absolute top-8 right-12 flex flex-col items-end gap-1" style={{ zIndex: 10 }}>
        {[
          { label: "Graphic", href: "/graphic" },
          { label: "Dtp", href: "/dtp" },
          { label: "Web", href: "/web" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-[24px] hover:opacity-60 transition-opacity"
            style={{ ...blippo, color: "#fff" }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Bottom-left text */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-3" style={{ zIndex: 10 }}>
        <p style={{ ...blippo, fontSize: 56, color: "#fff" }}>Works</p>
        <p style={{  fontFamily: "'Noto Sans JP', sans-serif", fontSize: 24, color: "#fff", lineHeight: 1 }}>View Visual</p>
        <p style={{ ...noto, fontSize: 20, color: "#fff", maxWidth: 560, lineHeight: 1.7 }}>
         Photoshopによる画像合成・フォトモンタージュ。<br />ブランドの世界観を視覚的に表現するコンテンツメイキング。
        </p>
        <a
          href="https://www.behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
          style={{ ...noto, fontSize: 20, color: "#fff" }}
        >
          View all on Behance ↗
        </a>
      </div>
    </section>
  );
}
