import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Organization</h1>
              <p className="text-xl mb-8">We're dedicated to making a positive impact in our community.</p>
              <div className="space-x-4">
                <Link
                  href="/programs"
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300"
                >
                  Our Programs
                </Link>
                <Link
                  href="/resources"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Resources
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Hero Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt={`News ${i}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">News Title {i}</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Link href="#" className="mt-4 inline-block text-blue-600 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

