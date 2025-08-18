import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FiEye, FiX, FiDownload } from 'react-icons/fi';

function ResumePreview({ resumePath = "/pravat-resume.pdf", resumeImage = "/resume.png" }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
                    aria-label="Preview Resume"
                >
                    <FiEye className="mr-2" size={16} />
                    Preview Resume
                </Button>
            </DialogTrigger>
            <DialogContent
                className="p-0 overflow-hidden max-w-4xl w-[95vw] sm:w-[90vw] md:w-[80vw] rounded-lg"
                style={{
                    padding: 0,
                    maxHeight: '90vh',
                }}
            >
                <div className="relative bg-white dark:bg-gray-900 h-full overflow-auto">
                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
                        </div>
                    )}

                    {/* Resume PNG image */}
                    <div className="w-full flex justify-center p-2 sm:p-4">
                        <img
                            src={resumeImage}
                            alt="Resume Preview"
                            className="max-w-full max-h-[80vh] object-contain"
                            style={{
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                            }}
                            onLoad={() => setIsLoading(false)}
                            aria-label="Resume preview image"
                        />
                    </div>

                    {/* Download button (floating in bottom corner, responsive position) */}
                    <div className="fixed bottom-4 right-4 z-50 sm:absolute">
                        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                            <a
                                href={resumePath}
                                download="pravat-resume.pdf"
                                className="flex items-center gap-2"
                                aria-label="Download resume as PDF"
                            >
                                <FiDownload size={16} />
                                <span className="hidden sm:inline">Download PDF</span>
                                <span className="sm:hidden">PDF</span>
                            </a>
                        </Button>
                    </div>

                    {/* Close button (floating in top-right corner) */}
                    <DialogClose className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 shadow-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                        aria-label="Close resume preview"
                    >
                        <FiX size={20} />
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ResumePreview;
