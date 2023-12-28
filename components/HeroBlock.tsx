import Link from "next/link";

export function HeroBlock() {
  return (
    <div className="flex flex-col items-center justify-center bg-white max-md:px-5">
      <div className="mb-12 flex w-full max-w-[1320px] flex-col items-stretch max-md:my-10 max-md:max-w-full">
        <div className="justify-between max-md:max-w-full">
          <div className="flex gap-12 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-1/4 flex-col items-stretch max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7bb53e2966215d9f3109fe2455a4d122bb87f09308d895c388bb017e43bd5a9e?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="aspect-[1.08] w-[280px] max-w-full shrink-0 grow overflow-hidden object-contain object-center max-md:mt-10"
              />
            </div>
            <div className="flex w-3/4 flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="my-auto text-3xl font-bold tracking-tighter text-slate-900">
                Platform to share your film photos. Save your memories and share
                the best shots with the world 📸!
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col items-stretch max-md:w-full">
          <div className="my-auto text-xl leading-7 text-slate-900 max-md:mt-10">
            Bootstrap code with a well-organized Figma file to design & develop
            your next websites in minutes.
          </div>
        </div>
        <div className="mt-12 text-3xl font-bold tracking-tighter text-slate-900">
          Features overview
        </div>
        <div className="mt-6 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 gap-6 max-md:flex-col max-md:items-stretch max-md:gap-0 md:grid-cols-3">
            <div className="flex flex-col items-stretch max-md:ml-0 max-md:w-full lg:col-span-3">
              <div className="flex w-full flex-col items-start rounded-2xl bg-blue-50 p-6 max-md:mt-6 max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33d242d2261c3ad862133e5432473863ad5ba954e6275306774d3f7377231bf?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="aspect-square w-[148px] max-w-full self-start overflow-hidden object-contain object-center"
                />
                <div className="mt-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-medium leading-8 text-slate-900">
                  View best shots
                </div>
                <div className="mt-3 self-stretch text-base leading-6 text-slate-600">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </div>
                <div className="mt-6 flex items-stretch justify-between gap-3 self-stretch rounded-lg bg-white px-6 py-3">
                  <a
                    href="#publicGallery"
                    className="text-base font-bold capitalize leading-10 text-blue-600"
                  >
                    Watch public series
                  </a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/117a5c963805a9a80ec85a53ee3c41473b51321c18092a3f1b53a5286d77ed87?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="my-auto aspect-square w-6 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch max-md:ml-0 max-md:w-full lg:col-span-3">
              <div className="flex w-full flex-col items-start rounded-2xl bg-pink-50 p-6 max-md:mt-6 max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc95716da825aa168bd88ec7fdffe6e45f299b192faf776d16f69bf9aa3b3945?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="aspect-square w-[148px] max-w-full self-start overflow-hidden object-contain object-center"
                />
                <div className="mt-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-medium leading-8 text-slate-900">
                  Upload photos
                </div>
                <div className="mt-3 self-stretch text-base leading-6 text-slate-600">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </div>
                <div className="mt-6 flex items-stretch justify-between gap-3 self-stretch rounded-lg bg-white px-6 py-3">
                  <Link
                    href="/settings"
                    className="text-base font-bold capitalize leading-10 text-violet-600"
                  >
                    Premium features
                  </Link>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb7964513e3f4e8d6edb410f0709c29ab618a213d372a173101c9bdece9d505?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="my-auto aspect-square w-6 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch max-md:ml-0 max-md:w-full lg:col-span-3">
              <div className="flex w-full flex-col items-start rounded-2xl bg-neutral-100 p-2 max-md:mt-6 max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f7ad787df422d2e7f15893f2d9c1180333454cf81a8635caedbbf5765de3cb?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="aspect-square w-[148px] max-w-full self-start overflow-hidden object-contain object-center"
                />
                <div className="mt-6 self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-medium leading-8 text-slate-900">
                  Fast save, view and share!
                </div>
                <div className="mt-3 self-stretch text-base leading-6 text-slate-600">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </div>
                <div className="mt-6 flex items-stretch justify-between gap-3 self-stretch rounded-lg bg-white px-6 py-3">
                  <Link
                    href="/settings"
                    className="text-base font-bold capitalize leading-10 text-violet-600"
                  >
                    Premium features
                  </Link>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/068e6cbe66b4a974a6dcbcb1bfd4fc7c3b53269ec03ab9f7991e735d1e24379e?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="my-auto aspect-square w-6 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
