import {
    backend,
    spring,
    javascript,
    nodejs,
    mongodb,
    git,
    docker,
    ifood,
    csgoflix,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Java Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "Java",
        icon: backend,
    },
    {
        name: "Spring Framwork",
        icon: spring,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "IFood",
        icon: ifood,
        iconBg: "#383E56",
        date: "June 2022 - February 2023",
        points: [
            "Development and maintenance projects for logistics team, impacting performance indicators for own fleet deliveries",
            "Help to improve and keep low costs in engineer infrastructure",
            "Help and spread knowledge between all the engineer team.",
            "Technologies: Java 11+, Nodejs, Python, Spring Framework, Datadog, New Relic, Amazon AWS stack, PostgreSQL"
        ],
    }
];

const testimonials = [
    {
        testimonial: "...",
        name: "...",
        designation: "...",
        company: "...",
        image: "...",
    }
];

const projects = [
    {
        name: "CSGOFlix",
        description:
            "Site agregador de vídeos sobre Counter-strike: Global Offensive",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "vercel",
                color: "pink-text-gradient",
            },
        ],
        image: csgoflix,
        source_code_link: "https://github.com/alexoshiro/csgoflix",
    }
];

export { services, technologies, experiences, testimonials, projects };