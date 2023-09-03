import { Activity } from '@/components/landing/activity';
import { Hero } from '@/components/landing/hero';
import { OssProjects } from '@/components/landing/oss-projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Activity />
      <OssProjects />
    </main>
  );
}
