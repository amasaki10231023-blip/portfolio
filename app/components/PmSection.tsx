'use client';

import { useState } from 'react';

const blippo: React.CSSProperties = { fontFamily: "'Blippo MN', sans-serif", fontWeight: 900 };
const noto: React.CSSProperties = { fontFamily: "'Noto Sans JP', sans-serif" };
const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };

const duties = [
  '外部委託先への業務指示・進行管理・品質確認',
  'ロジックツリーを用いた課題構造化・改善推進',
  'KPI設定・数値管理・進行状況の可視化',
  '業務フローの可視化・プロセス設計',
  '工数分解と分業体制の設計・導入',
];

const achievements = [
  {
    num: '01',
    main: '100%\n達成率',
    sub: '全国最高水準を維持',
    details: [
      '繁忙期でも達成率110%・全国最高水準を維持',
      '複数拠点統括・人員管理・外注先進行管理',
      '品質基準の標準化によるミス率の大幅削減',
    ],
  },
  {
    num: '02',
    main: '全国\nモデルケース',
    sub: '業務改善事例として全国展開',
    details: [
      '独自の進行管理フローが社内モデルとして採用',
      '全国展開のためのマニュアル作成・研修実施',
      '改善施策の横展開による組織全体の底上げ',
    ],
  },
  {
    num: '03',
    main: '生産性・\n超勤率の改善',
    sub: 'チーム全体の効率化を推進',
    details: [
      '工数分解により業務内容の明確化と残業時間の短縮',
      'タスクの優先順位設計による集中作業時間の確保',
      'メンバーへの業務配分最適化で稼働率を均一化',
    ],
  },
  {
    num: '04',
    main: '制作現場への\n転用貢献',
    sub: 'PM知見をクリエイティブに応用',
    details: [
      'Webサイト制作における進行・品質管理の内製化',
      'DTP個人受注でのディレクション経験を蓄積',
      'クライアントとの要件定義・スケジュール策定',
    ],
  },
];

export default function PmSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="pm"
      style={{
        scrollSnapAlign: 'start',
        height: '100vh',
        backgroundColor: '#F2EFE9',
        display: 'grid',
        gridTemplateColumns: '380px 3px 1fr',
        overflow: 'hidden',
      }}
    >
      {/* 左：セクションヘッド */}
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', overflow: 'hidden' }}>
        {/* タイトル */}
        <div style={{ padding: '36px 36px 28px', borderBottom: '3px solid #1a1a1a' }}>
          
          <p style={{ ...blippo, fontSize: 38, lineHeight: 0.9, letterSpacing: -1, color: '#1a1a1a' }}>
            Production<br />Management
            <em style={{ fontStyle: 'normal', color: '#FFB703', display: 'block', marginTop: 4 }}>
              × Visual Creation
            </em>
          </p>
        </div>

        {/* 業務リスト */}
        <div style={{ overflowY: 'auto' }}>
          {duties.map((d, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                padding: '16px 36px',
                borderBottom: '1px solid rgba(43,43,43,0.13)',
              }}
            >
              <div style={{ width: 3, alignSelf: 'stretch', backgroundColor: '#1a1a1a', flexShrink: 0 }} />
              <span style={{ ...noto, fontSize: 12, fontWeight: 300, lineHeight: 1.75, color: '#1a1a1a' }}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 縦ライン */}
      <div style={{ backgroundColor: '#1a1a1a' }} />

      {/* 右：実績カード2×2グリッド */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 0,
          overflow: 'hidden',
          height: '100vh',
          borderTop: '3px solid #1a1a1a',
          borderBottom: '3px solid #1a1a1a',
        }}
      >
        {achievements.map((a, i) => {
          const isOpen = openCard === i;
          const isHovered = hoveredCard === i;
          const isRightEdge = i === 1 || i === 3;
          const isBottomEdge = i === 2 || i === 3;

          return (
            <div
              key={i}
              onClick={() => setOpenCard(isOpen ? null : i)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: isHovered ? '#1a1a1a' : '#FFB703',
                borderBottom: isBottomEdge ? 'none' : '3px solid #1a1a1a',
                borderRight: isRightEdge ? 'none' : '3px solid #1a1a1a',
                padding: '36px 40px 32px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'background 0.2s',
              }}
            >
              {/* トグルボタン */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 26,
                  height: 26,
                  border: `2px solid ${isHovered ? '#FFB703' : '#1a1a1a'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  color: isHovered ? '#FFB703' : '#1a1a1a',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.3s, border-color 0.2s, color 0.2s',
                }}
              >
                +
              </div>

              {/* 番号 */}
              <div
                style={{
                  ...blippo,
                  fontSize: 18,
                  letterSpacing: -0.5,
                  color: isHovered ? '#FFB703' : '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  transition: 'color 0.2s',
                }}
              >
                {a.num}
                <div style={{ flex: 1, height: 2, backgroundColor: isHovered ? 'rgba(255,183,3,0.25)' : 'rgba(43,43,43,0.2)', transition: 'background 0.2s' }} />
              </div>

              {/* メインテキスト */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 0 16px' }}>
                <div
                  style={{
                    ...blippo,
                    fontSize: 'clamp(26px, 2.8vw, 38px)',
                    letterSpacing: -1,
                    color: isHovered ? '#FFB703' : '#1a1a1a',
                    lineHeight: 0.9,
                    marginBottom: 12,
                    transition: 'color 0.2s',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {a.main}
                </div>
                <div
                  style={{
                    ...noto,
                    fontSize: 12,
                    fontWeight: 300,
                    color: isHovered ? 'rgba(255,183,3,0.6)' : 'rgba(43,43,43,0.6)',
                    lineHeight: 1.6,
                    transition: 'color 0.2s',
                  }}
                >
                  {a.sub}
                </div>
              </div>

              {/* 展開詳細 */}
              <div
                style={{
                  maxHeight: isOpen ? 180 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(.25,.46,.45,.94), padding 0.4s',
                  paddingTop: isOpen ? 16 : 0,
                }}
              >
                <div style={{ borderTop: `1.5px solid ${isHovered ? 'rgba(255,183,3,0.2)' : 'rgba(43,43,43,0.2)'}`, paddingTop: 14 }}>
                  {a.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '3px 0' }}>
                      <div style={{ width: 5, height: 5, backgroundColor: isHovered ? '#FFB703' : '#1a1a1a', flexShrink: 0, marginTop: 2, transition: 'background 0.2s' }} />
                      <span style={{ ...mono, fontSize: 10, fontWeight: 300, color: isHovered ? '#FFB703' : '#1a1a1a', letterSpacing: 0.3, lineHeight: 1.5, transition: 'color 0.2s' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
