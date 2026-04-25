import { Download, Upload, Printer, RefreshCw } from 'lucide-react';

interface Props {
    layout: string;
    scale: number;
    setScale: (s: number) => void;
    onPrint: () => void;
    onExport: () => void;
    onImport: () => void;
    onReset: () => void;
}

export default function Toolbar({ layout, scale, setScale, onPrint, onExport, onImport, onReset }: Props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.55rem 1.25rem',
            borderBottom: '1px solid rgba(96,196,255,0.1)',
            background: 'linear-gradient(90deg, rgba(4,6,12,0.98) 0%, rgba(6,9,18,0.98) 50%, rgba(4,6,12,0.98) 100%)',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient top line glow */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(96,196,255,0.35), transparent)',
                pointerEvents: 'none',
            }} />
            {/* Subtle scanline shimmer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(96,196,255,0.008) 2px, rgba(96,196,255,0.008) 4px)',
                pointerEvents: 'none',
            }} />

            {/* Left: layout badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#60c4ff',
                        boxShadow: '0 0 6px rgba(96,196,255,0.9)',
                    }} />
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.52rem',
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                    }}>
                        Preview
                    </span>
                </div>
                <div style={{ width: 1, height: 10, background: 'rgba(96,196,255,0.12)' }} />
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.18rem 0.55rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(96,196,255,0.2)',
                    background: 'rgba(96,196,255,0.06)',
                }}>
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        color: '#60c4ff',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        textShadow: '0 0 8px rgba(96,196,255,0.5)',
                    }}>
                        {layout}
                    </span>
                </div>
            </div>

            {/* Right: controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
                {/* Zoom pills */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.48rem',
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.1em',
                        marginRight: '0.15rem',
                    }}>ZOOM</span>
                    {[0.5, 0.65, 0.75, 0.9, 1].map(s => {
                        const isActive = scale === s;
                        return (
                            <button
                                key={s}
                                onClick={() => setScale(s)}
                                style={{
                                    padding: '0.22rem 0.42rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${isActive ? 'rgba(96,196,255,0.35)' : 'rgba(96,196,255,0.08)'}`,
                                    background: isActive
                                        ? 'linear-gradient(135deg, rgba(96,196,255,0.14), rgba(96,196,255,0.06))'
                                        : 'transparent',
                                    color: isActive ? '#60c4ff' : 'rgba(255,255,255,0.25)',
                                    fontSize: '0.5rem',
                                    fontFamily: "'DM Mono', monospace",
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    boxShadow: isActive ? '0 0 8px rgba(96,196,255,0.1)' : 'none',
                                    letterSpacing: '0.04em',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'rgba(96,196,255,0.18)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'rgba(96,196,255,0.08)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.25)';
                                    }
                                }}
                            >
                                {Math.round(s * 100)}%
                            </button>
                        );
                    })}
                </div>

                <div style={{ width: 1, height: 14, background: 'rgba(96,196,255,0.1)' }} />

                {/* Reset */}
                <ToolbarBtn icon={<RefreshCw size={11} />} label="Reset" onClick={onReset} />

                {/* Import */}
                <ToolbarBtn icon={<Upload size={11} />} label="Import" onClick={onImport} />

                {/* Export */}
                <ToolbarBtn icon={<Download size={11} />} label="Export" onClick={onExport} accent />

                <div style={{ width: 1, height: 14, background: 'rgba(96,196,255,0.1)' }} />

                {/* Print */}
                <button
                    onClick={onPrint}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.38rem 0.85rem',
                        borderRadius: '5px',
                        border: '1px solid rgba(96,196,255,0.35)',
                        background: 'linear-gradient(135deg, rgba(96,196,255,0.14) 0%, rgba(96,196,255,0.05) 100%)',
                        color: '#60c4ff',
                        fontSize: '0.55rem',
                        fontFamily: "'DM Mono', monospace",
                        cursor: 'pointer',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        transition: 'all 0.18s',
                        boxShadow: '0 0 12px rgba(96,196,255,0.06)',
                        fontWeight: 600,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(96,196,255,0.22) 0%, rgba(96,196,255,0.1) 100%)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(96,196,255,0.2), 0 0 0 1px rgba(96,196,255,0.1)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(96,196,255,0.14) 0%, rgba(96,196,255,0.05) 100%)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(96,196,255,0.06)';
                    }}
                >
                    <Printer size={11} />
                    Export / Print
                </button>
            </div>
        </div>
    );
}

function ToolbarBtn({
    icon, label, onClick, accent = false,
}: {
    icon: React.ReactNode; label: string; onClick: () => void; accent?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '5px',
                border: accent ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(255,255,255,0.08)',
                background: accent ? 'rgba(52,211,153,0.07)' : 'rgba(255,255,255,0.03)',
                color: accent ? '#34d399' : 'rgba(255,255,255,0.35)',
                fontSize: '0.52rem',
                fontFamily: "'DM Mono', monospace",
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                transition: 'all 0.15s',
                fontWeight: 500,
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = accent ? 'rgba(52,211,153,0.13)' : 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = accent ? 'rgba(52,211,153,0.5)' : 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = accent ? '#34d399' : 'rgba(255,255,255,0.65)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = accent ? 'rgba(52,211,153,0.07)' : 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = accent ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = accent ? '#34d399' : 'rgba(255,255,255,0.35)';
            }}
        >
            {icon}
            {label}
        </button>
    );
}