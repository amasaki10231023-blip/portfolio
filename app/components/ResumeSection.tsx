"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ── レーダーデータ ────────────────────────────────────────
const RADAR_DATA = {
  tool: {
    axes: ["Photoshop", "Illustrator", "Figma", "HTML/CSS", "InDesign", "JavaScript"],
    values: [92, 80, 75, 65, 40, 55],
  },
  work: {
    axes: ["進行管理", "外注管理", "課題構造化", "スケジュール", "ビジュアル", "品質確認"],
    values: [95, 90, 88, 92, 78, 85],
  },
} as const;

type RadarKey = keyof typeof RADAR_DATA;

// ── タグデータ ────────────────────────────────────────────
const TAG_GROUPS: { title: string; tags: string[]; accent: number[] }[] = [
  {
    title: "志望領域",
    tags: ["ファッション", "制作進行 / AP", "ブランドビジュアル", "DTP制作管理"],
    accent: [],
  },
  {
    title: "制作スキル",
    tags: ["フォトモンタージュ", "画像合成", "グラフィックレイアウト", "UI設計", "Webコーディング", "入稿データ制作"],
    accent: [],
  },
  {
    title: "マネジメント",
    tags: ["外注先進行管理", "工程分解", "スケジュール最適化", "KPI管理", "品質確認", "分業体制設計"],
    accent: [],
  },
  {
    title: "パーソナリティ",
    tags: ["ロジカル思考", "ブランド感性", "課題構造化", "再現性重視", "デザイン志向"],
    accent: [],
  },
];

// ── タイムラインデータ ────────────────────────────────────
const TIMELINE = [
  {
    date: "2024.03 – 2025.11",
    company: "アベントゥーライフ株式会社",
    role: "エリア倉庫管理責任者",
    desc: "2拠点統括・人員管理・外注先進行管理\n達成率110%・全国最高水準",
    accent: false,
  },
  {
    date: "2025.06 – 2025.11",
    company: "デジタルハリウッド Webデザイナー専攻",
    role: "受講生",
    desc: "Photoshop / Figma / HTML・CSS習得\nDTP個人受注・Webサイト制作",
    accent: false,
  },
  {
    date: "2026 〜",
    company: "独学継続中",
    role: "フリーランス / 求職中",
    desc: "色彩検定2級 / InDesign\nDTP印刷入稿対応準備・個人受注継続",
    accent: true,
  },
];

