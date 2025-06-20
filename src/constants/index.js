
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  // project2,  
  beyondwork,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  kartik_work,
  overair_work,
  yashwork1,
  yashwork4,
  Angular,
} from '../assets'


import overairLogo from '../assets/overair-logo.png';
import numericLogo from '../assets/Numeric-logo.png';
import globallogo from '../assets/global-logo.png';
import codenialogo from '../assets/Codenia-logo.png';

// import "overair-logo" from '../assets/overair-logo.png';



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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator,
  // },
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
  name: "Angular",
    icon: Angular,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

    
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
 {
  title: "MERN Stack Developer",
  company_name: "Overair Product And Services Pvt Ltd",
  icon: overairLogo, // <-- correct here
  iconBg: "#FFFFFF",
  date: "Jan 2025 - Present",
  points: [ "Developed SEPL Industries website for a Telecom & IT support company.",
  "Built using React, CSS, Bootstrap, Node.js, and Express with chatbot integration.",
  "Contributed to OverAir.in, a product, IT services & consulting company.",
  "Implemented features for showcasing CCTV and security products using PHP and Laravel."
  ],
},
  {
    title: "Frontend Developer - Freelance",
    company_name: "Codenia Technologies LLP",
    icon: codenialogo,
    iconBg: "#FFFFFF",
    date: "Oct 2024 - Jan 2025",
    points: [
         "Developed Beyond Dictionary an interactive learning platform using React and Next.js.",
"Built dynamic word search, quizzes, polls, and blog integration with a responsive UI.",
"Designed engaging quiz/poll modules and integrated educational content via REST APIs.",
"Collaborated with backend developers for seamless data fetching and user interactions.",
   ],
  },
  {
    title: "Backend Developer",
    company_name: "Praedico Global Research Pvt Ltd",
    icon: globallogo, // <-- correct here
    iconBg: "#FFFFFF",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Developed a job portal with authentication (login/signup) for candidates and employers using Node.js and Express.",  

"Implemented features for job posting, application submission, and user profile management.",

"Built RESTful APIs for seamless frontend-backend communication in the job portal.",

"Integrated database (MongoDB) to store job listings, user data, and applications.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Numeric Infosystem pvt. Ltd.", 
    icon: numericLogo, // <-- correct here
    iconBg: "#FFFFFF",
    date: "Sep 2022 - Dec 2022",
    points: [
       "Developed BestMeds, a healthcare e-commerce platform enabling product purchases and doorstep delivery.",
        "Collaborated in a **team of 4** to design and implement frontend (React) and backend (Node.js, Express, MongoDB).",
        "Integrated **Razorpay API** for secure payment processing and order transactions.",
        "Built user authentication, product catalog, cart functionality, and order tracking features.",
        "Optimized API performance for faster product searches and seamless checkout."
      
    ],
  },
];

const testimonials = [
    {
  testimonial:
    "Delivered multiple high-quality projects on time with a strong focus on company growth and client satisfaction. Always showed dedication and professionalism throughout the collaboration.",
  name: "Karan Singh",
  designation: "Director",
  company: "OverAir Product and Services Pvt. Ltd.",
  image: thirdTestimonial,
},

{
  testimonial:
    "A reliable and proactive developer who quickly understood our vision. Working with him felt like having a partner who genuinely cared about the company’s growth.",
  name: "Sandeep Sapal",
  designation: "Founder & CEO",
  company: "Numeric Infosystem Pvt. Ltd.",
  image: secondTestimonial,
},

 
  {
  testimonial:
    "Yashwant collaborated with me to build the Underrated Coder platform. His dedication ensured a smooth experience for our students, from course listings to live class access.",
  name: "Kartik Rai",
  designation: "Founder & CEO",
  company: "Underrated Coder",
  image: firstTestimonial,
},

];

const projects = [
  {
    name: "Beyond Dictionary",
    description:
      "Beyond Dictionary is an interactive learning platform that helps users expand their vocabulary through dynamic word search, quizzes, and polls, enhancing language skills in an engaging way.",

tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
 
    ],
    image: beyondwork,
    live_link: "https://beyonddictionary.com",
  },
  {
    name: "Underrated Coder",
    description:
"Underrated Coder is your go-to platform for mastering coding through live classes and expert guidance. Whether you're a beginner or leveling up, learn to code the smart way—interactive, practical, and powerful!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
      { name: "CSS",
        color: "pink-text-gradient",
      }
     
    ],
    image: kartik_work,
     live_link: "https://www.underratedcoder.com/"
  },
  {
    name: "OverAir",
    description:
"Overair is your trusted partner for cutting-edge products and IT services—from CCTV and DVR solutions to network infrastructure, consulting, and custom web & app development—all under one roof!", 
   tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "white-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
    ],
    image:overair_work,
     live_link: "https://overair.in/"
  },
  {
   name: "Bestmeds",
  description: "BestMeds is a healthcare e-commerce site I built for practice using MERN and Laravel. It lets users buy products, track orders, and includes features like authentication, cart, and Razorpay dummy payments.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Express", color: "white-text-gradient" },
    { name: "Node", color: "green-text-gradient" },
    { name: "MySQL", color: "green-text-gradient" },
  ],
  image: yashwork1,
  live_link: "https://github.com/Yashkannojiya1606/WellnessWarehouse", // <-- Add GitHub link
  },
  {
 name: "RoboBot",
  description: "A personal full-stack project where recruiters can post jobs, candidates can apply, with real-time notifications, user profiles, and job management features.Built with Node.js, Express, and MongoDB.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Express", color: "white-text-gradient" },
    { name: "MongoDB", color: "green-text-gradient" },
    { name: "Node", color: "green-text-gradient" },
  ],
  image: yashwork4,
  live_link: "https://github.com/Yashkannojiya1606/RoboBot", // <-- Add GitHub link
}
];

export { services, technologies, experiences, testimonials, projects };
