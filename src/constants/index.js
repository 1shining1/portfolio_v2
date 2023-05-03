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
                name: "Handong Global University's Attendance System",

                description:
                    "Mobile application and web pages for Handong Global University's attendance system with four different versions using Bootstrap",

                image: handong01,

                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "Handong Global University's Attendance system",

                description: "List-style attendance check page for professors",
                subInfo:
                    "Features include attendance tracking for each semester, uploading lecture videos, customizable display of student information on the screen",
                image: handong02,
                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "Handong Global University's Attendance system",
                description: "Main page for the administrator version",
                image: handong06,
                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "Handong Global University's Attendance system",
                description: "Main page for the university student version",
                image: handong07,
                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "Mobile Application for Attendance System",
                description:
                    "Maintain the previous design and replace the code used with Angular for the code using Bootstrap.",
                image: handong_m,
                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "A Responsive Website Handong Residential College",
                description:
                    "A responsive website for students who use the dormitory facilities",
                image: handong_rc,
                skill: "HTML /  CSS / JAVASCRIPT",
            },
        ],
    },

    {
        name: "Hospital Self-service Application",
        image: smartHP,
        content: [
            {
                name: "Hospital Self-service Application",
                image: smartHP,
                description:
                    "A Hospital Payment and Management System that allowed patients to make credit card payments for medical expenses, issue queue tickets, and receive medical certificates through a self-service kiosk and mobile application",
                skill: "HTML /  CSS / JAVASCRIPT / BOOTSTRAP",
            },

            {
                name: "Yonsei University Health System",
                image: mySeverance,
                description:
                    "A mobile application for all aspects of hospital use, including making appointments, paying for medical fees, checking test results, and paying for parking fees",
                skill: "HTML /  CSS / JAVASCRIPT",
            },

            {
                name: "ASAN Medical Center",
                image: asanLymph,
                description:
                    "A mobile application for self-diagnosis and management of lymphedema-related diseases",
                skill: "HTML /  CSS / JAVASCRIPT",
            },
        ],
    },

    {
        name: "Foreign Language versions of Pohang City Hall",
        description:
            "Development and Maintenance of Responsive Website for Pohang City",
        image: pohangF01,

        content: [
            {
                name: "Foreign Language versions of Pohang City Hall",
                description:
                    "Responsive websites integrated into a CMS for Pohang city hall with versions available in English, Russian, Japanese, and Chinese",
                image: pohangF01,
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
            },

            {
                name: "Foreign Language versions of Pohang City Hall",
                description: "Mobile view of the responsive website",
                image: pohangF02,
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
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
                name: "Korea Employment and Labor Educational Institute",
                image: keliMain,
                description:
                    "A responsive website for employees of the Ministry of Labor to check various information and attend lectures",
                skill: "HTML /  CSS / JAVASCRIPT",
            },

            {
                name: "Korea Employment and Labor Educational Institute",
                image: keliMobile,
                description: "Mobile view of the responsive website",
                skill: "HTML /  CSS / JAVASCRIPT",
            },

            {
                name: "Korea Employment and Labor Educational Institute",
                image: keliCourse,
                description:
                    "A website for checking lecture attendance and progress status",
                skill: "HTML /  CSS / JAVASCRIPT",
            },
        ],
    },

    {
        name: "Affiliated Organizations of the Pohang City Hall",

        image: Trauma,

        content: [
            {
                name: "Pohang city's Earthquake Trauma Center",
                image: Trauma,
                description:
                    "Created responsive landing pages related to Pohang City, maintained 1000+ web pages and graphics, and passed the annual Web Accessibility test",
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
            },

            {
                name: "Pohang city's Agricultural Technology Center",
                image: Atech,
                description: "",
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
            },

            {
                name: "The Memorial of Saemaeul Undong",
                description: "",
                image: Nt,
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
            },

            {
                name: "Pohang city's Scholarship Department",
                description: "",
                image: Scholarship,
                skill: "HTML /  CSS / JAVASCRIPT / CMS",
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
                    "Created a landing page and passed the annual Web Accessibility test for Daegu Metropolitan Transit Corporation.",
                skill: "HTML /  CSS / JAVASCRIPT",
            },

            {
                name: "Daegu Metropolitan Transit Corporation",
                image: Dtro02,
                description: "",
                skill: "HTML /  CSS / JAVASCRIPT",
            },
        ],
    },
];

export { workLists };
