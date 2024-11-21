
export interface CustomDate {
    day: number,
    month: number,
    year: number,
    hour?: number,
    minute?: number,
    second?: number
}

export interface Langugage {
    name: string;
    icon: string;
}

export interface Experience {
    role: string;
    company: string;
    started: string;
    ended: string;
    tech: Langugage[];
    description: string;
}

export interface Command {
    response: string,
    desc: string
}

export interface Project {
    title: string;
    description: string;
    techStack: Langugage[];
    frameworks: Langugage[];
    isDeployed: boolean;
    gallery: string[];
    thumbnail: string;
    liveUrl: string;
    gitHub: string;
}

export enum PROJECT_TYPE {
    WEB = "Web",
    MOBILE = "Mobile",
    OTHER = "Other",
    EDUCATION = "Education"
}
