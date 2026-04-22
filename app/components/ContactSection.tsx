"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };

const palette = [
  { color: "#F2EFE9", label: "#f2efe9" },
  { color: "#FFB703", label: "#ffb703" },
  { color: "#F44336", label: "#f44336" },
  { color: "#2986CC", label: "#2986cc" },
];

const pageLinks = [
  { label: "Graphic", href: "/graphic" },
  { label: "Dtp",     href: "/dtp" },
  { label: "Web",     href: "/web" },
];

export default function ContactSection() {
  const pathname = usePathname();
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (imgRef.current) setImgHeight(imgRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      id="contact"
      className="relative h-screen flex flex-col border-t border-[#1a1a1a] overflow-hidden"
      style={{ scrollSnapAlign: "start", width: "calc(100vw - 81px)" }}
    >

      {/* ── 1. Contactタイトル + Bauhaus2画像 ── */}
      <div
        className="flex items-center shrink-0 overflow-hidden"
        style={{ paddingLeft: 50, paddingTop: 20, paddingRight: 20 }}
      >
        <h2
          className="text-[72px] leading-none shrink-0 mr-[50px]"
          style={{ ...blippo, color: "#1a1a1a" }}
        >
          Contact
        </h2>
        <img
          src="/images/Bauhaus2.png"
          alt=""
          aria-hidden
          className="shrink-0"
          style={{ height: 72, width: "auto", display: "block" }}
        />
      </div>

      {/* ── 2. カラーパレット ── */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="flex"
          style={{
            width: 800,
            height: 100,
            border: "1px solid #1a1a1a",
          }}
        >
          {palette.map(({ color, label }) => (
            <div
              key={color}
              className="flex items-end p-2"
              style={{
                backgroundColor: color,
                flex: color === "#F2EFE9" ? 3 : 1,
                borderRight: color !== "#2986CC" ? "1px solid #1a1a1a" : "none",
              }}
            >
              <span className="text-[11px]" style={{ ...blippo, color: "#1a1a1a" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. メニュータブ + 連絡先 ── */}
      <div
        className="absolute flex items-end justify-between"
        style={{ bottom: imgHeight + 20, left: 50, right: 50 }}
      >
        <div className="flex flex-col gap-1">
          {pageLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="text-sm py-1 transition-opacity hover:opacity-60 w-fit"
                style={{ ...noto, color: isActive ? "#FFB703" : "#1a1a1a" }}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-sm" style={{ ...noto, color: "#1a1a1a" }}>a.msaki10231023@gmail.com</p>
          <p className="text-sm" style={{ ...noto, color: "#1a1a1a" }}>080-9145-8396</p>
        </div>
      </div>

      {/* ── 4. My work portfolio画像 ── */}
      <div
        className="absolute"
        style={{ bottom: 0, left: 50, right: 50, width: "calc(100% - 100px)" }}
      >
        <Link href="/" className="block hover:opacity-70 transition-opacity">
          <img
            ref={imgRef}
            src="/images/My work portfolio.png"
            alt="My work portfolio"
            style={{ display: "block", width: "100%" }}
            onLoad={() => {
              if (imgRef.current) setImgHeight(imgRef.current.offsetHeight);
            }}
          />
        </Link>
      </div>

    </section>
  );
}
