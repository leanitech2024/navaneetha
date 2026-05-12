'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ModalVideo from 'react-modal-video';
import Slider from 'react-slick';

const isDev = process.env.NODE_ENV === 'development';

const BannerThree = () => {
  const sliderRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let WOW;
    if (typeof window !== 'undefined') {
      WOW = require('wowjs');
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();
    }
  }, []);

  const handleBeforeChange = () => {
    if (typeof document !== 'undefined') {
      const wowElements = document.querySelectorAll('.wow');
      wowElements.forEach((el) => {
        el.style.visibility = 'hidden';
        el.classList.remove('animated');
      });
    }
  };

  const handleAfterChange = () => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs');
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();

      const wowElements = document.querySelectorAll('.wow');
      wowElements.forEach((el) => {
        el.style.visibility = 'visible';
      });
    }
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isDev,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    fade: true,

    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return (
    <section className='banner-three position-relative responsive-arrow overflow-hidden'>
      <button
        title={'Prev Slider'}
        type='button'
        id='banner-three-prev'
        onClick={() => sliderRef.current.slickPrev()}
        className='slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute ms-16 inset-inline-start-0 top-50 translate-middle-y z-3'>
        <i className='ph-bold ph-arrow-left' />
      </button>
      <button
        title={'Next Slider'}
        type='button'
        id='banner-three-next'
        onClick={() => sliderRef.current.slickNext()}
        className='slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute me-16 inset-inline-end-0 top-50 translate-middle-y z-3'>
        <i className='ph-bold ph-arrow-right' />
      </button>
      <Slider ref={sliderRef} {...settings} className='banner-three__slider '>
        <div className='banner-three__item background-img bg-img linear-overlay position-relative'>
          <Image
            src={'/assets/images/thumbs/banner-three-img1.png'}
            alt={'hero-banner-1'}
            fill={true}
            sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            className={'object-cover object-center'}
            priority={true}
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                <div className='banner-content pe-md-4'>
                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='text-yellow-600 text-2xl d-flex'>
                      <i className='ph-bold ph-book-open' />
                    </span>
                    <h5 className='text-yellow-600 mb-0 fw-medium'>
                      Admissions Open
                    </h5>
                  </div>
                  <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                    Top Colleges & University in{' '}
                    <span
                      className='text-yellow-600  wow bounceInRight'
                      data-wow-duration='2s'
                      data-wow-delay='.5s'>
                      {' '}
                      Our City!{' '}
                    </span>{' '}
                  </h1>
                  <p className='text-white text-line-2 wow bounceInDown'>
                    Looking to enroll your ward in a prestigious school or
                    college? I can help ensure a smooth, hassle-free admission
                    process at the institution of your choice.
                  </p>
                </div>
                <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                  <Link
                    href='/contact'
                    className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    Apply Now
                    <i className='ph-bold ph-notepad d-flex text-lg' />
                  </Link>
                  <div
                    className='flex-align gap-16  wow bounceInRight'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    {/* <span
                      onClick={() => setIsOpen(true)}
                      className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                      <i className='ph-fill ph-play' />
                    </span> */}
                    <Link
                      href='/courses'
                      className={
                        'btn btn-outline-white rounded-pill flex-align d-inline-flex gap-8'
                      }
                      // className='text-white hover-text-decoration-underline hover-text-main-two-600'
                    >
                      Courses Available{' '}
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-three__item background-img bg-img linear-overlay position-relative'>
          <Image
            src={'/assets/images/thumbs/banner-three-img2.png'}
            alt={'hero-banner-1'}
            fill={true}
            sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            className={'object-cover object-center'}
            priority={true}
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                <div className='banner-content pe-md-4'>
                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='text-yellow-600 text-2xl d-flex'>
                      <i className='ph-bold ph-book-open' />
                    </span>
                    <h5 className='text-yellow-600 mb-0 fw-medium'>
                      Courses Available:
                    </h5>
                  </div>
                  <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                    MBBS, BDS, BTech, BE,{' '}
                    <span
                      className='text-yellow-600  wow bounceInRight'
                      data-wow-duration='2s'
                      data-wow-delay='.5s'>
                      {' '}
                      MBA, BBA,{' '}
                    </span>{' '}
                    BCA
                  </h1>
                  <p className='text-white text-line-2 wow bounceInDown'>
                    Application forms are out, and the admission process has
                    begun! Secure your seat today.
                  </p>
                </div>
                <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                  <Link
                    href='/contact'
                    className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    Apply Now
                    <i className='ph-bold ph-notepad d-flex text-lg' />
                  </Link>
                  <div
                    className='flex-align gap-16  wow bounceInRight'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    {/* <span
                      onClick={() => setIsOpen(true)}
                      className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                      <i className='ph-fill ph-play' />
                    </span> */}
                    <Link
                      href='/courses'
                      // className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      className={
                        'btn btn-outline-white rounded-pill flex-align d-inline-flex gap-8'
                      }>
                      See All Courses
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-three__item background-img bg-img linear-overlay position-relative'>
          <Image
            src={'/assets/images/thumbs/banner-three-img3.png'}
            alt={'hero-banner-1'}
            fill={true}
            sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            className={'object-cover object-center'}
            priority={true}
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                <div className='banner-content pe-md-4'>
                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='text-yellow-600 text-2xl d-flex'>
                      <i className='ph-bold ph-book-open' />
                    </span>
                    <h5 className='text-yellow-600 mb-0 fw-medium'>
                      Secure Your Future
                    </h5>
                  </div>
                  <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                    Engineering | PUC |
                    <span
                      className='text-yellow-600  wow bounceInRight'
                      data-wow-duration='2s'
                      data-wow-delay='.5s'>
                      {' '}
                      Top{' '}
                    </span>{' '}
                    Schools
                  </h1>
                  <p className='text-white text-line-2 wow bounceInDown'>
                    Connect with me today for guidance and support! Let’s secure
                    the best future for your wards!
                  </p>
                </div>
                <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                  <Link
                    href='/contact'
                    className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    Contact Us
                    <i className='ph-bold ph-notepad d-flex text-lg' />
                  </Link>
                  <div
                    className='flex-align gap-16  wow bounceInRight'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'>
                    {/* <span
                      onClick={() => setIsOpen(true)}
                      className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                      <i className='ph-fill ph-play' />
                    </span> */}
                    <Link
                      href='/courses'
                      // className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      className={
                        'btn btn-outline-white rounded-pill flex-align d-inline-flex gap-8'
                      }>
                      See All Courses{' '}
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* <Slider ref={sliderRef} {...settings} className='banner-three__slider '>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${'/assets/images/thumbs/banner-three-img1.png'})`,
            }}>
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Admissions Open
                      </h5>
                    </div>
                    <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      Top Colleges & University in{' '}
                      <span
                        className='text-yellow-600  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'>
                        {' '}
                        Our City!{' '}
                      </span>{' '}
                    </h1>
                    <p className='text-white text-line-2 wow bounceInDown'>
                      Looking to enroll your ward in a prestigious school or
                      college? I can help ensure a smooth, hassle-free admission
                      process at the institution of your choice.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/contact'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      Apply Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'>
                        Courses Available
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${'/assets/images/thumbs/banner-three-img2.png'})`,
            }}>
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Courses Available:
                      </h5>
                    </div>
                    <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      MBBS, BDS, BTech, BE
                      <span
                        className='text-yellow-600  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'>
                        {' '}
                        MBA, BBA,{' '}
                      </span>{' '}
                      BCA
                    </h1>
                    <p className='text-white text-line-2 wow bounceInDown'>
                      Application forms are out, and the admission process has
                      begun! Secure your seat today.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/contact'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      Apply Now
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'>
                        See All Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${'/assets/images/thumbs/banner-three-img3.png'})`,
            }}>
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                      <span className='text-yellow-600 text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='text-yellow-600 mb-0 fw-medium'>
                        Secure Your Future
                      </h5>
                    </div>
                    <h1 className='display2 mb-24 text-white fw-medium wow bounceInLeft'>
                      Engineering | PUC |
                      <span
                        className='text-yellow-600  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'>
                        {' '}
                        Top{' '}
                      </span>{' '}
                      Schools
                    </h1>
                    <p className='text-white text-line-2 wow bounceInDown'>
                      Connect with me today for guidance and support! Let’s
                      secure the best future for your wards!
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                    <Link
                      href='/contact'
                      className='btn btn-main rounded-pill flex-align gap-8  wow bounceInLeft'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      Contact Us
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </Link>
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'>
                        <i className='ph-fill ph-play' />
                      </span>
                      <Link
                        href='/about'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'>
                        Raghu Chavan: 9980030616
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider> */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default BannerThree;
