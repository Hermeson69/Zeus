import { Skeleton } from "./ui/skeleton";

function WeatehrSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <Skeleton className="h-[300px] w-full rotate-lg" />
        <Skeleton className="h-[300px] w-full rotate-lg" />
        <div className="grid gap-6 md: grid-cols-2">
          <Skeleton className="h-[300px] w-full rotate-lg" />
          <Skeleton className="h-[300px] w-full rotate-lg" />
        </div>
      </div>
    </div>
  );
}


export default WeatehrSkeleton;