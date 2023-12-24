"use client";

import React from 'react'
import Snowfall from 'react-snowfall';

function SnowEffect() {
  return (
    <Snowfall color="white" snowflakeCount={100} style={{zIndex: 1000, position: "absolute", top: 0, left:0, minHeight: "100%", minWidth: "100%"}} /> 
  )
  }
export default SnowEffect