import React, { useState, useEffect } from 'react';

const Temp = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata', // Set timezone to India
            };
            const formattedTime = now.toLocaleTimeString('en-US', options);
            setCurrentTime(formattedTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-xl text-indigo-400 font-medium mb-2">Hello, I'm a</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Frontend Web<br />Developer
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-xl text-lg">
                        A passionate and results-driven developer specializing in building beautiful and highly performant web applications with modern technologies like React, Next.js, and Tailwind CSS.
                    </p>

                    {/* Availability Badge */}
                    <div className="mt-8">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white animate-pulse">
                            <span className="h-2 w-2 rounded-full bg-white mr-2"></span>
                            Available for Work
                        </span>
                    </div>

                    {/* Current Time Display */}
                    <div className="mt-6 text-sm text-gray-500">
                        <p>Current Time: {currentTime} (Bhubaneswar, India)</p>
                    </div>
                </div>

                {/* Right Side: Image and Social Links */}
                <div className="flex-1 flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Social Icons (Optional: Add your links here) */}
                    <div className="flex gap-4 mt-6 text-gray-400">
                        {/* Replace with your SVG icons for GitHub, LinkedIn, Twitter, etc. */}
                        <a href="#" className="hover:text-indigo-400 transition-colors duration-300" aria-label="GitHub">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.6.8.576 4.765-1.589 8.2-6.094 8.2-11.387 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition-colors duration-300" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.18 20.45H3.66V9H7.18v11.45zM5.42 7.21c-1.16 0-2.1-.96-2.1-2.14 0-1.18.94-2.14 2.1-2.14 1.17 0 2.1.96 2.1 2.14 0 1.18-.93 2.14-2.1 2.14zm15.22 13.24h-3.52v-5.6c0-1.34-.02-3.08-1.87-3.08-1.87 0-2.16 1.46-2.16 2.99v5.69H9.55V9h3.38v1.54h.05c.47-.9 1.63-1.84 3.33-1.84 3.56 0 4.22 2.34 4.22 5.38v6.37z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Temp;
