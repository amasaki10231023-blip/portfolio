"use client";

import { useEffect } from "react";
import SidebarTop from "./components/SidebarTop";

export default function Home() {
  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-container') as Element;

    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-section-visible');
          }
        });
      },
      {
        root: scrollContainer || null,
        threshold: 0.05,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F2EFE9]">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <SidebarTop />

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-start pt-[13%] pl-[120px] ml-[200px]">
        <h1
          className="leading-[0.925] select-none text-left"
          style={{ fontFamily: "'Blippo MN', sans-serif", fontWeight: 900, color: "#1a1a1a" }}
        >
          <span className="block text-[160px]" style={{ marginLeft: "-3px" }}>ARAO</span>
          <span className="block text-[160px]" style={{ marginLeft: "-9px" }}>MASAKI</span>
        </h1>
        <p
          className="mt-6 text-[18px] tracking-widest text-left"
          style={{ fontFamily: "'Blippo MN', sans-serif", fontWeight: 900, color: "#1a1a1a" }}
        >
          Production Management × Visual Creation
        </p>
      </main>
    </div>
  );
}
