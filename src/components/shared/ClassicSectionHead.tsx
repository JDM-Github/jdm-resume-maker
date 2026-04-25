import React from 'react';

export default function ClassicSectionHead({ ac, children }: { ac: string; children: React.ReactNode }) {
    return (
        <div style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#0f172a',
            fontFamily: "'DM Mono', monospace",
            marginBottom: '0.7rem',
            position: 'relative',
            paddingBottom: '0.3rem',
        }}>
            {children}
            {/* Bottom border: solid left anchor → fades right */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                borderRadius: 1,
                background: `linear-gradient(90deg, ${ac}, ${ac}44, transparent)`,
            }} />
        </div>
    );
}