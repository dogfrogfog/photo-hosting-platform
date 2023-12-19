import { Skeleton } from "@/components/ui/skeleton";

export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="col-span-2 md:col-span-1">
          <Skeleton className="h-56 w-full border-2" />
        </div>
      ))}
    </div>
  );
}
