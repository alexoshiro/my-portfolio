import {
    backend,
    spring,
    javascript,
    nodejs,
    mongodb,
    git,
    docker,
    ifood,
    recargapay,
    equiplano,
    edeploy,
    ufgd,
    csgoflix,
    python,
    datadog,
    newrelic,
    aws,
    kafka,
    oracledb,
    postgresql,
    redis,
    kubernetes,
    devdisplay
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
        title: "Java Software Engineer",
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
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Datadog",
        icon: datadog,
    },
    {
        name: "New Relic",
        icon: newrelic,
    },
    {
        name: "Amazon AWS",
        icon: aws,
    },
    {
        name: "Apacke Kafka",
        icon: kafka,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
    {
        name: "OracleDB",
        icon: oracledb,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Redis",
        icon: redis,
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
            "Technologies: Java 11+, Nodejs, Python, Spring Framework, Datadog, New Relic, Amazon AWS stack, PostgreSQL, RabbitMQ, Kubernetes, Docker, Kafka, Microservices"
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "RecargaPay",
        icon: recargapay,
        iconBg: "#383E56",
        date: "February 2021 - June 2022",
        points: [
            "Development and maintenance of all the in house softwares, more focused in payments system.",
            "Work closely with PO and Tech Lead to maintain optimum levels of communication to effectively and efficiently complete projects.",
            "Resolve problems, improve operations and provide exceptional service.",
            "Help and spread knowledge between all the engineer team.",
            "Technologies: Java 11+, Nodejs, Python, Spring Framework, Datadog, New Relic, Amazon AWS stack, PostgreSQL, Kubernetes, Docker, Kafka, Microservices"
        ],
    },
    {
        title: "Senior Java Software Engineer",
        company_name: "Equiplano",
        icon: equiplano,
        iconBg: "#383E56",
        date: "December 2020 - January 2021",
        points: [
            "Development and maintenance of the tax system and taxpayer portal.",
            "Technologies: Java 6+, VRaptor, JSF, PostgreSQL"
        ],
    },
    {
        title: "Senior Java Backend Developer",
        company_name: "E-deploy",
        icon: edeploy,
        iconBg: "#383E56",
        date: "April 2017 - November 2020",
        points: [
            "Development and maintenance of the back office system for the companies, Burger King Brasil, Popeyes and Dunkin Donuts.",
            "Adjusted software parameters to boost performance and incorporate new features.",
            "Tested programs and databases to identify issues and make necessary modifications.",
            "Collaborated with other developers to identify and alleviate software errors and inefficiencies.",
            "Technologies: Java 8+, Java EE, JSP, Java servlets, MVC, Oracle DB, Microsoft SQL Server"
        ],
    },
    {
        title: "Information Technology Intern",
        company_name: "Universidade Federal da Grande Dourados",
        icon: ufgd,
        iconBg: "#383E56",
        date: "April 2013 - April 2015",
        points: [
            "Installed and configured software and hardware.",
            "Followed up with clients to verify optimal customer satisfaction following support engagement and problem resolution.",
            "Addressed all questions and concerns from end users regarding the education platform.",
            "Loaded software, granted permissions and configured hardware for new employees as part of onboarding process.",
            "Provided Tier 1 IT support to non-technical internal users through desk side support services.",
            "Installed, modified and repaired software and hardware to resolve technical issues.",
            "Collaborated with other developers to identify and alleviate number of bugs and errors in software.",
            "Technologies: Moodle, PHP, MySQL, Linux"
        ],
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
    },
    {
        name: "Dev Display",
        description:
            "Cadastro e display de localização para devs",
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
                name: "nodejs",
                color: "pink-text-gradient",
            },
            ,
            {
                name: "mobile",
                color: "orange-text-gradient",
            },
        ],
        image: devdisplay,
        source_code_link: "https://github.com/alexoshiro/devs-display",
    }
];

export { services, technologies, experiences, projects };