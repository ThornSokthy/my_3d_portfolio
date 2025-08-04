
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Works',
        href: '#works',
    },
    {
        id: 3,
        name: 'About',
        href: '#about',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        cubePosition: isSmall ? [5, -12, 0] : isMobile ? [10, -8, 0] : isTablet ? [8, -10, 0] : [15, -5.5, 0],
        reactLogoPosition: isSmall ? [6, 6, 0] : isMobile ? [8, 7, 0] : isTablet ? [9, -10, 0] : [15, 5, 0],
        targetPosition: isSmall ? [-7, -12, -10] : isMobile ? [-15, -9, -10] : isTablet ? [-15, -7, -10] : [-19, -13, -10],
        ringPosition: isSmall ? [-14, 10, -10] : isMobile ? [-18, 12, -10] : isTablet ? [-19, -7, -10] : [-28, 13, -10],
    };
};

export const technologies = [
    {
        name: "HTML 5",
        icon: "/assets/tech/html.png",
    },
    {
        name: "CSS 3",
        icon: "/assets/tech/css.png",
    },
    {
        name: "JavaScript",
        icon: "/assets/tech/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/assets/tech/typescript.png",
    },
    {
        name: "React JS",
        icon: "/assets/tech/reactjs.png",
    },
    {
        name: "Redux Toolkit",
        icon: "/assets/tech/redux.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/assets/tech/tailwind.png",
    },
    {
        name: "Node JS",
        icon: "/assets/tech/nodejs.png",
    },
    {
        name: "Laravel",
        icon: "/assets/tech/laravel.svg",
    },
    {
        name: "MySQL",
        icon: "/assets/tech/mysql.png",
    },
    {
        name: "Post Man",
        icon: "/assets/tech/postman.png",
    },
    {
        name: "MongoDB",
        icon: "/assets/tech/mongodb.png",
    },
    {
        name: "Spring Boot",
        icon: "/assets/tech/springboot.svg",
    },
    {
        name: "git",
        icon: "/assets/tech/git.png",
    },
    {
        name: "docker",
        icon: "/assets/tech/docker.png",
    },
];

export const myProjects = [
    {
        title: 'Market Place - E-commerce Platform',
        desc: 'MarketFlow is a cutting-edge Software-as-a-Service (SaaS) platform that redefines the future of online commerce. With AI-driven personalization, seamless multi-vendor integration, and intelligent inventory management, it empowers businesses to create, scale, and optimize their digital storefronts effortlessly.',
        subdesc:
            "Built as a powerful, full-stack SaaS platform using Laravel, Tailwind CSS, and MySQL, MarketFlow delivers robust performance, elegant design, and seamless scalability. With a secure, database-driven architecture and responsive front-end styling, our platform ensures smooth operations, fast load times, and a polished user experience. Whether you're a solo entrepreneur or a growing enterprise, MarketFlow provides the flexibility and reliability needed to succeed in the competitive e-commerce space.",
        href: 'https://gitlab.com/ThornSokthy/market_place_laravel',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Laravel',
                path: '/assets/tech/laravel.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tech/tailwind.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/tech/mysql.png',
            },
        ],
    },
    {
        title: 'Car Dealership - Car Rental Website',
        desc: 'AutoShow is a modern, high-performance car dealership Website designed to revolutionize the way buyers and sellers connect. With a dynamic, mobile-friendly interface built using React.js and Bootstrap, the website delivers lightning-fast browsing, seamless navigation, and stunning visual appeal.',
        subdesc:
            "Featuring real-time inventory updates, advanced search filters, and interactive vehicle showcases, AutoShow provides an immersive experience for customers exploring their next car. Whether you're a dealership managing listings or a buyer comparing models, our Website ensures speed, reliability, and a premium user experience.",
        href: 'https://gitlab.com/povsomnangchuon/car-shop-react-e7',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: 'assets/tech/bootstrap.png',
            },
        ],
    },
    {
        title: 'Chat App - Learning Language Platform',
        desc: 'LinguaChat is an immersive AI-powered language-learning platform that revolutionizes how users master new languages through real-time conversational practice. With dynamic chat interfaces, interactive lessons, and AI-driven feedback, learners engage in natural dialogues that accelerate fluency.',
        subdesc:
            "Built as a modern full-stack application using React.js, Tailwind CSS, DaisyUI, Stream (for real-time messaging), Express, and MongoDB, LinguaChat combines seamless interactivity, responsive design, and scalable data management. Whether you're a beginner or an advanced learner, our platform offers personalized, engaging, and effective language practice—anytime, anywhere.",
        href: 'https://gitlab.com/ThornSokthy/mern-chat-app',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/tech/reactjs.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tech/tailwind.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/tech/typescript.png',
            },
            {
                id: 4,
                name: 'Node.js',
                path: '/assets/tech/nodejs.png',
            },
            {
                id: 5,
                name: 'MongoDB',
                path: '/assets/tech/mongodb.png',
            }
        ],
    },
    {
        title: 'Kilo Blood - Blood Donation APIs',
        desc: "Built with enterprise-grade architecture, the API supports features like donor matching, inventory tracking, and emergency request handling, all delivered through secure, well-documented endpoints. Whether integrated into hospital systems or standalone donor apps, Kilo Blood powers life-saving connections with speed, precision, and reliability.",
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://gitlab.com/GitSoriya/kilo-blood',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Spring Boot',
                path: '/assets/tech/springboot.svg',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/tech/mysql.png',
            },
            {
                id: 3,
                name: 'Docker',
                path: '/assets/tech/docker.png',
            },
            {
                id: 4,
                name: 'Firebase',
                path: '/assets/tech/firebase.png',
            },
            {
                id: 5,
                name: 'Postman',
                path: '/assets/tech/postman.png',
            }
        ],
    },
];

