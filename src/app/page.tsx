import { Mail, Linkedin, Code, Brain, Award, School } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Shryuk Grandhi</h1>
          <p className="text-2xl mb-6 text-gray-100">AI Researcher | Software Developer | Entrepreneur</p>
          <div className="flex space-x-4">
            <a href="mailto:shryukgrandhi@gmail.com" 
               className="bg-white text-teal-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-100 transition-colors font-medium">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/shryuk-grandhi-52057531b/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-teal-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-100 transition-colors font-medium">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-lg text-gray-700 max-w-4xl">
          AI researcher and developer with experience in machine learning, robotics, and software development. 
          Founded a successful tutoring company and contributed to published AI research. Passionate about using 
          technology for positive social impact while maintaining academic excellence.
        </p>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
          <Code className="mr-2" />
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Driver Attention Detection System</h3>
            <p className="text-gray-700 mb-4">Developed 95% accurate automobile distraction alert algorithms during the Inspirit AI Program. Created innovative solutions for real-world safety challenges.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Python</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">AI</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Computer Vision</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">NRIVA Mobile Application</h3>
            <p className="text-gray-700 mb-4">Designed and implemented mobile app features serving 2000+ members. Led frontend development and user experience improvements, strengthening software development and collaboration capabilities.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Mobile Dev</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">UI/UX</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Backend</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Algoverse AI Research</h3>
            <p className="text-gray-700 mb-4">Led AI algorithm research focused on synthetic data generation. Contributed to published papers and research presentations while developing analytical problem-solving methodologies.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">AI Research</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Data Science</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Python</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
            <Award className="mr-2" />
            Leadership & Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Track & Field Captain</h3>
              <p className="text-gray-700 mb-4">Led varsity team, organized practices, and improved discus throw by 100%. Enhanced coach communication and team coordination skills.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Speech & Debate Team</h3>
              <p className="text-gray-700 mb-4">Senior varsity member who coached novices, arranged practices, and led debates. Enhanced public speaking and critical thinking abilities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
          <School className="mr-2" />
          Education
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Canyon Crest Academy</h3>
          <p className="text-gray-700 mb-4">Advanced Coursework:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "AP Computer Science A & Principles",
              "AP Calculus AB/BC",
              "AP Physics 1 & 2",
              "AP Biology",
              "AP Psychology",
              "AP Language",
              "Cybersecurity (CSU San Marcos)"
            ].map((course) => (
              <span key={course} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
            <Brain className="mr-2" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "AI/ML", "Mobile Development", "Robotics", "Unity", "Computer Vision"].map((skill) => (
                  <span key={skill} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Leadership</h3>
              <div className="flex flex-wrap gap-2">
                {["Team Management", "Public Speaking", "Event Planning", "Mentoring"].map((skill) => (
                  <span key={skill} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}