'use client';

import Image from 'next/image';
import Slider from 'react-slick';

export default function SupportSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={'ratio ratio-1x1'}>
          <Image
            src={'/cert-1.png'}
            alt={'cert-1'}
            width={500}
            height={500}
            data-tilt=''
            data-tilt-max={10}
            data-tilt-speed={500}
            data-tilt-perspective={5000}
            data-tilt-full-page-listening=''
          />
        </div>
        <div className={'ratio ratio-1x1'}>
          <Image
            src={'/cert-3.png'}
            alt={'cert-3'}
            width={500}
            height={500}
            data-tilt=''
            data-tilt-max={10}
            data-tilt-speed={500}
            data-tilt-perspective={5000}
            data-tilt-full-page-listening=''
          />
        </div>
      </Slider>
    </div>
  );
}
