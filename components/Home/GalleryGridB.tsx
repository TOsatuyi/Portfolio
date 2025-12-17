import React, { useState } from "react";
import Image from "next/image";

const GalleryGridB: React.FC = () => {
  const images = [
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-21.png", text: "Business cards designer for myself, HOVS. Printed and designed back in 2012." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-15.png", text: "Print ad for Semplice.com." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-5.png", text: "Photograph of apartment towers in Singapore." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-7.png", text: "House of van Schneider Necklace concept featuring the HOVS logo." },
    ],
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-13.png", text: "A skateboard made out of marble. A concept." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-16.png", text: "App design for Wave Meditation" },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-24.png", text: "Custom cameraman with huge camera" },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-1-1.png", text: "Photograph of classic Porsche." },
    ],
  ];

  const [hoverStyles, setHoverStyles] = useState<Record<string, React.CSSProperties>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: string) => {
    const { movementX, movementY } = e;
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: `translate(${movementX * 0.5}px, ${movementY * 0.5}px)`,
        transition: "transform 0.1s ease-out",
      },
    }));
  };

  const handleMouseLeave = (index: string) => {
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: "translate(0, 0)",
        transition: "transform 0.3s ease-out",
      },
    }));
  };

  return (
    <div className="grid grid-cols-2 gap-y-14 gap-x-28 mx-[13%]">
      {images.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`grid gap-y-14 gap-x-28 ${colIndex === 1 ? 'mt-60' : ''}`} // Add margin-top to the second column
        >
          {column.map((image, imgIndex) => {
            const index = `${colIndex}-${imgIndex}`;
            return (
              <div key={imgIndex} className="text-center">
                <div
                  className="inline-block"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={hoverStyles[index]}
                >
                  <Image
                    className="h-auto max-w-full rounded-lg cursor-move"
                    src={image.src}
                    alt="Gallery"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <p className="mt-2 text-xl text-left text-[#393C3E]">{image.text}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GalleryGridB;
