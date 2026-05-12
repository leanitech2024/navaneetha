'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

export const LazyVideoPlayer = dynamic(
  () => import('./ejected-video').then((mod) => mod.EjectedVideoPlayer),
  {
    ssr: false,
    loading: () => (
      <>
        <Image
          src='/services/services-12.png'
          className='rounded-12 cover-img'
          alt=''
          data-tilt=''
          data-tilt-max={4}
          data-tilt-speed={500}
          data-tilt-perspective={5000}
          data-tilt-transition='1s'
          width={1408}
          height={768}
        />
        <span className='play-button position-absolute start-50 top-50 translate-middle z-1 w-72 h-72 flex-center bg-main-two-600 text-white rounded-circle text-2xl'>
          <i className='ph-fill ph-play' />
        </span>
      </>
    ),
  },
);
