/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "josephatotieno92@gmail.com  +254 717 878 813",
  logo_name: "Jose Otieno",
  nickname: "jose / picleric",
  full_name: "Josephat Otieno",
  subTitle: "Fullstack Developer & Tech Innovator 🌍. I build scalable digital solutions that empower communities and address real challenges in Africa. Passionate about open source, data-driven development, and leveraging technology for social impact.",
  resumeLink:
    "https://drive.google.com/file/d/1aaIy8UjTbdrYZX1tZvEarA1FihogRgF7/view?usp=drive_link",
  mail: "mailto:josephatotieno92@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/josphat-otieno",
  linkedin: "https://www.linkedin.com/in/josephat-otieno/",
  gmail: "josephatotieno92@gmail.com",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/josephatotieno92",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and developing highly interactive user interfaces for web and mobile platforms.",
        "⚡ Building fast, responsive, and accessible frontends using React.js, Next.js, and Angular.",
        "⚡ Developing robust backend systems with Python (Django, Django REST Framework).",
        "⚡ Integrating secure third-party services such as M-Pesa, bank APIs, and Firebase.",
        "⚡ Delivering scalable solutions focused on usability and community impact.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon-plain:angular",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced in hosting, and maintaining applications on cloud platforms.",
        "⚡ Skilled with containerization  using Docker.",
        "⚡ Implementing CI/CD workflows with GitHub Actions for automated testing and deployment.",
        "⚡ Managing databases and backups on cloud services like AWS and GCP.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:gcc",
          style: {
            color: "#38AFBB",
          },
        },
        // {
        //   skillName: "Heroku",
        //   fontAwesomeClassname: "simple-icons:heroku",
        //   style: {
        //     color: "#6863A6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Full Stack Software Development",
      subtitle: "Moringa School ",
      logo_path: "ssec.png",
      alt_name: "Moringa School",
      duration: "March 2021 - Sep 2021",
      descriptions: [
        "⚡ Gained hands-on experience in full stack development using Python, Django, Flask, and Angular.",
        "⚡ Built multiple projects integrating RESTful APIs, databases, and dynamic user interfaces.",
        "⚡ Collaborated in agile teams, following real-world software development practices.",
        "⚡ Developed a strong foundation in problem solving, code versioning, and deployment workflows.",
        "⚡ Built several academic and personal projects applying software development principles and emerging technologies.",


      ],
      website_link: "https://moringaschool.com/",
    },
    {
      title: "Jomo Kenyatta University of Agriculture and Technology",
      subtitle: "BSc. Mathematics and Computer Science",
      logo_path: "ssgandhy.png",
      alt_name: "JKUAT",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Studied core subjects including Data Structures and Algorithms, Database Management Systems, Networking, and Computer Security.",
        "⚡ Gained a strong foundation in analytical thinking, problem solving, and mathematical modeling.",
        "⚡ Applied programming and algorithmic concepts through practical coursework and personal projects.",
        "⚡ Complemented academic learning with online courses in backend, web, and mobile development to expand real-world technical skills.",
      ],
      website_link: "https://www.jkuat.ac.ke/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
   description:
    "As a Fullstack Developer, I specialize in building scalable web applications using Django, React, Next.js and Angular. I’m passionate about automation, collaboration, and delivering high-quality software through CI/CD pipelines and agile teamwork.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "Usalama Technology Limited",
          company_url: "https://www.crestinfosystems.com/",
          logo_path: "crest.png",
          duration: "Sep 2021 - Present",
          location: "Nairobi, Kenya",
            description: `Collaborate within a cross-functional team of developers, designers, and product managers to design and build fullstack solutions using Django (backend) and Angular (frontend). 
                        Led the development of enterprise systems such as a Payment Management System and a CRM tailored for financial institutions. 
                        Integrated multiple third-party services, including M-Pesa, email, and SMS gateways, to automate communication and payments. 
                        Implemented CI/CD pipelines using GitHub Actions and Docker to streamline testing, deployment, and delivery. 
                        Actively participate in code reviews, pair programming, and sprint planning to ensure quality and maintainability. 
                        Mentor interns and junior developers, fostering teamwork, collaboration, and adherence to software engineering best practices.`,
          color: "#0071C5",
        },
        
        
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Community Lead",
        //   company: "Bauddhik-Geeks",
        //   company_url: "https://bauddhikgeeks.tech/",
        //   logo_path: "bauddhikgeeks.png",
        //   duration: "Sep 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
        //   color: "#FBBD18",
        // },
        // {
        //   title: "Cross Winter of Code Mentor",
        //   company: "CWOC",
        //   company_url: "https://crosswoc.ieeedtu.in/",
        //   logo_path: "cwoc.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
        //   color: "#4285F4",
        // },
        
        // {
        //   title: "GDG Student Volunteer",
        //   company: "Google Developer Groups",
        //   company_url: "https://gdg.community.dev/",
        //   logo_path: "gdg.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Postman Student Expert",
        //   company: "Postman",
        //   company_url: "https://www.postman.com/",
        //   logo_path: "postman.png",
        //   duration: "Feb 2020 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "GitHub Student Developer",
        //   company: "GitHub",
        //   company_url: "https://github.com/",
        //   logo_path: "github.png",
        //   duration: "Nov 2019 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Contribute to Open Source Community and Open Source Project.",
        //   color: "#040f26",
        // },
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "E. F. I. Student Volunteer",
        //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "efi.png",
        //   duration: "Apr 2017 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#5a900f",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed and deployed a wide range of software solutions leveraging modern technologies such as Django, Angular, React, NextJS, and Python. My work focuses on building scalable, high-impact applications that solve real-world problems. Below are some of my featured projects, showcasing my skills in fullstack development, systems integration, and automation.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
  id: "0",
  name: "IDEON CRM",
  url: "", // replace with actual if available
  description:
    "A comprehensive debt collection and customer relationship management system built for financial institutions. It automates reminders, manages communication across multiple channels (SMS, email, WhatsApp), and integrates payment tracking and reporting to streamline debt recovery workflows.",
  languages: [
    {
      name: "React (Next.js)",
      iconifyClass: "logos-nextjs",
    },
    {
      name: "Redux Toolkit",
      iconifyClass: "logos-redux",
    },
    {
      name: "Django Rest Framework",
      iconifyClass: "vscode-icons:file-type-django",
    },
    {
      name: "PostgreSQL",
      iconifyClass: "logos-postgresql",
    },
  ],
  links: [
    {
      name: "GitHub",
      url: "",
      iconifyClass: "ri:github-fill",
    },
    {
      name: "Live Demo",
      url: "https://ideoncrm.com", // replace with actual domain if deployed
      iconifyClass: "mdi:web",
    },
  ],
},
    {
  id: "1",
  name: "Jumuisha",
  url: "", // replace with actual link if available
  description:
    "A modern church management platform designed to help churches manage members, contributions, events, and communication in one unified system. It streamlines administrative tasks, enhances engagement, and supports automated communication via email and SMS.",
  languages: [
    {
      name: "Django",
      iconifyClass: "vscode-icons:file-type-django",
    },
    {
      name: "Angular",
      iconifyClass: "logos-angular-icon",
    },
    {
      name: "PostgreSQL",
      iconifyClass: "logos-postgresql",
    },
    {
      name: "REST API",
      iconifyClass: "mdi:api",
    },
  ],
  links: [
    {
      name: "GitHub",
      url: "",
      iconifyClass: "ri:github-fill",
    },
    {
      name: "Live Demo",
      url: "",
      iconifyClass: "mdi:web",
    },
  ],
},

    {
  id: "2",
  name: "CITAM Pledge & Redemption Platform",
  url: "", // replace if available
  description:
    "A digital pledge and redemption platform developed for CITAM to support its 2.5B fundraising initiative. The system has enabled over 20,000 members to sign up, make pledges, and redeem contributions through integrated payment gateways including M-Pesa and bank channels. It also features automated SMS and email reminders to enhance engagement and transparency.",
  languages: [
    {
      name: "Django Rest Framework",
      iconifyClass: "vscode-icons:file-type-django",
    },
    {
      name: "Angular",
      iconifyClass: "logos-angular-icon",
    },
    {
      name: "PostgreSQL",
      iconifyClass: "logos-postgresql",
    },
    {
      name: "M-Pesa API",
      iconifyClass: "simple-icons:safaricom",
    },
  ],
  links: [
    {
      name: "GitHub",
      url: "",
      iconifyClass: "ri:github-fill",
    },
    {
      name: "Live Demo",
      url: "", // replace with actual if hosted
      iconifyClass: "mdi:web",
    },
  ],
}
,
{
  id: "4",
  name: "Engie Commissions",
  url: "", // replace with actual link if available
  description:
    "A commission management and service ticketing platform built for Engie to automate weekly commission payments for sales agents. The system streamlines payout calculations, ensures transparency, and enables agents to report customer or product issues in real time. Reported issues are tracked and resolved quickly through an integrated service workflow, improving operational efficiency and agent satisfaction.",
  languages: [
    {
      name: "Django Rest Framework",
      iconifyClass: "vscode-icons:file-type-django",
    },
    {
      name: "React",
      iconifyClass: "logos-react",
    },
    {
      name: "PostgreSQL",
      iconifyClass: "logos-postgresql",
    },
    {
      name: "REST API",
      iconifyClass: "mdi:api",
    },
  ],
  links: [
    {
      name: "GitHub",
      url: "",
      iconifyClass: "ri:github-fill",
    },
  ],
},

  ]
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
