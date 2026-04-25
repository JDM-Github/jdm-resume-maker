export default function AddBtn({ onClick, label }: { onClick: () => void; label: string }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                background: 'transparent',
                border: '1px dashed rgba(96,196,255,0.18)',
                borderRadius: '6px',
                color: 'rgba(96,196,255,0.45)',
                fontSize: '0.58rem',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '0.12em',
                fontWeight: 600,
                padding: '0.45rem 0.7rem',
                cursor: 'pointer',
                width: '100%',
                marginTop: '0.5rem',
                transition: 'all 0.18s ease',
                textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = 'rgba(96,196,255,0.05)';
                el.style.borderColor = 'rgba(96,196,255,0.35)';
                el.style.color = '#60c4ff';
                el.style.boxShadow = '0 0 12px rgba(96,196,255,0.06)';
            }}
            onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.borderColor = 'rgba(96,196,255,0.18)';
                el.style.color = 'rgba(96,196,255,0.45)';
                el.style.boxShadow = 'none';
            }}
        >
            <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: '1px solid currentColor',
                fontSize: '0.7rem',
                lineHeight: 1,
                flexShrink: 0,
            }}>+</span>
            {label}
        </button>
    );
}