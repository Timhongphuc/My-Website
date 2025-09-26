"use client"

import Link from "next/link"
import { useState } from "react"
import { FaMedium, FaGithub, FaCode, FaBehance } from "react-icons/fa6"
import { TbMail, TbBrandVscode, TbExternalLink } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { FaMicrosoft, FaApple, FaSlack, FaFigma } from "react-icons/fa6"
import { SiXcode } from "react-icons/si"
import { MdVideocam, Md3dRotation, MdPrint, MdMusicNote } from "react-icons/md"
import { CaseStudyModal } from "@/components/case-study-modal"

const projectData = {
  1: {
    title: "Simple AI Chatbot Experiment",
    subtitle: "SimplestMachine{} Project",
    description:
      "My first attempt at experimenting with AI APIs, built as a learning project to understand how AI chatbots work.",
    details:
      "SimplestMachine{} was my introduction to working with AI APIs. This simple project helped me learn the basics of integrating external AI services into applications. I used the Cohere AI API to create a basic chatbot interface, which taught me about API calls, response handling, and building simple user interfaces for AI interactions.",
    image:
      "https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreihbw2aimpbq6jrzgegyitmlhqbvsfdrumicw77c3ablsfl6kzxe5m",
    technologies: ["Python", "Gradio", "Cohere", "Huggingface"],
  },
  2: {
    title: "Creative Canvas & Whiteboard",
    subtitle: "Freeplay Project",
    description:
      "A creative digital canvas where you can write, draw, plan and build projects and ideas. Currently in development.",
    details:
      "Freeplay is my current project - a creative whiteboard application that allows users to freely express their ideas through drawing, writing, and planning. The app features an intuitive interface with various drawing tools, color options, and shape creation capabilities. It's designed to be a digital space for brainstorming, sketching, and organizing thoughts visually.",
    image: "/images/freeplay-screenshot.png",
    technologies: ["React", "Next.js", "Canvas API", "TypeScript", "Tailwind CSS"],
  },
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const openModal = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 z-10 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            TS
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#work" className="text-sm font-medium hover:text-primary">
              Work
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden bg-transparent">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 flex min-h-screen flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hi, I&apos;m Tim Seufert</h1>
        <p className="mt-4 text-xl text-muted-foreground">High School Developer</p>
        <div className="mt-8 flex space-x-4">
          <Link
            href="https://github.com/timhongphuc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://medium.com/@tiefentechnik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <FaMedium className="h-5 w-5" />
            <span className="sr-only">Medium</span>
          </Link>
          <Link
            href="https://www.behance.net/timseufert1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <FaBehance className="h-5 w-5" />
            <span className="sr-only">Behance</span>
          </Link>
          <Link
            href="https://portfolio.de.tumo.world/p/lqg1d406zry9vwnx16z1k52pn7xmow3v"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <img
              src="https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreidhf6okeioofrwg6biky7wmsk4mnojowpoholckt2ohvociks6ne4"
              alt="TUMO Logo"
              className="h-5 w-5"
            />
            <span className="sr-only">TUMO portfolio</span>
          </Link>
          <Link
            href="https://g.dev/timhongphuc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <FaCode className="h-5 w-5" />
            <span className="sr-only">Google Developer</span>
          </Link>
          <Link
            href="mailto:timhongphuc@proton.me"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <TbMail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a student with a keen interest in programming, always eager to try new things. Currently,
              I&apos;m working on personal projects to enhance my software development skills. I find it stimulating to
              exchange ideas with fellow developers and learn from their experiences. My goal is to continually expand
              my knowledge and grow within the field of computer science. I&apos;m actively seeking opportunities to
              apply my abilities and contribute to engaging projects.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="mailto:timhongphuc@proton.me"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Tools and Skills</h2>
          <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-center">Tools</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <FaMicrosoft className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Microsoft Office</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbBrandVscode className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Visual Studio Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdVideocam className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Final Cut Pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdMusicNote className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Logic Pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Md3dRotation className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">Shapr3D</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiXcode className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Xcode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFigma className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Figma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPrint className="h-5 w-5 text-green-600" />
                    <span className="text-sm">BambuLab Studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSlack className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Slack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="h-5 w-5 text-gray-800" />
                    <span className="text-sm">GitHub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCode className="h-5 w-5 text-gray-700" />
                    <span className="text-sm">Terminal</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-semibold text-center">Skills</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <FaApple className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Swift(UI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCode className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCode className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">HTML (Basics)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPrint className="h-5 w-5 text-green-600" />
                    <span className="text-sm">3D Printing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Personal Work and Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Freeplay Project */}
            <div className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src="/images/freeplay-screenshot.png"
                  alt="Freeplay creative canvas application"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/images/freeplay-logo.png" alt="Freeplay logo" className="h-8 w-8" />
                  <h3 className="text-xl font-semibold">Freeplay</h3>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">In Progress</span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  A creative canvas where you can write, draw, plan and build projects and ideas.
                </p>
                <div className="mt-4 flex space-x-2">
                  <Link
                    href="http://www.freeplayapp.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <TbExternalLink className="h-4 w-4 mr-1" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/Timhongphuc/Freeplay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <FaGithub className="h-4 w-4 mr-1" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            {/* SimplestMachine Project */}
            <div className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src="https://aqua-cheerful-octopus-393.mypinata.cloud/ipfs/bafkreihbw2aimpbq6jrzgegyitmlhqbvsfdrumicw77c3ablsfl6kzxe5m"
                  alt="SimplestMachine AI project"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">SimplestMachine{}</h3>
                <p className="mt-2 text-muted-foreground">This is my personal AI chatbot experiment.</p>
                <div className="mt-4 flex space-x-2">
                  <Link
                    href="https://simplestmachine.framer.website/old-home"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    View Project
                  </Link>
                  <button
                    onClick={() => openModal(1)}
                    className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Get in Touch</h2>
          <div className="mx-auto max-w-md">
            <p className="mb-8 text-center text-lg text-muted-foreground">
              Have a project in mind or want to chat? Feel free to reach out.
            </p>
            <div className="grid gap-4">
              <Link
                href="mailto:timhongphuc@proton.me"
                className="flex h-12 w-full items-center justify-start gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <TbMail className="h-5 w-5" />
                <span>timhongphuc@proton.me</span>
              </Link>
              <Link
                href="https://github.com/timhongphuc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-start gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <FaGithub className="h-5 w-5" />
                <span>github.com/timhongphuc</span>
              </Link>
              <Link
                href="https://medium.com/@tiefentechnik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-start gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <FaMedium className="h-5 w-5" />
                <span>medium.com/@tiefentechnik</span>
              </Link>
              <Link
                href="https://behance.net/timseufert1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-start gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <FaBehance className="h-5 w-5" />
                <span>behance.net/timseufert1</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tim Seufert. All rights reserved.
          </p>
          <div className="flex space-x-4"></div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={projectData[selectedProject as keyof typeof projectData]}
        >
          <ul className="space-y-2 text-gray-700">
            <li>• First hands-on experience with AI APIs</li>
            <li>• Learning project focused on understanding chatbot basics</li>
            <li>• Simple implementation using Cohere's language model</li>
            <li>• Built with Gradio for easy web interface creation</li>
          </ul>
        </CaseStudyModal>
      )}
    </div>
  )
}
