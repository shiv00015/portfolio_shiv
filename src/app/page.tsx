import Image from "next/image";
import codeImage from '../../public/assets/code.png'

export default function Home() {
  return (
    <>
      <div className="relative font-sans min-h-screen p-8 pb-20 gap-16
     sm:p-20 bg-[url('/assets/code.png')] bg-cover bg-center bg-no-repeat">
        {/* <div className="flex items-center justify-center bg-gradient-to-br from-primary to-black">
          <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-xl px-8 py-6 text-center text-white w-[90%] max-w-xl">
            <h1 className="text-4xl font-bold mb-2">Shivprasad Birajdar</h1>
            <p className="text-lg font-medium italic text-white/80">Full Stack Developer</p>
          </div>
        </div> */}
        <div className="absolute inset-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-xl 
         px-8 py-6 text-center text-white w-full min-h-100 grid grid-cols-[3fr_1fr]">
          <div className="h-full flex justify-center flex-col">
            <h1 className="text-4xl font-bold mb-2">Shivprasad Birajdar</h1>
            <p className="text-lg font-medium italic text-white/80">Full Stack Developer</p>
          </div>
          <div className="h-full flex justify-center flex-col">Photo</div>
        </div>
      </div>
      <div className="font-sans min-h-screen p-8 pb-20 gap-16
      sm:p-20">
        hello my name is shiv
      </div></>
  );
}
