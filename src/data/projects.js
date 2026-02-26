import lostFoundLogo from '../assets/lostandfound.png';
import flyEaseLogo from '../assets/FlyEaseLogo.png';

import lostFound1 from '../assets/Lost&Found1.png';
import archade from '../assets/archade.png';
import archade1 from '../assets/archade1.png';
import archade2 from '../assets/archade2.png';

import flyEase1 from '../assets/FlyEase1.png';
import flyEase2 from '../assets/FlyEase2.png';
import flyEase3 from '../assets/FlyEase3.png';
import flyEase4 from '../assets/FlyEase4.png';
import flyEase5 from '../assets/FlyEase5.png';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.jpg';
import jsIcon from '../assets/javascript.png';
import nodeIcon from '../assets/node.png';
import sqlIcon from '../assets/sql.png';
import pythonIcon from '../assets/python.png';
import fastApiIcon from '../assets/FastAPI.png';
import reactIcon from '../assets/react.png';
import cIcon from '../assets/c.png';

import vlangLogo from '../assets/c.png';
import vlang1 from '../assets/vlang1.png';
import neuralImg from '../assets/neural.jpg';


import pedometer1 from '../assets/pedometer.jpg';
import netflixClone1 from '../assets/netflix-clone_1.jpg';
import netflixClone2 from '../assets/netflix-clone_2.jpg';

import wildRydes1 from '../assets/wilde-rydes.png';
import awsIcon from '../assets/aws.png';
import portfolioArch from '../assets/portfolio-architecture.png';
import esp32Img from '../assets/esp32.jpg';
import assemblyImg from '../assets/assembly.jpg';
import pipelineImg from '../assets/pipeline.jpg';

