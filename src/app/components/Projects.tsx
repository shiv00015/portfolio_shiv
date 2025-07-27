'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

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
            {/* <div className='flex gap-10 mt-10 max-w-200 overflow-x-auto whitespace-nowrap scroll-smooth m-auto'>
                {[0, 1, 2, 4].map((index) => {
                    return <ProjectCard key={index} id={index} image="" description="" />
                })}
            </div> */}
            <div className='h-full w-full grid  grid-cols-[0.5fr_1fr] gap-1'>
                <Link href="/tracker">
                    <img src="/assets/Tracker_image.png" className='h-[300px] w-[300px] rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110 cursor-pointer' /></Link>
                <p className="text-lg font-medium italic text-white/80 text-justify">The Task Tracker is a fully featured, full-stack web application designed to help users organize and manage their tasks with ease. It includes a responsive and modern frontend built with Next.js and Tailwind CSS, providing a smooth user experience across devices. The interface allows users to create, update, complete, and delete tasks from a clean dashboard.
                    On the backend, the application is powered by Node.js, Express, and Prisma ORM with a PostgreSQL database. It follows SOLID principles and a modular service structure to ensure maintainability, scalability, and clean code architecture. The system includes secure user authentication, role-based access control (admin and user roles), and RESTful APIs for task management.
                    All services run inside a Dockerized environment using Docker Compose, ensuring consistent local development and simplified deployment. The database is managed through pgAdmin, making data operations transparent and developer-friendly.</p>
            </div>
        </div></>


}

export default Projects;