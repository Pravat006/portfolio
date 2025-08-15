import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from '@/data/portfolioData.json';
import { getBadgeColorClasses } from '@/utils/badgeColors';

function Skills() {
    // Adding defensive check for data structure
    const { skills = {
        title: "Skills & Technologies",
        description: "A comprehensive overview of the technologies and tools I work with.",
        categories: []
    } } = portfolioData || {};

    return (
        <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{skills.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {skills.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {skills.categories && skills.categories.map((category, index) => (
                        <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="dark:text-white">{category.name}</CardTitle>
                                <CardDescription className="dark:text-gray-300">{category.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.technologies && category.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            className={`${getBadgeColorClasses(tech)} border font-medium hover:shadow-sm transition-all`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;