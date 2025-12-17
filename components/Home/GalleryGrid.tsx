import React, { useState } from "react";
import Image from "next/image";

const GalleryGrid: React.FC = () => {
  const images = [
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-22-2.png", text: "Custom Sneaker, hand-made with love and tears by me. Inspired by Virgil Abloh." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-6.png", text: "Poster designed for one of my essays." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-20.png", text: "Exploratory book cover design featuring photograph from Barcelona MACBA architecture." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-19.png", text: "Custom sneaker hand-made by myself, NASA inspired. Find more at vanschneider.com/custom-sneakers." },
    ],
    [
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-9.png", text: "Photograph of a beach in Iceland. It felt like being on another planet. The sand is black due to the volcanic ashes." },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-26.png", text: "Badge design to celebrate 80th anniversary of JPL, the founding agency of NASA. Designed in " },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-3-1.png", text: "Photograph of Ferrari (Update NY)" },
      { src: "https://vanschneider.com/wp-content/uploads/2024/04/HOVS-Artifact-17.png", text: "Limited Edition sweatshirt designed by yours truly, in collaboration with Unsplash. Only 500 were ever made, and all sold out." },
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

export default GalleryGrid;
