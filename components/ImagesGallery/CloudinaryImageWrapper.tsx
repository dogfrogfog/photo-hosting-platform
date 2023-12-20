"use client";
import { CldImage } from "next-cloudinary";

export function CloudinaryImageWrapper({
  url,
  onClick,
}: {
  url: string;
  onClick: any;
}) {
  return (
    <CldImage
      width="450"
      height="300"
      src={url}
      sizes="100vw"
      alt="Description of my image"
      onClick={onClick}
      className="cursor-pointer"
    />
  );
}
