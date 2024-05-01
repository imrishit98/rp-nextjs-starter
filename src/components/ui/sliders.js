import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BodyText, H2, H3, LgText, SmText } from '@/ui/typography';
import { Container, FullWidthContainer } from '@/ui/containers';
import { Grid, Navigation, Pagination, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/ui/buttons';
import Image from 'next/image';
import { ImageModal } from '@/ui/modals';
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
      imgW: 1214,
      imgH: 858,
      priority: true,
    },
    {
      title: 'Title 2',
      desc: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
      imgSrc: 'https://via.placeholder.com/600x400/00EBF4/000000',
      imgAlt: '',
      imgW: 1214,
      imgH: 858,
    },
    {
      title: 'Title 23',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imgSrc: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
      imgAlt: '',
      imgW: 1214,
      imgH: 858,
    },
    {
      title: 'title 77',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      imgSrc: 'https://via.placeholder.com/600x400/EBF3F9/000000',
      imgAlt: '',
      imgW: 1214,
      imgH: 858,
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
                {/* adds priority for the image in the first slide, the rest will be loaded lazily */}
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  width={slide.imgW}
                  height={slide.imgH}
                  sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
                  priority={slide.priority ? true : false}
                  className='w-[400px] lg:w-[700px] mx-auto'
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
              sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
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
 * @param - the potential prop for this component is the data that would be passed to it from a data file under utils/ - the data const consists of title, details and a list of images (src, alt, width, height)
 */
export const ThumbnailGallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // the data can be moved to and be exported from a data file under utils/ to increase maintenance and organization
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
        width: 1000,
        height: 700,
      },
      {
        src: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
        alt: '',
        width: 1000,
        height: 700,
      },
      {
        src: 'https://via.placeholder.com/600x400/00EBF4/000000',
        alt: '',
        width: 1000,
        height: 700,
      },
      {
        src: 'https://via.placeholder.com/600x400/D6EBF4/000000',
        alt: '',
        width: 1000,
        height: 700,
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
                sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
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
                  sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
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
          sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
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
 * @description - This component displays a list of images that when clicked will control which slide should be displayed in the slider beneath it. The slider is a grid of two cols; image on the left and text information on the right.
 * @param - the potential prop can the data file in this order: imgSrc, imgAlt, imgW, imgH, title, desc, readMoreLink
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
                  sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
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
 * @param {array} data - the information stored in data const in this order: imgSrc, imgAlt, imgW, imgH, title, desc, readMoreLink. In this particular component, we haven't used the title, desc and the readMoreLink.
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
              sizes={'(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 33vw'}
              className='w-full'
            />
          </button>
        </div>
      ))}
    </div>
  );
};
