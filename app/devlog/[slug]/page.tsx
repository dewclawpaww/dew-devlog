import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "../../lib/posts";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-3 border-b-2 border-[#2d241f] pb-2 font-mono text-xl font-bold"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-2 font-mono text-lg font-bold" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 leading-7" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 leading-7" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-1" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline hover:text-[#405a7a]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[#c9c0aa] px-1 font-mono text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-5 overflow-x-auto border-2 border-[#2d241f] bg-[#2d241f] p-4 font-mono text-sm leading-6 text-[#fff8e8]"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="my-5 w-full border-2 border-[#2d241f] bg-[#eee6d6] p-1 shadow-[4px_4px_0_#b7ad99]"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-5 border-l-4 border-[#8b5e65] bg-[#eee6d6] px-4 py-3 italic"
      {...props}
    />
  ),
};

export default async function DevlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-[#d8cfbd] px-3 py-4 text-[#2d241f] md:px-8 md:py-10">
      <div className="mx-auto max-w-4xl">
        <article className="border-2 border-[#2d241f] bg-[#fff8e8] shadow-[4px_4px_0_#6f6557] md:shadow-[8px_8px_0_#6f6557]">
          <header className="border-b-2 border-[#2d241f]">
            <div className="flex items-center justify-between bg-[#8b5e65] px-3 py-2 text-[#fff8e8]">
              <h1 className="font-mono text-sm font-bold tracking-wide md:text-base">
                Dew Devlog
              </h1>

              <div className="flex gap-1">
                <span className="flex h-5 w-5 items-center justify-center border border-[#2d241f] bg-[#eee6d6] text-xs text-[#2d241f]">
                  _
                </span>
                <span className="flex h-5 w-5 items-center justify-center border border-[#2d241f] bg-[#eee6d6] text-xs text-[#2d241f]">
                  □
                </span>
                <span className="flex h-5 w-5 items-center justify-center border border-[#2d241f] bg-[#eee6d6] text-xs text-[#2d241f]">
                  ×
                </span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-4 border-t border-[#2d241f] bg-[#c9c0aa] px-4 py-2 font-mono text-sm">
              <a className="underline hover:text-[#405a7a]" href="/">
                Home
              </a>
              <a className="underline hover:text-[#405a7a]" href="/about">
                About
              </a>
            </nav>
          </header>

          <section className="p-4 md:p-6">
            <a
              className="font-mono text-sm underline hover:text-[#405a7a]"
              href="/"
            >
              ← Back to Dew Devlog
            </a>

            <div className="mt-6 border-2 border-[#2d241f] bg-[#eee6d6] p-4">
              <div className="mb-3 flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-[#c9c0aa] px-2 py-1">
                  {post.displayDate}
                </span>
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    className="bg-[#c9c0aa] px-2 py-1 underline hover:text-[#405a7a]"
                    href={`/devlog/category/${tag}`}
                  >
                    {tag}
                  </a>
                ))}
              </div>

              <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h2>

              <p className="max-w-3xl text-base leading-7 md:text-lg">
                {post.summary}
              </p>
            </div>

            <div className="mt-6 border-2 border-[#2d241f] bg-[#fff8e8] p-4 shadow-[4px_4px_0_#b7ad99] md:p-6">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}