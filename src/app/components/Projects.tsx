'use client';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    // const [data, setData] = React.useState<any[]>([]);
    // const [loading, setLoading] = React.useState(true);
    // const scrollRef = React.useRef<HTMLDivElement>(null);

    // Clone scroll loop effect
    // React.useEffect(() => {
    //     const scrollEl = scrollRef.current;
    //     if (!scrollEl) return;

    //     const onScroll = () => {
    //         const scrollWidth = scrollEl.scrollWidth / 2;
    //         // if (scrollEl.scrollLeft >= scrollWidth) {
    //         //     scrollEl.scrollLeft = 0;
    //         // }
    //     };

    //     scrollEl.addEventListener("scroll", onScroll);
    //     return () => scrollEl.removeEventListener("scroll", onScroll);
    // }, []);


    // React.useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setData(json);
    //             setLoading(false);
    //         });
    // }, []);

    // console.log('data', data);


    return <>
        <div className="font-sans min-h-screen p-8 pb-20 sm:p-20" id="projects">
            <div className="relative w-max mb-15"><h1 className="text-4xl font-bold mb-2 label">Projects</h1>
                <div className="absolute -bottom-3 w-full h-2 bg-red-500">
                </div>
            </div>
            <div className='flex gap-10 mt-10 max-w-200 overflow-x-auto whitespace-nowrap scroll-smooth m-auto'>
                {[0, 1, 2, 4].map((index) => {
                    return <ProjectCard key={index} id={index} image="" description="" />
                })}
            </div>
        </div></>


}

export default Projects;