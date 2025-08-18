import React from 'react';
import portfolioData from '@/data/portfolioData.json';
import ProjectCard from '@/components/ProjectCard';


function normalizeImagePath(src) {
    if (!src) return '/vite.svg';
    if (src.startsWith('/public/')) return src.replace('/public/', '/');
    return src;
}

function ProjectsGrid() {
    const { projects = {
        title: "All Projects",
        description: "A collection of my work",
        items: []
    } } = portfolioData || {};

    return (
        <div className="py-3 sm:py-5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto sm:px-3 sm:px-6 lg:px-8">


                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                    {projects.items.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={{
                                ...project,
                                image: normalizeImagePath(project.image),
                                tech: project.tags ? project.tags[0] : "Project"
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsGrid;