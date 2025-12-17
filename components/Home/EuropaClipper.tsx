import React from 'react'
import Image from 'next/image'

interface EuropaClipperProps {
  leftImageSrc: string
  leftImageAlt: string
  leftImageDescription: React.ReactNode
  rightImageSrc: string
  rightImageAlt: string
  rightImageDescription: React.ReactNode
}

const EuropaClipper: React.FC<EuropaClipperProps> = ({
  leftImageSrc,
  leftImageAlt,
  leftImageDescription,
  rightImageSrc,
  rightImageAlt,
  rightImageDescription
}) => {
  return (
    <div className="grid grid-cols-3 gap-8 ml-[10%] mr-6">
      <div className="col-span-2">
        <Image
          src={leftImageSrc}
          alt={leftImageAlt}
          width={800}
          height={600}
          className="w-full h-[590px] object-contain bg-neutral-900/50 rounded-lg"  // Set the height explicitly here
        />
        <p className="text-gray-400 text-lg mt-2">{leftImageDescription}</p> {/* 5-word text */}
      </div>
      <div>
        <Image
          src={rightImageSrc}
          alt={rightImageAlt}
          width={400}
          height={300}
          className="w-full h-[590px] bg-black object-cover"  // Set the height explicitly to match the first image
        />
        <p className="text-gray-400 text-lg mt-2">{rightImageDescription}</p> {/* 5-word text */}
      </div>
    </div>
  )
}

export default EuropaClipper
