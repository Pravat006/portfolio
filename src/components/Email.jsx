import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Email() {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');
        try {
            // Create a form element to send with emailjs.sendForm
            const form = document.createElement('form');
            Object.entries(data).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });

            await emailjs.sendForm(
                import.meta.env.VITE_YOUR_SERVICE_ID,
                import.meta.env.VITE_YOUR_TEMPLATE_ID,
                form,
                import.meta.env.VITE_YOUR_PUBLIC_KEY
            );
            setSuccessMsg("Message sent successfully!");
            reset();
        } catch (error) {
            setErrorMsg("Failed to send message. Please try again later.", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:w-1/2 p-6 md:p-8 bg-white dark:bg-white/5 dark:border-l dark:border-white/10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                    </label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your name"
                        {...register('name', { required: "Name is required" })}
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
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
                        className={`w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                        {...register('email', {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
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
                        className={`w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white ${errors.subject ? 'border-red-500' : ''}`}
                        placeholder="Project inquiry / Collaboration / Other"
                        {...register('subject', { required: "Subject is required" })}
                    />
                    {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
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
                        className={`w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Describe your project or inquiry..."
                        {...register('message', { required: "Message is required" })}
                    ></Textarea>
                    {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <Button
                    type="submit"
                    className={`w-full bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 rounded-md px-4 py-2 transition-colors duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    aria-label="Send Message"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </Button>
                {errorMsg && <div className="text-red-500 text-sm mt-2">{errorMsg}</div>}
                {successMsg && <div className="text-green-600 text-sm mt-2">{successMsg}</div>}
            </form>
        </div>
    );
}

export default Email