// ── RadarChart ────────────────────────────────────────────
function RadarChart({ dataKey }: { dataKey: RadarKey }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const d = RADAR_DATA[dataKey];
    const dpr = window.devicePixelRatio || 1;
    const size = canvas.parentElement?.offsetWidth ?? 240;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, size, size);

    const cx = size / 2, cy = size / 2;
    const R = size * 0.36;
    const n = d.axes.length;
    const levels = 5;
    const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
    const pt = (i: number, r: number) => ({
      x: cx + r * Math.cos(angle(i)),
      y: cy + r * Math.sin(angle(i)),
    });

    // グリッド
    for (let lv = 1; lv <= levels; lv++) {
      const r = (R * lv) / levels;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const p = pt(i, r);
        i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.strokeStyle = lv === levels ? "#C8C4BA" : "#DDD9D1";
      ctx.lineWidth = lv === levels ? 1 : 0.6;
      ctx.stroke();
    }

    // スポーク
    for (let i = 0; i < n; i++) {
      const p = pt(i, R);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = "#C8C4BA";
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    // 塗りつぶしポリゴン
    ctx.beginPath();
    d.values.forEach((v, i) => {
      const p = pt(i, (R * v) / 100);
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(255,183,3,0.15)";
    ctx.fill();
    ctx.strokeStyle = "#FFB703";
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // ドット
    d.values.forEach((v, i) => {
      const p = pt(i, (R * v) / 100);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#FFB703";
      ctx.fill();
      ctx.strokeStyle = "#1A1610";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // ラベル
    ctx.font = `10px "DM Mono", monospace`;
    ctx.fillStyle = "#4A4840";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    d.axes.forEach((label, i) => {
      const p = pt(i, R + 22);
      ctx.fillText(label, p.x, p.y);
    });
  }, [dataKey]);

  useEffect(() => {
    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [draw]);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />;
}

// ── ToggleButton ──────────────────────────────────────────
function ToggleButton({
  open,
  onClick,
  blippo,
}: {
  open: boolean;
  onClick: () => void;
  blippo: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-4 self-start px-4 py-2 border border-[#1a1a1a] text-xs hover:bg-[#1a1a1a] hover:text-white transition-colors"
      style={blippo}
    >
      {open ? "CLICK TO COLLAPSE" : "CLICK TO EXPAND"}
    </button>
  );
}

// ── ResumeSection (メインコンポーネント) ──────────────────
export default function ResumeSection({
  blippo,
  noto,
}: {
  blippo: React.CSSProperties;
  noto: React.CSSProperties;
}) {
  const [open, setOpen] = useState<[boolean, boolean, boolean]>([true, false, false]);
  const [radarKey, setRadarKey] = useState<RadarKey>("tool");

  const toggle = (i: 0 | 1 | 2) =>
    setOpen((prev) => {
      const next = [...prev] as [boolean, boolean, boolean];
      next[i] = !next[i];
      return next;
    });

  const avg = Math.round(
    RADAR_DATA[radarKey].values.reduce((a, b) => a + b, 0) /
      RADAR_DATA[radarKey].values.length
  );

  return (
    <section
      id="resume"
      className="min-h-screen overflow-hidden px-16 py-16"
      style={{ scrollSnapAlign: "start", backgroundColor: "#F2EFE9" }}
    >
      {/* タイトル */}
      <h2
        className="text-[72px] leading-none mb-1"
        style={{ ...blippo, color: "#1a1a1a" }}
      >
        Resume
      </h2>
      <div className="h-[4px] mb-10" style={{ backgroundColor: "#FFB703", width: "15.5rem" }} />

      {/* カラムグリッド */}
      <div className="grid grid-cols-3 border-t border-[#C8C4BA]">

        {/* ── COL 01: 経歴タイムライン ── */}
        <div className="border-r border-[#C8C4BA] flex flex-col">
          <div
            className="flex justify-between items-start px-5 py-4 border-b border-[#C8C4BA] cursor-pointer"
            onClick={() => toggle(0)}
          >
            <span className="text-[12px] tracking-widest text-[#1a1a1a]" style={blippo}>01</span>
            <span className="text-[12px] tracking-widest uppercase" style={blippo}>Work Experience</span>
          </div>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open[0] ? "9999px" : "0", opacity: open[0] ? 1 : 0 }}
          >
            <div className="px-5 py-7 flex flex-col gap-8">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: item.accent ? "#FFB703" : "#1a1a1a" }}
                    />
                    {idx < TIMELINE.length - 1 && (
                      <span className="w-px flex-1 mt-1" style={{ backgroundColor: "#C8C4BA" }} />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] mb-1" style={{ ...blippo, color: "#888272" }}>
                      {item.date}
                    </p>
                    <p className="text-sm font-bold" style={{ ...noto, color: "#1a1a1a" }}>
                      {item.company}
                    </p>
                    <p className="text-xs mt-0.5" style={{ ...noto, color: "#888272" }}>
                      {item.role}
                    </p>
                    <p className="text-xs mt-1 leading-5 whitespace-pre-line" style={{ ...noto, color: "#555" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 py-3 border-t border-[#C8C4BA] mt-auto">
            <ToggleButton open={open[0]} onClick={() => toggle(0)} blippo={blippo} />
          </div>
        </div>

        {/* ── COL 02: アイデンティティタグ ── */}
        <div className="border-r border-[#C8C4BA] flex flex-col">
          <div
            className="flex justify-between items-start px-5 py-4 border-b border-[#C8C4BA] cursor-pointer"
            onClick={() => toggle(1)}
          >
            <span className="text-[12px] tracking-widest text-[#1a1a1a]" style={blippo}>02</span>
            <span className="text-[12px] tracking-widest uppercase" style={blippo}>Identity Tags</span>
          </div>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open[1] ? "9999px" : "0", opacity: open[1] ? 1 : 0 }}
          >
            <div className="px-5 py-7 flex flex-col gap-5">
              {TAG_GROUPS.map((group, gi) => (
                <div key={gi}>
                  <p
                    className="text-[9px] tracking-widest uppercase mb-2 pl-2 border-l-2"
                    style={{ ...blippo, color: "#888272", borderColor: "#FFB703" }}
                  >
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] px-2.5 py-1 border transition-colors cursor-default"
                        style={{
                          ...blippo,
                          backgroundColor: group.accent.includes(ti) ? "#FFB703" : "transparent",
                          borderColor: group.accent.includes(ti) ? "#FFB703" : "#C8C4BA",
                          color: "#1A1610",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 py-3 border-t border-[#C8C4BA] mt-auto">
            <ToggleButton open={open[1]} onClick={() => toggle(1)} blippo={blippo} />
          </div>
        </div>

        {/* ── COL 03: スキルレーダー ── */}
        <div className="flex flex-col">
          <div
            className="flex justify-between items-start px-5 py-4 border-b border-[#C8C4BA] cursor-pointer"
            onClick={() => toggle(2)}
          >
            <span className="text-[12px] tracking-widest text-[#1a1a1a]" style={blippo}>03</span>
            <span className="text-[12px] tracking-widest uppercase" style={blippo}>Tool Level</span>
          </div>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open[2] ? "9999px" : "0", opacity: open[2] ? 1 : 0 }}
          >
            <div className="px-5 py-7">
              {/* タブ */}
              <div className="flex border border-[#C8C4BA] w-fit mb-5">
                {(["tool", "work"] as RadarKey[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setRadarKey(k)}
                    className="text-[9px] tracking-widest uppercase px-3 py-1.5 transition-colors"
                    style={{
                      ...blippo,
                      backgroundColor: radarKey === k ? "#1A1610" : "transparent",
                      color: radarKey === k ? "#F2EFE9" : "#888272",
                      borderRight: k === "tool" ? "1px solid #C8C4BA" : "none",
                    }}
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* キャンバス */}
              <div className="w-full max-w-[260px] mx-auto aspect-square">
                <RadarChart dataKey={radarKey} />
              </div>

              {/* レジェンド */}
              <div className="mt-4 flex flex-col gap-1.5">
                {RADAR_DATA[radarKey].axes.map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[9px] text-[#4A4840] min-w-[70px]" style={blippo}>
                      {label}
                    </span>
                    <div className="flex-1 h-[2px] bg-[#C8C4BA] relative">
                      <div
                        className="absolute left-0 top-0 h-[2px]"
                        style={{ width: `${RADAR_DATA[radarKey].values[i]}%`, backgroundColor: "#FFB703" }}
                      />
                    </div>
                    <span className="text-[9px] text-[#1A1610] min-w-[24px] text-right" style={blippo}>
                      {RADAR_DATA[radarKey].values[i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* スコア */}
              <div
                className="flex items-baseline gap-2 mt-4 pt-3"
                style={{ borderTop: "1px solid #C8C4BA" }}
              >
                <span className="text-[9px] tracking-widest text-[#888272]" style={blippo}>AVG</span>
                <span className="text-[22px] leading-none text-[#1A1610]" style={blippo}>{avg}</span>
                <span className="text-[11px]" style={{ ...blippo, color: "#FFB703" }}>/ 100</span>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 border-t border-[#C8C4BA] mt-auto">
            <ToggleButton open={open[2]} onClick={() => toggle(2)} blippo={blippo} />
          </div>
        </div>

      </div>
    </section>
  );
}
