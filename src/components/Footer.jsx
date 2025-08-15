import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import portfolioData from '@/data/portfolioData.json';

function Footer() {
    const { personal } = portfolioData;

    return (
        <footer className="relative py-12 border-t border-gray-200 dark:border-white/10 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc] dark:from-[#0b1020] dark:via-[#0f172a] dark:to-[#0b1020] transition-colors duration-300 overflow-hidden">
            {/* subtle glow accents */}
            <div className="pointer-events-none absolute -top-16 -left-24 h-56 w-56 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="mb-2 md:mb-0 text-center md:text-left">
                        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-6">
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
        </footer>
    );
}

export default Footer;