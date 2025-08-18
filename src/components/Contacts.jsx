import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Textarea } from './ui/textarea';
import { CardContent } from './ui/card';
import portfolioData from '@/data/portfolioData.json';

function Contacts() {
    const { contact } = portfolioData;
    const { personal } = portfolioData;

    return (
        <section id="contact" className="py-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{contact.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {contact.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MdEmail className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                                <span className="text-gray-600 dark:text-gray-300 break-all">{personal.email}</span>
                            </div>
                            <div className="flex items-center">
                                <FaGithub className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                                <span className="text-gray-600 dark:text-gray-300 break-all">{personal.github}</span>
                            </div>
                            <div className="flex items-center">
                                <FaLinkedin className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                                <span className="text-gray-600 dark:text-gray-300 break-all">{personal.linkedin}</span>
                            </div>
                        </div>
                        <hr className="my-8 border-gray-200 dark:border-white/10" />
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What I Can Help With</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                {contact.helpWith.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Card className="border-gray-100 dark:border-white/10">
                        <CardHeader>
                            <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            First Name
                                        </label>
                                        <Input id="firstName" placeholder="John" className="dark:bg-transparent dark:border-white/10 dark:text-white" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Last Name
                                        </label>
                                        <Input id="lastName" placeholder="Doe" className="dark:bg-transparent dark:border-white/10 dark:text-white" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="dark:bg-transparent dark:border-white/10 dark:text-white" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <Input id="subject" placeholder="Project Inquiry" className="dark:bg-transparent dark:border-white/10 dark:text-white" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <Textarea id="message" placeholder="Tell me about your project or how I can help..." rows={4} className="dark:bg-transparent dark:border-white/10 dark:text-white" />
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Contacts;