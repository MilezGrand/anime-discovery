import React from 'react'
import Image, { ImageProps } from "next/image";

type propsType = ImageProps &{
  size?: number  
}

function Icon({size = 18, ...props}: propsType) {
  return (
    <Image {...props} width={size} height={size}/>
  )
}

export default Icon