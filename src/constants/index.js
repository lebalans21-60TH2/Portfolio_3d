import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  kianashop,
  weatherapp,
  ercomercekiana,
  noupdate,
  threejs,
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
    title: "Full stack Developer (ReactJS/NodeJS)",
    icon: web,
  },
  {
    title: "Design, Create model 3D (Spline)",
    icon: backend,
  },
  {
    title: "Design Frontend",
    icon: mobile,
  },
  {
    title: "Database (SQL,NoSql)",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Weather app",
    company_name: "personal project",
    icon: reactjs,
    iconBg: "#383E56",
    date: "(August 11, 2022 - December 01, 2023",
    points: [
      "Build and develop a weather web app using React.JS.",
      "Front end: ReactJS,Tailwind css",
      "Back end: NodeJS (express) & API from 'openweathermap.org'"
    ],
  },
  {
    title: "Full stack project ercomerce HouseWare Shop",
    company_name: "personal project",
    icon: reactjs,
    iconBg: "#383E56",
    date: "September 08, 2022 - Present",
    points: [
      "Building and developing a web application for home sales using React.JS",
      "Front end: reactJS, Material UI",
      "Back end: NodeJS (Express) & MongoDB.",
      
    ],
  },
  {
    title: "Full stack project ecomerce project Kiana shop",
    company_name: "personal project",
    icon: reactjs,
    iconBg: "#383E56",
    date: "(December 03, 2022 - December 12, 2022",
    points: [
      "Build fashion sales web application using React.JS.",
      "Front-end: ReactJS, Material-UI.",
      "Back-end: NodeJS express) & MongoDB ",
      "develop functionality and create new features for web application.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather app",
    description:
      "My first application in learning React.JS, an application for monitoring and looking up the weather of provinces and cities in the country.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/lebalans21-60TH2/Weather_app_react",
  },
  {
    name: "Full stack HouseWare Shop",
    description:
      "An e-commerce web application specializing in the sale of your kitchen appliances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: noupdate,
    source_code_link: "https://github.com/lebalans21-60TH2/Houseware_shop",
  },
  {
    name: "Shop Fashion",
    description:
      "An e-commerce web application specializing in the sale of fashion products, the application has all the functions of an e-commerce website.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: kianashop,
    source_code_link: "https://github.com/lebalans21-60TH2/doan",
  },
  {
    name: "Ercomerce Kiana ",
    description:
      "The commerce app that I inspired by Shopee, where you are the buyer and you can also become the seller.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "Socket io",
        color: "blue-text-gradient",
      },
    ],
    image: ercomercekiana,
    source_code_link: "https://github.com/lebalans21-60TH2/shop_old_thing",
  },
];

export { services, technologies, experiences, testimonials, projects };
