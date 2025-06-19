'use client';

import { useState } from 'react';

export default function RequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/meokzdkz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
          Thank you for your request!
        </h3>
        <p className="mt-2 text-green-700 dark:text-green-300">
          We've received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="group relative box-content pl-4 pr-2 py-2 text-fd-background"
        >
          <div>Submit Another Request</div>
          <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-1 duration-300 border-t border-dashed"/>
          <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-1 duration-300 border-b border-dashed"/>

          <div className="-z-10 group-hover:border-fd-background border-transparent border-y border-dashed absolute top-1 left-1 h-[80%] w-full bg-fd-foreground/80 group-hover:scale-y-120 group-hover:bg-fd-primary duration-300"/>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Please provide details about your request, including any specific requirements, timeline, or budget considerations."
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
      </div>

      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-400"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="privacy" className="text-gray-700 dark:text-gray-300">
            I agree to the{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              privacy policy
            </a>{' '}
            and consent to being contacted regarding my request. *
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative box-content pl-4 pr-2 py-2 text-fd-background disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div>{isSubmitting ? 'Sending...' : 'Submit Request'}</div>
          <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-1 duration-300 border-t border-dashed"/>
          <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-1 duration-300 border-b border-dashed"/>

          <div className="-z-10 group-hover:border-fd-background border-transparent border-y border-dashed absolute top-1 left-1 h-[80%] w-full bg-fd-foreground/80 group-hover:scale-y-120 group-hover:bg-fd-primary duration-300"/>
        </button>
      </div>
    </form>
  );
} 