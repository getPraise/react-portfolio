// src/data/data.js
// ... (keep other data above)

export const SKILLS = [
  // --- AI & Machine Learning ---
  {
    name: "Artificial Intelligence",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",
  },
  {
    name: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/scikitlearn.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  // --- Computer Science Fundamentals ---
  {
    name: "DSA in C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  }, // Directly reflects your skill
  {
    name: "Object-Oriented Programming",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/diagramsdotnet.svg",
  }, // Represents structure
  {
    name: "Database Management (SQL)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Computer Networks",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gnometerminal.svg",
  }, // Represents networking/terminals
  {
    name: "Computer Architecture",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/intel.svg",
  }, // Represents processors

  // --- Software Engineering Foundation ---
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];
//PROJECT DETAILS :-
export const PROJECTS = [
  {
    id: 1,
    title: "Complex UI Architecture (Razorpay Inspired)",
    tags: ["Software Architecture", "React", "State Management"],
    shortDescription:
      "An exercise in building a large-scale, component-driven application with complex state.",
    longDescription:
      "This project was an architectural challenge to build a complex, multi-faceted user interface. The focus was on componentization, managing intricate UI state, and ensuring a robust data flow through a large application, skills directly transferable to building front-ends for complex AI systems.",
    images: [
      "/images/p1i1.png",
      "/images/p1i2.png",
      "/images/p1i3.png",
      "/images/p1i4.png",
      "/images/p1i5.png",
      "/images/p1i6.png",
    ],
    features: [
      "Full-width navigation with dropdowns and auth buttons",
      "Multiple hero sections and CTA blocks",
      "Custom-built JavaScript slider with three modes",
      "Enterprise-grade multi-column footer",
      "Separate, functional Login and SignUp pages",
    ],
    techStack: ["React.js", "React Router", "CSS Modules", "JavaScript"],
    liveUrl: "https://clone-web-application-8rsy.vercel.app/",
    sourceUrl: "https://github.com/getPraise/clone-web-application",
  },
  {
    id: 2,
    title: "CRUD Application with Data Persistence",
    tags: ["State Management", "React", "Data Persistence"],
    shortDescription:
      "A full CRUD application demonstrating state management (Redux) and local data persistence.",
    longDescription:
      "A complete Create, Read, Update, and Delete (CRUD) application. The primary goal was to master global state management using Redux Toolkit and to handle data persistence by syncing the application's state with the browser's localStorage, a key skill for any data-driven application.",
    images: ["/images/p2i1.png", "/images/p2i2.png"],
    features: [
      "Full CRUD functionality (Create, Read, Edit, Delete)",
      "Global state managed by Redux Toolkit",
      "Data persists on reload using localStorage",
      "Real-time title search/filter",
      "Shareable links and 'Copy to Clipboard' for pastes",
      "User feedback via react-hot-toast notifications",
    ],
    techStack: [
      "React",
      "Redux Toolkit",
      "React Router",
      "localStorage",
      "react-hot-toast",
    ],
    liveUrl: "https://note-saver-three.vercel.app/",
    sourceUrl: "https://github.com/getPraise/note-saver",
  },
  {
    id: 3,
    title: "Foundational Responsive Design (StudySync Clone)",
    tags: ["Core Skills", "HTML", "CSS"],
    shortDescription:
      "A project focused on mastering the foundational principles of semantic HTML and responsive CSS.",
    longDescription:
      "This project was a deep dive into the core fundamentals of web structure and styling. Built with only HTML and CSS, the focus was on creating a clean, semantic, and fully responsive layout, demonstrating a strong understanding of the foundational principles that underpin all application interfaces.",

    images: ["/images/p3i1.png", "/images/p3i2.png", "/images/p3i3.png"],
    features: [
      "Pixel-perfect replication of the original design",
      "Fully responsive layout for mobile, tablet, and desktop",
      "Clean, semantic HTML5 structure",
      "Modern CSS for styling and layout",
      "No JavaScript used, demonstrating pure CSS skill",
    ],
    techStack: ["HTML5", "CSS3", "Responsive Design"],
    liveUrl: "https://study-sync-clone-two.vercel.app/",
    sourceUrl: "https://github.com/getPraise/studySyncClone",
  },
  // You can add more projects here for testing the filter
];
//MY MARKS:

export const ACADEMIC_DATA = [
  { semester: "Sem 1", gpa: 7.5 },
  { semester: "Sem 2", gpa: 7.2 },
  { semester: "Sem 3", gpa: 8.0 },
  { semester: "Sem 4", gpa: 8.1 },
];

export const CERTIFICATES = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    link: "https://www.credly.com/badges/e426a994-d6da-4106-bc4a-08969bbed7f5",
    credentialId: "e426a994d6da4106bc4a08969bbed7f5",
    imageUrl: "/images/certificate-3.png",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    link: "https://www.credly.com/badges/d9d802a5dca04349b3c98c21877ccd18",
    credentialId: "5fbd109bfa4d4ce5a7b98c8dca31aab9",
    imageUrl: "/images/certificate-2.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    link: "https://www.credly.com/badges/1456db70-1f17-4653-a9eb-00964326ffd0",
    credentialId: "0d68ae16436d4edaa088eec51c43d961",
    imageUrl: "/images/certificate-1.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8A71CA9C999E274F429D6609C754DA1D17DAA798C18A4876FB74D1C015AFECB2",
    credentialId: "323366586OCI25AICFA",
    imageUrl: "/images/certificate-4.png",
  },
];

