import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Neelansh Sahai",
  location: "Bengaluru, India",

  about:
    "A Senior Software Engineer with 6 years of experience, including 3+ years at Google, where I've helped shape core Android features like Passkeys, Picture-in-Picture, and Per-App Language Preferences. My expertise lies in Kotlin, Jetpack Compose, MVVM, and scalable architecture, with a strong focus on building clean, performant, and maintainable applications. I've led teams, modernized legacy codebases, and delivered end-to-end solutions in remote-first environments. I'm also inclined towards the field of Frontend Development using Next, React and TypeScript.",
  summary:
    "As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a Master Digital IT Architect degree. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!",
  avatarUrl: "./NeelanshProfilePic.jpg",

  contact: {
    email: "96shubh@gmail.com",
    tel: "+91 8318741607",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/neelanshsahai",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/neelanshsahai/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/NeelanshSahai",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Information Technology, Vadodara",
      degree: "Bachelor's of Technology",
      description: "Computer Science and Engineering",
      start: "2015",
      end: "2019",
    },
    {
      school: "1337 - (42 network)",
      degree: "Master's Degree in IT Architecture.",
      description: "Part of the prestigious 42 Network, known for its project-based, peer-to-peer learning methodology.",
      start: "2022",
      end: "present",
    },
  ],
  skills: [
    "C",
    "C++",
    "Html",
    "Tailwind Css",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js/Next.js",
    "Docker",
    "Git",
    "Jira",
    "Agile/Scrum",
  ],

  projects: [
    {
      title: "Pongy",
      techStack: ["Next.js", "React", "TypeScript"],
      description:
        "Pong contest website with real-time multiplayer games, chat, and security",
      link: {
        label: "github.com/ysahih",
        href: "https://github.com/ysahih/PingPong",
      },
    },
    {
      title: "Wordle-Game clone",
      techStack: ["Html", "Css", "JavaScript"],
      description: "a simple clone of the famous wordle game",

      link: {
        label: "github.com",
        href: "https://github.com/ysahih/blog",
      },
    },
    {
      title: "Inception",
      techStack: ["Docker", "Nginx", "mariaDb", "Wordpress"],
      description:
        "Created a Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB for a web application.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/inception",
      },
    },
    {
      title: "IRC",
      techStack: ["C++", "Socket Programming"],
      description:
        "Internet Relay Chat server (Communication protocol on the Internet)",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/IRC",
      },
    },
    {
      title: "cub3D",
      techStack: ["C", "Graphics"],
      description:
        "My first RayCaster with miniLibX. This project is inspired by the world-famous Wolfenstein 3D game.",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/cub3D",
      },
    },
    {
      title: "sash",
      techStack: ["C", "Software Design and Architecture"],
      description: "simple implementation of Unix Shell with C",
      link: {
        label: "github.com",
        href: "https://github.com/ysahih/Sash",
      },
    },
  ],

  experience: [
    {
      company: "Google",
      position: "Senior Software Engineer (Android)",
      logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
      location: "Bengaluru, India",
      startDate: "Oct 2021",
      endDate: "Present",
      description:
        "Working on developer facing android sample projects such as NowInAndroid, Socialite, PlatformSamples as well as a few Android OS features, focusing on building modular apps, using best state of the art tools and technologies and following the M.A.D. (Modern Android Development) best practices for architecture and UI. Majorly worked on Jetpack Compose, Coroutines, Flows, and Dagger-Hilt, etc.",
      skills: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Dagger-Hilt",
        "Coroutines",
        "Flows",
        "Navigation Compose",
        "RoomDB",
        "CameraX",
        "Media3",
        "Clean Archtiecture",
      ],
      achievements: [
        "Contributed towards some important Android OS level features consecutively for 4 dessert releases, like Per-App Language Preferences (based on Localization and Internationalization) in Android 13, Picture-In-Picture (Based on System UI) updates in Android 14, and Restore Credentials (Based on Passkeys and Identity) in Android 15 and 16.",
        "Worked on samples like NowInAndroid, Socialite, Platform Samples, WearOS Samples, and Health Samples to implement the latest Android features and refactor legacy code to follow the latest best practices.",
        "Mentored junior developers, and helped them complete their tasks by helping them define clear set of goals and Code Reviews. Helped them with their onboarding process and provided them with the necessary resources to get started.",
      ],
    },
    {
      company: "Grab",
      position: "Software Engineer (Android) ",
      logo: 'https://cdnlogo.com/logos/g/49/grab.svg',
      location: "Bengaluru, India",
      startDate: "May 2021",
      endDate: "Oct 2021",
      description:
        "Grab being a tech giant in the South-East Asia region, had more than 100 million unique users. This scale of userbase came along with the neccessity of having a TDD (Test Driven Development). While at Grab, I worked on GrabTaxi's finance module, which was responsible to manage all of the payments on the app. Tech Stacjk used was Kotlin, RxJava, Coroutines, LiveData, Views, ViewBinding, DataBinding, Mockito, JUnit, Dagger-2, Firebase, Unit Testing, etc.",
      skills: [
        "Kotlin",
        "RxJava",
        "Coroutines",
        "LiveData",
        "Views",
        "ViewBinding",
        "DataBinding",
        "Mockito",
        "JUnit",
        "Dagger-2",
        "Firebase",
        "Unit Testing",
        "CI/CD",
      ],
      achievements: [
        "Contributed towards the payments flow of the GrabTaxi app. Worked on implementing new features, bug fixes and developing new screens for the app using the given Figma files.",
        "Wrote unit tests for the existing codebase as well as the new implementations, to ensure the quality and reliability of the app.",
      ],
    },
    {
      company: "Shipsy",
      position: "Software Engineer (Android)",
      logo: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_ae30557216c856b0f9d54afa554175a5/shipsy-shipsy.png',
      location: "Gurugram, India",
      startDate: "Aug 2019",
      endDate: "May 2021",
      description:
        "Shipsy is a SaaS based company, which was responsible for providing the Logistics and Supply Chain Management solutions to their clients. Worked on a 4 android apps, majorly focussed on Java, Kotlin, Views, and MVVM architecture.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [ 
        "Contributed towards the development of 2 android app. Migrated the existing codebase from Java to Kotlin nad AndroidX, and refactored the code to follow the MVVM architecture.",
        "Worked on implementing new features, fixing bugs and creating new screens for new functionalities/modules.",
        "Built two new apps from scratch, architectured data flow and UI flow for these two apps, built the app using MVVM architecture, and  "
      ],
    },
    {
      company: "Siemens",
      position: "Software Engineering Intern (Android)",
      logo: 'https://www.mulesoft.com/sites/default/files/2018-10/siemens_logo.png',
      location: "Bengaluru, India",
      startDate: "Jan 2019",
      endDate: "Jun 2019",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
      ],
    },
    {
      company: "Digital Impact Square",
      position: "Software Engineering Intern (Android)",
      logo: 'https://dextroware.b-cdn.net/wp-content/uploads/2021/09/didq-logo@2x.png',
      location: "Nashik, India",
      startDate: "May 2018",
      endDate: "Jul 2018",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
      ],
    },
  ],
  remoteExperience: [
    {
      company: "Geeks for Geeks",
      position: "Course Instructor",
      logo: 'https://geeksforgeeks.zohorecruit.in/recruit/viewCareerImage.do?page_id=61093000000211152&type=logo&file_name=GG_Logo.png',
      location: "Remote",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
      ],
    },
    {
      company: "Udacity",
      position: "Student Mentor and Project Reviewer",
      logo: 'https://www.doit.com/wp-content/uploads/2021/01/udacity-logo.png',
      location: "Remote",
      startDate: "Apr 2022",
      endDate: "Feb 2024",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
      ],
    },
  {
      company: "Nutrak",
      position: "Android Developer (Freelance Project)",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Eo_circle_teal_white_letter-n.svg/1024px-Eo_circle_teal_white_letter-n.svg.png',
      location: "Remote",
      startDate: "Feb 2025",
      endDate: "Feb 2025",
      description:
        "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Jira",
        "Agile",
        "Git",
        "CI/CD",
        "REST APIs",
      ],
      achievements: [
        "Collaborated with cross-functional teams to deliver projects on time",
        "Contributed to the development of a secure authentication system",
        "Conducted code reviews and provided constructive feedback to peers",
      ],
    },
  ],
} as const;
