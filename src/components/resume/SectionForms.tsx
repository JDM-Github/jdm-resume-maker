import React from 'react';
import { ResumeData } from '../../types';
import { useResumeForm } from '../../hooks/useResumeForm';
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';
import AddBtn from '../shared/AddBtn';
import RemoveBtn from '../shared/RemoveBtn';

interface Props {
    activeSection: string;
    data: ResumeData;
    setData: (d: ResumeData) => void;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
}

// ── Shared sub-components ────────────────────────────────────

function ItemHeader({ label, index, onRemove }: { label: string; index: number; onRemove: () => void }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.65rem',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.48rem',
                    letterSpacing: '0.16em',
                    color: 'rgba(96,196,255,0.35)',
                    textTransform: 'uppercase',
                }}>
                    {label}
                </span>
                <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.48rem',
                    color: 'rgba(96,196,255,0.2)',
                    letterSpacing: '0.05em',
                }}>
                    #{String(index + 1).padStart(2, '0')}
                </span>
            </div>
            <RemoveBtn onClick={onRemove} />
        </div>
    );
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            background: 'rgba(96,196,255,0.025)',
            border: '1px solid rgba(96,196,255,0.08)',
            borderRadius: '8px',
            padding: '0.75rem 0.8rem',
            marginBottom: '0.5rem',
            position: 'relative',
        }}>
            {/* left accent */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: '0.75rem',
                bottom: '0.75rem',
                width: 2,
                borderRadius: '0 1px 1px 0',
                background: 'linear-gradient(180deg, rgba(96,196,255,0.4), rgba(96,196,255,0.05))',
            }} />
            <div style={{ paddingLeft: '0.4rem' }}>
                {children}
            </div>
        </div>
    );
}

function Row({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {React.Children.map(children, child => (
                <div style={{ flex: 1 }}>{child}</div>
            ))}
        </div>
    );
}

function BulletField({
    value, index, onChange, onRemove, canRemove, placeholder,
}: {
    value: string; index: number; onChange: (v: string) => void;
    onRemove: () => void; canRemove: boolean; placeholder?: string;
}) {
    return (
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.35rem', alignItems: 'flex-start' }}>
            <div style={{
                width: 14,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '0.55rem',
            }}>
                <div style={{
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: 'rgba(96,196,255,0.3)',
                    flexShrink: 0,
                }} />
            </div>
            <textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                rows={2}
                placeholder={placeholder ?? `Point ${index + 1}`}
                style={{
                    flex: 1,
                    background: 'rgba(96,196,255,0.03)',
                    border: '1px solid rgba(96,196,255,0.09)',
                    borderRadius: '5px',
                    padding: '0.35rem 0.55rem',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: '0.68rem',
                    fontFamily: "'DM Sans', sans-serif",
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.18s',
                    caretColor: '#60c4ff',
                    lineHeight: 1.55,
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(96,196,255,0.35)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(96,196,255,0.09)')}
            />
            {canRemove && (
                <button
                    onClick={onRemove}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(239,68,68,0.4)',
                        cursor: 'pointer',
                        paddingTop: '0.45rem',
                        transition: 'color 0.15s',
                        flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,68,68,0.4)')}
                >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1 1l7 7M8 1L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            )}
        </div>
    );
}

function BulletsLabel() {
    return (
        <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(96,196,255,0.35)',
            marginTop: '0.5rem',
            marginBottom: '0.35rem',
            fontWeight: 600,
        }}>
            Bullet Points
        </div>
    );
}

const wrap: React.CSSProperties = { padding: '0.1rem 0' };

// ── Main export ──────────────────────────────────────────────

