import Image from "next/image"

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/placeholder.svg" },
  { name: "Jane Smith", role: "COO", image: "/placeholder.svg" },
  { name: "Mike Johnson", role: "CTO", image: "/placeholder.svg" },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen py-20">
      <section className="container mx-auto px-4 mb-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6">
            Our mission is to empower individuals and communities through innovative programs and resources. We strive
            to create positive change and foster growth in every life we touch.
          </p>
          <p className="text-xl mb-6">
            Founded in 2010, we have been at the forefront of community development for over a decade. Our commitment to
            excellence and passion for making a difference drives everything we do.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

