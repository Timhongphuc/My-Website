"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    subtitle: string
    description: string
    details: string
    image: string
    technologies: string[]
  }
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />

      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">{project.subtitle}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Main content with image */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Additional details */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Highlights:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Innovative approach to AI research and development</li>
              <li>• Focus on practical applications and real-world solutions</li>
              <li>• Continuous learning and experimentation with new technologies</li>
              <li>• Open-source contributions and community engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
