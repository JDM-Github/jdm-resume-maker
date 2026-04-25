// import { ResumeData } from '../types';
// import { uid } from '../helpers';

// export const defaultData: ResumeData = {
//     name: 'John Dave C. Pega',
//     title: 'Full-Stack Developer & Embedded Systems Engineer',
//     email: 'jdmaster888@gmail.com',
//     phone: '+63 912 345 6789',
//     location: 'Philippines',
//     github: 'github.com/JDM-Github',
//     linkedin: '',
//     website: '',
//     summary:
//         'Normal guy who knows how to type. Passionate about building elegant systems from embedded hardware to full-stack web applications. Experienced in ML, game dev, and language design.',
//     skills:
//         'Python, C++, JavaScript, TypeScript, Java, C#, Dart, Bash · Flask, REST APIs, Socket.IO, Sequelize · Raspberry Pi, Arduino, Embedded Design · Machine Learning, Q-Learning, NEAT · Android Dev, Automation',
//     experiences: [
//         {
//             id: uid(),
//             company: 'Self-Employed / Freelance',
//             role: 'Full-Stack & Embedded Systems Developer',
//             start: '2022',
//             end: 'Present',
//             bullets: [
//                 'Built event-driven embedded systems using Raspberry Pi and Arduino with custom sensor integration.',
//                 'Developed ML pipelines for object detection and Q-Learning agents for complex game environments.',
//                 'Designed and implemented REST APIs and real-time Socket.IO backends using Flask.',
//             ],
//         },
//     ],
//     education: [
//         {
//             id: uid(),
//             school: 'University / College',
//             degree: 'Bachelor of Science in Computer Science',
//             year: '2022 - 2026',
//             gpa: '',
//         },
//     ],
//     projects: [
//         {
//             id: uid(),
//             name: 'JDM Portfolio',
//             tech: 'React, TypeScript, Framer Motion',
//             description: 'Cyberpunk-aesthetic developer portfolio with animated canvas backgrounds and pixel effects.',
//             link: 'github.com/JDM-Github',
//         },
//     ],
//     hobbies: [
//         { id: uid(), name: 'Programming', icon: '💻︎' },
//         { id: uid(), name: 'Open Source', icon: '🐙︎' },
//         { id: uid(), name: 'Embedded Systems', icon: '🔌︎' },
//         { id: uid(), name: 'Machine Learning', icon: '🤖︎' },
//     ],
//     languages: [],
//     certifications: [],
//     awards: [],
//     volunteer: [],
//     publications: [],
//     accentColor: '#000000',
//     secondaryColor: '#1e293b',
//     layout: 'modern',
//     profilePicture: '',
// };

import { ResumeData } from '../types';
import { uid } from '../helpers';

export const defaultData: ResumeData = {
    // Personal Info
    name: 'Your Name',
    title: 'Software Developer',
    email: 'hello@example.com',
    phone: '+1 234 567 8900',
    location: 'City, Country',
    github: 'github.com/username',
    linkedin: 'linkedin.com/in/username',
    website: 'yourwebsite.com',
    summary:
        'Passionate and detail-oriented developer with experience in building responsive web applications and solving real-world problems. Eager to contribute to a collaborative team and continuously learn new technologies.',
    skills:
        'JavaScript, TypeScript, React, Node.js, Python, Git, REST APIs, SQL, HTML/CSS',

    // Professional Experience (1-2 example entries)
    experiences: [
        {
            id: uid(),
            company: 'Tech Solutions Inc.',
            role: 'Frontend Developer',
            start: '2023',
            end: 'Present',
            bullets: [
                'Developed and maintained reusable UI components using React and TypeScript.',
                'Collaborated with backend teams to integrate RESTful APIs, improving data fetching efficiency by 20%.',
            ],
        },
        {
            id: uid(),
            company: 'Startup Hub',
            role: 'Junior Developer Intern',
            start: '2022',
            end: '2023',
            bullets: [
                'Assisted in building a customer dashboard with real‑time analytics using Chart.js and WebSockets.',
                'Participated in code reviews and agile ceremonies, ensuring high code quality and timely delivery.',
            ],
        },
    ],

    // Education (1 example)
    education: [
        {
            id: uid(),
            school: 'State University',
            degree: 'Bachelor of Science in Computer Science',
            year: '2020 – 2024',
            gpa: '3.6/4.0',
        },
    ],

    // Projects (1-2 examples)
    projects: [
        {
            id: uid(),
            name: 'E‑commerce Storefront',
            tech: 'React, Node.js, MongoDB',
            description: 'Full‑stack online store with user authentication, product filtering, and Stripe payment integration.',
            link: 'github.com/username/ecommerce',
        },
        {
            id: uid(),
            name: 'Task Manager CLI',
            tech: 'Python, Click, SQLite',
            description: 'Command‑line tool for managing tasks with due dates, priorities, and persistent storage.',
            link: 'github.com/username/taskcli',
        },
    ],

    // Hobbies (general examples)
    hobbies: [
        { id: uid(), name: 'Reading', icon: '📚' },
        { id: uid(), name: 'Open Source', icon: '🐙' },
        { id: uid(), name: 'Hiking', icon: '⛰️' },
        { id: uid(), name: 'Chess', icon: '♟️' },
    ],

    // Languages (with proficiency levels)
    languages: [
        { id: uid(), name: 'English', proficiency: 'Native' },
        { id: uid(), name: 'Spanish', proficiency: 'Intermediate' },
    ],

    // Certifications (example)
    certifications: [
        {
            id: uid(),
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2023',
            link: 'https://aws.amazon.com/certification',
        },
    ],

    // Awards (example)
    awards: [
        {
            id: uid(),
            title: 'Hackathon Winner – Best UI/UX',
            issuer: 'Local Hackathon 2023',
            date: '2023',
            description: 'Designed an intuitive dashboard for recycling education.',
        },
    ],

    // Volunteer (example)
    volunteer: [
        {
            id: uid(),
            organization: 'Code for Good',
            role: 'Mentor',
            start: '2024',
            end: 'Present',
            bullets: [
                'Guide junior developers through open‑source contributions and code reviews.',
                'Organize weekly workshops on Git and collaborative development.',
            ],
        },
    ],

    // Publications (example)
    publications: [
        {
            id: uid(),
            title: 'Getting Started with React Hooks',
            publisher: 'Dev Community Blog',
            date: '2024',
            link: 'https://dev.to/username/react-hooks',
        },
    ],

    // Styling & Layout
    accentColor: '#3b82f6',      // pleasant blue accent
    secondaryColor: '#f1f5f9',   // light gray background
    layout: 'modern',            // one of: 'classic', 'modern', 'compact', 'modern+'
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
};