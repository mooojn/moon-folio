import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";


export const links = ["home", "projects", "experiences"];

export const components = [
    {
        id: 'home',
        render: <Hero />,
    },
    {
        id: 'projects',
        render: <Projects />,
    },
    {
        id: 'experiences',
        render: <Experiences />,
    },
]