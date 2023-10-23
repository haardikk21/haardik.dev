import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Writings() {
  const dir = 'writings';
  const files = fs.readdirSync(path.join(dir));
  const writings = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-fit items-end border-b pb-2">
        <h2 className="text-4xl font-semibold">Writings</h2>
      </div>

      {writings.map((writing) => (
        <Link href={`/writings/${writing.slug}`} passHref key={writing.slug}>
          <Card className="transition-all duration-300 hover:border-ring">
            <CardHeader>
              <CardTitle>{writing.meta.title}</CardTitle>
              <CardDescription>{writing.meta.date}</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">
                {writing.meta.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
