import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BodyText, H2, LgText, SmText } from '@/ui/typography';
import { Container, FullWidthContainer } from '@/ui/containers';
import { Navigation, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/ui/buttons';
import Image from 'next/image';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';

register();

/**
 * @description - This component can be used on any page's hero section that would be a slider. It uses the Swiper slider.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */

export const HeroWithSlider = () => {
  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization

  const heroSlidesCopy = [
    {
      title: 'Heading',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      imgSrc: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
      // alts to be added if not decorative
      imgAlt: '',
      imgW: '1214',
      imgH: '858',
    },
    {
      title: 'Title 2',
      desc: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
      imgSrc: 'https://via.placeholder.com/600x400/00EBF4/000000',
      imgAlt: '',
      imgW: '1214',
      imgH: '858',
    },
    {
      title: 'Title 23',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imgSrc: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
      imgAlt: '',
      imgW: '1214',
      imgH: '858',
    },
    {
      title: 'title 77',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      imgSrc: 'https://via.placeholder.com/600x400/EBF3F9/000000',
      imgAlt: '',
      imgW: '1214',
      imgH: '858',
    },
  ];
  return (
    <Swiper
      slidesPerView={1}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='mySwiper'>
      {' '}
      {heroSlidesCopy.map((slide, index) => (
        <SwiperSlide key={index}>
          <Container className='my-20'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
              <div className='lg:order-last'>
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  width={slide.imgW}
                  height={slide.imgH}
                />
              </div>
              <div className='text-center lg:text-left'>
                <H2 className='mb-4'>{slide.title}</H2>
                <BodyText className='mb-12 lg:mr-10'>{slide.desc}</BodyText>
                <Button
                  link='#'
                  label='Learn more'
                  variant='primary'
                  type='link'
                  className='w-auto'
                />
              </div>
            </div>
          </Container>
        </SwiperSlide>
      ))}{' '}
    </Swiper>
  );
};

/**
 * @description - This component is a gallery slider.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */

export const GallerySlider = () => {
  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization

  const GalleryImages = [
    {
      imgSrc: 'https://via.placeholder.com/600x400/00455F/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/115C89/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/00EBF4/000000',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/D6EBF4/000000',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/EBF3F9/000000',
      imgAlt: 'nature image',
    },
  ];

  return (
    <Container>
      <Swiper
        slidesPerView={5}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 3,
          },
          375: {
            slidesPerView: 1,
          },
        }}
        navigation
        loop
        modules={[Navigation]}
        className='mySwiper'>
        {GalleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.imgSrc}
              alt={image.imgAlt}
              width={556}
              height={192}
              className='relative w-full px-4'
            />
          </SwiperSlide>
        ))}{' '}
      </Swiper>{' '}
    </Container>
  );
};

/**
 * @description - This component is a slider component for the testimonials.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */

