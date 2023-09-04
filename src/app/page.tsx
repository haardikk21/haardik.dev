import { Activity } from '@/components/landing/activity';
import { Hero } from '@/components/landing/hero';
import { OssProjects } from '@/components/landing/oss-projects';
import { Timeline } from '@/components/landing/timeline';

export default function Home() {
  return (
    <main>
      <Hero />
      <Activity />
      <OssProjects />
      <Timeline />
    </main>
  );
}
