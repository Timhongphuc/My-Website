"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FaCode } from "react-icons/fa6"

interface Command {
  input: string
  output: string[]
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: ["Welcome to Tim's Terminal!", 'Type "help" to see available commands.', ""],
    },
  ])
  const [isVisible, setIsVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about    - Learn more about Tim",
      "  skills   - View technical skills",
      "  projects - See current projects",
      "  contact  - Get contact information",
      "  clear    - Clear terminal",
      "  github   - Open GitHub profile",
      "",
    ],
    about: [
      "Tim Seufert - High School Developer",
      "",
      "I'm a student passionate about programming and technology.",
      "Currently working on personal projects to enhance my skills.",
      "Always eager to learn new technologies and collaborate.",
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
    github: ["Opening GitHub profile...", "github.com/timhongphuc", ""],
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()

    if (trimmedInput === "clear") {
      setHistory([])
      setInput("")
      return
    }

    if (trimmedInput === "github") {
      window.open("https://github.com/timhongphuc", "_blank")
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
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Open Terminal"
        >
          <FaCode className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-80 bg-black text-green-400 rounded-lg shadow-2xl border border-gray-700 font-mono text-sm">
      <div className="flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-300 text-xs">tim@portfolio:~$</span>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white text-xs">
          ✕
        </button>
      </div>

      <div ref={terminalRef} className="p-3 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
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
  )
}
