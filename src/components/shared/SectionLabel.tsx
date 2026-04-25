import React from 'react';

export default function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.52rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(96,196,255,0.5)',
            marginBottom: '0.5rem',
            marginTop: '1.4rem',
            fontWeight: 600,
        }}>
            <div style={{
                width: 2,
                height: 12,
                borderRadius: 1,
                background: 'linear-gradient(180deg, #60c4ff, rgba(96,196,255,0.2))',
                boxShadow: '0 0 5px rgba(96,196,255,0.5)',
                flexShrink: 0,
            }} />
            {children}
            <div style={{
                flex: 1,
                height: 1,
                background: 'linear-gradient(90deg, rgba(96,196,255,0.12), transparent)',
            }} />
        </div>
    );
}