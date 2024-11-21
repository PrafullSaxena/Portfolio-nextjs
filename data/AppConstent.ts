import { Langugage, Project} from "@data/Types";

export const AppConstent = {
    TITLE : "Portfolio | Prafull Saxena",
    DESCRIPTION : "Prafull Saxena's portfolio",
    RESUME_URL : "https://drive.google.com/file/d/1DiuEB3sXM7ZmA8CeXa0-PUhNUuxA71MH/view?usp=drive_link"
}

export const Profile = {
    name: "Prafull Saxena",
    role: "Sr. Software Engineer",
    title: "Full Stack Developer",
    image: "@assets/images/profile.jpg",
    location: "India",
    workingSince: new Date("2019-07-15T00:00:00"),
    email: "workwithPrafull@gmail.com",
    socials: [
        {
            isVisibile: true,
            showInFotter: true,
            name: "Github",
            url: "https://github.com/PrafullSaxena"
        },
        {
            isVisibile: true,
            showInFotter: true,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/prafullsaxena"
        },
        {
            isVisibile: false,
            showInFotter: false,
            name: "X (Twitter)",
            url: "https://x.com/PrafullSaxena9"
        },
        {
            isVisibile: true,
            showInFotter: false,
            name: "Instagram",
            url: "https://www.instagram.com/prafullsaxena__/"
        },
        {
            isVisibile: true,
            showInFotter: false,
            name: "LeetCode",
            url: "https://leetcode.com/prafullsaxena__/"
        },
         {
            isVisibile: true,
                name: "Facebook",
                url: "https://www.facebook.com/profile.php?id=100007032421000"
        },
    ]
}

export const Languages : Record<string, Langugage> = {
    JAVA: {
        name: "Java",
        icon: "@assets/images/java.png"
    },
    JAVASCRIPT: {
        name: "Javascript",
        icon: "@assets/images/javascript.png"
    },
    TYPESCRIPT: {
        name: "Typescript",
        icon: "@assets/images/typescript.png"
    },
}

export const Framework : Record<string, Langugage> = {
    REACT: {
        name: "React",
        icon: "@assets/images/react.png"
    },
    NEXTJS: {
        name: "NextJS",
        icon: "@assets/images/nextjs.png"
    },
    SPRING: {
        name: "Spring",
        icon: "@assets/images/spring.png"
    },
    TAILWINDCSS: {
        name: "TailwindCSS",
        icon: "@assets/images/tailwindcss.png"
    },
    REDUX: {
        name: "Redux toolkit",
        icon: "@assets/images/tailwindcss.png"
    },
    CHROME: {
        name: "Chrome Extension",
        icon: "@assets/images/typescript.png"
    },
}

export const Projects : Project[] = [
    {
        title: "DSATracker",
        description: "This is a project description",
        techStack: [Languages.JAVA, Languages.TYPESCRIPT],
        frameworks: [Framework.SPRING, Framework.REACT, Framework.CHROME, Framework.REDUX],
        isDeployed: false,
        gallery: ["/project-dsaT1.png", "/project-dsaT2.png", "/project-dsaT3.png"],
        thumbnail: "/project-dsaT1.png",
        liveUrl: "",
        gitHub: "",
    },
    {
        title: "Shorting Visualizer",
        description: "This is a project description",
        techStack: [Languages.JAVA, Languages.TYPESCRIPT],
        frameworks: [Framework.SPRING, Framework.REACT, Framework.CHROME, Framework.REDUX],
        isDeployed: false,
        gallery: ["@assets/images/dsa-tracker.png"],
        thumbnail: "@assets/images/dsa-tracker.png",
        liveUrl: "",
        gitHub: "",
    },
    {
        title: "Portfolio",
        description: "This is a project description",
        techStack: [Languages.JAVA, Languages.TYPESCRIPT],
        frameworks: [Framework.SPRING, Framework.REACT, Framework.CHROME, Framework.REDUX],
        isDeployed: false,
        gallery: ["@assets/images/dsa-tracker.png"],
        thumbnail: "@assets/images/dsa-tracker.png",
        liveUrl: "",
        gitHub: "",
    },
    {
        title: "LLD Notes",
        description: "This is a project description",
        techStack: [Languages.JAVA, Languages.TYPESCRIPT],
        frameworks: [Framework.SPRING, Framework.REACT, Framework.CHROME, Framework.REDUX],
        isDeployed: false,
        gallery: ["/project-lld.png"],
        thumbnail: "/project-lld.png",
        liveUrl: "",
        gitHub: "https://github.com/PrafullSaxena/LLD/",
    }
];

export const Education = [
    {
        role: "Post Graduation",
        title: "M.Tech",
        specialisation: "Computing System and Infrastructure",
        institute: "Bits Pilani",
        icon: "@assets/images/bits.png",
        duration: "2020 - 2023",
        description: ""
    },
    {
        role: "Under Graduation",
        title: "B.C.A",
        specialisation: "Computer Applications",
        institute: "GLA Universitry",
        icon: "@assets/images/gla.png",
        duration: "2020 - 2023",
        description: ""
    }
]

export const EXPERIENCE = [
    {
        role: "Sr. Software Engineer",
        company: "Altimetrik",
        started: "",
        ended: "",
        tech: [],
        description: ""
    },
    {
        role: "Software Engineer",
        company: "Cognizant",
        duration: "2020 - 2023",
        description: ""
    }
]

export const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/",

    },
    {
        name: "Contact",
        link: "/",
    },
];

export const SETTINGS = {
    showProjects: true,
    showGitRepos: true,
    showContacts: true,
    showTerminal: true
}

export const BusinessPage = {
    title: "Why I’m the Engineer, Your Business Needs.",
    Titlehighlights: ["the Engineer", "full-stack developer", "problem solver"],
    desc: "In today’s fast-paced digital world, businesses need tailored solutions to stay ahead. With years of experience as a full-stack developer and problem solver, I bring a unique blend of technical expertise and creative thinking to every project.",
    data: [
        {
            title: "Full-Stack Expertise for Scalable Solutions",
            desc: "With a strong foundation in Java, Spring Boot, and React, I create robust and dynamic applications, from e-commerce platforms to data-driven dashboards, tailored to your specific business needs.",
            highlight: ["Java", "Spring Boot", "React"]
        },
        {
            title: "Effortless System Design and Process Automation",
            desc: "I simplify complex workflows by designing scalable systems and automating repetitive tasks, ensuring your business operates efficiently and is ready for growth.",
            highlight: ["scalable systems", "automating repetitive tasks"]
        },
        {
            title: "Crafting Exceptional User Experiences",
            desc: "Using modern tools like TailwindCSS and TypeScript, I deliver intuitive, responsive designs that captivate users and elevate your brand.",
            highlight: ["TailwindCSS", "TypeScript", "intuitive, responsive designs"]
        },
        {
            title: "Global Collaboration Across Time Zones",
            desc: "I’m flexible and open to working across different time zones, ensuring seamless communication and collaboration with businesses worldwide.",
            highlight: ["seamless communication", "collaboration"]
        }
    ]
};

export const loadingStates = [
    {
        text: "Fetching data from all fields",
    },
    {
        text: "Sending data to the server",
    },
    {
        text: "Data sent successfully",
    },
    {
        text: "You can close the window now",
    }
];
