"use client";

import { useState } from "react";

type ImageLightBoxProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function LightBoxImage({
  src,
  alt,
  className,
}: ImageLightBoxProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsFocused((focused) => !focused);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`lightbox-image-container ${
        isFocused ? "lightbox-image-container--focused" : ""
      }`}
    >
      <img src={src} alt={alt ?? ""} className={className} />
    </div>
  );
}
