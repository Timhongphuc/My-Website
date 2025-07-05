"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface Command {
  input: string
  output: string[]
}

export function TerminalSection() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: ["Welcome to Tim's Terminal!", 'Type "help" to see available commands.', ""],
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about      - Learn more about Tim",
      "  skills     - View technical skills",
      "  projects   - See current projects",
      "  contact    - Get contact information",
      "  ls         - List directory contents",
      "  pwd        - Print working directory",
      "  whoami     - Display current user",
      "  date       - Show current date and time",
      "  uname      - System information",
      "  cat        - Display file contents",
      "  echo       - Display text",
      "  history    - Show command history",
      "  clear      - Clear terminal",
      "  github     - Open GitHub profile",
      "  linkedin   - Open LinkedIn profile",
      "  resume     - Download resume",
      "  sudo       - Execute as superuser (joke)",
      "",
    ],
    about: [
      "Tim Seufert - High School Developer",
      "",
      "I'm a student passionate about programming and technology.",
      "Currently working on personal projects to enhance my skills.",
      "Always eager to learn new technologies and collaborate.",
      "",
      "Location: Germany",
      "Education: High School Student",
      "Interests: AI Research, iOS Development, Creative Coding",
      "",
    ],
    skills: [
      "Technical Skills:",
      "  • Swift(UI) - iOS Development",
      "  • Processing - Creative Coding",
      "  • HTML - Web Development Basics",
      "  • 3D Printing - Digital Fabrication",
      "",
      "Tools I use:",
      "  • Xcode, VS Code, Terminal",
      "  • Final Cut Pro, Logic Pro",
      "  • Figma, GitHub, Slack",
      "",
    ],
    projects: [
      "Current Projects:",
      "",
      "  SimplestMachine{} - Personal AI Research Lab",
      "  Portfolio Website - This site you're viewing",
      "  Various Swift/iOS experiments",
      "",
      "Visit my GitHub for more: github.com/timhongphuc",
      "",
    ],
    contact: [
      "Contact Information:",
      "",
      "  Email: timhongphuc@proton.me",
      "  GitHub: github.com/timhongphuc",
      "  Medium: medium.com/@tiefentechnik",
      "  Behance: behance.net/timseufert1",
      "",
    ],
    ls: [
      "total 8",
      "drwxr-xr-x  5 tim  staff   160 Dec 15 10:30 .",
      "drwxr-xr-x  3 tim  staff    96 Dec 15 10:30 ..",
      "-rw-r--r--  1 tim  staff  1024 Dec 15 10:30 about.txt",
      "-rw-r--r--  1 tim  staff   512 Dec 15 10:30 projects.txt",
      "-rw-r--r--  1 tim  staff   256 Dec 15 10:30 contact.txt",
      "drwxr-xr-x  3 tim  staff    96 Dec 15 10:30 skills/",
      "",
    ],
    pwd: ["/Users/tim/portfolio", ""],
    whoami: ["tim", ""],
    date: [new Date().toString(), ""],
    uname: [
      "Darwin portfolio.local 23.1.0 Darwin Kernel Version 23.1.0",
      "System: macOS Sonoma 14.1",
      "Architecture: arm64",
      "",
    ],
    github: ["Opening GitHub profile...", "github.com/timhongphuc", ""],
    linkedin: ["Opening LinkedIn profile...", "Connect with me on LinkedIn!", ""],
    resume: ["Downloading resume...", "resume.pdf - Download started", ""],
    sudo: [
      "tim is not in the sudoers file. This incident will be reported.",
      "Just kidding! 😄",
      "Nice try though!",
      "",
    ],
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()

    if (trimmedInput === "clear") {
      setHistory([])
      setInput("")
      return
    }

    // Handle echo command
    if (trimmedInput.startsWith("echo ")) {
      const echoText = input.trim().substring(5)
      const output = [echoText || "", ""]
      setHistory((prev) => [...prev, { input: input.trim(), output }])
      setInput("")
      return
    }

    // Handle cat command
    if (trimmedInput.startsWith("cat ")) {
      const filename = trimmedInput.substring(4)
      let output: string[]

      switch (filename) {
        case "about.txt":
          output = [
            "Tim Seufert - High School Developer",
            "Passionate about programming and technology.",
            "Currently working on personal projects.",
            "",
          ]
          break
        case "projects.txt":
          output = [
            "SimplestMachine{} - AI Research Lab",
            "Portfolio Website - Personal website",
            "iOS Apps - Various Swift experiments",
            "",
          ]
          break
        case "contact.txt":
          output = ["Email: timhongphuc@proton.me", "GitHub: github.com/timhongphuc", ""]
          break
        default:
          output = [`cat: ${filename}: No such file or directory`, ""]
      }

      setHistory((prev) => [...prev, { input: input.trim(), output }])
      setInput("")
      return
    }

    // Handle history command
    if (trimmedInput === "history") {
      const historyOutput = history.map((cmd, index) => `${index + 1}  ${cmd.input}`).slice(-10)
      historyOutput.push("")
      setHistory((prev) => [...prev, { input: input.trim(), output: historyOutput }])
      setInput("")
      return
    }

    // Handle external links
    if (trimmedInput === "github") {
      window.open("https://github.com/timhongphuc", "_blank")
    }

    if (trimmedInput === "linkedin") {
      window.open("https://linkedin.com/in/timseufert", "_blank")
    }

    if (trimmedInput === "resume") {
      window.open("mailto:timhongphuc@proton.me?subject=Resume Request", "_blank")
    }

    const output = commands[trimmedInput] || [
      `Command not found: ${trimmedInput}`,
      'Type "help" to see available commands.',
      "",
    ]

    setHistory((prev) => [...prev, { input: input.trim(), output }])
    setInput("")
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="bg-black text-green-400 rounded-lg shadow-2xl border border-gray-700 font-mono text-sm">
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-xs">tim@portfolio:~$</span>
              <div className="w-6"></div>
            </div>

            <div ref={terminalRef} className="p-3 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
              {history.map((cmd, index) => (
                <div key={index} className="mb-2">
                  <div className="text-blue-400">
                    <span className="text-green-400">tim@portfolio:~$</span> {cmd.input}
                  </div>
                  {cmd.output.map((line, lineIndex) => (
                    <div key={lineIndex} className="text-green-400">
                      {line}
                    </div>
                  ))}
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex">
                <span className="text-green-400 mr-2">tim@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 outline-none"
                  placeholder="Type a command..."
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
