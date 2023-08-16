export interface Sections {
    data: Section[];
}

export interface Section {
    title: string;
    description?: string[];
    list?: string[];
}

export let AppData = {
    "data": [
        {
            "title": "About Me",
            "content": 
                `
                 Welcome! My name is One-Smart-Programmer! 
                 I have 1.5 years of professional experience as a full stack web developer.
                 My main expierence is with Spring Boot and Angular. My hobbies include
                 programming, playing video games, and watching movies!

                 `
            
        },
        {
            "title": "Skills",
            "list": [
                "Java",
                "TypeScript",
                "Spring Boot",
                "Angular",
                "Redis (Redisson)",
                "RabbitMQ",
                "HTML",
                "CSS / Sass",
                "Git",
                "Angular Material",
                "SQL",
                "REST API",
                "JSON",
                "C++",
                "iOS Programming (Swift)",
                "Concurrency"
            ]
        }, 
        {
            "title": "Education",
            "list": [
                "Bachelor of Science in Computer Science from Arizona State University - December 2021"
            ]
        },
        {
            "title": "Project Portfolio",
            "list": [
                "My Resume Website (Fall 2023)- This Angular application uses TypeScript and Angular Material.",
                "Note Taking App (Coming Soon Fall 2023) - Angular application using TypeScript."
            ]
        },{
            "title": "Contact Me",
            "content": 
                `

                If you have a job offering for a software development position, please contact me!
                I can reply within hours. Also, I am a fast learner and can learn any new programming 
                language required for the job. Thank you for visiting my resume website!

                `
        }
        
    ]
};