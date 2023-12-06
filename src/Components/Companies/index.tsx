import React from 'react'
import googleLogo from "../../../public/companies/google.svg"
import microsoftLogo from "../../../public/companies/microsoft.svg"
import facebookLogo from "../../../public/companies/facebook.svg"
import appleLogo from "../../../public/companies/apple.svg"
import netflixLogo from "../../../public/companies/netflix.svg"
import twitchLogo from "../../../public/companies/twitch.svg"
import adobePhotoshopLogo from "../../../public/companies/adobe_photoshop.svg"
import twitterLogo from "../../../public/companies/twitter.svg"
import Image from 'next/image'

function Compaines() {

    const images = [
        {
            src: googleLogo
        },
        {
            src: microsoftLogo
        },
        {
            src: facebookLogo
        },
        {
            src: appleLogo
        },
        {
            src: netflixLogo
        },
        {
            src: twitchLogo
        },
        {
            src: adobePhotoshopLogo
        },
        {
            src: twitterLogo
        },
    ];


  return (
    <div className="companies">
        <h2 className='text-white text-xl md:text-[32px] font-semibold uppercase'>Bir Günde Ortaya Çıkmadılar</h2>
        <div className='companies-grid'>
            {
                images.map((image, key) => (
                    <Image key={key} src={image.src} alt="Google logo" width={96} height={96} />
                ))
            }
            {
                images.reverse().map((image, key) => (
                    <Image key={key} src={image.src} alt="Google logo" width={96} height={96} />
                ))
            }
            {
                images.map((image, key) => (
                    <Image key={key} src={image.src} alt="Google logo" width={96} height={96} />
                ))
            }
        </div>
    </div>
  )
}

export default Compaines