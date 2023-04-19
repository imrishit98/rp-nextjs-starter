import React from 'react';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { LgText } from './typography';

register();

export const Gallery = () => {
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
    <div className='flex items-center'>
      <swiper-container
        slides-per-view='3'
        pagination='true'
        navigation='true'
        pagination-clickable='true'
      >
        {GalleryImages.map((image, index) => (
          <swiper-slide key={index}>
            <Image
              src={image.imgSrc}
              alt={image.imgAlt}
              width={556}
              height={192}
              className='w-full relative px-4'
            />
          </swiper-slide>
        ))}{' '}
      </swiper-container>{' '}
    </div>
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
    <div className='flex items-center'>
      <swiper-container
        slides-per-view='1'
        pagination='true'
        navigation='true'
        pagination-clickable='true'
      >
        {theTestimonials.map((testimonial, index) => (
          <swiper-slide key={index}>
            <blockquote className='flex flex-col justify-between h-full pt-20 pb-10 text-center'>
              <div className='align-middle px-16 md:px-28 mb-5'>
                <LgText className=''>{testimonial.feedback}</LgText>
              </div>
              <div className='px-4'>
                <LgText className='block font-bold'>{testimonial.from}</LgText>
              </div>
            </blockquote>
          </swiper-slide>
        ))}{' '}
      </swiper-container>
    </div>
  );
};
