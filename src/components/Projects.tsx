import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "StoragePod",
      description:
        "A self-hosted personal cloud storage system built to replace third-party cloud drives with full data ownership and remote accessibility. It combines FastAPI backend services with a React Native app for seamless mobile access, powered by a Raspberry Pi running OpenMediaVault.",
      tags: [
        "React Native",
        "FastAPI",
        "OpenMediaVault",
        "Raspberry Pi",
        "SQLite",
        "Supabase",
        "Cloudflare Tunnel",
        "Expo",
      ],
      highlights: [
        "Deployed OpenMediaVault on Raspberry Pi as the local NAS layer for handling physical storage and SMB mounts.",
        "Developed a FastAPI-based backend that exposes secure APIs for file management, metadata indexing, and streaming via a custom headless integration with Jellyfin.",
        "Used Supabase for authentication and user management, enabling OAuth and multi-device login.",
        "Configured Cloudflare Tunnels to securely expose the private backend to the internet without port forwarding or static IPs.",
        "Implemented React Native mobile app using Expo, Zustand for state management, and expo-image/expo-av for media playback.",
        "Designed features like multi-select, file sorting/filtering, local caching, and an error/crash reporting mechanism.",
        "Planned future additions include end-to-end encryption, multi-user access control, and background sync for offline-first usability.",
      ],
      impact:
        "StoragePod empowers users to host their own personal cloud storage and access it from anywhere securely — combining the simplicity of Google Drive with the privacy of self-hosted infrastructure.",
      category: "Mobile",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "EcoTravels",
      description:
        "A modern web application for a travel agency that enables users to search, compare, and book flights through a responsive and interactive interface. Designed with a strong focus on user experience, performance, and clean component-driven architecture.",
      highlights: [
        "Built an end-to-end booking flow using ReactJS with TanStack Router for declarative routing and state synchronization across routes.",
        "Developed reusable UI components using ShadCN and Tailwind CSS, achieving a consistent and elegant design system with dark mode support.",
        "Implemented dynamic flight search forms, fare filtering, and booking confirmation pages with smooth transitions and real-time feedback.",
        "Optimized render performance with React Suspense and lazy loading for heavy components like search results and modals.",
        "Structured the app for scalability — separate modules for flight listings, user authentication, and admin-side content management (planned).",
        "Integrated mock APIs for flight data during development with clear separation for future backend (FastAPI or third-party APIs).",
      ],
      impact:
        "EcoTravels provides a modern, app-like flight booking experience for travel agencies looking to digitize their operations — balancing aesthetics, performance, and maintainability.",
      tags: ["ReactJS", "ShadCN UI", "Tailwind CSS", "TanStack Router", "TypeScript"],
      category: "Web App",
      gradient: "from-sky-500/20 to-indigo-500/20",
    },
    {
      title: "Sun Homeopathy – Patient & Admin System",
      description:
        "A complete appointment management ecosystem built for a homeopathy clinic, consisting of a React Native mobile app for patients and a React web dashboard for clinic administrators. Both clients share a common Supabase backend for authentication, real-time updates, and data storage.",
      highlights: [
        "Developed a cross-platform React Native mobile app where patients can book appointments, view doctor availability, and receive in-app notifications for updates and confirmations.",
        "Built a responsive ReactJS dashboard for the clinic’s staff to manage daily appointments, track patient details, and monitor booking status in real time.",
        "Used Supabase for backend services, including authentication, database, and real-time subscriptions to keep both app and dashboard in sync.",
        "Implemented a clean component-based architecture using Tailwind CSS and ShadCN UI (for the web) to ensure visual consistency and scalability.",
        "Configured role-based access within Supabase for secure data operations between patients and admin users.",
        "Focused on reliability and ease of use — lightweight, fast, and optimized for low-end Android devices and standard browsers.",
      ],
      impact:
        "Sun Homeopathy streamlined the clinic’s appointment workflow, reducing manual scheduling and improving patient engagement through a connected mobile and web experience.",
      tags: ["React Native", "ReactJS", "Supabase", "Tailwind CSS", "ShadCN UI", "TypeScript"],
      category: "Full Stack",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Incident Reporter (Concept)",
      description:
        "A conceptual civic-tech application allowing citizens to report incidents to government authorities and track their resolution progress. Users can upload images, add locations, select tags, and provide detailed descriptions, while authorities can update status and actions taken.",
      highlights: [
        "Designed a clean mobile UI for reporting incidents, including image uploads, geolocation tagging, and structured description input.",
        "Planned a real-time tracking system for users to monitor the status of their submitted reports.",
        "Built conceptual backend data flows and schema using React Native + planned Supabase / FastAPI integration.",
        "Focused on intuitive UX for both citizens and administrative users, highlighting transparency and accountability.",
      ],
      status: "Concept / Prototype",
      tags: ["React Native", "UX Design", "Civic Tech", "Prototyping", "Location-based"],
      category: "Mobile / Concept",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "GynaeCare (Prototype)",
      description:
        "A healthcare management app concept for a gynecology hospital, focusing on patient data visualization and doctor-patient interaction insights. The interface includes appointment tracking, report uploads, and health trend graphs for better clinical decision-making.",
      highlights: [
        "Designed and implemented core UI screens in React Native with a clean, patient-friendly interface.",
        "Built visual components for patient analytics — cycle tracking, test history, and progress graphs.",
        "Experimented with Supabase backend for patient data and authentication flow.",
        "Planned features for prescription tracking and automated follow-up reminders.",
      ],
      status: "Prototype / In Development",
      tags: ["React Native", "Supabase", "HealthTech", "UI/UX Prototype"],
      category: "Mobile",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Corporate Carpool (UI Concept)",
      description:
        "An early-stage design and prototype for a carpooling app tailored for corporate employees to share rides efficiently. Focused on route matching, user flow, and modern interface design.",
      highlights: [
        "Created mobile flow screens for ride creation, matching, and confirmation.",
        "Built base architecture using React Native and FastAPI for route APIs.",
        "Designed map-based UI with planned PostGIS integration for location queries.",
        "Currently paused for backend optimization and data modeling redesign.",
      ],
      status: "Design Prototype",
      tags: ["React Native", "FastAPI", "PostGIS", "UI Design"],
      category: "Mobile",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "HSU Portal – Enterprise Developer Platform",
      description:
        "A complete frontend architecture overhaul and development of an enterprise tool serving 100+ software engineers. Led migration from legacy Django stack to modern React/Node.js, redesigning UI/UX and implementing scalable component patterns.",
      highlights: [
        "Architected complete migration from Django to React/Node.js stack, designing scalable component architecture, state management, and API integration patterns.",
        "Led frontend development and technical architecture, mentoring 5 junior developers and establishing React/TypeScript coding standards across the team.",
        "Resolved critical data integrity issues, eliminated legacy bugs, and redesigned the entire UI/UX resulting in 60% faster page loads and 90% reduction in user-reported issues.",
        "Optimized developer experience through improved performance and usability, directly increasing productivity for 100+ internal engineers across enterprise infrastructure.",
        "Established best practices for component reusability, state management, and API design patterns that became the standard for enterprise tool development.",
      ],
      impact:
        "Transformed the HSU Portal into a modern, scalable platform with significantly improved developer experience. Achieved 60% faster page loads, 90% reduction in bugs, and set new standards for enterprise tool development.",
      tags: ["React.js", "Node.js", "TypeScript", "System Architecture", "Component Design", "Enterprise Scale"],
      category: "Frontend Architecture",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Remote Server Configuration Tool – Infrastructure Automation",
      description:
        "An end-to-end React and Python solution that dramatically accelerated server deployment workflows. The tool reduced data center server setup time from 45 minutes to 8 minutes, enabling 200+ engineers to deploy infrastructure 5x faster globally.",
      highlights: [
        "Architected React frontend interface with intuitive forms and real-time validation for complex server configuration workflows.",
        "Built Python backend processing engine that automates configuration validation, deployment logic, and infrastructure provisioning across global data centers.",
        "Engineered configuration pipeline reducing manual setup time from 45 minutes to 8 minutes per server (82% efficiency gain).",
        "Enabled 200+ engineers to deploy infrastructure 5x faster, dramatically improving team productivity and reducing infrastructure deployment bottlenecks.",
        "Designed system with proper error handling, logging, and monitoring to ensure reliability across enterprise-scale deployments.",
      ],
      impact:
        "Delivered massive operational efficiency gains: 82% reduction in server setup time, 5x faster deployments, and eliminated critical infrastructure bottlenecks for 200+ engineers across global data centers.",
      tags: ["React.js", "Python", "Infrastructure Automation", "System Design", "Enterprise Deployment"],
      category: "Full Stack",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Network Audit Tool (RMP) – Enterprise Compliance Platform",
      description:
        "A comprehensive React and MongoDB-based compliance auditing system processing 10,000+ server audits monthly across 15+ organizations. Built real-time dashboards and historical trending analytics for enterprise network compliance validation.",
      highlights: [
        "Built React frontend dashboards with real-time data visualization and interactive compliance reporting for enterprise audit teams.",
        "Engineered MongoDB backend to efficiently process and store 10,000+ monthly server compliance audits across distributed infrastructure.",
        "Implemented Python data processing pipeline for audit validation, analysis, and compliance scoring across 15+ organizations.",
        "Created historical trending analytics enabling audit teams to identify patterns, anomalies, and compliance drift over time.",
        "Reduced audit analysis time by 70%, transforming compliance validation from manual-intensive to data-driven and automated.",
      ],
      impact:
        "Streamlined enterprise compliance operations, processing 10,000+ audits monthly with 70% reduction in analysis time. Provided real-time visibility into network compliance status across 15+ organizations.",
      tags: ["React.js", "MongoDB", "Python", "Data Analytics", "Real-time Dashboards", "Enterprise Audit"],
      category: "Full Stack",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Narrative IQ – AI-Powered Sales Intelligence Platform",
      description:
        "A cutting-edge GenAI platform built for pharmaceutical sales teams, leveraging LLMs and advanced data analysis to provide next-best-action recommendations and competitive performance insights. Processes sales data periodically using modern RAG and automation workflows.",
      highlights: [
        "Engineered end-to-end RAG (Retrieval Augmented Generation) system using LangChain and OpenAI GPT-4 to enable intelligent sales data analysis.",
        "Implemented LLM-powered analysis engine that processes periodic sales data, identifies trends, and generates contextual insights for pharmaceutical sales teams.",
        "Built data pipeline using n8n workflows for automated sales data ingestion, processing, and analysis trigger automation.",
        "Designed system to provide sales reps with next-best-action recommendations based on competitive analysis and root cause insights.",
        "Integrated vector databases for semantic search and context-aware recommendation generation across large sales datasets.",
      ],
      impact:
        "Transformed sales operations through AI-driven intelligence, enabling pharmaceutical sales teams to make data-driven decisions with next-best-action recommendations and competitive performance analysis.",
      tags: ["LangChain", "OpenAI GPT-4", "n8n Workflows", "RAG Pipelines", "Vector Databases", "Python"],
      category: "GenAI",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Document Intelligence System – Production RAG Platform",
      description:
        "A production-grade RAG system with custom chat interface enabling conversational queries over pharmaceutical domain documents. Uses vector embeddings, semantic search, and LLM-powered responses for context-aware document intelligence.",
      highlights: [
        "Built custom chat interface (React) with multi-turn conversation support for intuitive document querying and interaction.",
        "Implemented RAG pipeline with vector embeddings (PostgreSQL vector store) for semantic search across pharma domain documents.",
        "Engineered backend using FastAPI and LangChain to handle document ingestion, embedding generation, and retrieval-augmented generation.",
        "Integrated OpenAI GPT-4 for context-aware response generation that combines retrieved document context with conversational understanding.",
        "Designed system architecture for production deployment with proper error handling, rate limiting, and response caching for performance.",
      ],
      impact:
        "Enabled pharmaceutical teams to instantly access and understand complex domain documents through natural conversation, eliminating manual document search and reducing information retrieval time.",
      tags: ["React", "FastAPI", "LangChain", "OpenAI", "Vector Databases", "PostgreSQL"],
      category: "GenAI",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      title: "InstaTrend (Archived)",
      description:
        "A Python-based command-line tool designed to analyze Instagram user activity and deliver personalized engagement insights via email. While built using open-source scraping modules, InstaTrend introduced a custom algorithm to identify unfollowers and potential profile visitors (‘StalkerList’) with higher accuracy and contextual relevance.",
      highlights: [
        "Developed a CLI tool using Python and IGramScraper as a wrapper to collect user relationship data (followers, followings, interactions).",
        "Engineered a proprietary scoring algorithm to approximate frequent profile visitors based on metadata like engagement recency and profile access patterns.",
        "Automated email delivery of the Unfollowers Report and StalkerList using SMTP integration with custom templates.",
        "Implemented scheduling and batch runs for daily or weekly report generation.",
        "The project was later deprecated due to API changes and Instagram’s policy restrictions, but it demonstrated strong algorithmic thinking and data-driven analysis.",
      ],
      impact:
        "InstaTrend showcased how social data could be interpreted intelligently without direct API access, emphasizing innovation in behavioral analytics using open-source data.",
      tags: ["Python", "IGramScraper", "Automation", "Data Analysis", "CLI Tool"],
      category: "Automation / CLI",
      gradient: "from-gray-500/20 to-slate-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in mobile, web, and backend development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group hover:cursor-pointer select-none"
            >
              <div
                className={`h-32 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}
              >
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
