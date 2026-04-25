interface Props {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    type?: string;
}

export default function Input({ label, value, onChange, placeholder, type = 'text' }: Props) {
    return (
        <div style={{ marginBottom: '0.6rem' }}>
            <div style={{
                fontSize: '0.52rem',
                color: 'rgba(96,196,255,0.45)',
                marginBottom: '0.25rem',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
            }}>
                {label}
            </div>
            <div style={{ position: 'relative' }}>
                {/* Left accent bar */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 2,
                    height: '60%',
                    borderRadius: 1,
                    background: 'rgba(96,196,255,0.25)',
                    transition: 'all 0.2s',
                }} />
                <input
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                    style={{
                        width: '100%',
                        background: 'rgba(96,196,255,0.03)',
                        border: '1px solid rgba(96,196,255,0.1)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.65rem 0.4rem 0.85rem',
                        color: 'rgba(255,255,255,0.88)',
                        fontSize: '0.72rem',
                        fontFamily: "'DM Sans', sans-serif",
                        outline: 'none',
                        transition: 'all 0.2s',
                        caretColor: '#60c4ff',
                    }}
                    onFocus={e => {
                        e.target.style.borderColor = 'rgba(96,196,255,0.35)';
                        e.target.style.background = 'rgba(96,196,255,0.06)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(96,196,255,0.04), inset 0 0 12px rgba(96,196,255,0.02)';
                        const bar = e.target.previousElementSibling as HTMLElement;
                        if (bar) { bar.style.background = '#60c4ff'; bar.style.boxShadow = '0 0 6px rgba(96,196,255,0.7)'; }
                    }}
                    onBlur={e => {
                        e.target.style.borderColor = 'rgba(96,196,255,0.1)';
                        e.target.style.background = 'rgba(96,196,255,0.03)';
                        e.target.style.boxShadow = 'none';
                        const bar = e.target.previousElementSibling as HTMLElement;
                        if (bar) { bar.style.background = 'rgba(96,196,255,0.25)'; bar.style.boxShadow = 'none'; }
                    }}
                />
            </div>
        </div>
    );
}