export const Testimonials = () => {
  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization

  const data = [
    {
      reviewerImgSrc: 'https://via.placeholder.com/60x60/00EBF4/ffffff',
      reviewerName: 'Someone',
      reviewerInfo: 'Title / Department',
      url: '#',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      reviewerImgSrc: 'https://via.placeholder.com/60x60/D6EBF4/ffffff',
      reviewerName: 'Someone',
      reviewerInfo: 'Title / Department',
      url: '#',
      comment:
        'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      reviewerImgSrc: 'https://via.placeholder.com/60x60/00EBF4/ffffff',
      reviewerName: 'Someone',
      reviewerInfo: 'Title / Department',
      url: '#',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      reviewerImgSrc: 'https://via.placeholder.com/60x60/D6EBF4/ffffff',
      reviewerName: 'Someone',
      reviewerInfo: 'Title / Department',
      url: '#',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];
  return (
    <div className='mt-5'>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='mySwiper'>
        {data.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className='!h-auto'>
            <TestimonialCard
              reviewerImgSrc={testimonial.reviewerImgSrc}
              reviewerName={testimonial.reviewerName}
              reviewerInfo={testimonial.reviewerInfo}
              url={testimonial.url}>
              {testimonial.comment}
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/**
 *
 * @param {string} reviewerImgSrc - the src for the reviewer's image
 * @param {string} reviewerImgAlt - the alt for the reviewer's image
 * @param {string} reviewerName - the name of the reviewer
 * @param {string} reviewerInfo - This could be the department or title/profession or any other related information of the reviewer that we would like to display.
 * @param {url} url - This could be a link to the reviewer's website or profile.
 *
 * @returns
 */
export const TestimonialCard = ({
  reviewerImgSrc,
  reviewerImgAlt,
  reviewerName,
  reviewerInfo,
  url,
  children,
}) => {
  return (
    <div className='p-8 min-h-[400px]'>
      <LgText className='font-normal text-center text-black lg:pr-10 lg:text-left'>
        {/* the reviewer's comment goes here */}
        {children}
      </LgText>
      <div className='block px-0 mt-16 lg:flex'>
        <div className='w-full lg:flex-none lg:w-16'>
          <Image
            src={reviewerImgSrc}
            alt={reviewerImgAlt ? reviewerImgAlt : 'ion8 testimonial'}
            width={52}
            height={52}
            className='mx-auto rounded-full'
          />
        </div>
        <div className='mt-2 text-center lg:mt-0 lg:ml-2 lg:items-start lg:text-left lg:flex-col'>
          <Link
            href={url}
            target={'_blank'}>
            <SmText className='font-semibold text-teal'>{reviewerName}</SmText>
            <SmText className='font-normal text-black'>{reviewerInfo}</SmText>
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * @description - This component displays a list of images that when clicked will control which slide should be displayed in the slider beneath it. The slider is a grid of two cols; image on the left and text information on the right.
 * @param - the potential prop can the data file
 */

export const ControlledSliderWImages = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const data = [
    {
      imgSrc: 'https://via.placeholder.com/500x300/00AEEF/ffffff',
      imgAlt: '',
      imgW: 500,
      imgH: 300,
      title: 'Slide One',
      desc: 'Wafer I love icing cookie toffee shortbread I love cookie. Tart liquorice icing croissant topping tootsie roll. Croissant liquorice danish carrot cake I love candy canes tootsie roll. Sugar plum dessert danish caramels icing jelly beans cheesecake jelly. Bonbon danish toffee soufflé danish caramels pie soufflé.',
      readMoreLink: '#',
    },
    {
      imgSrc: 'https://via.placeholder.com/500x300/00EBF4/000000',
      imgAlt: '',
      imgW: 500,
      imgH: 300,
      title: 'Slide Two',
      desc: 'Sweet icing apple pie cotton candy I love. Sweet topping wafer pie oat cake I love pudding danish sugar plum. Cheesecake I love danish danish jelly-o. Apple pie I love macaroon pastry danish I love.',
      readMoreLink: '#',
    },
    {
      imgSrc: 'https://via.placeholder.com/500x300/EBF3F9/000000',
      imgAlt: '',
      imgW: 500,
      imgH: 300,
      title: 'Slide Three',
      desc: 'Toffee dessert ice cream danish pastry sweet roll. Cotton candy I love candy cookie cake. Pastry I love lemon drops cupcake pie oat cake. Fruitcake tiramisu chocolate fruitcake caramels soufflé cake. I love I love bonbon chocolate bar chocolate chocolate cake dragée chupa chups pudding.',
      readMoreLink: '#',
    },
    {
      imgSrc: 'https://via.placeholder.com/500x300/00AEEF/ffffff',
      imgAlt: '',
      imgW: 500,
      imgH: 300,
      title: 'Slide Four',
      desc: 'Wafer I love icing cookie toffee shortbread I love cookie. Tart liquorice icing croissant topping tootsie roll. Croissant liquorice danish carrot cake I love candy canes tootsie roll. Sugar plum dessert danish caramels icing jelly beans cheesecake jelly. Bonbon danish toffee soufflé danish caramels pie soufflé.',
      readMoreLink: '#',
    },
    {
      imgSrc: 'https://via.placeholder.com/500x300/EBF3F9/000000',
      imgAlt: '',
      imgW: 500,
      imgH: 300,
      title: 'Slide Five',
      desc: 'Toffee dessert ice cream danish pastry sweet roll. Cotton candy I love candy cookie cake. Pastry I love lemon drops cupcake pie oat cake. Fruitcake tiramisu chocolate fruitcake caramels soufflé cake. I love I love bonbon chocolate bar chocolate chocolate cake dragée chupa chups pudding.',
      readMoreLink: '#',
    },
  ];
  return (
    <>
      <ClickableImages
        controlledSwiper={controlledSwiper}
        data={data}
      />
      <Swiper
        onSwiper={setControlledSwiper}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        loop
        modules={[Navigation]}
        className='mySwiper'>
        {data.map((slide, sliderIndex) => (
          <SwiperSlide key={sliderIndex}>
            <div className='grid gap-8 px-10 lg:grid-cols-4 xl:gap-16 md:px-16 xl:px-28'>
              <div className='my-auto col-span-2'>
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  width={slide.imgW}
                  height={slide.imgH}
                  sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw'}
                  className=' mx-auto'
                />
              </div>
              <div className='col-span-2 text-center lg:text-left'>
                <H2 className='mb-8 text-gray-900'>{slide.title}</H2>
                <BodyText className='text-gray-900'>{slide.desc}</BodyText>
                {slide.readMoreLink ? (
                  <Link
                    href={slide.readMoreLink}
                    className='block mt-8'>
                    Read more
                  </Link>
                ) : null}
              </div>{' '}
            </div>
          </SwiperSlide>
        ))}{' '}
      </Swiper>
    </>
  );
};

/**
 * @description - this component is a child component of the ControlledSliderWImages component. Lists a set of clickable images in a row. When one of the images is clicked, then the slider slides to the relevant index and displays the relevant information.
 * @param {state} controlledSwiper - the state variable that controls the index of the slide
 * @param {array} data - the information stored in data const
 *
 */

const ClickableImages = ({ controlledSwiper, data }) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap my-[70px] border-b pb-8 border-gray-300 justify-center mx-4 md:mx-0'>
      {data.map((image, index) => (
        <div
          key={index}
          className='inline-block pb-8 my-auto'>
          <button
            className='relative hover:opacity-70 first:pl-2 last:pr-2'
            onClick={() => controlledSwiper.slideTo(index)}>
            <Image
              src={image.imgSrc}
              alt={image.imgAlt}
              width={image.imgW}
              height={image.imgH}
              sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw'}
              className='w-full'
            />
          </button>
        </div>
      ))}
    </div>
  );
};
