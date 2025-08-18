import React from 'react';
import useSEO from '../hooks/useSEO.jsx';
import { Button } from './ui/button.jsx';
import { Card } from './ui/card.jsx';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import portfolioData from '@/data/portfolioData.json';

function Contact() {
    const { contact, personal, seo } = portfolioData;

    // SEO configuration for Contact page
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": `Contact ${personal.name}`,
        "description": `Get in touch with ${personal.name} for web development projects, collaborations, or questions`,
        "mainEntity": {
            "@type": "Person",
            "name": personal.name,
            "email": personal.email,
            "telephone": personal.phone,
            "url": "https://yourwebsite.com"
        }
    };

    useSEO({
        title: seo.pages.contact.title,
        description: seo.pages.contact.description,
        keywords: seo.keywords,
        canonicalUrl: "https://yourwebsite.com/contact",
        schemaData: contactSchema
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    // Safe color map with explicit light/dark classes (avoids dynamic dark: prefix)
    const colorMap = {
        indigo: {
            bg: 'bg-indigo-100 dark:bg-indigo-900/30',
            text: 'text-indigo-700 dark:text-indigo-300'
        },
        green: {
            bg: 'bg-green-100 dark:bg-green-900/30',
            text: 'text-green-700 dark:text-green-300'
        },
        orange: {
            bg: 'bg-orange-100 dark:bg-orange-900/30',
            text: 'text-orange-700 dark:text-orange-300'
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-1/4 -right-24 h-[500px] w-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-1/4 -left-24 h-[500px] w-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{contact.title}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {contact.description}
                    </p>
                </div>

                <div className="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-12 md:mb-16">
                    {contact.contactMethods.map((method, index) => {

                        let Icon = MdEmail;
                        if (method.type === 'phone') Icon = MdPhone;
                        if (method.type === 'location') Icon = MdLocationOn;

                        const colors = colorMap[method.color] || colorMap.indigo;

                        return (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="flex justify-center mb-4">
                                    <div className={`p-4 ${colors.bg} rounded-full`}>
                                        <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${colors.text}`} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {method.type.charAt(0).toUpperCase() + method.type.slice(1)}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{method.label}</p>
                                {method.type === 'email' ? (
                                    <a
                                        href={`mailto:${method.value}`}
                                        className="text-indigo-600 dark:text-indigo-300 hover:underline"
                                    >
                                        {method.value}
                                    </a>
                                ) : method.type === 'phone' ? (
                                    <a
                                        href={`tel:${method.value.replace(/\s+/g, '')}`}
                                        className="text-indigo-600 dark:text-indigo-300 hover:underline"
                                    >
                                        {method.value}
                                    </a>
                                ) : (
                                    <p className="text-indigo-600 dark:text-indigo-300">
                                        {method.value}
                                    </p>
                                )}
                            </Card>
                        );
                    })}
                </div>

                {/* Contact Form */}
                <div className="md:flex rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-white/10">
                    <div className="md:w-1/2 p-6 md:p-8 bg-indigo-600 text-white dark:bg-gradient-to-b dark:from-indigo-900/30 dark:to-purple-900/20 dark:text-gray-100">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">{contact.formTitle}</h2>
                        <p className="mb-6 text-indigo-100 dark:text-gray-300/90">
                            {contact.formDescription}
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold mb-3">Connect with me</h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`https://github.com/${personal.github.split('/').pop()}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-indigo-700 rounded-full hover:bg-indigo-800 transition-colors dark:bg-white/10 dark:hover:bg-white/15"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub className="h-5 w-5" />
                                </a>
                                <a
                                    href={`https://${personal.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-indigo-700 rounded-full hover:bg-indigo-800 transition-colors dark:bg-white/10 dark:hover:bg-white/15"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={`https://discord.com/users/pravat007`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-indigo-700 rounded-full hover:bg-indigo-800 transition-colors dark:bg-white/10 dark:hover:bg-white/15"
                                    aria-label="Twitter Profile"
                                >
                                    <FaDiscord className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-6 md:p-8 bg-white dark:bg-white/5 dark:border-l dark:border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Subject
                                </label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
                                    placeholder="Project inquiry / Collaboration / Other"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
                                    placeholder="Describe your project or inquiry..."
                                ></Textarea>
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;
