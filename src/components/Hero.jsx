import React from 'react';
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import portfolioData from '@/data/portfolioData.json';
import avatar from '@/assets/picofme.png';

function Hero() {
    const { personal, hero } = portfolioData;

    return (
        <section className="h-dvh relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300 overflow-hidden">
            {/* subtle background glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <div className="mb-8">
                        <img
                            src={avatar}
                            alt={`${personal.name} - ${personal.title}`}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto mb-6 border-4 border-gray-100 dark:border-white/10"
                            loading="eager"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                        {hero.greeting} <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                        {personal.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
            </div>
        </section>
    )
}

export default Hero