import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Award, Layers } from "lucide-react"
import portfolioData from '@/data/portfolioData.json'
import Techstack from "./Techstack"
import ProjectsGrid from "./ProjectsGrid"
import { FaGithub } from "react-icons/fa"

export default function PortfolioPage() {
    const tabs = [
        { id: "techStack", label: "Tech Stack", icon: Layers },
        { id: "projects", label: "Projects", icon: Code },
        { id: "Hackathon", label: "Hackathon", icon: Award },
    ]

    return (
        <section
            id="skills"
            className="relative min-h-[60vh] py-20 overflow-hidden flex items-center bg-transparent"
        >
            {/* Glow effects similar to About section */}
            <div className="pointer-events-none absolute -top-1/4 -left-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-1/4 -right-24 h-96 w-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-10">
                    Skills & Technologies
                </h2>
                {/* Tab Navigation */}
                <Tabs defaultValue="techStack" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-0 bg-transparent h-auto p-0 mb-8 md:mb-12">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="flex flex-col items-center space-y-1 sm:space-y-2 px-2 xs:px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 bg-transparent border border-transparent data-[state=active]:bg-purple-300 data-[state=active]:text-purple-700 data-[state=active]:border-purple-100 text-gray-700 dark:text-blue-300 hover:text-purple-700 hover:bg-purple-50 dark:hover:text-white dark:hover:bg-white/5"
                                >
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    <TabsContent value="projects" className="mt-0">
                        <ProjectsGrid />
                    </TabsContent>

                    <TabsContent value="Hackathon" className="mt-0">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioData.Hackathon.items.map((hack) => (
                                <Card
                                    key={hack.id}
                                    className="relative p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 flex flex-col items-center bg-indigo-100 "
                                >

                                    <div className="mb-4 flex justify-center items-center">
                                        <img
                                            src={hack.icon}
                                            alt="Company Icon"
                                            className="h-16 w-16 rounded-full object-cover border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-purple-700 dark:text-white leading-tight mb-1 text-center">{hack.title}</h3>
                                    <div className="flex justify-evenly items-center w-full">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-center">
                                            {hack.location}</p>

                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-center"> {hack.date}</p>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 text-center">{hack.description}</p>

                                    <div className="mt-auto pt-2 flex justify-center">
                                        <a
                                            href={hack.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-300 hover:underline"
                                            aria-label={`View code for ${hack.title}`}
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            Source
                                        </a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="techStack" className="mt-0">
                        <Techstack />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
