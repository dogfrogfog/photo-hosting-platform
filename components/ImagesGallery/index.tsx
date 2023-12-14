"use client";

import { CloudinaryImageWrapper } from "./CloudinaryImageWrapper";

export function ImagesGallery({ photoUrls }: { photoUrls: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {photoUrls.map((url) => (
        <CloudinaryImageWrapper key={url} url={url} />
      ))}
    </div>
  );
}