export const projects = [
  // Newest projects first
  {
    id: 1,
    name: "Portfolio Cloud Architecture",
    logo: awsIcon,
    type: "Serverless Cloud Infrastructure",
    category: "cloud",
    images: [portfolioArch],
    duration: "December 2024",
    technologies: [
      { name: "AWS", icon: awsIcon, level: 5, isImage: true },
      { name: "React", icon: reactIcon, level: 5, isImage: true },
      { name: "Python", icon: pythonIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true }
    ],
    features: [
      "Built a fully serverless portfolio website using AWS Amplify with integrated CI/CD from GitHub.",
      "Configured Route 53 for DNS management of custom domain (MohamedHanif.com).",
      "Implemented contact form backend with API Gateway REST endpoint, Lambda function, and Amazon SES.",
      "Applied defense-in-depth security: rate limiting (3 req/15 min), input validation, spam keyword filtering.",
      "Followed AWS IAM least-privilege principle - Lambda has minimal permissions (SES:SendEmail only).",
      "Configured CloudWatch monitoring for Lambda execution and error logging.",
      "Achieved zero-server architecture with automatic scaling and built-in high availability.",
      "Enforced HTTPS encryption with TLS 1.2+ via CloudFront CDN (managed by Amplify)."
    ],
    githubLink: "https://github.com/MohamedHanifProg/my-portfolio",
    liveLink: "https://MohamedHanif.com"
  },
  {
    id: 12,
    name: "Full-Stack Data Pipeline Course",
    logo: fastApiIcon,
    type: "Data Pipeline / Microservices",
    category: "fullstack",
    images: [pipelineImg],
    duration: "2025",
    technologies: [
      { name: "Python", icon: pythonIcon, level: 5, isImage: true },
      { name: "FastAPI", icon: fastApiIcon, level: 4, isImage: true },
      { name: "Docker", icon: awsIcon, level: 4, isImage: true }
    ],
    features: [
      "End-to-end pipeline: web scraping → cleaning → storage → APIs → chatbot.",
      "Uses Docker Compose to orchestrate microservices and dependencies.",
      "Exposes data via FastAPI services with Swagger docs.",
      "Final project: Shopping List Assistant Bot with cheapest basket search and substitutes.",
      "Integrates AI (RAG + natural language) for enriched queries over data.",
      "Repo layout: examples/, assignments/ (with warm-up/), Installations.md."
    ],
    githubLink: "https://github.com/MohamedHanifProg/data-pipeline-2025/tree/final-project-edit2",
    liveLink: null
  },
  {
    id: 10,
    name: "WiFiCard Config on ESP (RFID Demo)",
    logo: cIcon,
    type: "Embedded / RFID",
    category: "systems",
    images: [esp32Img],
    duration: "2025",
    technologies: [
      { name: "C/C++", icon: cIcon, level: 5, isImage: true }
    ],
    features: [
      "Stores and updates device configuration on a MIFARE Classic card via MFRC522.",
      "On scan: reads config blocks, creates default if missing (prefix CFG:).",
      "Decrements JSON field 'counter' with wraparound 99→00 and writes back.",
      "Payload stored as null-terminated C string across 16-byte blocks (≤128B).",
      "Targets ESP32/ESP8266/Arduino using SPI with MFRC522 library."
    ],
    githubLink: "https://github.com/MohamedHanifProg/WiFiCard-Config-on-esp/tree/main",
    liveLink: null
  },
  {
    id: 11,
    name: "Assembly: Student Grades Graph Overview",
    logo: cIcon,
    type: "Assembly / Visualization",
    category: "systems",
    images: [assemblyImg],
    duration: "2025",
    technologies: [
      { name: "Mano Assembly", icon: cIcon, level: 4, isImage: true },
      { name: "C/High-Level", icon: cIcon, level: 3, isImage: true }
    ],
    features: [
      "Accepts student names with corresponding grades as input.",
      "Generates a visual graph to compare student grades.",
      "Translates high-level logic into Mano Assembly for low-level control.",
      "Organized into high_level_code/, assembly_code/, and docs/ for traceability."
    ],
    githubLink: "https://github.com/MohamedHanifProg/asemble-project",
    liveLink: null
  },
  {
    id: 3,
    name: "VLANG Compiler",
    logo: vlangLogo,
    type: "Systems Programming",
    category: "systems",
    images: [vlang1],
    duration: "April 2025",
    technologies: [
      { name: "C", icon: cIcon, level: 5, isImage: true },
      { name: "Yacc/Bison", icon: cIcon, level: 4, isImage: true },
      { name: "Flex", icon: cIcon, level: 4, isImage: true }
    ],
    features: [
      "Designed and implemented a custom programming language compiler from scratch.",
      "Built a lexical analyzer using Flex to tokenize VLANG source code into meaningful tokens.",
      "Developed a parser using Bison with grammar rules for variable declarations, loops, conditionals, and print statements.",
      "Implemented native vector operations including element-wise arithmetic, scalar broadcasting, and dot product calculations.",
      "Created a symbol table for variable tracking and type checking (scalars vs vectors).",
      "Generates optimized C code as output, enabling compilation to native executables.",
      "Supports vector indexing with both integer literals and vector-based index arrays."
    ],
    githubLink: "https://github.com/MohamedHanifProg/Vlang_Compiler",
    liveLink: null
  },
  {
    id: 2,
    name: "From Theory to Practice: Knowledge Distillation",
    logo: pythonIcon,
    type: "Neural Networks Project",
    category: "ml",
    images: [neuralImg],
    duration: "2025",
    technologies: [
      { name: "Python", icon: pythonIcon, level: 5, isImage: true }
    ],
    features: [
      "Implemented Knowledge Distillation: GPT-2 Medium (teacher) → DistilGPT-2 (student).",
      "Loss: cross-entropy + KL divergence with temperature scheduling (τ: 3 → 2, α: 0.7 → 0.5).",
      "Data: 10k WikiText-103 samples, 90/10 train/val split.",
      "Frameworks: PyTorch + HuggingFace Transformers for training and evaluation.",
      "Compression: ~354M → ~82M parameters (~4.3× smaller); faster and lighter deployment.",
      "Performance: validation perplexity improved from 42.38 (teacher baseline) to 37.12 (student) by epoch ~10."
    ],
    githubLink: "https://github.com/MohamedHanifProg/Neural-Network_Final_Project",
    liveLink: null
  },
  {
    id: 4,
    name: "FlyEase",
    logo: flyEaseLogo,
    type: "Airport Navigation Application",
    category: "fullstack",
    images: [flyEase1, flyEase2, flyEase3, flyEase4, flyEase5],
    duration: "Present",
    technologies: [
      { name: "Python", icon: pythonIcon, level: 5, isImage: true },
      { name: "FastAPI", icon: fastApiIcon, level: 4, isImage: true },
      { name: "React", icon: reactIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "SQL", icon: sqlIcon, level: 4, isImage: true }
    ],
    features: [
      "Designed and implemented a mock airport navigation system with features for location-based navigation and congestion visualization.",
      "Developed a backend API using FastAPI with endpoints for managing locations, paths, and dynamic navigation.",
      "Utilized Dijkstra's algorithm to compute the shortest path between airport locations based on real-time user input.",
      "Created a fully interactive front-end map using React and Fabric.js, supporting dynamic visualization of paths, congestion levels, and highlighted navigation routes.",
      "Designed a responsive UI with CSS for seamless user interaction across various devices.",
      "Implemented an admin panel for managing map entities such as locations and paths.",
      "Integrated asynchronous database operations with SQLAlchemy to handle real-time data updates efficiently.",
      "Deployed a congestion monitoring system to display real-time congestion levels using visual indicators on the map.",
      "Established a modular structure for scalability and maintainability, incorporating reusable components and controllers."
    ],
    githubLink: "https://github.com/amirkhalifa285/FlyEase-Backend",
    liveLink: null
  },
  {
    id: 5,
    name: "WildRydes",
    logo: awsIcon,
    type: "Serverless Web Application",
    category: "cloud",
    images: [wildRydes1],
    duration: "July 2024",
    technologies: [
      { name: "Vue.js", icon: jsIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "Python", icon: pythonIcon, level: 4, isImage: true },
      { name: "AWS", icon: awsIcon, level: 4, isImage: true },
      { name: "CSS", icon: cssIcon, level: 4, isImage: true }
    ],
    features: [
      "Built a serverless web application using AWS Amplify CLI and Vue.js frontend.",
      "Implemented user authentication and authorization with Amazon Cognito.",
      "Developed serverless backend with AWS Lambda functions in Python.",
      "Created RESTful API endpoints using Amazon API Gateway.",
      "Utilized Amazon DynamoDB for NoSQL database storage.",
      "Deployed static assets to Amazon S3 for scalable hosting.",
      "Implemented full CI/CD pipeline with AWS Amplify for automatic deployments."
    ],
    githubLink: "https://github.com/MohamedHanifProg/while-rydes",
    liveLink: null
  },
  {
    id: 6,
    name: "Netflix Clone",
    logo: reactIcon,
    type: "Full Stack Web Application",
    category: "fullstack",
    images: [netflixClone1, netflixClone2],
    duration: "Summer 2024",
    technologies: [
      { name: "React", icon: reactIcon, level: 5, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "Node.js", icon: nodeIcon, level: 4, isImage: true }
    ],
    features: [
      "Built a full-stack Netflix clone with React frontend and Node.js backend.",
      "Implemented user authentication and session management.",
      "Created a responsive UI replicating the Netflix interface with smooth animations.",
      "Integrated dynamic content loading and media streaming capabilities.",
      "Developed RESTful API backend for content management and user data."
    ],
    githubLink: "https://github.com/MohamedHanifProg/NetflixFront-End",
    githubLinkBackend: "https://github.com/MohamedHanifProg/NetlfixBack-End",
    liveLink: null
  },
  {
    id: 7,
    name: "Pedometer",
    logo: cIcon,
    type: "Embedded Systems",
    category: "systems",
    images: [pedometer1],
    duration: "June 2024",
    technologies: [
      { name: "C", icon: cIcon, level: 5, isImage: true }
    ],
    features: [
      "Built a fully functional pedometer using the MicroChip Curiosity Nano development board.",
      "Implemented step detection algorithm using accelerometer data with threshold-based filtering.",
      "Developed custom I2C driver for communication with the onboard accelerometer sensor.",
      "Created SPI driver to interface with the OLED display for real-time step visualization.",
      "Designed an interactive menu system with clock display, date/time settings, and pedometer graph.",
      "Implemented step history tracking with smoothed graph visualization on OLED display.",
      "Added animated foot icons and real-time step counter with activity detection."
    ],
    githubLink: "https://github.com/MohamedHanifProg/pedometer_project",
    liveLink: null
  },
  {
    id: 8,
    name: "Lost and Found",
    logo: lostFoundLogo,
    type: "Web Application",
    category: "fullstack",
    images: [lostFound1],
    duration: "May 2024 - Aug 2024",
    technologies: [
      { name: "HTML", icon: htmlIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 4, isImage: true },
      { name: "Node.js", icon: nodeIcon, level: 4, isImage: true },
      { name: "SQL", icon: sqlIcon, level: 3, isImage: true }
    ],
    features: [
      "Implemented responsive design and user-friendly interface.",
      "Ensured secure handling of user data and efficient database management.",
      "Successfully deployed on Render for live use.",
      "Received positive feedback for functionality and ease of use."
    ],
    githubLink: "https://github.com/MohamedHnef/Lost-And-Found-Project/tree/master",
    liveLink: null
  },
  {
    id: 9,
    name: "Code Arcade: The Glitch",
    logo: archade,
    type: "AI-Assisted Game Development",
    category: "fullstack",
    images: [archade1, archade2],
    duration: "2025",
    technologies: [
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "HTML5 Canvas", icon: htmlIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 4, isImage: true },
      { name: "GitHub Copilot", icon: jsIcon, level: 5, isImage: true },
      { name: "MCP (Model Context Protocol)", icon: jsIcon, level: 4, isImage: true }
    ],
    features: [
      "Built a fully playable retro arcade game using GitHub Copilot Agent Mode with zero manual coding.",
      "Demonstrated AI autonomy by allowing the agent to plan, generate, debug, and complete the entire project independently.",
      "Injected a custom AI persona ('The Glitch') to alter Copilot’s behavior, coding style, and response tone.",
      "Implemented neon-themed UI and chaotic in-code commentary through persistent persona instructions.",
      "Extended AI capabilities using MCP tooling to access external files and modify game logic dynamically.",
      "Added a hidden cheat-code system powered by an external vault file, enabling invincibility mode at runtime."
    ],
    githubLink: "https://github.com/MohamedHanifProg/copilot-assignment",
    liveLink: null
  }
];
