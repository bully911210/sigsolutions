'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/data';

export default function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Give iframe time to load
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h3 className="font-heading text-sm font-bold text-navy">
              Schedule a 30-Minute Discovery Call
            </h3>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            Open in new tab <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="relative" style={{ minHeight: '650px' }}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <Calendar className="mx-auto mb-3 h-10 w-10 text-blue-200" />
              <p className="text-sm text-slate-400">Loading calendar...</p>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={CALENDLY_URL}
          width="100%"
          height="650"
          frameBorder="0"
          title="Schedule a call with SIG Solutions"
          className="w-full"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
