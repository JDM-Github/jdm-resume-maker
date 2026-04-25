import { useCallback } from 'react';
import { ResumeData, Experience, Education, Project, Hobby, Language, Certification, Award, Volunteer, Publication } from '../types';
import { uid } from '../helpers';

export function useResumeForm(data: ResumeData, setData: (d: ResumeData) => void) {
    const update = useCallback(
        (key: keyof ResumeData, val: any) => setData({ ...data, [key]: val }),
        [data, setData]
    );

    // ---- Profile picture ----
    const handleProfilePictureUpload = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onloadend = () => update('profilePicture', reader.result as string);
            reader.readAsDataURL(file);
        },
        [update]
    );

    // ---- Experience ----
    const addExperience = useCallback(
        () => update('experiences', [...data.experiences, { id: uid(), company: '', role: '', start: '', end: '', bullets: [''] }]),
        [data.experiences, update]
    );
    const removeExperience = useCallback(
        (id: string) => update('experiences', data.experiences.filter(e => e.id !== id)),
        [data.experiences, update]
    );
    const updateExp = useCallback(
        (id: string, key: keyof Experience, val: any) =>
            update('experiences', data.experiences.map(e => (e.id === id ? { ...e, [key]: val } : e))),
        [data.experiences, update]
    );
    const addBullet = useCallback(
        (id: string) => {
            const exp = data.experiences.find(e => e.id === id);
            if (!exp) return;
            updateExp(id, 'bullets', [...exp.bullets, '']);
        },
        [data.experiences, updateExp]
    );
    const updateBullet = useCallback(
        (id: string, i: number, val: string) => {
            const exp = data.experiences.find(e => e.id === id);
            if (!exp) return;
            const bullets = exp.bullets.map((b, j) => (j === i ? val : b));
            updateExp(id, 'bullets', bullets);
        },
        [data.experiences, updateExp]
    );
    const removeBullet = useCallback(
        (id: string, i: number) => {
            const exp = data.experiences.find(e => e.id === id);
            if (!exp) return;
            updateExp(id, 'bullets', exp.bullets.filter((_, j) => j !== i));
        },
        [data.experiences, updateExp]
    );

    // ---- Education ----
    const addEducation = useCallback(
        () => update('education', [...data.education, { id: uid(), school: '', degree: '', year: '', gpa: '' }]),
        [data.education, update]
    );
    const removeEducation = useCallback(
        (id: string) => update('education', data.education.filter(e => e.id !== id)),
        [data.education, update]
    );
    const updateEdu = useCallback(
        (id: string, key: keyof Education, val: string) =>
            update('education', data.education.map(e => (e.id === id ? { ...e, [key]: val } : e))),
        [data.education, update]
    );

    // ---- Projects ----
    const addProject = useCallback(
        () => update('projects', [...data.projects, { id: uid(), name: '', tech: '', description: '', link: '' }]),
        [data.projects, update]
    );
    const removeProject = useCallback(
        (id: string) => update('projects', data.projects.filter(p => p.id !== id)),
        [data.projects, update]
    );
    const updateProject = useCallback(
        (id: string, key: keyof Project, val: string) =>
            update('projects', data.projects.map(p => (p.id === id ? { ...p, [key]: val } : p))),
        [data.projects, update]
    );

    // ---- Hobbies ----
    const addHobby = useCallback(
        () => update('hobbies', [...data.hobbies, { id: uid(), name: '', icon: '' }]),
        [data.hobbies, update]
    );
    const removeHobby = useCallback(
        (id: string) => update('hobbies', data.hobbies.filter(h => h.id !== id)),
        [data.hobbies, update]
    );
    const updateHobby = useCallback(
        (id: string, key: keyof Hobby, val: string) =>
            update('hobbies', data.hobbies.map(h => (h.id === id ? { ...h, [key]: val } : h))),
        [data.hobbies, update]
    );

    // ---- Languages ----
    const addLanguage = useCallback(
        () => update('languages', [...data.languages, { id: uid(), name: '', proficiency: '' }]),
        [data.languages, update]
    );
    const removeLanguage = useCallback(
        (id: string) => update('languages', data.languages.filter(l => l.id !== id)),
        [data.languages, update]
    );
    const updateLanguage = useCallback(
        (id: string, key: keyof Language, val: string) =>
            update('languages', data.languages.map(l => (l.id === id ? { ...l, [key]: val } : l))),
        [data.languages, update]
    );

    // ---- Certifications ----
    const addCertification = useCallback(
        () => update('certifications', [...data.certifications, { id: uid(), name: '', issuer: '', date: '', link: '' }]),
        [data.certifications, update]
    );
    const removeCertification = useCallback(
        (id: string) => update('certifications', data.certifications.filter(c => c.id !== id)),
        [data.certifications, update]
    );
    const updateCertification = useCallback(
        (id: string, key: keyof Certification, val: string) =>
            update('certifications', data.certifications.map(c => (c.id === id ? { ...c, [key]: val } : c))),
        [data.certifications, update]
    );

    // ---- Awards ----
    const addAward = useCallback(
        () => update('awards', [...data.awards, { id: uid(), title: '', issuer: '', date: '', description: '' }]),
        [data.awards, update]
    );
    const removeAward = useCallback(
        (id: string) => update('awards', data.awards.filter(a => a.id !== id)),
        [data.awards, update]
    );
    const updateAward = useCallback(
        (id: string, key: keyof Award, val: string) =>
            update('awards', data.awards.map(a => (a.id === id ? { ...a, [key]: val } : a))),
        [data.awards, update]
    );

    // ---- Volunteer ----
    const addVolunteer = useCallback(
        () => update('volunteer', [...data.volunteer, { id: uid(), organization: '', role: '', start: '', end: '', bullets: [''] }]),
        [data.volunteer, update]
    );
    const removeVolunteer = useCallback(
        (id: string) => update('volunteer', data.volunteer.filter(v => v.id !== id)),
        [data.volunteer, update]
    );
    const updateVolunteer = useCallback(
        (id: string, key: keyof Volunteer, val: any) =>
            update('volunteer', data.volunteer.map(v => (v.id === id ? { ...v, [key]: val } : v))),
        [data.volunteer, update]
    );
    const addVolunteerBullet = useCallback(
        (id: string) => {
            const vol = data.volunteer.find(v => v.id === id);
            if (!vol) return;
            updateVolunteer(id, 'bullets', [...vol.bullets, '']);
        },
        [data.volunteer, updateVolunteer]
    );
    const updateVolunteerBullet = useCallback(
        (id: string, i: number, val: string) => {
            const vol = data.volunteer.find(v => v.id === id);
            if (!vol) return;
            const bullets = vol.bullets.map((b, j) => (j === i ? val : b));
            updateVolunteer(id, 'bullets', bullets);
        },
        [data.volunteer, updateVolunteer]
    );
    const removeVolunteerBullet = useCallback(
        (id: string, i: number) => {
            const vol = data.volunteer.find(v => v.id === id);
            if (!vol) return;
            updateVolunteer(id, 'bullets', vol.bullets.filter((_, j) => j !== i));
        },
        [data.volunteer, updateVolunteer]
    );

    // ---- Publications ----
    const addPublication = useCallback(
        () => update('publications', [...data.publications, { id: uid(), title: '', publisher: '', date: '', link: '' }]),
        [data.publications, update]
    );
    const removePublication = useCallback(
        (id: string) => update('publications', data.publications.filter(p => p.id !== id)),
        [data.publications, update]
    );
    const updatePublication = useCallback(
        (id: string, key: keyof Publication, val: string) =>
            update('publications', data.publications.map(p => (p.id === id ? { ...p, [key]: val } : p))),
        [data.publications, update]
    );

    return {
        update,
        handleProfilePictureUpload,
        addExperience, removeExperience, updateExp, addBullet, updateBullet, removeBullet,
        addEducation, removeEducation, updateEdu,
        addProject, removeProject, updateProject,
        addHobby, removeHobby, updateHobby,
        addLanguage, removeLanguage, updateLanguage,
        addCertification, removeCertification, updateCertification,
        addAward, removeAward, updateAward,
        addVolunteer, removeVolunteer, updateVolunteer, addVolunteerBullet, updateVolunteerBullet, removeVolunteerBullet,
        addPublication, removePublication, updatePublication,
    };
}