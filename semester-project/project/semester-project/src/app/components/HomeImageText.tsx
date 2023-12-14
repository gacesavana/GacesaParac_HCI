import React from "react";
import "./ImageTextComponent.css";
import Link from "next/link";

interface ImageTextProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ImageTextComponent: React.FC<ImageTextProps> = ({
  title,
  description,
  imageUrl,
  reverse = false,
}) => {
  const lowercasedTitle = title.toLowerCase();

  return (
    <div className={`image-text-container ${reverse && "reverse"}`}>
      <div className="image-container">
        <img src={imageUrl} alt="Content" />
      </div>
      <div className="text-container">
        <Link href={`/${lowercasedTitle}`}>{title}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageTextComponent;
