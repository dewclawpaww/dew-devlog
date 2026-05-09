import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
};

function normalizeTags(data: { tag?: unknown; tags?: unknown }): string[] {
  if (Array.isArray(data.tags)) {
    return data.tags.filter((tag): tag is string => typeof tag === "string");
  }

  if (typeof data.tag === "string") {
    return [data.tag];
  }

  return [];
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    tags: normalizeTags(data),
    summary: typeof data.summary === "string" ? data.summary : "",
    content,
  };
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}