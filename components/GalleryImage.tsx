"use client";
import { CldImage } from "next-cloudinary";

export function GalleryImage({ url }: { url: string }) {
  return (
    <CldImage
      width="450"
      height="300"
      src={url}
      sizes="100vw"
      alt="Description of my image"
    />
  );
}
