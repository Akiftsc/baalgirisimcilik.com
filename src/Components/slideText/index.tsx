"use client"

import Link from "next/link";
import { useState, useEffect } from "react";


function SlideText() {
    const loopArr = [
    "Girişimciliğe",
    "Yazılıma",
    "İş Dünyasına",
    "Pazarlamaya",
    "Teknolojiye",
    "Tasarıma",
    
    ];
      const [index, setIndex] = useState(0);

       useEffect(() => {
        const intervalDelayMilliseconds = 2200
        const interval = setInterval(() => {
        setIndex((prevIndex) => {
            return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
        });
        }, intervalDelayMilliseconds);

        return () => clearInterval(interval);
    });

  return (
    <Link href="/register" className="slideText" key={loopArr[index]}>{loopArr[index]}</Link>
    )
}

export default SlideText