export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold mb-2">Adam&apos;s Portfolio</h1>
        <p className="text-xl">
          Bla | BlaAAA | Bla
        </p>
      </header>

      {/* About Me */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6">
          The quick brown fox jumps over the lazy dog.
        </p>
        <a href="/about" className="text-blue-500 hover:underline">
          Learn more about me &rarr;
        </a>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 px-4 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project One</h3>
            <p className="mb-4">
              A brief description of this project, highlighting its key features
              and technologies used.
            </p>
            <a
              href="/projects/project-one"
              className="text-blue-400 hover:underline"
            >
              View Details &rarr;
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
            <p className="mb-4">
              A brief description of this project, highlighting its key features
              and technologies used.
            </p>
            <a
              href="/projects/project-two"
              className="text-blue-400 hover:underline"
            >
              View Details &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <li className="bg-gray-800 p-4 rounded text-center">
            JavaScript
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            TypeScript
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            React
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            Next.js
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            Node.js
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            Tailwind CSS
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            Docker
          </li>
          <li className="bg-gray-800 p-4 rounded text-center">
            AWS
          </li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="py-8 text-center bg-gray-800">
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="mb-4">
          Have a project in mind or just want to say hi? Reach out and let&apos;s
          connect!
        </p>
        <a
          href="mailto:adam@example.com"
          className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </footer>
    </div>
  );
}
