import { SiMysql, SiPython, SiJavascript, SiCplusplus } from "react-icons/si";
import { PiHeadCircuitFill } from "react-icons/pi";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaHtml5,FaCss3,FaReact,FaNodeJs } from "react-icons/fa";
import project_1 from './project_1.png'
import project_2 from './project_2.png'
import project_3 from './project_3.png'
export const Experience = [
    {
        year:'2024-Present',
        title:'Software Engineer',
        company:'Corning Inc.'
    }
]

export const Education = [
    {
        year:'2024-Ongoing',
        course:'A-Z Machine Learning',
        institute:'Udemy'
    },
    {
        year:'2024-Ongoing',
        course:'Masters in Data Science',
        institute:'Chandigarh University'
    },
    {
        year:'2020-2024',
        course:'Bachelor of Technology',
        institute:'Guru Gobind Singh Indraprastha University'
    },
]

export const Skills = [
    {
        title:'MySQL',
        icon:<SiMysql/>
    },
    {
        title:'Python',
        icon:<SiPython/>
    },
    {
        title:'ML',
        icon:<PiHeadCircuitFill/>
    },
    {
        title:'Excel',
        icon:<RiFileExcel2Fill/>
    },
    {
        title:'C/C++',
        icon:<SiCplusplus/>
    },
    {
        title:'HTML',
        icon:<FaHtml5/>
    },
    {
        title:'CSS',
        icon:<FaCss3/>
    },
    {
        title:'JavaScript',
        icon:<SiJavascript/>
    },
    {
        title:'React.js',
        icon:<FaReact/>
    },
    {
        title:'Node.js',
        icon:<FaNodeJs/>
    },
]

export const Blogs = [

]

export const Projects = [
    {
        id:1,
        title:'Data Analysis Project 1',
        desc:'This is a detailed supply chain analysis developed for a fashion and beauty startup.',
        techStack:'Python, Data Analysis, Data Cleaning',
        // liveURL:'https://edplatform.netlify.app/',
        githubURL:'https://github.com/ManuKashyap01/Supply_chain_analysis',
        img:project_1,
    },
    {
        id:2,
        title:'Data Analysis Project 2',
        desc:"This is an in-depth Netflix content analysis for 2023, to uncover trends and patterns in the platform's offerings.",
        techStack:'Python, Data Analysis, Data Cleaning',
        // liveURL:'https://edplatform.netlify.app/',
        githubURL:'https://github.com/ManuKashyap01/Netflix_Data_Analysis',
        img:project_2,
    },
    {
        id:3,
        title:'Frontend Project',
        desc:"This is a modern, frontend-focused education platform built using ReactJS, TailwindCSS, and Framer Motion.",
        techStack:'HTML, CSS, JavaScript, React.js, Framer motion',
        liveURL:'https://edplatform.netlify.app/',
        githubURL:'https://github.com/ManuKashyap01/Education_platform',
        img:project_3,
    },
    {
        id:4,
        title:'Data Science Project',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem ratione unde dignissimos nam cupiditate.',
        techStack:'HTML, CSS, JavaScript, React.js, Framer motion',
        liveURL:'https://edplatform.netlify.app/',
        githubURL:'https://github.com/ManuKashyap01/Education_platform',
        img:project_1,
    },
]
