"use client";
import React, { useState } from "react";
import CustomFileSelector from "./CustomFileSelector";
import ImagePreview from "./ImagePreview";

export function MultipleFilesSelector({ form, field }: any) {
  const [images, setImages] = useState<File[]>([]);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      setImages(_files);

      form.setValue("photos", _files);
    }
  };

  return (
    <div>
      <CustomFileSelector
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileSelected}
        field={field}
      />
      <ImagePreview images={images} />
    </div>
  );
}
