import React from 'react';

export default function CompactHead({ ac, children }: { ac: string; children: React.ReactNode }) {
    return (
        <div style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: ac,
            marginBottom: '0.65rem',
            fontFamily: "'DM Mono', monospace",
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
        }}>
            {/* Corner bracket accent */}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
                <path d="M10 1H1V10" stroke={ac} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {children}
            <div style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(90deg, ${ac}44, transparent)`,
            }} />
        </div>
    );
}