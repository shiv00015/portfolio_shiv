import React from 'react';
import ProjectCard from '@/app/components/ProjectCard';


const AboutMe = () => {
    const [data, setData] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

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
            {/* <div className='flex gap-10 mt-10 max-w-200 overflow-x-auto whitespace-nowrap scroll-smooth'>
                {data.slice(0, 4).map((item, index) => {
                    return <ProjectCard key={index} id={index} image={item.image} description={item.description} />
                })}
            </div> */}
        </div></>
}

export default AboutMe;