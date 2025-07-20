import React from 'react';


const IntroCard = () => {
    return <>
        <div className="relative font-sans min-h-screen p-8 pb-20 gap-16
     sm:p-20 bg-[url('/assets/code.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bottom-0 opacity-200 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-xl 
         px-8 py-6 text-center text-white w-full min-h-100 grid grid-cols-[3fr_1fr]">
                <div className="h-full flex justify-center flex-col">
                    <h1 className="text-4xl font-bold mb-2">Shivprasad Birajdar</h1>
                    <p className="text-lg font-medium italic text-white/80">Full Stack Developer</p>
                    <div className="flex gap-10 w-full justify-center my-10">
                        <img src="/github.svg" alt='github' height="30" width="30" />
                        <img src="/instagram.svg" alt='github' height="32" width="32" />
                        <img src="/linkedin.svg" alt='github' height="24" width="24" />
                        <img src="/Xlogo.svg" alt='github' height="30" width="30" />
                    </div>
                </div>
                <div className="h-full flex justify-center flex-col">Photo</div>
            </div>
        </div></>
}

export default IntroCard;