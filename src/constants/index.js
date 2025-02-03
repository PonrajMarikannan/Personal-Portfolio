import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    MaterialUI,
    Java,
    Spring,
    MySQL,
    Selenium,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    RlzLogo,
    School,
    College,
    Graduate,
    Yt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Tester",
      icon: creator,
    },
    {
      title: "DevOps",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Material UI",
      icon: MaterialUI,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "Spring",
      icon: Spring,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "Selenium",
      icon: Selenium,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "NHSS",
      icon: School,
      iconBg: "#383E56",
      date: "June 2017 - April 2018",
      points: [
        "SSLC - 75%",
        "Served as an NSS member and attended serveral Camps",
        "Secured victory in the District level Table Tennis Championship on three separate Occasions",
      ],
    },
    {
      title: "Diploma",
      company_name: "Lakshmi Ammal Polytechnic College",
      icon: Graduate,
      iconBg: "#E6DEDD",
      date: "June 2021 - April 2021",
      points: [
        "D.EEE - 82%",
        "Served as an NSS member and attended serveral Camps",
        "Secured victory in the Divisional level Table Tennis Championship",
      ],
    },
    {
      title: "Bachelor Degree",
      company_name: "National Engineering College",
      icon: Graduate,
      iconBg: "#383E56",
      date: "June 2021 - April 2024",
      points: [
        "CGPA: 7.55",
        "Volunteer in ECO-Club and involved in field works",
        "Attended workshop titled IOT with ESP in MIT, Chennai",
        "Participated “E-yantra” Robotic Competition conducted by IIT Bombay",
        "Attended workshop titled Oracle Apex at National Engineering College Conducted by Oracle",
        "Attended workshop titled Mobile Application Development at National Engineering College Conducted by ZOHO",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Relevantz Technology",
      icon: RlzLogo,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "YouTube Clone is a fully functional video streaming platform that replicates the core features of YouTube, like video recommendations, playlists, view and share videos",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Yt,
      source_code_link: "https://youtube-clone-six-rosy.vercel.app/",
    },
    {
      name: "Clearance Hub",
      description:
        "To design and implement a comprehensive system that streamlines customs clearance processes and provides real-time tracking for international shipments, enhancing efficiency, transparency",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "Hibernate",
          color: "white-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/PonrajMarikannan/Clearance-Hub",
    },
    {
      name: "Profile Harvester ",
      description:
      "This project simplifies the recruitment process by providing relevant candidate details such as skills, experience, and education, allowing recruiters to efficiently find and evaluate talent.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/PonrajMarikannan/Profile-Harvester",
    },
  ];
  
  export { services, technologies, experiences, projects };