// handong global university project
import handong01 from "../assets/p01/handong01.png";
import handong02 from "../assets/p01/handong02.png";
import handong06 from "../assets/p01/handong06.png";
import handong07 from "../assets/p01/handong07.png";
import handong_m from "../assets/p01/handong_m.png";
import handong_rc from "../assets/p01/handong_rc.png";

// Hospital project
import smartHP from "../assets/p02/smartHP.png";
import mySeverance from "../assets/p02/mySeverance.png";
import asanLymph from "../assets/p02/asanLymph.png";

// The foreign language version of Pohang City Hall project
import pohangF01 from "../assets/p03/pohang-foreign-main.png";
import pohangF02 from "../assets/p03/pohang-foreign-mobile.png";

// Affiliated organizations of the City Hall
import Trauma from "../assets/p04/trauma.JPG";
import Atech from "../assets/p04/atech.JPG";
import Nt from "../assets/p04/nt.png";
import Scholarship from "../assets/p04/scholarship.JPG";

// Korea Employment and Labor Educational Institute
import keliMain from "../assets/p05/keli_main.JPG";
import keliMobile from "../assets/p05/keli_mobile.png";
import keliCourse from "../assets/p05/keli_course.png";

// Daegu Metropolitan Transit Corporation
import Dtro from "../assets/p06/dtro01.png";
import Dtro02 from "../assets/p06/dtro02.png";
import SeoguMain from "../assets/p06/seogu_main.png";

const workLists = [
    {
        name: "Handong Global University",
        description: "Handong Global University's attendance system",
        image: handong01,
        content: [
            {
                name: "Handong Global University's attendance system",
                description:
                    "Mobile application and web pages for Handong Global University's attendance system",
                image: handong01,
                skill: "HTML /  CSS / JAVASCRIPT",
                // skill: ["HTML", "CSS", "JavaScript"],
                // tags: [
                //     {
                //         name: "HTML",
                //         color: "blue-text-gradient",
                //     },
                //     {
                //         name: "CSS",
                //         color: "green-text-gradient",
                //     },
                //     {
                //         name: "JavaScript",
                //         color: "pink-text-gradient",
                //     },
                // ],
            },
            {
                name: "content!!!!!",
                image: handong02,
            },
            {
                name: "content!!!!!",
                image: handong06,
            },
            {
                name: "content!!!!!",
                image: handong07,
            },
            {
                name: "content!!!!!",
                image: handong_m,
            },
            {
                name: "content!!!!!",
                image: handong_rc,
            },
        ],
    },

    {
        name: "Hospital Management System",

        image: smartHP,
        content: [
            {
                name: "Hospital Management System",
                image: smartHP,
                description:
                    "Developed frontend for a Hospital Payment and Management System that allowed patients to make credit card payments for medical expenses, issue queue tickets, and receive medical certificates through a self-service kiosk and mobile app.",
            },
            {
                name: "content!!!!!",
                image: mySeverance,
            },
            {
                name: "content!!!!!",
                image: asanLymph,
            },
        ],
    },
    {
        name: "Foreign language versions of Pohang City Hall",
        description:
            "Development and Maintenance of Responsive Website for Pohang City",
        image: pohangF01,
        content: [
            {
                name: "content!!!!!",
                image: pohangF01,
            },
            {
                name: "content!!!!!",
                image: pohangF02,
            },
        ],
    },
    {
        name: "Korea Employment and Labor Educational Institute",
        description:
            "Created a responsive web site for Korea Employment and Labor Educational Institute",
        image: keliMain,
        content: [
            {
                name: "content!!!!!",
                image: keliMain,
            },
            {
                name: "content!!!!!",
                image: keliMobile,
            },
            {
                name: "content!!!!!",
                image: keliCourse,
            },
        ],
    },
    {
        name: "Affiliated organizations of the Pohang City Hall",

        image: Trauma,
        content: [
            {
                name: "Pohang city's Earthquake Trauma Center",
                image: Trauma,
                description:
                    "Created a responsive landing pages, maintained 1000+ web pages and graphics and passed the annual Web Accessibility test.",
            },
            {
                name: "Pohang city's Agricultural Technology Center",
                image: Atech,
            },
            {
                name: "content!!!!!",
                image: Nt,
            },
            {
                name: "Pohang city's Scholarship Department",
                image: Scholarship,
            },
        ],
    },
    {
        name: "Daegu Metropolitan Transit Corporation",

        image: Dtro,
        content: [
            {
                name: "Daegu Metropolitan Transit Corporation",
                image: Dtro,
                description:
                    "Created a responsive landing pages and passed the annual Web Accessibility test for Daegu Metropolitan Transit Corporation.",
            },
            {
                name: "Daegu Metropolitan Transit Corporation",
                image: Dtro02,
            },
        ],
    },
];

export { workLists };
