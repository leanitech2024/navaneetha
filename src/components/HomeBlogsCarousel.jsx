'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from 'react-slick';

export default function HomeBlogsCarousel({ posts }) {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings} className='blog-two-slider'>
        {posts.map((post) => (
          <div
            className='scale-hover-item bg-white rounded-16 p-12 h-100'
            data-aos='fade-up'
            data-aos-duration={200}>
            <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
              <Link
                href={`/blogs/${post.metadata.slug}`}
                className='w-100 h-100 ratio ratio-16x9'>
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className='scale-hover-item__img rounded-12 cover-img transition-2'
                  width={600}
                  height={400}
                />
              </Link>
              <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium'>
                <h3 className='mb-0 text-white fw-medium'>21</h3>
                DEC
              </div>
            </div>
            <div className='pt-32 pb-24 px-16 position-relative'>
              <h4 className='mb-28'>
                <Link
                  href={`/blogs/${post.metadata.slug}`}
                  className='link text-line-2'>
                  {post.metadata.title}
                </Link>
              </h4>
              <div className='flex-align gap-14 flex-wrap my-20'>
                <div className='flex-align gap-8'>
                  <span className='text-neutral-500 text-2xl d-flex'>
                    <i className='ph ph-user-circle' />
                  </span>
                  <span className='text-neutral-500 text-lg'>
                    By {post.metadata.author}
                  </span>
                </div>
                <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                <div className='flex-align gap-8'>
                  <span className='text-neutral-500 text-2xl d-flex'>
                    <i className='ph-bold ph-eye' />
                  </span>
                  <span className='text-neutral-500 text-lg'>1.6k</span>
                </div>
                <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                <div className='flex-align gap-8'>
                  <span className='text-neutral-500 text-2xl d-flex'>
                    <i className='ph ph-chat-dots' />
                  </span>
                  <span className='text-neutral-500 text-lg'>24</span>
                </div>
              </div>
              <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  href={`/blogs/${post.metadata.slug}`}
                  className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                  tabIndex={0}>
                  Read More
                  <i className='ph ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex-align gap-16 mt-40 justify-content-center'>
        <button
          title={'Prev'}
          type='button'
          id='blog-two-prev'
          onClick={() => sliderRef.current.slickPrev()}
          className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'>
          <i className='ph ph-caret-left' />
        </button>
        <button
          title={'Next'}
          type='button'
          id='blog-two-next'
          onClick={() => sliderRef.current.slickNext()}
          className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'>
          <i className='ph ph-caret-right' />
        </button>
      </div>
    </>
  );
}
