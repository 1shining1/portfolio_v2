// import { mySeverance, smartHP } from "../assets/projects";
import mySeverance from "../assets/projects/mySeverance.png";
import smartHP from "../assets/projects/smartHP.png";
import handong from "../assets/projects/handong.png";

import pohang01 from "../assets/projects/pohang01.png";
import pohang02 from "../assets/projects/pohang02.png";

const workLists = [
    {
        id: 123,
        name: "test1",
        description: "test1",
        link: "/project_detail/0",
        image: "https://source.unsplash.com/featured/300x201",
        content: [
            {
                name: "content!!!!!",
                image: smartHP,
                source_code_link: "https://github.com/",
            },
            {
                name: "content!!!!!",
                image: "https://source.unsplash.com/featured/300x203",
                source_code_link: "https://github.com/",
            },
        ],
    },

    {
        id: 456,
        name: "test2",
        description: "test2",
        link: "/project_detail/1",
        image: "https://source.unsplash.com/featured/300x202",
        content: [
            {
                name: "content!!!!!",
                image: mySeverance,
                source_code_link: "https://github.com/",
            },
            {
                name: "content!!!!!",
                image: "https://source.unsplash.com/featured/300x205",
                source_code_link: "https://github.com/",
            },
        ],
    },
];

const work01 = [
    {
        name: "Handong",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: handong,
        source_code_link: "https://github.com/",
    },
    {
        name: "smartHP",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: smartHP,
        source_code_link: "https://github.com/",
    },
    {
        name: "Pohang City Hall",
        description:
            "Created and maintained responsive websites for various organizations in Pohang City, including foreign language versions of city hall, the mayor's official website, the Agricultural Technology Center, etc.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: mySeverance,
        source_code_link: "https://github.com/",
    },
    {
        name: "pohang Foreign",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: pohang01,
        source_code_link: "https://github.com/",
    },
    {
        name: "pohang Foreign",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: pohang02,
        source_code_link: "https://github.com/",
    },
];

const work02 = [
    {
        id: 123,
        name: "Handong",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: "https://source.unsplash.com/featured/300x201",
        source_code_link: "https://github.com/",
    },
    {
        id: 456,
        name: "smartHP",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: smartHP,
        source_code_link: "https://github.com/",
    },
];

export { workLists, work01, work02 };
