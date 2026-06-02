export type Link = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  tagline: string;
  highlights: string[];
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export type Education = {
  credential: string;
  institution: string;
  detail: string;
  href?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  href?: string;
};

export type Volunteer = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export type Language = {
  name: string;
  level: string;
};

export const resume = {
  name: "Karolina Vakula",
  title: "UI/UX Designer · Full-Stack Developer",
  location: "Calgary, AB",
  relocation: "Open to relocate",
  phone: "+1 403 397 5814",
  email: "karolina@vakula.ca",
  links: [
    { label: "Behance", href: "https://behance.net/karolina_vakula" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/karolina-vakula-b6a77a139" },
    { label: "GitHub", href: "https://github.com/vakula-k" },
  ] as Link[],
  summary:
    "UI/UX Designer and Full-Stack Developer with a Computing Science background and a portfolio of consumer-facing product and UI work. Skilled in turning wireframes, user flows, and product requirements into polished, production-ready interfaces in Figma, and in building and maintaining design systems for consistency and scale. Strong visual execution and attention to detail, with a working knowledge of usability principles, interaction design, responsive layouts, and front-end basics (HTML, CSS, JavaScript). Self-driven and comfortable collaborating with product managers and engineers, iterating quickly on feedback, and adapting in fast-paced startup environments. C1-level English; fluent in English and Ukrainian.",
  skills: [
    {
      category: "UX & Product Design",
      items: [
        "User Research",
        "User Flows",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "Usability & Accessibility",
      ],
    },
    {
      category: "UI & Visual Design",
      items: [
        "High-Fidelity UI",
        "Design Systems",
        "Responsive Design",
        "Visual Hierarchy",
        "Typography",
      ],
    },
    {
      category: "Development",
      items: ["HTML", "CSS", "JavaScript", "Git & GitHub"],
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe Creative Suite", "Sketch", "Jira", "VS Code"],
    },
    {
      category: "AI Tools",
      items: ["ChatGPT", "Claude", "Midjourney", "Perplexity"],
    },
    {
      category: "Soft Skills",
      items: [
        "Cross-functional Collaboration",
        "Communication",
        "Adaptability",
      ],
    },
  ] as SkillGroup[],
  projects: [
    {
      name: "GrowDaily",
      tagline: "Product/UI Design Case Study — Goal-Tracking Consumer App",
      highlights: [
        "Translated product requirements and user research into user flows, wireframes, and information architecture for a consumer-facing mobile product.",
        "Designed high-fidelity mockups and interactive prototypes in Figma, iterating on layout, visual hierarchy, and interaction details.",
        "Built and maintained a reusable component library and design system, improving consistency and speeding up design delivery.",
        "Applied usability and accessibility principles to create an intuitive, user-friendly experience.",
        "Reviewed designs against front-end constraints to keep interfaces production-ready and handoff-friendly.",
      ],
    },
    {
      name: "Carolina Cafe & Catering",
      tagline: "Responsive Website Redesign Case Study",
      highlights: [
        "Performed competitive analysis and defined redesign goals for a consumer-facing web experience.",
        "Designed responsive UI across mobile, tablet, and desktop, improving navigation, visual hierarchy, and readability.",
        "Organized reusable components to keep the interface consistent and scalable.",
      ],
    },
  ] as Project[],
  experience: [
    {
      role: "Visual Designer",
      org: "Messiah Lutheran Church",
      period: "Aug 2025 – April 2026",
      highlights: [
        "Design and maintain weekly presentation visuals, applying consistent layout, typography, and brand standards.",
        "Modernized outdated visuals, improving clarity and readability by an estimated 25% based on reduced revisions and positive feedback.",
      ],
    },
    {
      role: "Administrative Assistant",
      org: "Battle River Lending Place",
      period: "May 2025 – Aug 2025",
      highlights: [
        "Designed marketing materials (posters, banners, print assets) that contributed to an estimated 20% increase in event engagement and inquiries.",
        "Communicated with clients and partners and improved internal processes, increasing equipment-return efficiency by about 30%.",
      ],
    },
  ] as Experience[],
  education: [
    {
      credential: "Bachelor of Science, Computing Science and Mathematics",
      institution: "University of Alberta",
      detail: "Expected 2027",
    },
    {
      credential: "UX/UI Design Program",
      institution: "GoIT School",
      detail: "2026",
      href: "https://drive.google.com/file/d/16o07h5ZLSAp4l-RC4mcIwZ4EI6JzQyen/view",
    },
    {
      credential: "Bachelor of Arts, International Relations",
      institution: "University of Alberta",
      detail: "2024",
    },
  ] as Education[],
  certifications: [
    {
      name: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      year: "Feb 2024",
      credentialId: "XA24C6JQCJ52",
      href: "https://drive.google.com/file/d/1j2EqtPYlfiMHGpCygTP52Xm5PR25ZcKL/view",
    },
    {
      name: "Using AI Tools for UX Design",
      issuer: "LinkedIn",
      year: "Feb 2025",
      href: "https://www.linkedin.com/learning/certificates/d6b402d1ad2fd4cefad839ba9d879a513bd4cc6136b7d352e99b17e1cb72a2c5",
    },
    {
      name: "The Fundamentals of Software Testing",
      issuer: "QATestLab",
      year: "Jun 2020",
      credentialId: "353648",
      href: "https://drive.google.com/file/d/1izh4WGo9inMlGV9n7jlLL6Hg3k1wEbhV/view",
    },
  ] as Certification[],
  volunteer: [
    {
      role: "Ukrainian–English Translator",
      org: "EISA",
      period: "Aug 2023 – Feb 2024",
      highlights: [
        "Translated official documents from Ukrainian to English for immigration clients with a high standard of accuracy and attention to detail.",
      ],
    },
  ] as Volunteer[],
  languages: [
    { name: "English", level: "Fluent (C1+)" },
    { name: "Ukrainian", level: "Native" },
  ] as Language[],
};