//CODING PROFILE :

export const CODING_PROFILES = {
  leetcode: {
    link: "https://leetcode.com/u/priyanshuSingh44/",
    stats: [
      { level: "Easy", count: 37, color: "#4ade80" }, // Green
      { level: "Medium", count: 55, color: "#facc15" }, // Yellow
      { level: "Hard", count: 9, color: "#f87171" }, // Red
    ],
  },
  gfg: {
    link: "https://www.geeksforgeeks.org/user/priyanshumdu/",
    stats: [
      { level: "Basic", count: 10, color: "#60a5fa" }, // Blue
      { level: "Easy", count: 29, color: "#4ade80" }, // Green
      { level: "Medium", count: 47, color: "#facc15" }, // Yellow
      { level: "Hard", count: 9, color: "#f87171" }, // Red
    ],
  },
};

//BLOG :

export const BLOG_POSTS = [
  // --- POST 1 (August) ---
  {
    id: 1,
    title: "📌 AUGUST 2025 — Monthly Tech Progress Recap",
    date: "August 31, 2025",
    content: [
      {
        type: "paragraph",
        value:
          "Sharing my monthly update to stay consistent and reflect on the journey. August was a month of significant change and learning, just not in the ways I expected. With the start of my 6th semester, this month was a true balancing act. Here’s how it went ⬇️",
      },
      { type: "heading", value: "🧠 The Daily Non-Negotiable: DSA Practice" },
      {
        type: "paragraph",
        value:
          "This month, I treated my daily DSA practice as the one non-negotiable in my routine. The real challenge wasn't a lack of time, but the mental discipline to stay consistent day in and day out. Crossing the 50 active days milestone is a testament to that persistence.",
      },
      { type: "heading", value: "💬 Reflection: Debugging the Routine" },
      {
        type: "paragraph",
        value:
          "This month was a powerful lesson in self-awareness. Juggling new coursework, personal time, and coding goals meant I had to honestly assess where my free time was going. While I didn't build a new project, the real progress was internal: making the conscious decision to re-prioritize my goals and build better habits.",
      },
      {
        type: "paragraph",
        value:
          "Every month teaches you something. August taught me that consistency is a choice you make long before you open your laptop. 🚀",
      },
      {
        type: "image-gallery",
        value: [
          "/images/post/p1i1.jpeg",
          "/images/post/p1i2.jpeg",
          "/images/post/p1i3.jpeg",
        ],
      },
    ],
  },

  // --- POST 2 (July) - NOW WITH STRUCTURE ---
  {
    id: 2,
    title: "📌 JULY 2025 — Monthly Tech Progress Recap",
    date: "July 31, 2025",
    content: [
      {
        type: "paragraph",
        value:
          "As July wraps up, I’m starting a small habit: sharing what I worked on each month — to stay consistent, reflect, and hopefully connect with others on a similar path. Here’s how July went ⬇️",
      },
      { type: "heading", value: "🧠 DSA Practice" },
      {
        type: "list",
        value: [
          "Platforms: GeeksforGeeks & LeetCode",
          "Maintained a daily problem-solving streak throughout the month.",
        ],
      },
      { type: "heading", value: "🎓 Certifications Earned" },
      {
        type: "paragraph",
        value:
          "📜 Python for Data Science (IBM)\nCompleted an IBM-certified course covering core Python, data structures, NumPy, and Pandas — all within a data science context.\n🛠 Tools: Python, NumPy, Pandas",
      },
      {
        type: "paragraph",
        value:
          "📜 Machine Learning with Python (IBM)\nCompleted an IBM course covering key ML concepts with hands-on labs and mini-projects.\n🛠 Tools: Python, scikit-learn, Pandas, Matplotlib",
      },
      { type: "heading", value: "🧪 Project: PasteBin Clone" },
      {
        type: "list",
        value: [
          "Create, update, delete, and share notes",
          "Toaster notifications for user feedback",
          "Persistent data storage using browser’s local storage",
        ],
      },
      {
        type: "image-gallery",
        value: [
          "/images/post/p2i1.jpeg",
          "/images/post/p2i2.jpeg",
          "/images/post/p2i3.jpeg",
          "/images/post/p2i4.jpeg",
          "/images/post/p2i5.jpeg",
          "/images/post/p2i6.jpeg",
        ],
      },
    ],
  },

  // --- Posts 3 and 4 WITH STRUCTURE ---
  {
    id: 3,
    title: "✅ Razorpay-Inspired Project",
    date: "June 5, 2025",
    content: [
      {
        type: "heading",
        value: "🚀 Project Showcase: Razorpay-Inspired Fintech Web UI",
      },
      {
        type: "paragraph",
        value:
          "I'm excited to share my latest project — a fully responsive UI built using React.js with no backend integration!",
      },
      {
        type: "list",
        value: [
          "Inspired by real-world fintech UI",
          "Fully responsive design (mobile + desktop)",
          "Includes login & signup forms with email validation",
          "Custom slider built using vanilla JS (no libraries!)",
        ],
      },
      { type: "heading", value: "🛠 Tech Stack" },
      {
        type: "list",
        value: [
          "React.js",
          "CSS Modules",
          "React Router",
          "Vanilla JavaScript",
        ],
      },
      { type: "video", value: "/videos/razorpay-demo.mp4" },
    ],
  },
  {
    id: 4,
    title: "🚀 Project Showcase: StudySync Website Clone",
    date: "May 12, 2025",
    content: [
      {
        type: "paragraph",
        value:
          "I'm excited to share a fully responsive clone of the StudySync website, built using only HTML and CSS — no JavaScript!",
      },
      {
        type: "list",
        value: [
          "Clean semantic structure",
          "Mobile-first responsive design",
          "Inspired by Love Babbar's web dev playlist",
          "Learned a lot about layout, flexbox, and media queries",
        ],
      },
      { type: "heading", value: "🔧 Tech Stack" },
      { type: "list", value: ["HTML5", "CSS3 (Flexbox, Grid, Media Queries)"] },
      { type: "video", value: "/videos/studysync-demo.mp4" },
    ],
  },
];