export default function SectionForms({ activeSection, data, setData, fileInputRef }: Props) {
    const {
        update,
        handleProfilePictureUpload,
        addExperience, removeExperience, updateExp, addBullet, updateBullet, removeBullet,
        addEducation, removeEducation, updateEdu,
        addProject, removeProject, updateProject,
        addHobby, removeHobby, updateHobby,
        addLanguage, removeLanguage, updateLanguage,
        addCertification, removeCertification, updateCertification,
        addAward, removeAward, updateAward,
        addVolunteer, removeVolunteer, updateVolunteer,
        addVolunteerBullet, updateVolunteerBullet, removeVolunteerBullet,
        addPublication, removePublication, updatePublication,
    } = useResumeForm(data, setData);

    switch (activeSection) {

        // ── DESIGN ──────────────────────────────────────────
        case 'design':
            return (
                <div style={wrap}>
                    {/* Accent color */}
                    <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(96,196,255,0.4)',
                        marginBottom: '0.4rem',
                        fontWeight: 600,
                    }}>Accent Color</div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '1rem',
                        padding: '0.5rem 0.65rem',
                        background: 'rgba(96,196,255,0.025)',
                        border: '1px solid rgba(96,196,255,0.08)',
                        borderRadius: '8px',
                        flexWrap: 'wrap',
                    }}>
                        <input
                            type="color"
                            value={data.accentColor}
                            onChange={e => update('accentColor', e.target.value)}
                            style={{ width: 28, height: 28, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 4, padding: 0 }}
                        />
                        <div style={{ width: 1, height: 20, background: 'rgba(96,196,255,0.1)', flexShrink: 0 }} />
                        {['#60c4ff', '#34d399', '#f472b6', '#a78bfa', '#fbbf24', '#f97316', '#000000'].map(c => (
                            <div
                                key={c}
                                onClick={() => update('accentColor', c)}
                                style={{
                                    width: 18, height: 18, borderRadius: '50%', background: c, cursor: 'pointer',
                                    border: data.accentColor === c ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                                    boxShadow: data.accentColor === c ? `0 0 8px ${c}88` : 'none',
                                    transition: 'all 0.15s',
                                    flexShrink: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Secondary color */}
                    <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(96,196,255,0.4)',
                        marginBottom: '0.4rem',
                        fontWeight: 600,
                    }}>Secondary Color</div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '1.2rem',
                        padding: '0.5rem 0.65rem',
                        background: 'rgba(96,196,255,0.025)',
                        border: '1px solid rgba(96,196,255,0.08)',
                        borderRadius: '8px',
                        flexWrap: 'wrap',
                    }}>
                        <input
                            type="color"
                            value={data.secondaryColor}
                            onChange={e => update('secondaryColor', e.target.value)}
                            style={{ width: 28, height: 28, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 4, padding: 0 }}
                        />
                        <div style={{ width: 1, height: 20, background: 'rgba(96,196,255,0.1)', flexShrink: 0 }} />
                        {['#60c4ff', '#34d399', '#f472b6', '#a78bfa', '#fbbf24', '#f97316', '#ffffff', '#000000'].map(c => (
                            <div
                                key={c}
                                onClick={() => update('secondaryColor', c)}
                                style={{
                                    width: 18, height: 18, borderRadius: '50%', background: c, cursor: 'pointer',
                                    border: data.secondaryColor === c ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                                    boxShadow: data.secondaryColor === c ? `0 0 8px ${c}88` : 'none',
                                    transition: 'all 0.15s',
                                    flexShrink: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Layout */}
                    <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(96,196,255,0.4)',
                        marginBottom: '0.4rem',
                        fontWeight: 600,
                    }}>Layout</div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {(['classic', 'modern', 'compact', 'modern+'] as const).map(l => {
                            const isActive = data.layout === l;
                            return (
                                <button
                                    key={l}
                                    onClick={() => update('layout', l)}
                                    style={{
                                        flex: 1,
                                        padding: '0.45rem 0.25rem',
                                        borderRadius: '6px',
                                        border: `1px solid ${isActive ? 'rgba(96,196,255,0.4)' : 'rgba(96,196,255,0.1)'}`,
                                        background: isActive
                                            ? 'linear-gradient(135deg, rgba(96,196,255,0.12), rgba(96,196,255,0.04))'
                                            : 'rgba(96,196,255,0.02)',
                                        color: isActive ? '#60c4ff' : 'rgba(255,255,255,0.3)',
                                        fontSize: '0.58rem',
                                        fontFamily: "'DM Mono', monospace",
                                        letterSpacing: '0.06em',
                                        cursor: 'pointer',
                                        textTransform: 'capitalize',
                                        transition: 'all 0.15s',
                                        boxShadow: isActive ? '0 0 10px rgba(96,196,255,0.08)' : 'none',
                                        fontWeight: isActive ? 600 : 400,
                                    }}
                                >
                                    {l}
                                </button>
                            );
                        })}
                    </div>
                </div>
            );

        // ── PROFILE PIC ──────────────────────────────────────
        case 'profilePic':
            return (
                <div style={wrap}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.85rem',
                        background: 'rgba(96,196,255,0.025)',
                        border: '1px solid rgba(96,196,255,0.08)',
                        borderRadius: '8px',
                    }}>
                        {data.profilePicture ? (
                            <img
                                src={data.profilePicture}
                                alt="Profile"
                                style={{
                                    width: 64, height: 64, borderRadius: '50%', objectFit: 'cover',
                                    border: '2px solid rgba(96,196,255,0.3)',
                                    boxShadow: '0 0 12px rgba(96,196,255,0.15)',
                                    flexShrink: 0,
                                }}
                            />
                        ) : (
                            <div style={{
                                width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
                                background: 'rgba(96,196,255,0.04)',
                                border: '2px dashed rgba(96,196,255,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="7" r="3" stroke="rgba(96,196,255,0.3)" strokeWidth="1.5" />
                                    <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="rgba(96,196,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                style={{
                                    background: 'rgba(96,196,255,0.06)',
                                    border: '1px solid rgba(96,196,255,0.2)',
                                    borderRadius: '5px',
                                    color: 'rgba(96,196,255,0.75)',
                                    fontSize: '0.58rem',
                                    fontFamily: "'DM Mono', monospace",
                                    letterSpacing: '0.1em',
                                    padding: '0.35rem 0.75rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    textTransform: 'uppercase',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(96,196,255,0.12)'; e.currentTarget.style.color = '#60c4ff'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(96,196,255,0.06)'; e.currentTarget.style.color = 'rgba(96,196,255,0.75)'; }}
                            >
                                {data.profilePicture ? 'Change Photo' : 'Upload Photo'}
                            </button>
                            {data.profilePicture && (
                                <button
                                    onClick={() => update('profilePicture', '')}
                                    style={{
                                        background: 'rgba(239,68,68,0.05)',
                                        border: '1px solid rgba(239,68,68,0.15)',
                                        borderRadius: '5px',
                                        color: 'rgba(239,68,68,0.5)',
                                        fontSize: '0.58rem',
                                        fontFamily: "'DM Mono', monospace",
                                        letterSpacing: '0.1em',
                                        padding: '0.35rem 0.75rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s',
                                        textTransform: 'uppercase',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)'; e.currentTarget.style.color = '#ef4444'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.05)'; e.currentTarget.style.color = 'rgba(239,68,68,0.5)'; }}
                                >
                                    Remove Photo
                                </button>
                            )}
                        </div>
                        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleProfilePictureUpload} />
                    </div>
                </div>
            );

        // ── PERSONAL ────────────────────────────────────────
        case 'personal':
            return (
                <div style={wrap}>
                    <Input label="Full Name" value={data.name} onChange={v => update('name', v)} placeholder="John Doe" />
                    <Input label="Title / Role" value={data.title} onChange={v => update('title', v)} placeholder="Full-Stack Developer" />
                    <div style={{ height: '0.25rem' }} />
                    <Row>
                        <Input label="Email" value={data.email} onChange={v => update('email', v)} type="email" />
                        <Input label="Phone" value={data.phone} onChange={v => update('phone', v)} />
                    </Row>
                    <Input label="Location" value={data.location} onChange={v => update('location', v)} />
                    <div style={{ height: '0.25rem' }} />
                    <Input label="GitHub" value={data.github} onChange={v => update('github', v)} />
                    <Input label="LinkedIn" value={data.linkedin} onChange={v => update('linkedin', v)} />
                    <Input label="Website" value={data.website} onChange={v => update('website', v)} />
                </div>
            );

        // ── SUMMARY ─────────────────────────────────────────
        case 'summary':
            return (
                <div style={wrap}>
                    <Textarea label="Professional Summary" value={data.summary} onChange={v => update('summary', v)} rows={10} />
                </div>
            );

        // ── SKILLS ──────────────────────────────────────────
        case 'skills':
            return (
                <div style={wrap}>
                    <Textarea
                        label="Skills"
                        value={data.skills}
                        onChange={v => update('skills', v)}
                        rows={10}
                        placeholder="React, TypeScript · Node.js, Express · Figma, Design"
                    />
                    <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.5rem',
                        color: 'rgba(255,255,255,0.18)',
                        letterSpacing: '0.08em',
                        marginTop: '0.4rem',
                        lineHeight: 1.6,
                    }}>
                        Use commas to separate · Use · to separate groups
                    </div>
                </div>
            );

        // ── EXPERIENCE ──────────────────────────────────────
        case 'experience':
            return (
                <div style={wrap}>
                    {data.experiences.map((exp, idx) => (
                        <ListItem key={exp.id}>
                            <ItemHeader label="Experience" index={idx} onRemove={() => removeExperience(exp.id)} />
                            <Input label="Company" value={exp.company} onChange={v => updateExp(exp.id, 'company', v)} />
                            <Input label="Role / Position" value={exp.role} onChange={v => updateExp(exp.id, 'role', v)} />
                            <Row>
                                <Input label="Start" value={exp.start} onChange={v => updateExp(exp.id, 'start', v)} placeholder="Jan 2022" />
                                <Input label="End" value={exp.end} onChange={v => updateExp(exp.id, 'end', v)} placeholder="Present" />
                            </Row>
                            <BulletsLabel />
                            {exp.bullets.map((b, i) => (
                                <BulletField
                                    key={i}
                                    value={b}
                                    index={i}
                                    onChange={v => updateBullet(exp.id, i, v)}
                                    onRemove={() => removeBullet(exp.id, i)}
                                    canRemove={exp.bullets.length > 1}
                                    placeholder={`Achievement or responsibility ${i + 1}`}
                                />
                            ))}
                            <AddBtn onClick={() => addBullet(exp.id)} label="Add bullet" />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addExperience} label="Add Experience" />
                </div>
            );

        // ── EDUCATION ───────────────────────────────────────
        case 'education':
            return (
                <div style={wrap}>
                    {data.education.map((edu, idx) => (
                        <ListItem key={edu.id}>
                            <ItemHeader label="Education" index={idx} onRemove={() => removeEducation(edu.id)} />
                            <Input label="School / University" value={edu.school} onChange={v => updateEdu(edu.id, 'school', v)} />
                            <Input label="Degree / Program" value={edu.degree} onChange={v => updateEdu(edu.id, 'degree', v)} />
                            <Row>
                                <Input label="Years" value={edu.year} onChange={v => updateEdu(edu.id, 'year', v)} placeholder="2022 – 2026" />
                                <Input label="GPA" value={edu.gpa} onChange={v => updateEdu(edu.id, 'gpa', v)} placeholder="Optional" />
                            </Row>
                        </ListItem>
                    ))}
                    <AddBtn onClick={addEducation} label="Add Education" />
                </div>
            );

        // ── PROJECTS ────────────────────────────────────────
        case 'projects':
            return (
                <div style={wrap}>
                    {data.projects.map((proj, idx) => (
                        <ListItem key={proj.id}>
                            <ItemHeader label="Project" index={idx} onRemove={() => removeProject(proj.id)} />
                            <Input label="Project Name" value={proj.name} onChange={v => updateProject(proj.id, 'name', v)} />
                            <Input label="Tech Stack" value={proj.tech} onChange={v => updateProject(proj.id, 'tech', v)} placeholder="React, Python, AWS" />
                            <Textarea label="Description" value={proj.description} onChange={v => updateProject(proj.id, 'description', v)} rows={2} />
                            <Input label="Link (optional)" value={proj.link} onChange={v => updateProject(proj.id, 'link', v)} placeholder="https://..." />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addProject} label="Add Project" />
                </div>
            );

        // ── HOBBIES ─────────────────────────────────────────
        case 'hobbies':
            return (
                <div style={wrap}>
                    {data.hobbies.map((hobby, idx) => (
                        <ListItem key={hobby.id}>
                            <ItemHeader label="Hobby" index={idx} onRemove={() => removeHobby(hobby.id)} />
                            <Row>
                                <Input label="Icon / Emoji" value={hobby.icon || ''} onChange={v => updateHobby(hobby.id, 'icon', v)} placeholder="💻" />
                                <Input label="Hobby Name" value={hobby.name} onChange={v => updateHobby(hobby.id, 'name', v)} placeholder="Programming" />
                            </Row>
                        </ListItem>
                    ))}
                    <AddBtn onClick={addHobby} label="Add Hobby" />
                </div>
            );

        // ── LANGUAGES ───────────────────────────────────────
        case 'languages':
            return (
                <div style={wrap}>
                    {data.languages.map((lang, idx) => (
                        <ListItem key={lang.id}>
                            <ItemHeader label="Language" index={idx} onRemove={() => removeLanguage(lang.id)} />
                            <Row>
                                <Input label="Language" value={lang.name} onChange={v => updateLanguage(lang.id, 'name', v)} placeholder="English" />
                                <Input label="Level" value={lang.proficiency} onChange={v => updateLanguage(lang.id, 'proficiency', v)} placeholder="Native" />
                            </Row>
                        </ListItem>
                    ))}
                    <AddBtn onClick={addLanguage} label="Add Language" />
                </div>
            );

        // ── CERTIFICATIONS ──────────────────────────────────
        case 'certifications':
            return (
                <div style={wrap}>
                    {data.certifications.map((cert, idx) => (
                        <ListItem key={cert.id}>
                            <ItemHeader label="Certification" index={idx} onRemove={() => removeCertification(cert.id)} />
                            <Input label="Name" value={cert.name} onChange={v => updateCertification(cert.id, 'name', v)} placeholder="AWS Solutions Architect" />
                            <Row>
                                <Input label="Issuer" value={cert.issuer} onChange={v => updateCertification(cert.id, 'issuer', v)} placeholder="Amazon" />
                                <Input label="Date" value={cert.date} onChange={v => updateCertification(cert.id, 'date', v)} placeholder="2024" />
                            </Row>
                            <Input label="Link (optional)" value={cert.link || ''} onChange={v => updateCertification(cert.id, 'link', v)} placeholder="https://..." />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addCertification} label="Add Certification" />
                </div>
            );

        // ── AWARDS ──────────────────────────────────────────
        case 'awards':
            return (
                <div style={wrap}>
                    {data.awards.map((award, idx) => (
                        <ListItem key={award.id}>
                            <ItemHeader label="Award" index={idx} onRemove={() => removeAward(award.id)} />
                            <Input label="Title" value={award.title} onChange={v => updateAward(award.id, 'title', v)} placeholder="Best Project Award" />
                            <Row>
                                <Input label="Issuer" value={award.issuer} onChange={v => updateAward(award.id, 'issuer', v)} placeholder="Hackathon XYZ" />
                                <Input label="Date" value={award.date} onChange={v => updateAward(award.id, 'date', v)} placeholder="2023" />
                            </Row>
                            <Textarea label="Description (optional)" value={award.description || ''} onChange={v => updateAward(award.id, 'description', v)} rows={2} />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addAward} label="Add Award" />
                </div>
            );

        // ── VOLUNTEER ───────────────────────────────────────
        case 'volunteer':
            return (
                <div style={wrap}>
                    {data.volunteer.map((vol, idx) => (
                        <ListItem key={vol.id}>
                            <ItemHeader label="Volunteer" index={idx} onRemove={() => removeVolunteer(vol.id)} />
                            <Input label="Organization" value={vol.organization} onChange={v => updateVolunteer(vol.id, 'organization', v)} placeholder="Red Cross" />
                            <Input label="Role" value={vol.role} onChange={v => updateVolunteer(vol.id, 'role', v)} placeholder="Volunteer Developer" />
                            <Row>
                                <Input label="Start" value={vol.start} onChange={v => updateVolunteer(vol.id, 'start', v)} placeholder="2022" />
                                <Input label="End" value={vol.end} onChange={v => updateVolunteer(vol.id, 'end', v)} placeholder="2023" />
                            </Row>
                            <BulletsLabel />
                            {vol.bullets.map((b, i) => (
                                <BulletField
                                    key={i}
                                    value={b}
                                    index={i}
                                    onChange={v => updateVolunteerBullet(vol.id, i, v)}
                                    onRemove={() => removeVolunteerBullet(vol.id, i)}
                                    canRemove={vol.bullets.length > 1}
                                    placeholder={`Achievement or responsibility ${i + 1}`}
                                />
                            ))}
                            <AddBtn onClick={() => addVolunteerBullet(vol.id)} label="Add bullet" />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addVolunteer} label="Add Volunteer" />
                </div>
            );

        // ── PUBLICATIONS ────────────────────────────────────
        case 'publications':
            return (
                <div style={wrap}>
                    {data.publications.map((pub, idx) => (
                        <ListItem key={pub.id}>
                            <ItemHeader label="Publication" index={idx} onRemove={() => removePublication(pub.id)} />
                            <Input label="Title" value={pub.title} onChange={v => updatePublication(pub.id, 'title', v)} placeholder="Research Paper Title" />
                            <Row>
                                <Input label="Publisher" value={pub.publisher} onChange={v => updatePublication(pub.id, 'publisher', v)} placeholder="Journal of XYZ" />
                                <Input label="Date" value={pub.date} onChange={v => updatePublication(pub.id, 'date', v)} placeholder="2023" />
                            </Row>
                            <Input label="Link (optional)" value={pub.link || ''} onChange={v => updatePublication(pub.id, 'link', v)} placeholder="https://..." />
                        </ListItem>
                    ))}
                    <AddBtn onClick={addPublication} label="Add Publication" />
                </div>
            );

        default:
            return null;
    }
}