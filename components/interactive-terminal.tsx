"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

const InteractiveTerminal = () => {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ input: string; output: string[] }[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [history])

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
    history: ["Command history will be shown here after you use some commands!", ""],
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
    const trimmedInput = input.trim()

    if (!trimmedInput) return

    if (trimmedInput === "clear") {
      setHistory([])
      setInput("")
      return
    }

    if (commands[trimmedInput]) {
      setHistory((prev) => [...prev, { input: trimmedInput, output: commands[trimmedInput] }])
      setInput("")
      return
    }

    if (trimmedInput === "github") {
      window.open("https://github.com/timhongphuc", "_blank")
    }

    if (trimmedInput === "linkedin") {
      window.open("https://linkedin.com/in/timseufert", "_blank")
    }

    if (trimmedInput === "resume") {
      // You can replace this with actual resume download link
      window.open("mailto:timhongphuc@proton.me?subject=Resume Request", "_blank")
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

    // Update history command to show actual command history
    if (trimmedInput === "history") {
      const historyOutput = history.map((cmd, index) => `${index + 1}  ${cmd.input}`).slice(-10)
      historyOutput.push("")
      setHistory((prev) => [...prev, { input: input.trim(), output: historyOutput }])
      setInput("")
      return
    }

    setHistory((prev) => [
      ...prev,
      { input: trimmedInput, output: ["Command not found. Type 'help' for available commands.", ""] },
    ])
    setInput("")
  }

  return (
    <div
      className="bg-gray-800 text-green-400 p-4 rounded-md shadow-lg w-full h-96 overflow-y-auto font-mono text-sm"
      ref={terminalRef}
    >
      <div className="mb-2">Welcome to the interactive terminal. Type 'help' to see available commands.</div>
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="text-blue-500">&gt; {item.input}</div>
          {item.output.map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="mr-2 text-blue-500">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-700 text-green-400 flex-grow p-1 rounded-md focus:outline-none"
          placeholder="Enter command"
          autoFocus
        />
      </form>
    </div>
  )
}

export default InteractiveTerminal
