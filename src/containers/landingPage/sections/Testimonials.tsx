'use client'

import { TestimonialsInterface } from '@/interfaces/testimonials/testimonial.interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper'

const Testimonials = () => {
  const { testimonials }: TestimonialsInterface = {
    testimonials: [
      {
        id: 1,
        clinic: 'Lorem Ipsum',
        customer: 'Eddie Murphy',
        stars: 2,
        testimony:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem ab laudantium vel.'
      },
      {
        id: 2,
        clinic: 'Lorem Ipsum',
        customer: 'Eddie Murphy',
        stars: 5,
        testimony:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem ab laudantium vel.'
      }
    ]
  }

  return (
    <section className='bg-gray-100'>
      <div className='mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-4 lg:ps-8'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16'>
          <div className=' lg:max-w-xl text-center '>
            <h2 className='text-3xl font-bold text-center tracking-tight sm:text-4xl'>
              No se fíe sólo de nuestra palabra...
              <br className='hidden sm:block lg:hidden' />
              Lea las opiniones de nuestros clientes
            </h2>

            <p className='mt-4 text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className='hidden lg:mt-8 lg:flex lg:gap-4'>
              <button className='prev-button rounded-full border border-sky-600 p-3 text-sky-600 hover:bg-sky-600 hover:text-white'>
                <span className='sr-only'>Anterior testimonio</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 rtl:rotate-180'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </button>

              <button className='next-button rounded-full border border-sky-600 p-3 text-sky-600 hover:bg-sky-600 hover:text-white'>
                <span className='sr-only'>Siguiente testimonio</span>
                <svg
                  className='h-5 w-5 rtl:rotate-180'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 5l7 7-7 7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='-mx-6 lg:col-span-2 lg:mx-0 !overflow-hidden'>
            <Swiper
              freeMode={true}
              autoplay={{
                delay: 3500
              }}
              grabCursor={true}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={{
                nextEl: '.next-button',
                prevEl: '.prev-button'
              }}
              modules={[Pagination, Navigation, Autoplay, FreeMode]}
              className='mySwiper'
              slidesPerView={1}
              spaceBetween={32}>
              {testimonials.map((testimonial) => {
                const { id, customer, testimony, stars, clinic } = testimonial
                return (
                  <SwiperSlide key={id}>
                    <blockquote className='flex h-full flex-col justify-between bg-white p-12'>
                      <div>
                        <div className='flex gap-0.5 text-amber-400'>
                          {Array.from({ length: stars }, (_, i) => i + 1).map(
                            (num) => (
                              <svg
                                key={num}
                                className='h-5 w-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                              </svg>
                            )
                          )}
                        </div>
                        <div className='mt-4'>
                          <p className='text-2xl font-bold text-sky-600 sm:text-3xl'>
                            {clinic}
                          </p>
                          <p className='mt-4 leading-relaxed text-gray-500'>
                            {testimony}
                          </p>
                        </div>
                      </div>
                      <div className='mt-8 text-sm text-gray-500'>
                        &mdash; {customer}
                      </div>
                    </blockquote>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className='mt-8 flex justify-center gap-4 lg:hidden'>
            <button className='prev-button rounded-full border border-sky-600 p-3 text-sky-600 hover:bg-sky-600 hover:text-white'>
              <span className='sr-only'>Anterior testimonio</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-5 w-5 rtl:rotate-180'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>

            <button className='next-button rounded-full border border-sky-600 p-3 text-sky-600 hover:bg-sky-600 hover:text-white'>
              <span className='sr-only'>Siguiente testimonio</span>
              <svg
                className='h-5 w-5 rtl:rotate-180'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9 5l7 7-7 7'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
