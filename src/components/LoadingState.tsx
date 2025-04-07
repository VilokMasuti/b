

import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const LoadingState = () => {
  return (
    <>
      {/* Profile Loading Skeleton */}
      <Card className="w-full shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <Skeleton className="h-24 w-24 rounded-lg" />

            <div className="space-y-2 w-full">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-full max-w-md mt-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="h-6 w-12 mb-1" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-5 w-32" />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart Loading Skeleton */}
      <Card className="w-full shadow-sm mt-6">
        <CardContent className="p-6">
          <Skeleton className="h-8 w-48 mb-6" />
          <Skeleton className="h-[300px] w-full animate-pulse-subtle" />
        </CardContent>
      </Card>

      {/* Repositories Loading Skeleton */}
      <Card className="w-full shadow-sm mt-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-10 w-64" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48 mb-4" />
                  <Skeleton className="h-12 w-full mb-4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoadingState;
