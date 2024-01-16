import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { bundleMDX } from "mdx-bundler";
import readingTime from "reading-time";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), "src", "constants", type));
}

export async function getFileById(type, slug) {
  const mdxSource = slug
    ? readFileSync(
      join(process.cwd(), "src", "constants", type, `${slug}.mdx`),
      "utf8"
    )
    : readFileSync(
      join(process.cwd(), "src", "constants", `${type}.mdx`),
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

export async function getAllFilesFrontmatter(type) {
  const files = readdirSync(join(process.cwd(), "src", "constants", type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "src", "constants", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    const res = [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export async function getRecommendations(type, currSlug) {
  const frontmatters = await getAllFilesFrontmatter(type);

  // Get current frontmatter
  const currentFm = frontmatters.find((fm) => fm.slug === currSlug);
  // console.log(currentFm, 'currentFm');
  // Remove currentFm and Bahasa Posts, then randomize order
  // const otherFms = frontmatters.filter((fm) => !fm.slug.startsWith("id-") && fm.slug !== currSlug)

  const otherFms = [...frontmatters];


  // Find with similar tags
  const recommendations = otherFms.filter((op) =>
    op.tags.split(",").some((p) => currentFm?.tags.split(",").includes(p))
  );

  // Populate with random recommendations if not enough
  const threeRecommendations =
    recommendations.length >= 3
      ? recommendations
      : [
        ...recommendations,
        ...otherFms.filter(
          (fm) => !recommendations.some((r) => r.slug === fm.slug)
        ),
      ];
  return threeRecommendations;
}