export const myExperience = [
    {
        id: 1,
        period: "July 2024 - Present",
        position: "Back-End Intern at KiloIT",
        description: "I lead the development of diverse projects, dedicating myself to creating platforms that meet client needs and transform their concepts into tangible results.",
        activities: {
            title: "Activities",
            items: [
                "Back-end infrastructure development with Spring Boot",
                "API development and management with Spring Boot",
                "RESTful API consumption with Spring Boot",
                "Database design and implementation with MySQL"
            ],
            hiddenItems: [
                "RESTful API consumption with Spring Boot",
                "Database design and implementation with MySQL"
            ]
        },
        technologies: {
            title: "Technologies",
            items: [
                { name: "Spring Boot", icon: "/assets/exp/spring.svg" },
                { name: "Docker", icon: "/assets/exp/docker.svg" },
                { name: "MySQL", icon: "/assets/exp/mysql.svg" },
                { name: "Postman", icon: "/assets/exp/postmen.svg" },
                { name: "Git", icon: "/assets/exp/git.svg" },
                { name: "GitLab", icon: "/assets/exp/gitlab.svg" },
                { name: "Redis", icon: "/assets/exp/redis.svg" },
            ]
        },
        showMore: false
    }
];

export const myEducation = [
    {
        id: 1,
        period: "May 2022 - Present",
        institution: "Computer Science at RUPP",
        description: "RUPP is one of Cambodia's leading universities, known for fostering innovation and producing highly skilled graduates in science and technology. Its Computer Science program is particularly recognized for its emphasis on both technical and soft skills, ensuring graduates are competitive in the global job market.",
        activities: {
            title: "Activities",
            items: [
                "Analysis Database development",
                "Management Information Systems",
                "Network Data Communication",
                "Desktop App Build On Java and C#",
                "Web Design"
            ],
            hiddenItems: [
                "Network Data Communication",
                "Desktop App Build On Java and C#",
                "Web Design"
            ]
        },
        technologies: {
            title: "Technologies",
            items: [
                { name: "Java", icon: "/assets/edu/java.svg" },
                { name: "Sql Server", icon: "/assets/edu/sqlserver.svg" },
                { name: "HTML", icon: "/assets/edu/html.svg" },
                { name: "CSS", icon: "/assets/edu/css.svg" },
                { name: "C#", icon: "/assets/edu/csharp.png" },
                { name: "React Js", icon: "/assets/edu/react.png" },
                { name: "JavaScript", icon: "/assets/edu/js.svg" },
            ]
        },
        showMore: false
    }
]