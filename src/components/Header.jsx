import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHovering, setIsHovering] = useState(null);
    const [activeSection, setActiveSection] = useState('home');

    // Initialize theme and optionally sync with system
    useEffect(() => {
        try {
            const stored = localStorage.getItem('theme');
            const hasStored = !!stored;

            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialDark = hasStored ? stored === 'dark' : prefersDark;
            setIsDarkMode(initialDark);
            document.documentElement.classList.toggle('dark', initialDark);

            // If no stored preference, keep in sync with system changes
            let mql;
            let handler;
            if (!hasStored && window.matchMedia) {
                mql = window.matchMedia('(prefers-color-scheme: dark)');
                handler = (e) => {
                    const next = e.matches;
                    setIsDarkMode(next);
                    document.documentElement.classList.toggle('dark', next);
                };
                if (mql.addEventListener) mql.addEventListener('change', handler);
                else if (mql.addListener) mql.addListener(handler);

                return () => {
                    if (mql) {
                        if (mql.removeEventListener) mql.removeEventListener('change', handler);
                        else if (mql.removeListener) mql.removeListener(handler);
                    }
                };
            }
        } catch {
            // no-op
        }
    }, []);

    // Highlight active section on scroll (debounced with rAF)
    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        let ticking = false;

        const computeActive = () => {
            let currentSection = 'home';
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    computeActive();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        computeActive();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Header entrance animations (respect reduced motion)
    useEffect(() => {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const tl = gsap.timeline();
        tl.fromTo(
            '.header-container',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }
        );
        tl.fromTo(
            '.logo-text',
            { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2 },
            '-=0.5'
        );
        tl.fromTo(
            '.nav-item',
            { y: 50, opacity: 0, rotation: -5 },
            { y: 0, opacity: 1, rotation: 0, duration: 0.7, stagger: 0.1, ease: 'back.out(1.7)' },
            '-=0.8'
        );

        gsap.to('.header-bg', {
            backgroundPosition: '100% 50%',
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        return () => {
            tl.kill();
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = isMenuOpen ? 'hidden' : original || '';
        return () => {
            document.body.style.overflow = original;
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen((v) => !v);
    };

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        document.documentElement.classList.toggle('dark', next);
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
        } catch {
            // no-op
        }
    };

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            setIsMenuOpen(false);
            window.scrollTo({ top: section.offsetTop - 64, behavior: 'smooth' });
        }
    };

    // Handle nav item hover animations
    const handleHover = (index) => {
        setIsHovering(index);
        gsap.to(`.nav-item:nth-child(${index + 1})`, { scale: 1.1, color: '#3b82f6', fontWeight: '600', duration: 0.3, ease: 'power2.out' });
    };

    const handleHoverExit = (index) => {
        setIsHovering(null);
        gsap.to(`.nav-item:nth-child(${index + 1})`, { scale: 1, color: '#4b5563', fontWeight: '400', duration: 0.3, ease: 'power2.out' });
    };

    // Navigation items with their respective section IDs
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <nav className="header-container fixed top-0 w-full z-50">
            <div
                className="header-bg absolute inset-0 bg-gradient-to-r from-[#f8fafc]/90 via-[#eef2ff]/85 to-[#f8fafc]/90 dark:from-[#0b1020]/80 dark:via-[#0f172a]/70 dark:to-[#0b1020]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300"
                style={{ backgroundSize: '200% 100%' }}
            ></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="logo-container relative overflow-hidden">
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('home');
                            }}
                        >
                            <h1 className="logo-text font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                                Pravat Behera
                            </h1>
                        </a>
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 logo-underline"></div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className={`nav-item text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative px-2 py-1 transition-colors ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHoverExit(index)}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300 ${isHovering === index ? 'scale-x-100' : ''}`}
                                ></span>
                            </a>
                        ))}
                    </div>

                    {/* Right-side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">{/* Use global bg */}
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className={`px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded transition-colors ${activeSection === item.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
