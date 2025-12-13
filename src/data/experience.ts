export interface Experience {
    title: string;
    company: string;
    date: string;
    location?: string;
    type?: string;
    description?: string;
    skills: string[];
}

export const experience: Experience[] = [
    {
        title: "Principal Full Stack Senior Software Engineer",
        company: "Luxury Cruise Connections",
        date: "Apr 2023 - Present",
        location: "Miami, Florida, USA · Remote",
        skills: ["AngularJS", "Full Stack Development", "Laravel"]
    },
    {
        title: "Software Architect & Co-Founder",
        company: "CoffeeDevs",
        date: "Jan 2015 - Present",
        location: "Argentina",
        type: "Freelance",
        skills: ["AngularJS", "Full Stack Development", "Laravel"]
    },
    {
        title: "Web Developer",
        company: "Biblioteca Nacional Mariano Moreno",
        date: "Apr 2015 - Apr 2023",
        location: "Buenos Aires, Argentina",
        skills: ["AngularJS", "Full Stack Development", "Laravel"]
    },
    {
        title: "Mobile Developer",
        company: "Freelance",
        date: "Apr 2014 - Nov 2014",
        skills: []
    }
];
