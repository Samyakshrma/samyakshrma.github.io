import React from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Trophy } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Project One",
            description: "A fast api backend for a social media website",
            tags: ["FastApi", "github", "HTML","CSS","Javascript"],
            link: "https://github.com/Samyakshrma/socialapi"
        },
        {
            title: "Project Two",
            description: "MNIST-NN-FRom scratch",
            tags: ["Python","Numpy", "Pandas", "Matplotlib"],
            link: "https://github.com/Samyakshrma/MNIST-NN-from-Scratch"
        }

    ];

    const achievements = [
        {
            title: "Second Place- Hack-O-Rama",
            organization: "DSCE",
            description: "Build a Web-Scraper for product comparison across various sites.",
            prize: "₹2,000",
            team: "Team of 5"
        }
    ];


    const experiences = [
        {
            title: "Open Source",
            company: "Apache",
            period: "2023 ",
            description: "HTML related contribution"
        },

    ];



    const skills = [
        "JavaScript",
        "PYTORCH",
        "Python",
        "Go Lang",
        "FastApi",
        "MongoDB",
        "MySQL",
        "HTML",
        "CSS",
        "Prompt Engineering",
        "Git",
        "REST APIs",
        "Docker",
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github size={24} />,
            url: "https://github.com/samyakshrma",
            hoverColor: "hover:text-gray-900"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={24} />,
            url: "https://www.linkedin.com/in/samyak-sharma04/",
            hoverColor: "hover:text-blue-600"
        },
        {
            name: "Twitter",
            icon: <Twitter size={24} />,
            url: "https://x.com/samyakshrma",
            hoverColor: "hover:text-sky-500"
        },
        {
            name: "Email",
            icon: <Mail size={24} />,
            url: "mailto:sammi.bgas@gmail.com?subject=Your Subject Here&body=Your Message Here\n",
            hoverColor: "hover:text-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header/Nav */}
            <nav className="bg-white shadow-md border-b border-indigo-100 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-indigo-900">Hello There!</h1>
                        <div className="flex gap-6">
                            <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
                            <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors">Skills</a>
                            <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Projects</a>
                            <a href="#achievements" className="text-slate-600 hover:text-indigo-600 transition-colors">Achievements</a>
                            <a href="#experience" className="text-slate-600 hover:text-indigo-600 transition-colors">Experience</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-indigo-50 to-white">
                <div className="max-w-6xl mx-auto px-4 py-20">
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 p-1">
                            <img
                                src="/profile.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        <h1 className="text-4xl font-bold mb-4 text-indigo-900">Samyak Sharma</h1>
                        <p className="text-xl text-slate-600 mb-8">Full Stack Developer</p>
                        <div className="flex gap-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className={`p-2 text-slate-600 ${social.hoverColor} transition-all hover:scale-110 duration-200`}
                                    title={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">About Me</h2>
                    <p className="text-slate-600 leading-relaxed">
                        I'm a passionate full-stack developer and an aspiring DevOps engineer.
                        I specialize in Golang , Python automation and PyTorch. When I'm not coding,
                        you can find me contributing to open source projects or writing technical blog posts.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-slate-200 text-center shadow-sm hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-semibold text-indigo-900">{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-indigo-200">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{project.title}</h3>
                                <p className="text-slate-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                                    View Project <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index}
                                 className="relative bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{achievement.title}</h3>
                                <h4 className="text-slate-600 text-sm">{achievement.organization}</h4>
                                <p className="text-slate-600">{achievement.description}</p>
                                <span className="absolute top-3 right-3 bg-yellow-200 text-yellow-900 text-xs px-2 py-1 rounded-full">
                  {achievement.prize}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Experience</h2>
                    <div className="space-y-6">
                        {experiences.map((experience, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-semibold text-indigo-900">{experience.title}</h3>
                                <h4 className="text-slate-600">{experience.company}</h4>
                                <p className="text-slate-600">{experience.period}</p>
                                <p className="text-slate-600">{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-indigo-100 py-4">
                <div className="max-w-6xl mx-auto px-4 text-center text-slate-600">
                    <p>&copy; 2024 Samyak Sharma. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
