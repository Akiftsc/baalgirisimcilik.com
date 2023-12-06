"use client"

import React from 'react'
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import photo1 from "../../../public/we/3.jpeg"
import photo2 from "../../../public/we/2.jpg"
import photo3 from "../../../public/we/1.jpeg"
import photo4 from "../../../public/we/4.jpeg"
import Link from 'next/link';
function Slider() {
    const images = [
        {
            src: photo2,
            insta: "m.akif.tasci"
        },
        {
            src: photo3,
            insta: "ardaiorno"
        },
        {
            src: photo4,
            insta: "bulentakarcalikb"
        },
    ]
  return (
     <Splide options={ { rewind: true, pagination: false }  } aria-label="Slider of photos of entrepreneurship club of baal" >
        {images.map((image, index ) => (
             <SplideSlide key={index} className="gap-5" gap={4}>
                <Link href={`https://www.instagram.com/${image.insta}`} className='grid place-items-center' target="_blank">
                    <Image src={image.src} alt="photo of club" width={780} height={780} className="about-image" priority/>
                    <p className="insta">@{image.insta}</p>
                </Link>
            </SplideSlide>
        ))}
    </Splide>
  )
}

export default Slider