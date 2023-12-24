"use client"

import {useRef, useEffect, useState} from "react";
import spaceRocketGrayScale from "../../../public/space-rocket-opt.gif" 
import Image from "next/image";
import { isIOS } from "react-device-detect";

function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className='bgWrap'>
        {/* <Image
             alt="RocketShip"
             src={spaceRocketGrayScale}
             quality={50}
             fill
             style={{
               objectFit: 'cover',
             }}
           /> */}

          {isIOS === false ? (
            <video loop={true} autoPlay={true} muted={true} playsInline={true} controls={false} id='bg-video' ref={videoRef}>
            <source src={"/space-rocket-opt.mp4"} type='video/mp4' />
          </video>
          ): (
            <Image
             alt="RocketShip"
             src={spaceRocketGrayScale}
             quality={80}
             priority={true}
             id="bg-video"
             fill
             style={{
               objectFit: 'cover',
             }} />
          )}
    </div>
  )
}

export default Background