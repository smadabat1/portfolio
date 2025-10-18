import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of
            beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  const timelineData = [
    {
      title: "2026 (Upcoming)",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Expanding into a new chapter — scaling <span className="font-semibold">Storage Pod</span> globally and
            launching a suite of privacy-focused personal tools.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>
              <span className="font-semibold">Storage Pod SaaS Launch:</span> scaling the platform for global users,
              adding encrypted sync, AI tagging, and collaborative sharing.
            </li>
            <li>
              <span className="font-semibold">SecurePass (Password Manager):</span> a lightweight, self-hostable
              password manager designed for privacy enthusiasts and developers.
            </li>
            <li>
              <span className="font-semibold">CoupleSync (Finance Tracker):</span> a shared finance and expense tracker
              for couples with AI-based insights, budgeting, and bill reminders.
            </li>
            <li>
              Expanding team and relocating to Germany or Australia to scale product reach and funding opportunities.
            </li>
          </ul>
          <p className="text-xs italic text-neutral-400 dark:text-neutral-400">
            Focus for 2026: privacy, simplicity, and global usability — building everyday tools that actually respect
            users.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Building <span className="font-semibold">Storage Pod</span> — a privacy-first personal cloud and media
            streaming platform.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>Developed headless media engine with Jellyfin backend</li>
            <li>Integrated React Native (Expo) frontend using FastAPI API layer</li>
            <li>Implemented file management, media player, and Sentry crash reporting</li>
            <li>Designed modular sub-workflows using n8n for AI automation</li>
          </ul>
          <p className="text-xs italic text-neutral-400 dark:text-neutral-400">
            Currently preparing for product demo and final deployment.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Developed a <span className="font-semibold">Corporate Carpooling App</span> for daily commute coordination.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>Implemented ride-matching algorithm with PostgreSQL + PostGIS</li>
            <li>Used React Native frontend with FastAPI backend</li>
            <li>Integrated location-based matching and light ads for monetization</li>
          </ul>
          <p className="text-xs italic text-neutral-400 dark:text-neutral-400">
            Designed for corporate offices to replace Excel-based manual coordination.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Transitioned into building full-stack systems with <span className="font-semibold">FastAPI</span> and{" "}
            <span className="font-semibold">React Native</span>.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>Worked on internal tools integrating REST APIs with frontend dashboards</li>
            <li>Built authentication modules, file handling, and async job queues</li>
            <li>Optimized API performance and caching layers</li>
          </ul>
          <p className="text-xs italic text-neutral-400 dark:text-neutral-400">
            Strengthened expertise in scalable architecture and system design.
          </p>
        </div>
      ),
    },
    {
      title: "January 2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Published a research paper:{" "}
            <span className="font-semibold">
              "Swarm Optimization and Machine Learning Applied to PE Malware Detection"
            </span>{" "}
            in MDPI Journal — "New Advances and Challenges in Communication Networks".
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>
              Created a comprehensive malware detection dataset and applied Ant Colony Optimization (ACO) for feature
              reduction.
            </li>
            <li>
              Combined ACO with ML classifiers, achieving <span className="font-semibold">99.86% accuracy</span> in
              detecting malicious Windows executables.
            </li>
            <li>
              Proposed a novel approach to cybersecurity threat intelligence, merging swarm optimization with machine
              learning for enhanced detection.
            </li>
          </ul>
          <p className="text-xs italic text-neutral-400 dark:text-neutral-400">
            DOI:{" "}
            <a href="https://www.mdpi.com/2059964" className="underline text-primary" target="_blank" rel="noreferrer">
              https://www.mdpi.com/2059964
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Continued work as a <span className="font-semibold">Frontend Developer</span> focusing on high-performance
            web applications.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>Built responsive UIs with ReactJS and TailwindCSS</li>
            <li>Collaborated with backend teams for API-driven apps</li>
            <li>Introduced design consistency and performance improvements</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 dark:text-neutral-200">
            Started professional journey as a <span className="font-semibold">Software Engineer</span>.
          </p>
          <ul className="mb-6 list-disc pl-5 text-xs md:text-sm text-neutral-400 dark:text-neutral-300">
            <li>Worked on ReactJS-based dashboards and analytics tools</li>
            <li>Explored backend scripting, automation, and cloud deployment</li>
            <li>Built a strong foundation in full-stack development principles</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
