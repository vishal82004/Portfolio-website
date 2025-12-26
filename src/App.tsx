import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Terminal,
    Award,
    GitPullRequest,
    ExternalLink,
    ArrowRight,
    CheckCircle,
    FileText
} from 'lucide-react';
import { HackerText } from './components/HackerText';
import dockerLogo from './assets/docker-logo.png';
import terraformLogo from './assets/terraform-logo.png';
import kubernetesLogo from './assets/kubernetes-logo.png';
import awsLogo from './assets/aws-logo.png';
import linuxLogo from './assets/linux-logo.png';
import githubActionsLogo from './assets/github-actions-logo.png';
import jenkinsLogo from './assets/jenkins-logo.png';
import postgresqlLogo from './assets/postgresql-logo.png';
import prometheusLogo from './assets/prometheus-logo.png';

// Restored Assets
import profileImg from './assets/profile.png';
import projectEks from './assets/project-eks.png';
import projectDevSecOps from './assets/project-devsecops.png';
import projectAutism from './assets/project-autism.png';

function App() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const y1 = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, 200]);

    // Terminal Typing Logic
    const terminalRef = useRef(null);
    const isInView = useInView(terminalRef, { once: true, margin: "-100px" });
    const [typedCode, setTypedCode] = useState("");
    const codeToType = `module "fluentbit" {
  source = "..."
  - name = "firehose"
  + name = "stdout"
  log_configuration = {
    logDriver = "awslogs"
  }
}`;

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const interval = setInterval(() => {
                setTypedCode(codeToType.slice(0, i));
                i++;
                if (i > codeToType.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <div className="min-h-screen relative overflow-hidden bg-slate-950 selection:bg-cyan-500 selection:text-white">
            {/* Background Effects */}
            <div className="ambient-light">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>
            <div className="noise"></div>

            {/* Meteor Shower */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="meteor-effect" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${Math.random() * 3 + 2}s` }}></div>
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-8 shadow-2xl">
                    <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
                    <a href="#work" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
                    <a href="#opensource" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Open Source</a>
                    <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto p-4 md:p-6 pt-28 pb-20 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10" id="home">

                {/* 1. Hero Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="col-span-full md:col-span-8 bg-slate-900/50 border border-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group min-h-[400px] md:min-h-[500px]"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <Terminal className="w-64 h-64 text-cyan-500" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            Available for HIRE
                        </div>

                        <h1 className="font-display text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                <HackerText text="Cloud Future." />
                            </span>
                        </h1>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                            I'm <span className="text-white font-semibold">Vishal B</span>. A DevOps & SRE practitioner obsessed with automation, scalable infrastructure, and the perfect CI/CD pipeline.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2">
                                Get in Touch <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/vishal82004" target="_blank" className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-2">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{ y: y1 }}
                    className="col-span-full md:col-span-4 bg-slate-900/50 border border-white/5 backdrop-blur-2xl rounded-3xl p-4 relative flex items-end overflow-hidden group min-h-[400px] md:min-h-[500px]"
                >
                    <img
                        src={profileImg}
                        alt="Vishal B"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top"
                        onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Vishal+B&background=020617&color=fff&size=500'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    <div className="relative z-10 p-6 w-full">
                        <h3 className="font-display text-3xl font-bold text-white mb-1"><HackerText text="Vishal B" /></h3>
                        <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span> India • 2026 Grad • VIT
                        </p>
                        <div className="flex gap-2">
                            <a href="https://linkedin.com/in/vishal-b-2029bb257" target="_blank" className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-white text-slate-300 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://drive.google.com/file/d/1pXIu0bcC7T3kzDT7DkhABEgKIBWFpBly/view?usp=sharing" className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-white text-slate-300 transition-all" title="Resume/CV">
                                <FileText className="w-5 h-5" />
                            </a>
                            <a href="mailto:balajivishalnivi@gmail.com" className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-white text-slate-300 transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Tech Stack Marquee */}
                <div className="col-span-full md:col-span-12 bg-slate-900/30 border border-white/5 backdrop-blur-md rounded-3xl p-8 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Powering Apps With</p>
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 px-8">
                            {/* Tech Stack Items */}
                            {[
                                { img: awsLogo, name: "AWS" },
                                { img: dockerLogo, name: "Docker" },
                                { img: kubernetesLogo, name: "Kubernetes" },
                                { img: terraformLogo, name: "Terraform" },
                                { img: linuxLogo, name: "Linux" },
                                { img: githubActionsLogo, name: "GitHub Actions" },
                                { img: jenkinsLogo, name: "Jenkins" },
                                { img: postgresqlLogo, name: "PostgreSQL" },
                                { img: prometheusLogo, name: "Prometheus" },
                                { img: awsLogo, name: "AWS" },
                                { img: dockerLogo, name: "Docker" },
                                { img: kubernetesLogo, name: "Kubernetes" },
                                { img: terraformLogo, name: "Terraform" },
                                { img: linuxLogo, name: "Linux" },
                                { img: githubActionsLogo, name: "GitHub Actions" },
                                { img: jenkinsLogo, name: "Jenkins" },
                                { img: postgresqlLogo, name: "PostgreSQL" },
                                { img: prometheusLogo, name: "Prometheus" },
                            ].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-lg hover:text-white transition-colors cursor-pointer">
                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center overflow-hidden ${tech.img ? '' : 'bg-slate-800'}`}>
                                        {tech.img ? (
                                            <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
                                        )}
                                    </div>
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Open Source Highlight */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="col-span-full md:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    id="opensource"
                >
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700">
                                <GitPullRequest className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h2 className="font-display text-2xl font-bold text-white">Open Source</h2>
                                <p className="text-slate-500 text-sm">Contribution Highlight</p>
                            </div>
                        </div>
                        <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">MERGED</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-white group-hover:text-green-400 transition-colors">terraform-aws-modules/terraform-aws-ecs</h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Contributed to the core AWS ECS Terraform module by implementing a critical logging configuration switch. This allows Fargate services to route logs directly to stdout, improving observability.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Improved log visibility (Issue #381)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Updated docs & examples</span>
                                </div>
                            </div>

                            <a href="https://github.com/terraform-aws-modules/terraform-aws-ecs/pull/386" target="_blank" className="inline-flex items-center gap-2 text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors border border-slate-700">
                                View Pull Request <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Code Snippet Visual */}
                        <div ref={terminalRef} className="bg-slate-950 rounded-xl p-5 font-mono text-xs border border-slate-800 shadow-2xl relative group-hover:-translate-y-2 transition-transform duration-500 min-h-[220px]">
                            <div className="flex gap-1.5 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-slate-500 mb-2"># main.tf (fluentbit sidecar config)</div>
                            <pre className="whitespace-pre-wrap text-[11px] md:text-xs">
                                <code className="bg-transparent" dangerouslySetInnerHTML={{
                                    __html: typedCode
                                        .replace(/"(.*?)"/g, '<span class="text-yellow-200">"$1"</span>')
                                        .replace(/module/g, '<span class="text-purple-400">module</span>')
                                        .replace(/source/g, '<span class="text-blue-300">source</span>')
                                        .replace(/-\s+name/g, '<span class="text-red-400 line-through opacity-50">- name</span>')
                                        .replace(/\+\s+name/g, '<span class="text-green-400 font-bold bg-green-500/10">+ name</span>')
                                }} />
                                <span className="inline-block w-2 h-4 bg-cyan-500 ml-1 animate-pulse align-middle"></span>
                            </pre>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Credential Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-span-full md:col-span-4 bg-slate-900/50 border border-white/5 backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between group"
                >
                    <div>
                        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white mb-2">AWS Certified</h3>
                        <p className="text-slate-400 text-sm">Solutions Architect Associate</p>
                        <p className="text-slate-500 text-xs mt-1">Validation Number: SAA-C03</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <a href="https://www.credly.com/badges/d04e9eba-8244-4c55-8208-579ee81d3073/linked_in_profile" target="_blank" className="flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">
                            Verify Credential <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* 5.5. Experience Card */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="col-span-full md:col-span-12 bg-slate-900/50 border border-white/5 backdrop-blur-2xl rounded-3xl p-8 group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-display text-2xl font-bold text-white">Ethnus</h3>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">APPRENTICESHIP</span>
                            </div>
                            <h4 className="text-lg text-slate-300 font-medium mb-4">Cloud Apprentice</h4>
                            <p className="text-slate-400 max-w-2xl leading-relaxed">
                                Gained hands-on experience in cloud fundamentals and architecture. Worked deeply with AWS services and modern CI/CD practices to build scalable solutions.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 md:justify-end max-w-sm">
                            {["AWS", "Cloud Fundamentals", "IaC", "DevOps"].map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700/50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 6. Projects Header */}
                <div className="col-span-full md:col-span-12 mt-12 mb-4 flex items-end justify-between" id="work">
                    <div>
                        <h2 className="font-display text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-slate-400 max-w-xl">A selection of my recent work in Cloud Engineering, DevOps, and Full Stack Development.</p>
                    </div>
                    <a href="https://github.com/vishal82004?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
                        View All <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* 7. Project Cards */}
                {[
                    {
                        title: "Microservices on EKS",
                        desc: "High-availability deployment with Redis, RabbitMQ & Terraform.",
                        tags: ["Kubernetes", "Terraform", "ArgoCD"],
                        image: projectEks,
                        link: "https://github.com/vishal82004/SocialMedia-Backend-Microservice-Project-Deployment"
                    },
                    {
                        title: "DevSecOps Pipeline",
                        desc: "Secured CI/CD with Jenkins, SonarQube, and Trivy integration.",
                        tags: ["Jenkins", "SonarQube", "Trivy"],
                        image: projectDevSecOps,
                        link: "https://github.com/vishal82004/DevOps-Project-Zomato"
                    },
                    {
                        title: "Autism Detection API",
                        desc: "FastAPI backend trained for early detection in toddlers.",
                        tags: ["FastAPI", "Python", "ML"],
                        image: projectAutism,
                        link: "https://github.com/vishal82004/CogniCare-Backend"
                    }
                ].map((project, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="col-span-full md:col-span-4 bg-slate-900/50 border border-white/5 backdrop-blur-md rounded-3xl overflow-hidden group hover:border-cyan-500/30 transition-colors"
                    >
                        <div className="h-48 bg-slate-800/50 relative overflow-hidden p-6 flex items-center justify-center">
                            <img src={project.image} alt={project.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1e293b/FFFFFF?text=Project'; }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, t) => (
                                    <span key={t} className="px-3 py-1 bg-slate-800 rounded-lg text-[10px] uppercase font-bold text-cyan-300 border border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" className="text-sm font-semibold text-white hover:text-cyan-400 flex items-center gap-2 group/link">
                                Check Repo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                ))}

                {/* Footer */}
                <div className="col-span-12 mt-20 pb-8 text-center" id="contact">
                    <p className="text-slate-600 text-sm">© 2025 Vishal B. Crafted with React & Tailwind.</p>
                </div>

            </main>
        </div>
    );
}

export default App;
