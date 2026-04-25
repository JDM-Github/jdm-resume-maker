import { useState, useRef } from 'react';
import {
    Palette, Camera, User, FileText, Wrench, Briefcase,
    GraduationCap, FolderGit2, Heart, Languages, BadgeCheck,
    Trophy, Handshake, BookOpen
} from 'lucide-react';
import { ResumeData } from '../../types';
import SectionForms from './SectionForms';

interface Props {
    data: ResumeData;
    setData: (d: ResumeData) => void;
}

const sections = [
    { key: 'design', icon: Palette, label: 'Design' },
    { key: 'profilePic', icon: Camera, label: 'Photo' },
    { key: 'personal', icon: User, label: 'Personal' },
    { key: 'summary', icon: FileText, label: 'Summary' },
    { key: 'skills', icon: Wrench, label: 'Skills' },
    { key: 'experience', icon: Briefcase, label: 'Experience' },
    { key: 'education', icon: GraduationCap, label: 'Education' },
    { key: 'projects', icon: FolderGit2, label: 'Projects' },
    { key: 'hobbies', icon: Heart, label: 'Hobbies' },
    { key: 'languages', icon: Languages, label: 'Languages' },
    { key: 'certifications', icon: BadgeCheck, label: 'Certs' },
    { key: 'awards', icon: Trophy, label: 'Awards' },
    { key: 'volunteer', icon: Handshake, label: 'Volunteer' },
    { key: 'publications', icon: BookOpen, label: 'Publication' },
];

export default function LeftPanel({ data, setData }: Props) {
    const [activeSection, setActiveSection] = useState('design');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const activeIndex = sections.findIndex(s => s.key === activeSection);

    return (
        <div style={{
            width: '360px',
            minWidth: '320px',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#04060c',
            borderRight: '1px solid rgba(96,196,255,0.1)',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient corner glow */}
            <div style={{
                position: 'absolute',
                top: -60,
                left: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(96,196,255,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            
            {/* Header */}
            <div style={{
                padding: '1.25rem 1.25rem 0',
                flexShrink: 0,
                position: 'relative',
            }}>
                {/* Top rule with dot */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                }}>
                    <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#60c4ff',
                        boxShadow: '0 0 8px rgba(96,196,255,0.9)',
                        flexShrink: 0,
                    }} />
                    <div style={{
                        flex: 1,
                        height: 1,
                        background: 'linear-gradient(90deg, rgba(96,196,255,0.4) 0%, transparent 100%)',
                    }} />
                </div>

                <div style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    letterSpacing: '0.22em',
                    color: '#60c4ff',
                    textShadow: '0 0 14px rgba(96,196,255,0.6), 0 0 40px rgba(96,196,255,0.2)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                }}>
                    JDM | RESUME MAKER
                </div>
                <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.58rem',
                    color: 'rgba(255,255,255,0.22)',
                    letterSpacing: '0.12em',
                    marginBottom: '1rem',
                }}>
                    FILL IN · PREVIEW UPDATES LIVE
                </div>
            </div>

            {/* Nav pills */}
            <div style={{
                padding: '0 0.75rem',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
            }}>
                {/* Scrollable icon row */} 
                <div style={{
                    display: 'flex',
                    gap: '2px',
                    overflowX: 'auto',
                    padding: '0.25rem 0 0.5rem',
                    scrollbarWidth: 'none',
                }}>
                    {sections.map(({ key, icon: Icon, label }, _) => {
                        const isActive = activeSection === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                title={label}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '3px',
                                    width: 44,
                                    height: 44,
                                    flexShrink: 0,
                                    borderRadius: 8,
                                    border: isActive
                                        ? '1px solid rgba(96,196,255,0.35)'
                                        : '1px solid transparent',
                                    background: isActive
                                        ? 'linear-gradient(135deg, rgba(96,196,255,0.12) 0%, rgba(96,196,255,0.04) 100%)'
                                        : 'transparent',
                                    color: isActive ? '#60c4ff' : 'rgba(255,255,255,0.25)',
                                    cursor: 'pointer',
                                    transition: 'all 0.18s ease',
                                    boxShadow: isActive ? '0 0 12px rgba(96,196,255,0.1), inset 0 0 8px rgba(96,196,255,0.04)' : 'none',
                                    padding: 0,
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(96,196,255,0.05)';
                                        (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)';
                                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(96,196,255,0.12)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                                        (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.25)';
                                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                                    }
                                }}
                            >
                                <Icon size={15} strokeWidth={isActive ? 2 : 1.5} />
                                <span style={{
                                    fontFamily: "'DM Mono', monospace",
                                    fontSize: '0.42rem',
                                    letterSpacing: '0.06em',
                                    fontWeight: isActive ? 600 : 400,
                                    lineHeight: 1,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {label.toUpperCase()}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active section label strip */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.25rem',
                    borderTop: '1px solid rgba(96,196,255,0.06)',
                    borderBottom: '1px solid rgba(96,196,255,0.06)',
                    marginBottom: '0.25rem',
                }}>
                    <div style={{
                        width: 2,
                        height: 14,
                        borderRadius: 1,
                        background: 'linear-gradient(180deg, #60c4ff, rgba(96,196,255,0.3))',
                        boxShadow: '0 0 6px rgba(96,196,255,0.6)',
                        flexShrink: 0,
                    }} />
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.58rem',
                        letterSpacing: '0.18em',
                        color: '#60c4ff',
                        fontWeight: 600,
                        textShadow: '0 0 8px rgba(96,196,255,0.4)',
                    }}>
                        {sections.find(s => s.key === activeSection)?.label.toUpperCase()}
                    </span>
                    <div style={{
                        flex: 1,
                        height: 1,
                        background: 'linear-gradient(90deg, rgba(96,196,255,0.2), transparent)',
                    }} />
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.48rem',
                        color: 'rgba(255,255,255,0.18)',
                        letterSpacing: '0.1em',
                    }}>
                        {String(activeIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* Scrollable form content */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.75rem 1rem 2rem',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(96,196,255,0.15) transparent',
            }}>
                <SectionForms
                    activeSection={activeSection}
                    data={data}
                    setData={setData}
                    fileInputRef={fileInputRef}
                />
            </div>

            {/* Bottom status bar */}
            <div style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                borderTop: '1px solid rgba(96,196,255,0.06)',
                background: 'rgba(96,196,255,0.02)',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#34d399',
                        boxShadow: '0 0 6px rgba(52,211,153,0.8)',
                    }} />
                    <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        color: 'rgba(255,255,255,0.2)',
                        letterSpacing: '0.1em',
                    }}>
                        LIVE SYNC
                    </span>
                </div>
                <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.5rem',
                    color: 'rgba(255,255,255,0.12)',
                    letterSpacing: '0.08em',
                }}>
                    JDM · v1.0
                </span>
            </div>
        </div>
    );
}