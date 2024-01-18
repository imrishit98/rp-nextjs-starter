import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BodyText, H4, SmText } from '@/ui/typography';
import { Container, FullWidthContainer } from '@/ui/containers';
import { Navigation, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { register } from 'swiper/element/bundle';

register();

export const Gallery = () => {
  const GalleryImages = [
    {
      imgSrc: 'https://via.placeholder.com/600x400/AB355F/000000',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/00EBF4/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/00AEEF/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/D6EBF4/ffffff',
      imgAlt: 'nature image',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400/EBF3F9/ffffff',
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
            slidesPerView: 2,
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

export const Testimonials = () => {
  const theTestimonials = [
    {
      feedback: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      from: '– Someone, Some Company',
    },
    {
      feedback: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
      from: '– Someone, Some Company Part 2',
    },
    {
      feedback: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
      from: '– Someone, Some Company Part 3',
    },
  ];
  return (
    <FullWidthContainer>
      <Swiper
        slidesPerView={1}
        navigation
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='mySwiper'>
        {theTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='max-w-screen-md mx-8 my-auto lg:mx-auto md:mx-16'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-500'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote className='mb-10 text-center'>
                <H4 className='font-medium text-gray-700 mb-9'>
                  {testimonial.feedback}
                </H4>
                <BodyText className='mb-1 font-bold text-gray-400'>
                  {testimonial.from}
                </BodyText>
                <SmText className='font-semibold text-gray-500'>
                  {testimonial.when}
                </SmText>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}{' '}
      </Swiper>
    </FullWidthContainer>
  );
};
