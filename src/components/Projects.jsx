import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import portfolioData from '@/data/portfolioData.json';
import { getBadgeColorClasses } from '@/utils/badgeColors.js';

function normalizeImagePath(src) {
    if (!src) return '/vite.svg';
    // If user mistakenly added /public prefix (Vite serves from root), strip it
    if (src.startsWith('/public/')) return src.replace('/public/', '/');
    return src;
}

function Projects() {
    // Adding defensive check for data structure
    const { projects = {
        title: "Projects",
        description: "My recent work",
        items: []
    } } = portfolioData || {};

    return (
        <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{projects.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {projects.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.items.map((project, index) => (
                        <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={normalizeImagePath(project.image)}
                                    alt={project.title || 'Project thumbnail'}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <CardHeader className="py-3 px-4">
                                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </CardTitle>
                                {project.subtitle && (
                                    <CardDescription className="dark:text-gray-300">{project.subtitle}</CardDescription>
                                )}
                            </CardHeader>
                            <CardContent className="flex-grow py-2 px-4">
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags && project.tags.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            className={`${getBadgeColorClasses(tech)} border text-xs font-medium py-0`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-2 pb-2 px-4 border-t border-gray-100 dark:border-white/10">
                                <Button variant="outline" size="sm" className="h-8 px-2" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1" aria-label={`View code for ${project.title}`}>
                                        <FaGithub className="h-3 w-3" />
                                        <span className="text-xs">Code</span>
                                    </a>
                                </Button>
                                <Button size="sm" className="h-8 px-2" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1" aria-label={`Open live demo for ${project.title}`}>
                                        <span className="text-xs">Live Demo</span>
                                        <FiExternalLink className="h-3 w-3" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;