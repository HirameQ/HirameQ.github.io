import React from 'react';
import {HQ} from './HQShell';

// 棚下LEDガイドの棚の図（/led-guide/ と /works/handy/ の両方で使う）。
const GREEN = '#2EAD5B';
const RED = '#E0483C';
const BLUE = '#3A7BE0';

// 棚の図。lit = [色, 表示, 点滅]
const shelf = [
  ['A', { 3: [GREEN, 'ここです'] }],
  ['B', { 7: [RED, '急ぎ', true] }],
  ['C', { 1: [BLUE, 'しまう場所'] }],
];

export default function Shelf() {
  return (
    <div role="img" aria-label="棚の図：取る棚は緑、急ぎは赤で点滅、しまう場所は青に光っている" style={{ background: '#fff', border: `1px solid ${HQ.line}`, borderRadius: 8, padding: '18px 16px 12px' }}>
      <style>{`
        @keyframes hq-led-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0.15; } }
        .hq-led-blink { animation: hq-led-blink 0.6s infinite; }
        @media (prefers-reduced-motion: reduce) { .hq-led-blink { animation: none; } }
      `}</style>
      {shelf.map(([row, lit]) => (
        <div key={row} style={{ marginBottom: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4 }}>
            {Array.from({ length: 8 }, (_, i) => {
              const l = lit[i + 1];
              return (
                <div key={i} style={{ border: `${l ? 2 : 1}px solid ${l ? l[0] : HQ.line}`, borderRadius: 3, height: 34, display: 'grid', placeItems: 'center', fontSize: 'clamp(7px, 2.2vw, 10px)', fontWeight: l ? 700 : 400, color: l ? HQ.ink : HQ.subLight, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  {l ? l[1] : `${row}-0${i + 1}`}
                </div>
              );
            })}
          </div>
          <div style={{ height: 4, background: '#6B7686', margin: '4px 0 3px' }}/>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4 }}>
            {Array.from({ length: 8 }, (_, i) => {
              const l = lit[i + 1];
              return <div key={i} className={l && l[2] ? 'hq-led-blink' : undefined} style={{ height: 6, borderRadius: 3, background: l ? l[0] : '#4A5566', boxShadow: l ? `0 0 10px ${l[0]}` : 'none' }}/>;
            })}
          </div>
        </div>
      ))}
      <div style={{ fontSize: 11, color: HQ.sub, textAlign: 'center' }}>例：取る棚は緑、急ぎは赤で速く点滅、しまう場所は青</div>
    </div>
  );
}
