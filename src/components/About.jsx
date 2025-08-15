import React from 'react';
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button";
import portfolioData from '@/data/portfolioData.json';
import avatar from '@/assets/picofme.png';

function About() {
    const { about, personal, hero } = portfolioData;

    return (
        <section
            className="relative py-20 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300 overflow-hidden"
        >
            {/* subtle background glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* announcement pill */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                        <span>✨</span>
                        <span className="opacity-90">Transforming ideas into digital experiences</span>
                        <span>✨</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div>
                        <p className="text-3xl font-extrabold tracking-tight text-purple-600 dark:text-purple-300">{hero?.greeting || "Hello, I'm"}</p>
                        <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                            {personal?.name}
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                            {about?.description}
                        </p>

                        {/* key points as subtle chips */}
                        {about?.keyPoints?.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {about.keyPoints.map((point, index) => (
                                    <Badge key={index} className="bg-purple-50 text-purple-700 border border-purple-200 dark:bg-white/10 dark:text-gray-200 dark:border-white/10">{point}</Badge>
                                ))}
                            </div>
                        )}

                        {/* actions */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                                <a href={personal?.resume || personal?.linkedin || '#contact'} target="_blank" rel="noopener noreferrer">
                                    Download CV
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10">
                                <a href="#projects">View Projects</a>
                            </Button>
                        </div>
                    </div>

                    {/* Right avatar with glow */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/20 blur-2xl" />
                            <div className="rounded-full p-1 bg-gradient-to-br from-purple-500/40 to-indigo-500/40">
                                <img
                                    src={avatar}
                                    alt={`${personal?.name} - ${personal?.title}`}
                                    width={256}
                                    height={256}
                                    className="h-56 w-56 sm:h-64 sm:w-64 rounded-full object-cover ring-8 ring-purple-500/15 shadow-[0_0_60px_rgba(124,58,237,0.35)]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;