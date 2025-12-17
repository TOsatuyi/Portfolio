import React, { useState } from "react";
import Image from "next/image";

const GalleryGridC: React.FC = () => {
  const images = [
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-11.png", text: "Photograph of the Aqua Tower, Chicago, 2018." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-2-1.png", text: "Photograph of Roche WALTEL Edition" },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-14.png", text: "Branding for my old design studio called." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-25.png", text: "The mymind guy — Our mascot and logo for mymind.com." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-10.png", text: "Drone photograph of the famous skatepark at Venice Beach in LA." }
    ],
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-18.png", text: "Business cards of my old design studio called." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-4.png", text: "House of van Kabutey Assem, 2023, Badge." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-8.png", text: "Poster design of the official NASA Mars 2020 Mission." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-12.png", text: "Sneaker sculpture made of metal mesh." },
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
                <p className="mt-2 text-xl text-left text-[#878A8D]">{image.text}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GalleryGridC;
