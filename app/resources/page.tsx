"use client"

import { useState } from "react"
import { Search, FileText, Download } from "lucide-react"

const resources = [
  { id: 1, title: "Program Guide 2023", type: "PDF", url: "#" },
  { id: 2, title: "Community Impact Report", type: "PDF", url: "#" },
  { id: 3, title: "Volunteer Handbook", type: "PDF", url: "#" },
  { id: 4, title: "Financial Aid Application", type: "PDF", url: "#" },
  { id: 5, title: "Workshop Presentation", type: "PPTX", url: "#" },
  { id: 6, title: "Research Findings", type: "PDF", url: "#" },
]

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg">{resource.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">Type: {resource.type}</p>
              <a href={resource.url} className="inline-flex items-center text-blue-600 hover:underline" download>
                <Download className="h-5 w-5 mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

