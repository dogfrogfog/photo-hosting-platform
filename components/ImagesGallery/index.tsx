"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useKeypress from "react-use-keypress";
import { CloudinaryImageWrapper } from "./CloudinaryImageWrapper";

export function ImagesGallery({ photoUrls }: { photoUrls: string[] }) {
  const [isOpen, setOpenStatus] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setStartIndex(index);
    setOpenStatus(true);
  };

  useKeypress("Escape", () => {
    setOpenStatus(false);
  });

  return (
    <div className="grid grid-cols-3 gap-6">
      {isOpen && (
        <div className="bg-opacity-85 fixed left-0 top-0 z-30 flex h-screen w-full items-center justify-center bg-black">
          <Button
            className="absolute right-5 top-5 text-white"
            variant={"link"}
            asChild
          >
            <Link target="_blank" href={photoUrls[currentIndex]}>
              Open Original
            </Link>
          </Button>
          <ImageGallery
            additionalClass="w-[80%]"
            startIndex={startIndex}
            showPlayButton={false}
            items={photoUrls.map((v) => ({
              original: v.replace(
                "/image/upload/",
                "/image/upload/c_scale,w_750/",
              ),
            }))}
            onSlide={setCurrentIndex}
            showFullscreenButton={false}
          />
        </div>
      )}
      {photoUrls.map((url, i) => (
        <CloudinaryImageWrapper
          onClick={() => handleImageClick(i)}
          key={url}
          url={url}
        />
      ))}
    </div>
  );
}
