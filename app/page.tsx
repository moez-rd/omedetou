"use client";

import {
  Award,
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  aboutMe,
  certifications,
  educations,
  experiences,
  navigationSections,
  personalInfo,
  projectCategories,
  projects,
  quickStats,
  skills,
  workExperiences,
} from "../data/portfolioData";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navigationSections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg font-bold hover:text-muted-foreground transition-colors"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              {personalInfo.name.split(" ")[1]}
            </button>
            <div className="hidden md:flex gap-6">
              {navigationSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm transition-colors ${
                    activeSection === section
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section === "work" ? "Work Experience" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Hi, I am</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {personalInfo.title}
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {personalInfo.description}
              </p>

              {/* Quick Stats */}
              <div className="flex gap-6 py-4">
                {quickStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all font-medium"
                >
                  View My Work
                </button>
                <button className="flex items-center gap-2 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <Image
                  width={400}
                  height={500}
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-80 md:w-96 h-auto object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, passion, and what drives me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <div className="space-y-3">
                {aboutMe.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <service.icon className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-muted-foreground">
              A comprehensive overview of my technical and creative abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-blue-500" />
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <p className="text-muted-foreground">
              My academic journey and achievements
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 pl-6 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span>Specialization: {edu.specialization}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="ml-9">
                  <h4 className="font-medium mb-2 text-sm">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <p className="text-muted-foreground">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl p-6 border border-border"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Award className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-background text-xs rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      width={200}
                      height={150}
                      className="rounded-lg object-cover w-full h-32"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground">
              Professional roles and technical contributions
            </p>
          </div>

          <div className="space-y-8">
            {workExperiences.map((work, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{work.title}</h3>
                      <p className="text-muted-foreground font-medium">
                        {work.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {work.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {work.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed">
                      {work.description}
                    </p>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {work.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Briefcase className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted text-xs rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src={work.image}
                      alt={work.company}
                      width={200}
                      height={150}
                      className="rounded-lg object-cover w-full h-32"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <p className="text-muted-foreground">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl p-6 border border-border hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-32"
                    />
                    {cert.verified && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                        <Award className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background text-xs rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Projects & Products
            </h2>
            <p className="text-muted-foreground">
              A showcase of my creative work and technical projects
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projectCategories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  index === 0
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-background text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all group"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-600"
                          : project.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-600"
                            : "bg-blue-500/20 text-blue-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    )}
                    {project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Behance
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Visit
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all font-medium"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
