import React from 'react';


const Header = () => {
    return <>
        <div className="sticky top-0 left-0 w-full flex justify-center py-4 inset-0 bg-black opacity-60 z-10">
            <div className="h-full flex justify-between w-[100%] left-0 mx-2.5">
                <div className="flex justify-between w-max gap-8 items-center h-full">
                    <a href="#about_me">
                        <button className="cursor-pointer hover:bg-red-500 hover:text-black border-2 transition-colors duration-300 border-red-500 px-2 py-1">About Me</button>
                    </a>
                    <a href="#projects">
                        <button className="cursor-pointer hover:bg-red-500 hover:text-black border-2 transition-colors duration-300 border-red-500 px-2 py-1">Projects</button>
                    </a>

                </div>
                <div className="flex justify-between w-max gap-8 items-center h-full">
                    <button className="cursor-pointer hover:bg-red-500 hover:text-black border-2 transition-colors duration-300 border-red-500 px-2 py-1">Resume</button>
                    <a href="#contact_me">
                        <button className="cursor-pointer hover:bg-red-500 hover:text-black border-2 transition-colors duration-300 border-red-500 px-2 py-1">Contact Me</button>
                    </a>
                </div>
            </div>
        </div></>
}

export default Header;