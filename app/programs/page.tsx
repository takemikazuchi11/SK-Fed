"use client"

import { useState } from "react"
import Image from "next/image"

const programs = [
  { id: 1, name: "Youth Mentorship", category: "Education", image: "/placeholder.svg" },
  { id: 2, name: "Community Garden", category: "Environment", image: "/placeholder.svg" },
  { id: 3, name: "Tech Skills Workshop", category: "Technology", image: "/placeholder.svg" },
  { id: 4, name: "Senior Care", category: "Health", image: "/placeholder.svg" },
  { id: 5, name: "Art Therapy", category: "Arts", image: "/placeholder.svg" },
  { id: 6, name: "Financial Literacy", category: "Education", image: "/placeholder.svg" },
]

const categories = ["All", "Education", "Environment", "Technology", "Health", "Arts"]

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPrograms =
    selectedCategory === "All" ? programs : programs.filter((program) => program.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.category}</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

