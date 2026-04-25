import React from 'react';

export default function SectionHeading({ ac, children }: { ac: string; children: React.ReactNode }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: ac,
            marginBottom: '0.65rem',
            fontFamily: "'DM Mono', monospace",
        }}>
            <div style={{
                width: 3,
                height: 3,
                borderRadius: '50%',
                background: ac,
                boxShadow: `0 0 6px ${ac}`,
                flexShrink: 0,
            }} />
            {children}
            <div style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(90deg, ${ac}33, transparent)`,
            }} />
        </div>
    );
}