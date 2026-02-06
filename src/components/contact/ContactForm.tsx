'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
          <Send className="h-4 w-4 text-green-600" />
        </div>
        <h3 className="font-heading text-base font-bold text-navy">Enquiry Submitted</h3>
        <p className="mt-2 text-sm text-slate-600">
          Our team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          placeholder="Full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          placeholder="you@company.co.za"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
          Organisation
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          placeholder="Organisation name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          placeholder="Describe your operational requirements"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40 disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
