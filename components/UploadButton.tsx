"use client";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function UploadButton({
  className,
  uploadGroupImages,
}: {
  className: string;
  uploadGroupImages: any;
}) {
  const router = useRouter();

  const handleQueuesEnd = async ({ info }: any) => {
    const uploadedImagesUrls = info.files.map(
      (file: any) => file.uploadInfo.url,
    );

    await uploadGroupImages({ urls: uploadedImagesUrls });

    router.refresh();
  };

  return (
    <Button asChild className={className}>
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{ folder: process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER }}
        // onQueuesEnd={handleQueuesEnd}
        onQueuesEnd={handleQueuesEnd}
      >
        Upload images
      </CldUploadButton>
    </Button>
  );
}
