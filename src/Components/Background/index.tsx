"use client"

import {useRef, useEffect} from "react";
/* import spaceRocketGrayScale from "../../../public/space-rocket-opt.mp4" */


function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play
  }, [])
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

          <video loop={true} autoPlay={true} muted={true} playsInline={true} controls={false} id='bg-video' ref={videoRef}>
            <source src={"/space-rocket-opt.mp4"} type='video/mp4' />
          </video>
    </div>
  )
}

export default Background