import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
    return (
        <Card className="group relative h-64 sm:h-72 overflow-hidden border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                style={{
                    backgroundImage: `url(${project.image})`
                }}
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />

            {/* Content */}
            <CardContent className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white z-10">
                <div className="transform transition-all duration-500 mb-auto">
                    <Badge
                        className="mb-2 bg-blue-500/70 text-white border-none px-2 py-0.5"
                    >
                        {project.tech}
                    </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 mb-2 sm:mb-4">
                    {project.description}
                </p>

                {/* Links */}
                <CardFooter className="flex gap-2 sm:gap-3 mt-auto p-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs bg-black/50 hover:bg-black/80 px-2 sm:px-3 py-1.5 rounded-full transition-colors"
                        aria-label={`View source code for ${project.title}`}
                    >
                        <FaGithub className="text-sm" />
                        <span className="hidden xs:inline">Source Code</span>
                        <span className="inline xs:hidden">Code</span>
                    </a>

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs bg-blue-500/50 hover:bg-blue-500/80 px-2 sm:px-3 py-1.5 rounded-full transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        <span className="hidden xs:inline">Live Demo</span>
                        <span className="inline xs:hidden">Demo</span>
                    </a>
                </CardFooter>
            </CardContent>
        </Card>
    );
}

export default ProjectCard
