import { Card, CardContent, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export function OssProjectsSkeleton() {
  return (
    <div className="grid auto-rows-auto gap-8 md:grid-cols-2">
      <Card className="flex h-full flex-col">
        <CardHeader>
          <Skeleton className="mb-1 h-6 w-1/2" />
          <Skeleton className="h-2 w-5/6" />
          <Skeleton className="h-2 w-4/5" />
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Skeleton className="h-3 w-1/5" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </CardContent>
      </Card>

      <Card className="flex h-full flex-col">
        <CardHeader>
          <Skeleton className="mb-1 h-6 w-1/2" />
          <Skeleton className="h-2 w-5/6" />
          <Skeleton className="h-2 w-4/5" />
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Skeleton className="h-3 w-1/5" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </CardContent>
      </Card>

      <Card className="flex h-full flex-col">
        <CardHeader>
          <Skeleton className="mb-1 h-6 w-1/2" />
          <Skeleton className="h-2 w-5/6" />
          <Skeleton className="h-2 w-4/5" />
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Skeleton className="h-3 w-1/5" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </CardContent>
      </Card>

      <Card className="flex h-full flex-col">
        <CardHeader>
          <Skeleton className="mb-1 h-6 w-1/2" />
          <Skeleton className="h-2 w-5/6" />
          <Skeleton className="h-2 w-4/5" />
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Skeleton className="h-3 w-1/5" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
