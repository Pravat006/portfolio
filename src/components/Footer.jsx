import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import portfolioData from '@/data/portfolioData.json';

function Footer() {
    const { personal } = portfolioData;
    return (
        <footer className="relative py-12  overflow-hidden">{/* Added relative and overflow-hidden */}
            {/* Footer-specific background glow */}
            <div className="pointer-events-none absolute -top-20 left-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-96 rounded-full bg-gray-900/10 dark:bg-gray-100/10 blur-2xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
                    </div>
                    <div className="col-span-2">
                        <div className="flex justify-center md:justify-end gap-6">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={`mailto:${personal.email}`}
                                aria-label="Email"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <MdEmail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;