import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BriefcaseBusiness, Code2, Download,
  Github, GraduationCap, Linkedin, Mail, Menu, ShieldCheck, Sparkles,
  Terminal, X, ExternalLink, MapPin, GitFork, Star
} from "lucide-react";
import { profile, skillGroups, projects, experience } from "./data";

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function ProjectCard({ project, onOpen }) {
  return <button className="project-card reveal" onClick={() => onOpen(project)} aria-label={`View ${project.name} details`}>
    <div className="project-top"><span className="project-number">{project.number}</span><ArrowUpRight size={19} /></div>
    <span className="project-category">{project.category}</span>
    <h3>{project.name}</h3>
    <p>{project.short}</p>
    <div className="tag-row">{project.stack.slice(0, 4).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    <span className="card-link">Explore project <ArrowUpRight size={15} /></span>
  </button>;
}

function ProjectDetail({ project, onBack }) {
  return <main className="detail-page">
    <button className="back-link" onClick={onBack}><ArrowLeft size={16}/> Back to portfolio</button>
    <div className="detail-hero">
      <span className="eyebrow">{project.category} / PROJECT {project.number}</span>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <span className="status-pill">{project.status}</span>
    </div>
    <div className="detail-grid">
      <section className="detail-panel">
        <span className="eyebrow">OVERVIEW</span><h2>What I worked on</h2>
        <ul className="highlight-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="detail-panel">
        <span className="eyebrow">TECH STACK</span><h2>Tools & technologies</h2>
        <div className="tag-row detail-tags">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      </section>
    </div>
  </main>;
}

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [state, setState] = useState("loading");
  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`)
      .then(r => { if (!r.ok) throw new Error("GitHub API unavailable"); return r.json(); })
      .then(data => { if (active) { setRepos(data.filter(x => !x.fork).slice(0, 4)); setState("ready"); } })
      .catch(() => { if (active) setState("error"); });
    return () => { active = false; };
  }, []);
  return <div className="github-box reveal">
    <div className="github-head"><div><span className="eyebrow">OPEN SOURCE</span><h3>GitHub activity</h3><p>Recent public repositories from my GitHub profile.</p></div><a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub"><Github/></a></div>
    {state === "loading" && <p className="muted">Loading repositories…</p>}
    {state === "error" && <p className="muted">Could not load repositories right now. Visit <a href={profile.github} target="_blank" rel="noreferrer">my GitHub profile</a> to explore my work.</p>}
    {state === "ready" && repos.length === 0 && <p className="muted">No public repositories found yet. Visit my GitHub profile for updates.</p>}
    {state === "ready" && repos.length > 0 && <div className="repo-grid">{repos.map(repo => <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="repo-title"><Code2 size={16}/><strong>{repo.name}</strong><ArrowUpRight size={15}/></div>
      <p>{repo.description || "Public repository"}</p>
      <div className="repo-meta">{repo.language && <span>{repo.language}</span>}<span><Star size={13}/>{repo.stargazers_count}</span><span><GitFork size={13}/>{repo.forks_count}</span></div>
    </a>)}</div>}
  </div>;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const nav = useMemo(() => ["About", "Skills", "Projects", "Experience", "Contact"], []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedProject]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [selectedProject]);
  const goTo = id => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };

  if (selectedProject) return <><ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} /><footer className="footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with care.</span></footer></>;

  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header">
      <a href="#home" className="brand" onClick={e => { e.preventDefault(); goTo("home"); }}><span className="brand-mark">RK</span><span>RAKSHIT<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={e => { e.preventDefault(); goTo(n.toLowerCase()); }}>{n}</a>)}</nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
          <p className="hero-intro">HELLO, I'M</p>
          <h1>Rakshit<br/><span>Kapoor.</span></h1>
          <p className="hero-subtitle">Computer Science student <i>×</i> Software Developer</p>
          <p className="hero-description">I enjoy turning ideas into useful software — from full-stack applications to AI-powered systems, with a growing interest in information security.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" onClick={e => { e.preventDefault(); goTo("projects"); }}>Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href={profile.resume} download><Download size={16}/> Download resume</a>
          </div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><span><MapPin size={15}/> {profile.location}</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative developer illustration">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="code-window">
            <div className="window-bar"><span/><span/><span/><small>rakshit.dev — terminal</small></div>
            <div className="code-lines"><p><b>const</b> developer = {'{'}</p><p className="indent">name: <em>'Rakshit Kapoor'</em>,</p><p className="indent">focus: <em>'Building things'</em>,</p><p className="indent">curiosity: <em>true</em></p><p>{'}'};</p><br/><p><b>developer</b>.<u>create</u>(); <span className="cursor"/></p></div>
          </div>
          <div className="floating-chip chip-code"><Code2 size={16}/> Full-stack</div>
          <div className="floating-chip chip-shield"><ShieldCheck size={16}/> InfoSec</div>
          <div className="floating-chip chip-spark"><Sparkles size={16}/> AI / ML</div>
          <div className="hero-art-caption"><span>01 / 05</span><span>BUILD · LEARN · IMPROVE</span></div>
        </div>
        <a className="scroll-cue" href="#about" onClick={e => {e.preventDefault(); goTo("about");}}><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="section-wrap section-block" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span>Builder by choice.</span></>} text="I’m pursuing a B.Tech in Computer Science with a specialization in Information Security at VIT Vellore. I like exploring software development, AI/ML and cybersecurity, then applying what I learn through hands-on projects."/>
        <div className="about-stats">
          <div className="stat-card"><GraduationCap/><strong>2027</strong><span>Expected graduation</span></div>
          <div className="stat-card"><BriefcaseBusiness/><strong>3</strong><span>Internship experiences</span></div>
          <div className="stat-card"><Terminal/><strong>5+</strong><span>Technical projects</span></div>
        </div>
        <div className="education-strip"><div className="edu-icon"><GraduationCap/></div><div><span className="eyebrow">EDUCATION</span><h3>Vellore Institute of Technology, Vellore</h3><p>B.Tech, Computer Science — Specialization in Information Security · Expected July 2027</p></div><span className="cgpa">7.6 / 10 CGPA</span></div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionHeading eyebrow="WHAT I WORK WITH" title={<>Tools in my <span>toolkit.</span></>} text="A mix of programming, web technologies, data tools and security fundamentals that I continue to develop."/>
        <div className="skills-grid">{skillGroups.map((group, i) => <div className="skill-card reveal" key={group.title}><div className="skill-index">0{i+1}</div><h3>{group.title}</h3><div className="tag-row">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title={<>Ideas turned into <span>projects.</span></>} text="A selection of academic, internship and personal work across software engineering, AI and computer vision."/>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject}/>)}</div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <SectionHeading eyebrow="WHERE I'VE LEARNED" title={<>Experience & <span>learning.</span></>} text="Practical exposure through internships and collaborative technical work."/>
        <div className="timeline">{experience.map((item, i) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker">{String(i+1).padStart(2, "0")}</div><div className="timeline-content"><div className="timeline-meta"><span>{item.date}</span><span>INTERNSHIP</span></div><h3>{item.role}</h3><h4>{item.company}</h4><ul>{item.details.map(d => <li key={d}>{d}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section-wrap section-block" id="github"><GithubRepos/></section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-orb"/><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
        <h2>Let's make something<br/><span>meaningful.</span></h2>
        <p>I'm open to conversations about software development, AI/ML, cybersecurity and opportunities to learn and contribute.</p>
        <div className="contact-actions"><button className="button button-primary" onClick={copyEmail}><Mail size={17}/>{copied ? "Email copied!" : "Copy email"}</button><a className="button button-ghost" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={17}/></a></div>
        <div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</a></div>
      </section>
    </main>
    <footer className="footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with care <span className="brand-dot">✦</span></span><a href="#home" onClick={e => {e.preventDefault(); goTo("home");}}>Back to top ↑</a></footer>
  </>;
}
