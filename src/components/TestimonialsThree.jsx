'use client';

import { testimonials } from '@/constants';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import { LazyVideoPlayer } from './video-js-example/lazy';

const isDev = process.env.NODE_ENV === 'development';

const TestimonialsThree = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isDev,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    centerMode: false,
    centerPadding: '0px',
    loop: true,
    draggable: true,

    responsive: [
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
    <section
      id='testimonials'
      className='testimonials-three py-120 bg-main-25 position-relative z-1 overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape one animation-scalation'
      />
      <div className='container'>
        <div className='row gy-4 align-items-center flex-wrap-reverse'>
          <div className='col-xl-7'>
            <Slider
              ref={sliderRef}
              {...settings}
              className='testimonials-three-slider'>
              {testimonials.map((testimonial) => (
                <div
                  className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'
                  key={testimonial.id}>
                  <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='cover-img rounded-circle'
                      width={90}
                      height={90}
                    />
                    <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                      <img
                        src='assets/images/icons/quote-two-icon.png'
                        alt=''
                      />
                    </span>
                  </div>
                  <p className='text-neutral-500 my-24 fw-normal text-xs'>
                    {testimonial.feedback}
                  </p>
                  <ul className='flex-align gap-8 mb-16'>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                  <h4 className='mb-16 text-lg'>{testimonial.name}</h4>
                  {/* <span className='text-neutral-500'>Student</span> */}
                </div>
              ))}
              {/* <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/testimonials-three-img2.png'
                    alt=''
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  Attending [University Name] was one of the best decisions I've
                  made. The{' '}
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star-half' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Ronald Richards</h4>
                <span className='text-neutral-500'>Student</span>
              </div>
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/testimonials-three-img1.png'
                    alt=''
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "The faculty at are not only experts in their fields but
                  teaching students."
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star-half' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Brooklyn Simmons</h4>
                <span className='text-neutral-500'>Student</span>
              </div>
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/testimonials-three-img3.png'
                    alt=''
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  As a faculty member at [University Name], I've had the
                  privilege of working
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star-half' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Courtney Henry</h4>
                <span className='text-neutral-500'>Student</span>
              </div>
              <div className='testimonials-three-item bg-white p-24 rounded-12 box-shadow-md'>
                <div className='w-90 h-90 rounded-circle position-relative mb-4'>
                  <img
                    src='assets/images/thumbs/testimonials-three-img3.png'
                    alt=''
                    className='cover-img rounded-circle'
                  />
                  <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute inset-block-end-0 inset-inline-end-0 mt--5 me--5'>
                    <img src='assets/images/icons/quote-two-icon.png' alt='' />
                  </span>
                </div>
                <p className='text-neutral-500 my-24'>
                  "The faculty at are not only experts in their fields but
                  teaching students."
                </p>
                <ul className='flex-align gap-8 mb-16'>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star' />
                  </li>
                  <li className='text-warning-600 text-xl d-flex'>
                    <i className='ph-fill ph-star-half' />
                  </li>
                </ul>
                <h4 className='mb-16 text-lg'>Brooklyn Simmons</h4>
                <span className='text-neutral-500'>Student</span>
              </div> */}
            </Slider>
          </div>
          <div className='col-xl-5 ps-xl-5'>
            <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-book-open' />
              </span>
              <h5 className='text-main-600 mb-0'>Testimonials</h5>
            </div>
            <h2 className='mb-24 wow bounceInRight'>What Our Community Says</h2>
            <p className='text-neutral-500 text-line-4 wow bounceInUp'>
              Welcome to our testimonial section, where members of our
              university community share their experiences and insights about
              life at Navaneetha Education Trust. We invite you to join us and
              be part of our inspiring journey of learning, growth, and
              achievement.
            </p>
            <div className='flex-align gap-16 mt-40'>
              <button
                title={'prev'}
                type='button'
                id='testimonials-three-prev'
                onClick={() => sliderRef.current.slickPrev()}
                className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'>
                <i className='ph ph-caret-left' />
              </button>
              <button
                title={'next'}
                type='button'
                id='testimonials-three-next'
                onClick={() => sliderRef.current.slickNext()}
                className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'>
                <i className='ph ph-caret-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='row mt-56 align-items-center justify-content-between gy-4'>
          <div className='col-lg-5 col-xl-5 wow bounceInLeft'>
            <div className='p-40 bg-white rounded-12 box-shadow-md border-start border-main-600 border-4 position-relative'>
              <span className='w-40 h-40 bg-main-two-600 flex-center border border-white border-2 rounded-circle position-absolute top-0 end-0 mt-16 me-16'>
                <img
                  src='assets/images/icons/quote-two-icon.png'
                  alt=''
                />
              </span>
              <div className='mb-24'>
                <p className='text-main-600 fs-4 fw-semibold mb-8' style={{ fontStyle: 'italic', lineHeight: '1.4' }}>
                  "Because Every Parents smile tells a story"
                </p>
              </div>
              <div className='pt-24 border-top border-gray-100'>
                <p className='text-neutral-500 fs-5 fw-medium' style={{ letterSpacing: '0.5px' }}>
                  "Happy Parents, Successful students, Bright Futures"
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-xl-7 wow bounceInRight'>
            <div className='video-player-wrapper rounded-20 overflow-hidden box-shadow-lg position-relative z-1'>
              <LazyVideoPlayer
                src='/videos/testimonial/testimonial1.mp4#t=0.001'
                isAspectRatio={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsThree;
