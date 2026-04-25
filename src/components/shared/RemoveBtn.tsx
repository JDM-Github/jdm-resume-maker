export default function RemoveBtn({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'rgba(239,68,68,0.05)',
                border: '1px solid rgba(239,68,68,0.15)',
                borderRadius: '5px',
                color: 'rgba(239,68,68,0.5)',
                fontSize: '0.52rem',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '0.1em',
                fontWeight: 600,
                padding: '0.25rem 0.55rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(239,68,68,0.12)';
                e.currentTarget.style.borderColor = 'rgba(239,68,68,0.35)';
                e.currentTarget.style.color = '#ef4444';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(239,68,68,0.1)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(239,68,68,0.05)';
                e.currentTarget.style.borderColor = 'rgba(239,68,68,0.15)';
                e.currentTarget.style.color = 'rgba(239,68,68,0.5)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Remove
        </button>
    );
}