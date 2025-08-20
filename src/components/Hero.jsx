import React from 'react';
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import portfolioData from '@/data/portfolioData.json';
// import avatar from '@/assets/picofme.png';

function Hero() {
    const { hero, personal } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-1/4 -right-24 h-96 w-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-1/4 -left-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
            <div className='w-full  z-10 absolute inset-0 top-0 h-96'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,64L13.3,74.7C26.7,85,53,107,80,138.7C106.7,171,133,213,160,245.3C186.7,277,213,299,240,272C266.7,245,293,171,320,165.3C346.7,160,373,224,400,218.7C426.7,213,453,139,480,90.7C506.7,43,533,21,560,48C586.7,75,613,149,640,170.7C666.7,192,693,160,720,128C746.7,96,773,64,800,85.3C826.7,107,853,181,880,202.7C906.7,224,933,192,960,154.7C986.7,117,1013,75,1040,64C1066.7,53,1093,75,1120,122.7C1146.7,171,1173,245,1200,256C1226.7,267,1253,213,1280,192C1306.7,171,1333,181,1360,176C1386.7,171,1413,149,1427,138.7L1440,128L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path></svg>
            </div>
            <div className="absolute inset-0 -z-10">
                <div className="absolute bg-purple-500/30 dark:bg-purple-600/40 -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bg-indigo-500/30 dark:bg-indigo-600/40 -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-50 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="mb-4">
                    <img
                        src="/pravat.png"
                        alt={`${personal.name} - ${personal.title}`}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-6 border-4 border-gray-100 dark:border-white/10"
                        loading="eager"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    {hero.greeting} <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    {hero.subtitle}
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                    <Button asChild>
                        <a href="#projects" aria-label="View my projects">{hero.cta}</a>
                    </Button>
                    <Button variant="outline" asChild className="dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10">
                        <a href="#contact" aria-label="Contact me">Get In Touch</a>
                    </Button>
                </div>
                <div className="flex justify-center space-x-6">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <FaGithub className="h-6 w-6" />
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${personal.email}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        <MdEmail className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero