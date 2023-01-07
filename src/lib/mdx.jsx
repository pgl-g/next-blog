import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { bundleMDX } from "mdx-bundler";
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), "src", "constants", type));
}

export async function getFileById(type, id) {
  const mdxSource = id
    ? readFileSync(
        join(process.cwd()),
        "src",
        "constants",
        type,
        `${id}.mdx`,
        "utf8"
      )
    : readFileSync(
        join(process.cwd()),
        "src",
        "constants",
        `${type}.mdx`,
        "utf8"
      );

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options, _) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: mdxSource.split(/\s+/gu).length,
      readingTime: readingTime(mdxSource),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
