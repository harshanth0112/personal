import React from 'react';
import Footer from './common/Footer';
import ProfilePhoto from "../assets/harshanth.jpg";

function About() {
  const skills = [
    { category: "Languages", list: "Python, SQL, JavaScript" },
    { category: "Full Stack", list: "React, FastAPI, Flask, REST APIs, MySQL, PostgreSQL" },
    { category: "AI / ML", list: "PyTorch, TensorFlow, OpenCV, YOLO, Transformers" },
    { category: "Cloud & Tools", list: "AWS (S3, Lambda, RDS), Git, Roboflow, API Integration, Web Deployment, Hugging Face" },
  ];

  const projects = [
    {
      title: "AI LinkedIn Auto-Poster",
      tagline: "Automation & AI Pipeline | Python, Gemini API, GitHub Actions",
      link: "https://github.com/harshanth0112/ai-linkedin-poster",
      points: [
        "Automated daily LinkedIn posts by trending AI news from 50+ RSS feeds and generating posts via LLM with AI-generated images.",
        "Built multi-model LLM fallback (Gemini → Groq) and 4-tier image generation.",
        "Deployed hands-free via GitHub Actions CI/CD with dry-run preview and atomic publish rollback."
      ]
    },
    {
      title: "Claris – Agile Project Delivery Tool",
      tagline: "Full-Stack Web Application | React, FastAPI, PostgreSQL",
      link: "https://github.com/harshanth0112/Claris-A-Agile-management-tool",
      points: [
        "Developed a full-stack Agile project management application using React, FastAPI, PostgreSQL, Zustand, and Tailwind CSS.",
        "Built a drag-and-drop Kanban board with optimistic UI updates and persistent task ordering.",
        "Implemented fractional indexing, RBAC, task filtering, sprint validation, and responsive mobile support."
      ]
    },
    {
      title: "Personal Portfolio Website",
      tagline: "Full-Stack Web Application | React, Vite, Tailwind CSS, GitHub Actions",
      link: "https://github.com/harshanth0112/portfolio",
      points: [
        "Built a portfolio with React 18, Vite, and Tailwind CSS, deployed via automated GitHub Actions CI/CD pipeline to GitHub Pages.",
        "Implemented a password-protected Admin CMS with 1-click GitHub API sync, dynamic repo fetching, and EmailJS contact form integration."
      ]
    },
    {
      title: "Personal Library Web Application",
      tagline: "Cloud-Native Full Stack | AWS",
      link: "https://github.com/harshanth0112/personal_library",
      points: [
        "Designed and deployed a scalable full-stack application for managing a personal book library.",
        "Built frontend using React and hosted on Amazon S3 for high availability.",
        "Developed backend using AWS Lambda with REST APIs for serverless execution."
      ]
    },
    {
      title: "Edge YOLO Surveillance – Privacy-Preserving AI",
      tagline: "Team Leader | Computer Vision & Edge AI",
      link: "https://github.com/harshanth0112/PRIVACY-PRESERVING-AI",
      points: [
        "Built real-time detection system using YOLOv8 for weapons and hazard identification.",
        "Enabled offline edge deployment ensuring privacy and low latency."
      ]
    }
  ];

  return (
    <div className="py-10 max-w-5xl mx-auto px-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <img
          src={ProfilePhoto}
          alt="Harshanth R"
          className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-md border-4 border-white shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            HARSHANTH <span className="text-orange-500">R</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-orange-600 mt-2">
            AWS Cloud Computing | AI Engineer | Python Full Stack Developer | Computer Vision
          </p>

          {/* Contact info bar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm text-gray-700">
            <span>📞 +91-9842584621</span>
            <span>•</span>
            <a href="mailto:harshanthr064@gmail.com" className="text-orange-600 hover:underline">
              📧 harshanthr064@gmail.com
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/harshanth0112h" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com/harshanth0112" target="_blank" rel="noreferrer" className="text-gray-900 hover:underline">
              GitHub
            </a>
            <span>•</span>
            <a href="https://harshanth0112.github.io/portfolio/" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline">
              Live Portfolio
            </a>
            <span>•</span>
            <a
              href="/Harshanth_R_Resume.pdf"
              download="Harshanth_R_Resume.pdf"
              className="text-orange-600 font-bold hover:underline"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Professional Objective */}
      <section className="mt-10 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4 flex items-center gap-2">
          🎯 Professional Objective
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Graduate in B.Tech Artificial Intelligence and Data Science with hands-on experience in building and deploying real-time AI systems. Skilled in Computer Vision, NLP, along with Python full-stack development. Strong focus on cloud native architectures using AWS (S3, Lambda, RDS) to deliver scalable and production-ready applications.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-8 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4 flex items-center gap-2">
          ⚡ Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-bold text-orange-500 block text-sm uppercase tracking-wide">{s.category}</span>
              <p className="text-gray-800 mt-1 font-medium">{s.list}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="mt-8 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6 flex items-center gap-2">
          🚀 Experience & Projects
        </h2>
        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="border-l-4 border-orange-400 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-200 w-fit mt-1 sm:mt-0 font-medium"
                >
                  View Repository ↗
                </a>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-2">{proj.tagline}</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {proj.points.map((p, pIdx) => (
                  <li key={pIdx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Education */}
        <section className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-3">
            🎓 Education
          </h2>
          <h3 className="font-bold text-gray-800">B.Tech in Artificial Intelligence & Data Science</h3>
          <p className="text-sm text-gray-600">K. Ramakrishnan College of Technology</p>
          <p className="text-xs text-orange-500 font-semibold mt-1">2022 - 2026 | Tiruchirappalli, Tamil Nadu, India</p>
        </section>

        {/* Coursework & Certifications */}
        <section className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-3">
            📜 Certifications & Achievements
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>
              <strong>AWS Certified Cloud Practitioner</strong> (Oct 2024 – Oct 2027)
              <span className="block text-xs text-gray-500 pl-5">Validation ID: f6e82200ee934ce6ae174c0ca32011d3</span>
            </li>
            <li><strong>Wipro TalentNext Program</strong> – Java Full Stack Development</li>
            <li><strong>Applied Generative AI Specialization</strong> – Simplilearn</li>
            <li>Presented <em>"AI-Based Virtual Doctor using Multimodal LLMs"</em> at International Conference (MESMT 2026)</li>
            <li>AICTE Virtual Internship (AI & Data Analytics – Shell & Edunet Foundation)</li>
          </ul>
        </section>
      </div>

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}

export default About;
