'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import { LazyVideoPlayer } from './video-js-example/lazy';

const VideoOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 600,
    dots: true,
    arrows: false,
    infinite: true,
    draggable: true,
  };

  return (
    <section className='video pt-120'>
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24'>Highlights</h2>
        </div>
      </div>

      <div className='video-img position-relative half-bg'>
        <div className='container'>
          <Slider ref={sliderRef} {...settings}>
            <div className='px-2 px-md-5'>
              <LazyVideoPlayer
                src={'/videos/counselling.mp4'}
                poster={'/services/services-12.png'}
                isAspectRatio={true}
              />
            </div>
            <div className='px-2 px-md-5'>
              <LazyVideoPlayer
                src={'/videos/qna.mp4'}
                poster={'/services/services-13.png'}
                isAspectRatio={true}
              />
            </div>
            <div className='px-2 px-md-5'>
              <LazyVideoPlayer
                src={'/videos/Al Ameen College.mp4'}
                poster={'/services/services-11.png'}
                isAspectRatio={true}
              />
            </div>
            <div className='px-2 px-md-5'>
              <LazyVideoPlayer
                src={'/videos/NEET_06.mp4'}
                poster={'/services/neet-thumbnail.png'}
                isAspectRatio={true}
              />
            </div>
          </Slider>
        </div>

        {/* Custom Arrows matching hero slider styles and positioned outside the container */}
        <button
          title={'Prev Video'}
          type='button'
          onClick={() => sliderRef.current?.slickPrev()}
          className='slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute ms-16 inset-inline-start-0 top-50 translate-middle-y z-3'>
          <i className='ph-bold ph-arrow-left' />
        </button>
        <button
          title={'Next Video'}
          type='button'
          onClick={() => sliderRef.current?.slickNext()}
          className='slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute me-16 inset-inline-end-0 top-50 translate-middle-y z-3'>
          <i className='ph-bold ph-arrow-right' />
        </button>
      </div>
    </section>
  );
};

export default VideoOne;

