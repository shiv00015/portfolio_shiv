'use client';

'use client';
// import codeImage from '../../public/assets/code.png'

export default function Home() {
  return (
    <>
      <div className="sticky top-0 left-0 w-full flex justify-center py-3.5 inset-0 bg-black opacity-60 z-10">
        <div className="h-full flex justify-between w-[80%] left-0">
          <div className="flex justify-between w-max gap-10 items-center h-full">
            <a href="#about_me">
              <button className="cursor-pointer">About me</button>
            </a>
            <a href="#contact_me">
              <button className="cursor-pointer">Contact me</button>
            </a>
          </div>
          <button className="cursor-pointer">Resume</button>
        </div>
      </div>
      <div className="relative font-sans min-h-screen p-8 pb-20 gap-16
     sm:p-20 bg-[url('/assets/code.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bottom-0 opacity-200 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-xl 
         px-8 py-6 text-center text-white w-full min-h-100 grid grid-cols-[3fr_1fr]">
          <div className="h-full flex justify-center flex-col">
            <h1 className="text-4xl font-bold mb-2">Shivprasad Birajdar</h1>
            <p className="text-lg font-medium italic text-white/80">Full Stack Developer</p>
          </div>
          <div className="h-full flex justify-center flex-col">Photo</div>
        </div>



      </div>
      <div className="font-sans min-h-screen p-8 pb-20 
      sm:p-20" id="about_me">
        <div className="relative w-max my-15"><h1 className="text-4xl font-bold mb-2 label">About me</h1>
          <div className="absolute -bottom-3 w-full h-2 bg-red-500">
          </div>
        </div>
        <div>
          <p className="text-lg font-medium italic text-white/80">
            Full-Stack Developer with 3 years of experience building scalable, user-focused web applications.Skilled in designing clean architectures, writing modular code, and optimizing performance. Experienced in secure authentication, real-time systems, and data-heavy interface handling. Passionate about building reliable solutions in Agile, fast-moving environments.
          </p>
        </div>
      </div>
      <div className="font-sans min-h-screen p-8 pb-20 
      sm:p-20" id="contact_me">
        <form className="max-w-md mx-auto p-6 bg-transparent shadow-md rounded-lg space-y-4" action="https://formspree.io/f/your-form-id" method="POST">
          <h2 className="text-2xl font-bold text-center">Contact Me</h2>

          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea name="message" rows={4} required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-700">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
