"use client";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function UploadButton({
  uploadGroupImages,
}: {
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
    <Button asChild>
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{ folder: process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER }}
        // onQueuesEnd={handleQueuesEnd}
        onQueuesEnd={handleQueuesEnd}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>
      </CldUploadButton>
    </Button>
  );
}
