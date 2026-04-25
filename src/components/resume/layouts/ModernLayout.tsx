import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { ResumeData } from '../../../types';
import { acAlpha } from '../../../helpers';
import SectionHeading from '../../shared/SectionHeading';

export default function ModernLayout({ data }: { data: ResumeData }) {
    const ac = data.accentColor;
    const hasContacts = [data.email, data.phone, data.location, data.github, data.linkedin, data.website].some(Boolean);
    const skillGroups = data.skills
        ? data.skills.split('·').map(g => g.trim()).filter(Boolean)
        : [];

    return (
        <div style={{
            background: '#ffffff',
            width: '100%',
            minHeight: '297mm',
            fontFamily: "'DM Sans', sans-serif",
            color: '#1a1a2e',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Header accent stripe */}
            <div style={{ background: ac, height: '4px', width: '100%' }} />

            {/* Header */}
            <div style={{
                padding: '2rem 2.5rem 1.5rem',
                borderBottom: `1px solid ${acAlpha(ac, 0.15)}`,
            }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    {data.profilePicture && (
                        <div style={{ flexShrink: 0 }}>
                            <img
                                src={data.profilePicture}
                                alt="Profile"
                                style={{
                                    width: '88px',
                                    height: '88px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: `3px solid ${ac}`,
                                    display: 'block',
                                    boxShadow: `0 0 0 4px ${acAlpha(ac, 0.15)}`,
                                }}
                            />
                        </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                        {data.name && (
                            <div style={{
                                fontFamily: "'Orbitron', monospace",
                                fontSize: '2rem',
                                fontWeight: 900,
                                letterSpacing: '0.08em',
                                color: '#0f172a',
                                lineHeight: 1.1,
                                marginBottom: '0.4rem',
                            }}>
                                {data.name}
                            </div>
                        )}
                        {data.title && (
                            <div style={{ fontSize: '0.85rem', color: ac, fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                                {data.title}
                            </div>
                        )}
                        {hasContacts && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.2rem' }}>
                                {data.email && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <Mail size={12} color={ac} />
                                        {data.email}
                                    </span>
                                )}
                                {data.phone && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <Phone size={12} color={ac} />
                                        {data.phone}
                                    </span>
                                )}
                                {data.location && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <MapPin size={12} color={ac} />
                                        {data.location}
                                    </span>
                                )}
                                {data.github && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <FaGithub size={12} color={ac} />
                                        {data.github}
                                    </span>
                                )}
                                {data.linkedin && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <FaLinkedin size={12} color={ac} />
                                        {data.linkedin}
                                    </span>
                                )}
                                {data.website && (
                                    <span style={{ fontSize: '0.7rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <Globe size={12} color={ac} />
                                        {data.website}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Body: two columns */}
            <div style={{ display: 'flex', gap: 0, height: '100%', minHeight: '300mm' }}>
                {/* Left column */}
                <div style={{ width: '35%', padding: '1.5rem', borderRight: `1px solid ${acAlpha(ac, 0.1)}`, background: '#fafafa' }}>
                    {data.summary && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>About</SectionHeading>
                            <p style={{ fontSize: '0.72rem', lineHeight: 1.65, color: '#374151' }}>{data.summary}</p>
                        </div>
                    )}
                    {skillGroups.length > 0 && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Skills</SectionHeading>
                            {skillGroups.map((group, gi) => {
                                const skills = group.split(',').map(s => s.trim()).filter(Boolean);
                                return (
                                    <div key={gi} style={{ marginBottom: '0.6rem' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                            {skills.map((sk, si) => (
                                                <span key={si} style={{
                                                    fontSize: '0.62rem',
                                                    padding: '0.18rem 0.5rem',
                                                    borderRadius: '3px',
                                                    background: acAlpha(ac, 0.1),
                                                    color: ac,
                                                    fontWeight: 600,
                                                    border: `1px solid ${acAlpha(ac, 0.2)}`,
                                                }}>
                                                    {sk}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {data.education.length > 0 && data.education.some(e => e.school || e.degree) && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Education</SectionHeading>
                            {data.education.filter(e => e.school || e.degree).map(edu => (
                                <div key={edu.id} style={{ marginBottom: '0.75rem' }}>
                                    {edu.school && <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a1a2e' }}>{edu.school}</div>}
                                    {edu.degree && <div style={{ fontSize: '0.67rem', color: '#374151' }}>{edu.degree}</div>}
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.15rem' }}>
                                        {edu.year && <span style={{ fontSize: '0.62rem', color: ac }}>{edu.year}</span>}
                                        {edu.gpa && <span style={{ fontSize: '0.62rem', color: '#6b7280' }}>GPA: {edu.gpa}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== CERTIFICATIONS ==================== */}
                    {data.certifications && data.certifications.length > 0 && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Certifications</SectionHeading>
                            {data.certifications.map(cert => (
                                <div key={cert.id} style={{ marginBottom: '0.6rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1a1a2e' }}>{cert.name}</span>
                                        {cert.date && <span style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{cert.date}</span>}
                                    </div>
                                    {cert.issuer && <div style={{ fontSize: '0.65rem', color: '#374151' }}>{cert.issuer}</div>}
                                    {cert.link && <div style={{ fontSize: '0.58rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{cert.link}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== LANGUAGES ==================== */}
                    {data.languages && data.languages.length > 0 && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Languages</SectionHeading>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                {data.languages.map(lang => (
                                    <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#1a1a2e' }}>{lang.name}</span>
                                        {lang.proficiency && (
                                            <span style={{
                                                fontSize: '0.58rem', padding: '0.1rem 0.4rem',
                                                background: acAlpha(ac, 0.08), color: ac,
                                                borderRadius: '3px', fontFamily: "'DM Mono', monospace",
                                            }}>{lang.proficiency}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ==================== AWARDS ==================== */}
                    {data.awards && data.awards.length > 0 && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Awards</SectionHeading>
                            {data.awards.map(award => (
                                <div key={award.id} style={{ marginBottom: '0.6rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1a1a2e' }}>{award.title}</span>
                                        {award.date && <span style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{award.date}</span>}
                                    </div>
                                    {award.issuer && <div style={{ fontSize: '0.65rem', color: '#374151' }}>{award.issuer}</div>}
                                    {award.description && <div style={{ fontSize: '0.63rem', color: '#6b7280', marginTop: '0.1rem' }}>{award.description}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {data.hobbies && data.hobbies.length > 0 && (
                        <div>
                            <SectionHeading ac={ac}>Hobbies</SectionHeading>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                                {data.hobbies.map(hobby => (
                                    <span key={hobby.id} style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        {hobby.icon && <span style={{ fontSize: '0.75rem' }}>{hobby.icon}</span>}
                                        {hobby.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right column */}
                <div style={{ flex: 1, padding: '1.5rem' }}>
                    {data.experiences.length > 0 && data.experiences.some(e => e.company || e.role) && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Experience</SectionHeading>
                            {data.experiences.filter(e => e.company || e.role).map(exp => (
                                <div key={exp.id} style={{ marginBottom: '1rem', paddingLeft: '0.75rem', borderLeft: `2px solid ${acAlpha(ac, 0.2)}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        {exp.role && <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>{exp.role}</div>}
                                        {(exp.start || exp.end) && (
                                            <div style={{ fontSize: '0.62rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                                {exp.start}{exp.start && exp.end ? ' – ' : ''}{exp.end}
                                            </div>
                                        )}
                                    </div>
                                    {exp.company && <div style={{ fontSize: '0.68rem', color: '#374151', marginBottom: '0.4rem' }}>{exp.company}</div>}
                                    {exp.bullets.filter(Boolean).map((b, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
                                            <span style={{ color: ac, fontSize: '0.6rem', marginTop: '0.2rem', flexShrink: 0 }}>▸</span>
                                            <span style={{ fontSize: '0.68rem', color: '#374151', lineHeight: 1.55 }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {data.projects.length > 0 && data.projects.some(p => p.name || p.description) && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Projects</SectionHeading>
                            {data.projects.filter(p => p.name || p.description).map(proj => (
                                <div key={proj.id} style={{ marginBottom: '0.85rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        {proj.name && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>{proj.name}</span>}
                                        {proj.link && <span style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{proj.link}</span>}
                                    </div>
                                    {proj.tech && (
                                        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', margin: '0.2rem 0' }}>
                                            {proj.tech.split(',').map(t => t.trim()).filter(Boolean).map((t, i) => (
                                                <span key={i} style={{
                                                    fontSize: '0.58rem', padding: '0.1rem 0.4rem',
                                                    background: acAlpha(ac, 0.08), color: ac,
                                                    borderRadius: '3px', fontFamily: "'DM Mono', monospace",
                                                }}>{t}</span>
                                            ))}
                                        </div>
                                    )}
                                    {proj.description && <div style={{ fontSize: '0.67rem', color: '#374151', lineHeight: 1.5 }}>{proj.description}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== VOLUNTEER ==================== */}
                    {data.volunteer && data.volunteer.some(v => v.organization || v.role) && (
                        <div style={{ marginBottom: '1.25rem' }}>
                            <SectionHeading ac={ac}>Volunteer</SectionHeading>
                            {data.volunteer.filter(v => v.organization || v.role).map(vol => (
                                <div key={vol.id} style={{ marginBottom: '1rem', paddingLeft: '0.75rem', borderLeft: `2px solid ${acAlpha(ac, 0.15)}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        {vol.role && <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>{vol.role}</div>}
                                        {(vol.start || vol.end) && (
                                            <div style={{ fontSize: '0.62rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                                {vol.start}{vol.start && vol.end ? ' – ' : ''}{vol.end}
                                            </div>
                                        )}
                                    </div>
                                    {vol.organization && <div style={{ fontSize: '0.68rem', color: '#374151', marginBottom: '0.4rem' }}>{vol.organization}</div>}
                                    {vol.bullets.filter(Boolean).map((b, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
                                            <span style={{ color: ac, fontSize: '0.6rem', marginTop: '0.2rem', flexShrink: 0 }}>▸</span>
                                            <span style={{ fontSize: '0.68rem', color: '#374151', lineHeight: 1.55 }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ==================== PUBLICATIONS ==================== */}
                    {data.publications && data.publications.length > 0 && (
                        <div>
                            <SectionHeading ac={ac}>Publications</SectionHeading>
                            {data.publications.map(pub => (
                                <div key={pub.id} style={{ marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>{pub.title}</span>
                                        {pub.date && <span style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{pub.date}</span>}
                                    </div>
                                    {pub.publisher && <div style={{ fontSize: '0.67rem', color: '#374151' }}>{pub.publisher}</div>}
                                    {pub.link && <div style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{pub.link}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}