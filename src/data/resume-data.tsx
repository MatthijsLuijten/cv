import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Matthijs Luijten",
  initials: "ML",
  location: "Nijmegen, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Nijmegen",
  role: "Deep Learning Engineer | Medical Imaging | Computer Vision",
  about:
    "",
  summary:
    "With over one year of dedicated experience in deep learning, specifically focused on computer vision and medical imaging, I am passionate about leveraging AI to bring a positive change in the world. My interest and expertise lies in developing innovative solutions that bridge the gap between cutting-edge technology and real-world applications. I thrive in collaborative environments, where my strong teamwork and communication skills contribute to the collective success of projects. Eager to contribute my skills and knowledge to make a meaningful difference in the world through the power of AI.",
  avatarUrl: "https://avatars.githubusercontent.com/u/45688977?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "matthijs.luijten@hotmail.com",
    tel: "+31642768423",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/BartoszJarocki",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthijsluijten/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Radboud University",
      degree: "MSc in Artificial Intelligence",
      description: [
        "MSc thesis: On the automatic detection of progression of white matter hyperintensities (WMH) in Cerebral Small Vessel Disease (CSVD).",
        "MSc internship: Improvement of unsupervised VQ-VAE model for anomaly detection.",
      ],
      start: "2020",
      end: "2023",
    },
    {
      school: "Radboud University",
      degree: "BSc in Artificial Intelligence",
      description: "BSc thesis: Does speech-based interaction improve the user experience of chatbots?",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Thirona",
      link: "https://thirona.eu",
      badges: ["Medical Imaging", "CT", "UNets", "CNNs", "Tensorflow", "Git", "Docker"],
      title: "Deep Learning Engineer",
      // logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "During my time at Thirona, I primarily focused on the R&D of 3D segmentation algorithms for chest CT scans. My main contribution is improving the airway segmentation model, pushing it to detect even the trickiest airways on tougher CT scans. I effectively modified the algorithm to function on both cone-beam CT scans and traditional fan-beam CT scans. Both projects involved crafting specialized pipelines for training models and establishing evaluation frameworks for comparison with alternative methods. Besides that, I was involved in customer projects; developing biomarker reports that shed light on different lung characteristics.",
    },
    {
      company: "Radboud UMC - Department of Medical Imaging and Computational pathology (DIAG)",
      link: "https://www.computationalpathologygroup.eu/",
      badges: ["Medical Imaging", "MRI", , "UNets", "CNNs", "Tensorflow"],
      title: "Deep Learning Intern (thesis)",
      // logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Created a pipeline to automatically segment white matter hyperintensities (WMH) in cerebral small vessel disease using brain MRI scans. The goal was to create a segmentation pipeline that can accurately identify and classify WMH and the transition zones between NAWM and WMH, in order to gain a better understanding of the underlying mechanisms behind WMH and their progression. By combining high-field MRI and IHC stainings, I studied the relationship between radiological and pathological changes in the brain, and identified potential therapeutic targets for reducing the impact of WMH on brain function.",
      links: [
        { url: "https://github.com/MatthijsLuijten/WMH_tool", text: "GitHub" },
        { url: "https://www.ai-for-health.nl/projects/wml_ex_vivo_brain_mri/", text: "Project Page" }
      ]
    },
    {
      company: "Rabobank",
      link: "https://www.rabobank.nl/",
      badges: ["Computer Vision", "VQ-VAE", "CNNs", "Tensorflow"],
      title: "AIOps intern (internship)",
      // logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
        "Improved an unsupervised VQ-VAE model for anomaly detection. Examined various parts of the model to determine where and how it can be enhanced. Various experiments such as two paper implementations.",
    },
  ],
  skills: ["Python", "Tensorflow", "ITK", "Keras", "Linux"],
  skills_good_knowledge: ["GIT", "Docker"],
  skills_basic_knowledge: ["Java", "Jenkins", "R", "C++"],
  // projects: [
  //   {
  //     title: "Consultly",
  //     techStack: [
  //       "Side Project",
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //       "WebRTC",
  //     ],
  //     description: "A platform to build and grow your online business",
  //     logo: ConsultlyLogo,
  //     link: {
  //       label: "consultly.com",
  //       href: "https://consultly.com/",
  //     },
  //   },
  //   {
  //     title: "Monito",
  //     techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
  //     description:
  //       "Browser extension that records everything happening in a web application",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  //   {
  //     title: "Jarocki.me",
  //     techStack: ["Side Project", "Next.js", "MDX"],
  //     description:
  //       "My personal website and blog. Built with Next.js and Notion API",
  //     logo: JarockiMeLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://jarocki.me/",
  //     },
  //   },
  //   {
  //     title: "Minimal",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Minimalist calendars, habit trackers and planners generator",
  //     logo: Minimal,
  //     link: {
  //       label: "useminimal.com",
  //       href: "https://useminimal.com/",
  //     },
  //   },
  //   {
  //     title: "Barepapers",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Generates beautiful wallpapers using random shapes and gradients",
  //     logo: BarepapersLogo,
  //     link: {
  //       label: "barepapers.com",
  //       href: "https://barepapers.com/",
  //     },
  //   },
  //   {
  //     title: "Year progress",
  //     techStack: ["Side Project", "TypeScript", "Next.js"],
  //     description: "Tracks current year progress and displays a countdown",
  //     logo: YearProgressLogo,
  //     link: {
  //       label: "getyearprogress.com",
  //       href: "https://getyearprogress.com/",
  //     },
  //   },
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  //   {
  //     title: "Evercast",
  //     techStack: [
  //       "Lead Frontend Developer",

  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Creative collaboration platform that combines video conferencing and HD media streaming",
  //     logo: EvercastLogo,
  //     link: {
  //       label: "evercast.us",
  //       href: "https://www.evercast.us/",
  //     },
  //   },
  //   {
  //     title: "Mobile Vikings",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for leading virtual mobile operator in Poland",
  //     logo: MobileVikingsLogo,
  //     link: {
  //       label: "mobilevikings.pl",
  //       href: "https://mobilevikings.pl/",
  //     },
  //   },
  //   {
  //     title: "Howdy",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Howdy is a place for you to join communities you care about",
  //     logo: Howdy,
  //     link: {
  //       label: "play.google.com",
  //       href: "https://howdy.co/",
  //     },
  //   },
  //   {
  //     title: "Tastycloud",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //     logo: TastyCloudLogo,
  //     link: {
  //       label: "tastycloud.fr",
  //       href: "https://www.tastycloud.fr/",
  //     },
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     logo: AmbitLogo,
  //   },
  //   {
  //     title: "Bim",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with booking a table in a restaurants",
  //     logo: BimLogo,
  //   },
  //   {
  //     title: "Canal Digital GO",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Video streaming mobile application for Canal Digital subscribers",
  //     logo: CDGOLogo,
  //   },
  // ],
} as const;
