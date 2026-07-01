'use client';

import dynamic from 'next/dynamic';

export const LazyVideoPlayer = dynamic(
  () => import('./ejected-video').then((mod) => mod.EjectedVideoPlayer),
  {
    ssr: false,
    loading: () => (
      <div 
        className="w-100 flex-center bg-gray-100 rounded-12 position-relative" 
        style={{ aspectRatio: '16/9', minHeight: '300px', backgroundColor: '#f8f9fa' }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ),
  }
);


