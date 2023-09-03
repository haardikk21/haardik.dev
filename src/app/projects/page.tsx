import { AllOssProjects } from '@/components/projects/all-oss-projects';
import { OssProjectsSkeleton } from '@/components/projects/oss-projects-skeleton';
import { Suspense } from 'react';

export default function Projects() {
  return (
    <main>
      <Suspense fallback={<OssProjectsSkeleton />}>
        <AllOssProjects />
      </Suspense>
    </main>
  );
}
