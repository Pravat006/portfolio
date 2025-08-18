import React from 'react';
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import portfolioData from '@/data/portfolioData.json';
import avatar from '@/assets/picofme.png';

function Hero() {
    const { hero, personal } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-1/4 -right-24 h-96 w-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-1/4 -left-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
            <img
                className='absolute top-0 left-0 w-full h-96 object-cover opacity-10'
                src="/public/wave.svg" alt="wave-svg" />
            {/* Enhanced background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bg-purple-500/30 dark:bg-purple-600/40 -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bg-indigo-500/30 dark:bg-indigo-600/40 -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-50 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="mb-4">
                    <img
                        src={avatar}
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