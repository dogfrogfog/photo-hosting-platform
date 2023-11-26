import Image from "next/image";
import React from "react";

type Props = {
  images: File[];
};

const ImagePreview = ({ images }: Props) => {
  return (
    <div>
      <div className="my-2 grid grid-cols-12 gap-2">
        {images.map((image) => {
          const src = URL.createObjectURL(image);
          return (
            <div className="relative col-span-4 aspect-video" key={image.name}>
              <Image src={src} alt={image.name} className="object-cover" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ImagePreview);
