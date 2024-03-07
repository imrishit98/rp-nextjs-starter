import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BodyText, H2, H3, LgText, SmText } from '@/ui/typography';
import { Container, FullWidthContainer } from '@/ui/containers';
import { Grid, Navigation, Pagination, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/ui/buttons';
import { CloseIcon } from '@/svgs/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from 'flowbite-react';
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
 * @description - This component is a gallery slider showing a row of 4 images at a time in large devices. It has navigations to slide to the right or left image in the slider.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 *
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
 * @description - This component is a slider component for the testimonials displaying two testimonials per slide. This component uses a child component for each of the testimonials.
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
 * @description - this component is a child component of the Testimonials slider component creating each testimonial card.
 * @param {string} reviewerImgSrc - the src for the reviewer's image
 * @param {string} reviewerImgAlt - the alt for the reviewer's image
 * @param {string} reviewerName - the name of the reviewer
 * @param {string} reviewerInfo - This could be the department or title/profession or any other related information of the reviewer that we would like to display.
 * @param {url} url - This could be a link to the reviewer's website or profile.
 *
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
 * @description - This component is a thumbnail gallery. When a thumbnail is clicked, the slider will slide to the related slide. Also when clicked on the enlarged image, a modal will pop up to further enlarge the image. The ThumbnailGallerySlider is developed to display the following information: Title, details and a list of images.
 * @param - the potential prop for this component is the data that would be passed to it from a data file under utils/
 */
export const ThumbnailGallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization
  const data = {
    title: 'Thumbnail Gallery One',
    details: (
      <span>
        Cookie I love soufflé pie pie tart. Sweet macaroon ice cream marshmallow cupcake
        halvah sweet sweet roll cotton candy. I love carrot cake sweet roll sugar plum
        sweet roll. <br />
        <br /> Jelly pastry pudding marshmallow bonbon pudding. Shortbread gummi bears
        marshmallow jelly cake chocolate cake. Cookie oat cake cake I love chupa chups
        lollipop I love. Carrot cake pastry topping chupa chups I love. Bear claw jelly
        beans marzipan I love sweet roll I love icing chocolate. I love pudding candy
        canes I love I love. Shortbread powder topping gingerbread pastry powder oat
        cake. I love gummi bears dessert gingerbread jujubes marzipan I love.
      </span>
    ),
    images: [
      {
        src: 'https://via.placeholder.com/600x400/115C89/ffffff',
        alt: '',
        width: 1150,
        height: 864,
      },
      {
        src: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
        alt: '',
        width: 818,
        height: 512,
      },
      {
        src: 'https://via.placeholder.com/600x400/00EBF4/000000',
        alt: '',
        width: 818,
        height: 512,
      },
      {
        src: 'https://via.placeholder.com/600x400/D6EBF4/000000',
        alt: '',
        width: 818,
        height: 512,
      },
    ],
  };
  return (
    <div className='grid lg:grid-cols-[1fr_1fr] lg:gap-[50px] mt-12'>
      <div className='max-w-full min-w-full'>
        {/* Main image viewer */}
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Thumbs]}
          className='mySwiper'>
          {data.images.map(image => (
            // maps through the images one at a time
            <SwiperSlide key={image.src}>
              <ImageCanGoModal
                imgSrc={image.src}
                imgAlt={image.alt}
                imgW={image.width}
                imgH={image.height}
                className='object-contain rounded-[8px] '
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          spaceBetween={10}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className='mySwiper'>
          {/* mapping through the images to create the thumbnail grid gallery in the left col of the grid */}
          {data.images.map(image => (
            <SwiperSlide
              key={image.src}
              className='mt-[10px]'>
              <div className='hover:border-light-blue border-cool-grey border bg-white hover:cursor-pointer'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className='w-full h-[98px] object-contain p-2'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* the second col on the right to display the title and details of the image gallery */}
      <div className='py-5'>
        <H3 className='mb-8'>{data.title}</H3>
        <BodyText>{data.details}</BodyText>
      </div>
    </div>
  );
};

/**
 * @description - This component is used to display a modal when clicked on an image. This component can also be used independently whenever we need a clickable image and a modal to be displayed.
 * @param {url} imgSrc - url of the image
 * @param {string} imgAlt - image alt text
 * @param {number} imgW - width of the image
 * @param {number} imgH - height of the image
 *
 */
export const ImageCanGoModal = ({ imgSrc, imgAlt, imgH, imgW }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className='relative align-top group overflow-hidden'
        onClick={() => setIsModalOpen(true)}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgW}
          height={imgH}
          sizes={'(max-width: 766px) 100vw, (max-width: 1280px) 75vw'}
          className='relative lg:h-full lg:w-full bg-white p-5 hover:cursor-pointer'
        />
      </div>

      <ImageModal
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        imgOW={imgW}
        imgOH={imgH}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

/**
 * @description - this component uses the Flowbite-react Modal component in order to load the image in its original size
 * @param {boolean} isModalOpen - state variable to determine whether the modal is open or close
 * @param {*} setIsModalOpen - the state function that sets the state variable when the modal is either open or close
 * @param {url} imgSrc - url of the image
 * @param {number} imgOW - the original width of the image
 * @param {number} imgOH - the original height of the image
 * @param {string} imgAlt - the alt text
 */
export const ImageModal = ({
  isModalOpen,
  setIsModalOpen,
  imgSrc,
  imgOW,
  imgOH,
  imgAlt,
}) => {
  return (
    <Modal
      dismissible
      show={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='fixed left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto bg-gray-900 top-20 bg-opacity-80'>
      <div className='relative h-full mx-auto md:h-auto'>
        <div className='relative shadow'>
          {/* the modal close button */}
          <button
            type='button'
            className='absolute z-10 top-4 right-5 bg-transparent p-1.5 ml-auto inline-flex items-center lg:-mr-[30%] md:-mr-[10%]'
            data-modal-hide='popup-modal'
            aria-label='Close'
            onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
            <span className='sr-only'>Close popup image</span>
          </button>
          <div className='grid grid-cols-1 text-center'>
            <div className={`md:-ml-[30%] md:-mr-[30%] md:w-[${imgOW}px] relative`}>
              {/* this the image loaded in its original width and height */}
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={imgOW}
                height={imgOH}
                sizes={'(max-width: 766px) 100vw, (max-width: 1280px) 75vw'}
                className='inline-block w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
