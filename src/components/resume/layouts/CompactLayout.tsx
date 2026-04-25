import { ResumeData } from '../../../types';
import { acAlpha } from '../../../helpers';
import CompactHead from '../../shared/CompactHead';

export default function CompactLayout({ data }: { data: ResumeData }) {
    const ac = data.accentColor;
    const skillGroups = data.skills
        ? data.skills.split('·').map(g => g.trim()).filter(Boolean)
        : [];

    return (
        <div style={{
            background: '#0f172a',
            width: '100%',
            minHeight: '297mm',
            fontFamily: "'Orbitron', sans-serif",
            color: '#ece2f0',
            padding: '2rem',
        }}>
            <div className="flex" style={{ borderBottom: `1px solid ${acAlpha(ac, 0.3)}`, paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                {data.profilePicture && (
                    <img
                        src={data.profilePicture}
                        alt="Profile"
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: `2px solid ${ac}`,
                            boxShadow: `0 0 0 4px ${acAlpha(ac, 0.15)}`,
                            marginRight: '1rem',
                            flexShrink: 0,
                            display: 'block',
                            alignSelf: 'center',
                        }}
                    />
                )}
                <div className="flex flex-1" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        {data.name && (
                            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.6rem', fontWeight: 900, letterSpacing: '0.1em', color: ac }}>
                                {data.name}
                            </div>
                        )}
                        {data.title && <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{data.title}</div>}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        {[data.email, data.phone, data.location].filter(Boolean).map((v, i) => (
                            <div key={i} style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono', monospace" }}>{v}</div>
                        ))}
                        {[data.github, data.linkedin, data.website].filter(Boolean).map((v, i) => (
                            <div key={i} style={{ fontSize: '0.62rem', color: acAlpha(ac, 0.8), fontFamily: "'DM Mono', monospace" }}>{v}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* LEFT COLUMN */}
                <div>
                    {data.summary && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Summary</CompactHead>
                            <p style={{ fontSize: '0.68rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>{data.summary}</p>
                        </div>
                    )}
                    {skillGroups.length > 0 && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Skills</CompactHead>
                            {skillGroups.map((group, gi) => (
                                <div key={gi} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.4rem' }}>
                                    {group.split(',').map(s => s.trim()).filter(Boolean).map((sk, si) => (
                                        <span key={si} style={{
                                            fontSize: '0.58rem', padding: '0.15rem 0.45rem',
                                            borderRadius: '3px', background: acAlpha(ac, 0.12),
                                            color: ac, border: `1px solid ${acAlpha(ac, 0.25)}`,
                                            fontFamily: "'DM Mono', monospace",
                                        }}>{sk}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {data.education.some(e => e.school || e.degree) && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Education</CompactHead>
                            {data.education.filter(e => e.school || e.degree).map(edu => (
                                <div key={edu.id} style={{ marginBottom: '0.6rem' }}>
                                    {edu.school && <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e2e8f0' }}>{edu.school}</div>}
                                    {edu.degree && <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>{edu.degree}</div>}
                                    {edu.year && <div style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{edu.year}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== CERTIFICATIONS ==================== */}
                    {data.certifications && data.certifications.length > 0 && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Certifications</CompactHead>
                            {data.certifications.map(cert => (
                                <div key={cert.id} style={{ marginBottom: '0.45rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#e2e8f0' }}>{cert.name}</span>
                                        {cert.date && <span style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{cert.date}</span>}
                                    </div>
                                    {cert.issuer && <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>{cert.issuer}</div>}
                                    {cert.link && <div style={{ fontSize: '0.58rem', color: acAlpha(ac, 0.7), fontFamily: "'DM Mono', monospace" }}>{cert.link}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== LANGUAGES ==================== */}
                    {data.languages && data.languages.length > 0 && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Languages</CompactHead>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                {data.languages.map(lang => (
                                    <span key={lang.id} style={{
                                        fontSize: '0.58rem', padding: '0.15rem 0.45rem',
                                        borderRadius: '3px', background: acAlpha(ac, 0.1),
                                        border: `1px solid ${acAlpha(ac, 0.2)}`,
                                        fontFamily: "'DM Mono', monospace",
                                        color: 'rgba(255,255,255,0.6)',
                                    }}>
                                        <span style={{ color: ac }}>{lang.name}</span>
                                        {lang.proficiency && ` · ${lang.proficiency}`}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ==================== AWARDS ==================== */}
                    {data.awards && data.awards.length > 0 && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Awards</CompactHead>
                            {data.awards.map(award => (
                                <div key={award.id} style={{ marginBottom: '0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#e2e8f0' }}>{award.title}</span>
                                        {award.date && <span style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{award.date}</span>}
                                    </div>
                                    {award.issuer && <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>{award.issuer}</div>}
                                    {award.description && <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.1rem' }}>{award.description}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {data.hobbies && data.hobbies.length > 0 && (
                        <div>
                            <CompactHead ac={ac}>Hobbies</CompactHead>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                                {data.hobbies.map(hobby => (
                                    <span key={hobby.id} style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        {hobby.icon && <span style={{ fontSize: '0.72rem' }}>{hobby.icon}</span>}
                                        {hobby.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div>
                    {data.experiences.some(e => e.company || e.role) && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Experience</CompactHead>
                            {data.experiences.filter(e => e.company || e.role).map(exp => (
                                <div key={exp.id} style={{ marginBottom: '0.85rem', paddingLeft: '0.6rem', borderLeft: `2px solid ${acAlpha(ac, 0.3)}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {exp.role && <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e2e8f0' }}>{exp.role}</span>}
                                        <span style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                            {exp.start}{exp.start && exp.end ? '–' : ''}{exp.end}
                                        </span>
                                    </div>
                                    {exp.company && <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>{exp.company}</div>}
                                    {exp.bullets.filter(Boolean).map((b, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.15rem' }}>
                                            <span style={{ color: ac, fontSize: '0.55rem', marginTop: '0.2rem' }}>▸</span>
                                            <span style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {data.projects.some(p => p.name || p.description) && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Projects</CompactHead>
                            {data.projects.filter(p => p.name || p.description).map(proj => (
                                <div key={proj.id} style={{ marginBottom: '0.7rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {proj.name && <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e2e8f0' }}>{proj.name}</span>}
                                        {proj.link && <span style={{ fontSize: '0.58rem', color: ac }}>{proj.link}</span>}
                                    </div>
                                    {proj.tech && (
                                        <div style={{ fontSize: '0.58rem', color: acAlpha(ac, 0.7), fontFamily: "'DM Mono', monospace", marginBottom: '0.15rem' }}>
                                            {proj.tech}
                                        </div>
                                    )}
                                    {proj.description && <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.5)' }}>{proj.description}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== VOLUNTEER ==================== */}
                    {data.volunteer && data.volunteer.some(v => v.organization || v.role) && (
                        <div style={{ marginBottom: '1rem' }}>
                            <CompactHead ac={ac}>Volunteer</CompactHead>
                            {data.volunteer.filter(v => v.organization || v.role).map(vol => (
                                <div key={vol.id} style={{ marginBottom: '0.85rem', paddingLeft: '0.6rem', borderLeft: `2px solid ${acAlpha(ac, 0.2)}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {vol.role && <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e2e8f0' }}>{vol.role}</span>}
                                        <span style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                            {vol.start}{vol.start && vol.end ? '–' : ''}{vol.end}
                                        </span>
                                    </div>
                                    {vol.organization && <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>{vol.organization}</div>}
                                    {vol.bullets.filter(Boolean).map((b, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.15rem' }}>
                                            <span style={{ color: ac, fontSize: '0.55rem', marginTop: '0.2rem' }}>▸</span>
                                            <span style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== PUBLICATIONS ==================== */}
                    {data.publications && data.publications.length > 0 && (
                        <div>
                            <CompactHead ac={ac}>Publications</CompactHead>
                            {data.publications.map(pub => (
                                <div key={pub.id} style={{ marginBottom: '0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#e2e8f0' }}>{pub.title}</span>
                                        {pub.date && <span style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{pub.date}</span>}
                                    </div>
                                    {pub.publisher && <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>{pub.publisher}</div>}
                                    {pub.link && <div style={{ fontSize: '0.58rem', color: acAlpha(ac, 0.7), fontFamily: "'DM Mono', monospace" }}>{pub.link}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}