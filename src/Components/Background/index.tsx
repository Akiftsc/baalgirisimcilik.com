"use client"

import {useRef, useEffect, useState} from "react";
import spaceRocketGrayScale from "../../../public/space-rocket-opt.gif" 
import Image from "next/image";


function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayAllowed, setAutoplayAllowed] = useState<Boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    // Check if the video element is supported
    if (video) {
      // Add event listeners for when the video is visible and when it starts playing
      const onIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Check if autoplay is allowed
            if (autoplayAllowed) {
              video.play().catch(error => {
                // Autoplay failed, handle the error (e.g., due to browser policy)
                console.error('Autoplay failed:', error);
              });
            }
          } else {
            // Pause the video when it's not visible
            setAutoplayAllowed(false);
          }
        });
      };

      const intersectionObserver = new IntersectionObserver(onIntersection, {
        threshold: 0.5, // Adjust as needed
      });

      // Observe the video element
      intersectionObserver.observe(video);

      // Check if autoplay is allowed
      const canAutoplay = () => {
        // Test if the video can be played without user interaction
        const testVideo = document.createElement('video');
        testVideo.muted = true;
        testVideo.playsInline = true;
        return testVideo.play().then(() => {
          setAutoplayAllowed(true);
        }).catch(() => {
          setAutoplayAllowed(false);
        });
      };

      canAutoplay();

      return () => {
        // Clean up the IntersectionObserver when the component is unmounted
        intersectionObserver.disconnect();
      };
    }
  }, [autoplayAllowed])
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

          {autoplayAllowed ? (
            <video loop={true} autoPlay={true} muted={true} playsInline={true} controls={false} id='bg-video' ref={videoRef}>
            <source src={"/space-rocket-opt.mp4"} type='video/mp4' />
          </video>
          ): (
            <Image
             alt="RocketShip"
             src={spaceRocketGrayScale}
             quality={50}
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