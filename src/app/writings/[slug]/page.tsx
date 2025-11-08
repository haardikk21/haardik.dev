import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('writings'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('writings', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata(props: any) {
  const params = await props.params;
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title + ' | Haardik H',
    description: blog.frontMatter.description,
  };
}

const options: Options = {
  theme: 'one-dark-pro',
};

export default async function Post(props0: any) {
  const params = await props0.params;
  const props = getPost(params);

  return (
    <article className="mx-auto max-w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {props.frontMatter.title}
      </h1>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">{props.frontMatter.description}</p>
        <p className="text-muted-foreground">{props.frontMatter.date}</p>
      </div>

      <div className="prose prose-sm mt-6 dark:prose-invert md:prose-base lg:prose-lg">
        <MDXRemote
          source={props.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, options]],
            },
          }}
        />
      </div>
    </article>
  );
}
