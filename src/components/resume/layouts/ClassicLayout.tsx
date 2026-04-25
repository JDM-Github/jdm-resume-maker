import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ResumeData } from '../../../types';
import { acAlpha } from '../../../helpers';
import ClassicSectionHead from '../../shared/ClassicSectionHead';

export default function ClassicLayout({ data }: { data: ResumeData }) {
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
            padding: '2.5rem',
        }}>

            {data.profilePicture && (
                <img
                    src={data.profilePicture}
                    alt="Profile"
                    style={{
                        position: "absolute",
                        top: "2.8rem",
                        left: "2rem",
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${ac}`,
                        display: 'block',
                        boxShadow: `0 0 0 4px ${acAlpha(ac, 0.15)}`,
                    }}
                />
            )}

            {/* Header centered */}
            <div className="flex" style={{ borderBottom: `2px solid ${ac}`, paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div className="flex-1" style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    {data.name && (
                        <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.12em', color: '#0f172a' }}>
                            {data.name}
                        </div>
                    )}
                    {data.title && <div style={{ fontSize: '0.78rem', color: ac, fontWeight: 600, marginTop: '0.3rem' }}>{data.title}</div>}
                    {hasContacts && (
                        <div style={{ display: 'flex', maxWidth: "80%", flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1rem', marginTop: '0.6rem' }}>
                            {data.email && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <Mail size={12} color={ac} />
                                    {data.email}
                                </span>
                            )}
                            {data.phone && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <Phone size={12} color={ac} />
                                    {data.phone}
                                </span>
                            )}
                            {data.location && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <MapPin size={12} color={ac} />
                                    {data.location}
                                </span>
                            )}
                            {data.github && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <FaGithub size={12} color={ac} />
                                    {data.github}
                                </span>
                            )}
                            {data.linkedin && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <FaLinkedin size={12} color={ac} />
                                    {data.linkedin}
                                </span>
                            )}
                            {data.website && (
                                <span style={{ fontSize: '0.68rem', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <Globe size={12} color={ac} />
                                    {data.website}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {data.summary && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Professional Summary</ClassicSectionHead>
                    <p style={{ fontSize: '0.72rem', lineHeight: 1.65, color: '#374151' }}>{data.summary}</p>
                </div>
            )}

            {skillGroups.length > 0 && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Skills</ClassicSectionHead>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {skillGroups.flatMap(g => g.split(',').map(s => s.trim())).filter(Boolean).map((sk, i) => (
                            <span key={i} style={{
                                fontSize: '0.63rem', padding: '0.2rem 0.6rem',
                                borderRadius: '3px', border: `1px solid ${acAlpha(ac, 0.3)}`,
                                background: acAlpha(ac, 0.07), color: ac, fontWeight: 600,
                            }}>{sk}</span>
                        ))}
                    </div>
                </div>
            )}

            {data.experiences.some(e => e.company || e.role) && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Experience</ClassicSectionHead>
                    {data.experiences.filter(e => e.company || e.role).map(exp => (
                        <div key={exp.id} style={{ marginBottom: '0.85rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>{exp.role}</span>
                                <span style={{ fontSize: '0.65rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                    {exp.start}{exp.start && exp.end ? ' – ' : ''}{exp.end}
                                </span>
                            </div>
                            {exp.company && <div style={{ fontSize: '0.68rem', color: '#6b7280', marginBottom: '0.3rem' }}>{exp.company}</div>}
                            {exp.bullets.filter(Boolean).map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.18rem' }}>
                                    <span style={{ color: ac, flexShrink: 0, marginTop: '0.15rem' }}>•</span>
                                    <span style={{ fontSize: '0.68rem', color: '#374151' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {data.education.some(e => e.school || e.degree) && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Education</ClassicSectionHead>
                    {data.education.filter(e => e.school || e.degree).map(edu => (
                        <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <div>
                                {edu.school && <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{edu.school}</div>}
                                {edu.degree && <div style={{ fontSize: '0.68rem', color: '#374151' }}>{edu.degree}</div>}
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                {edu.year && <div style={{ fontSize: '0.65rem', color: ac }}>{edu.year}</div>}
                                {edu.gpa && <div style={{ fontSize: '0.62rem', color: '#6b7280' }}>GPA {edu.gpa}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {data.projects.some(p => p.name || p.description) && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Projects</ClassicSectionHead>
                    {data.projects.filter(p => p.name || p.description).map(proj => (
                        <div key={proj.id} style={{ marginBottom: '0.75rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {proj.name && <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{proj.name}</span>}
                                {proj.link && <span style={{ fontSize: '0.62rem', color: ac }}>{proj.link}</span>}
                            </div>
                            {proj.tech && <div style={{ fontSize: '0.62rem', color: ac, marginBottom: '0.15rem', fontFamily: "'DM Mono', monospace" }}>{proj.tech}</div>}
                            {proj.description && <div style={{ fontSize: '0.67rem', color: '#374151' }}>{proj.description}</div>}
                        </div>
                    ))}
                </div>
            )}

            {/* ==================== CERTIFICATIONS ==================== */}
            {data.certifications && data.certifications.length > 0 && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Certifications</ClassicSectionHead>
                    {data.certifications.map(cert => (
                        <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                            <div>
                                <span style={{ fontSize: '0.73rem', fontWeight: 700 }}>{cert.name}</span>
                                {cert.issuer && <span style={{ fontSize: '0.67rem', color: '#6b7280' }}> · {cert.issuer}</span>}
                                {cert.link && <div style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{cert.link}</div>}
                            </div>
                            {cert.date && <span style={{ fontSize: '0.63rem', color: ac, fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>{cert.date}</span>}
                        </div>
                    ))}
                </div>
            )}

            {/* ==================== AWARDS ==================== */}
            {data.awards && data.awards.length > 0 && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Awards</ClassicSectionHead>
                    {data.awards.map(award => (
                        <div key={award.id} style={{ marginBottom: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.73rem', fontWeight: 700 }}>{award.title}</span>
                                {award.date && <span style={{ fontSize: '0.63rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{award.date}</span>}
                            </div>
                            {award.issuer && <div style={{ fontSize: '0.67rem', color: '#6b7280' }}>{award.issuer}</div>}
                            {award.description && <div style={{ fontSize: '0.66rem', color: '#374151', marginTop: '0.1rem' }}>{award.description}</div>}
                        </div>
                    ))}
                </div>
            )}

            {/* ==================== VOLUNTEER ==================== */}
            {data.volunteer && data.volunteer.some(v => v.organization || v.role) && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Volunteer</ClassicSectionHead>
                    {data.volunteer.filter(v => v.organization || v.role).map(vol => (
                        <div key={vol.id} style={{ marginBottom: '0.85rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>{vol.role}</span>
                                <span style={{ fontSize: '0.65rem', color: ac, fontFamily: "'DM Mono', monospace" }}>
                                    {vol.start}{vol.start && vol.end ? ' – ' : ''}{vol.end}
                                </span>
                            </div>
                            {vol.organization && <div style={{ fontSize: '0.68rem', color: '#6b7280', marginBottom: '0.3rem' }}>{vol.organization}</div>}
                            {vol.bullets.filter(Boolean).map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.18rem' }}>
                                    <span style={{ color: ac, flexShrink: 0, marginTop: '0.15rem' }}>•</span>
                                    <span style={{ fontSize: '0.68rem', color: '#374151' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* ==================== PUBLICATIONS ==================== */}
            {data.publications && data.publications.length > 0 && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Publications</ClassicSectionHead>
                    {data.publications.map(pub => (
                        <div key={pub.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                            <div>
                                <span style={{ fontSize: '0.73rem', fontWeight: 700 }}>{pub.title}</span>
                                {pub.publisher && <span style={{ fontSize: '0.67rem', color: '#6b7280' }}> · {pub.publisher}</span>}
                                {pub.link && <div style={{ fontSize: '0.6rem', color: ac, fontFamily: "'DM Mono', monospace" }}>{pub.link}</div>}
                            </div>
                            {pub.date && <span style={{ fontSize: '0.63rem', color: ac, fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>{pub.date}</span>}
                        </div>
                    ))}
                </div>
            )}

            {/* ==================== LANGUAGES ==================== */}
            {data.languages && data.languages.length > 0 && (
                <div style={{ marginBottom: '1.1rem' }}>
                    <ClassicSectionHead ac={ac}>Languages</ClassicSectionHead>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {data.languages.map(lang => (
                            <span key={lang.id} style={{
                                fontSize: '0.63rem', padding: '0.2rem 0.6rem',
                                borderRadius: '3px', border: `1px solid ${acAlpha(ac, 0.3)}`,
                                background: acAlpha(ac, 0.07), color: '#374151', fontWeight: 500,
                            }}>
                                <span style={{ color: ac, fontWeight: 700 }}>{lang.name}</span>
                                {lang.proficiency && <span style={{ color: '#6b7280' }}> · {lang.proficiency}</span>}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* ==================== HOBBIES ==================== */}
            {data.hobbies && data.hobbies.length > 0 && (
                <div>
                    <ClassicSectionHead ac={ac}>Hobbies</ClassicSectionHead>
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
    );
}