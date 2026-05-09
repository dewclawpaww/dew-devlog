import { getAllPosts } from "../../../lib/posts";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getAllPosts();
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  return (
    <main className="min-h-screen bg-[#d8cfbd] px-3 py-4 text-[#2d241f] md:px-8 md:py-10">
      <div className="mx-auto max-w-4xl">
        <section className="border-2 border-[#2d241f] bg-[#fff8e8] shadow-[4px_4px_0_#6f6557] md:shadow-[8px_8px_0_#6f6557]">
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
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8b5e65]">
                Category
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                {tag}
              </h2>

              <p className="mt-3 text-base leading-7 md:text-lg">
                Posts filed under <span className="font-mono">{tag}</span>.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="border-2 border-[#2d241f] bg-[#fff8e8] p-4 shadow-[4px_4px_0_#b7ad99]"
                  >
                    <div className="mb-2 flex flex-wrap gap-2 font-mono text-xs">
                      <span className="bg-[#c9c0aa] px-2 py-1">
                        {post.displayDate}
                      </span>

                      {post.tags.map((postTag) => (
                        <a
                          key={postTag}
                          className="bg-[#c9c0aa] px-2 py-1 underline hover:text-[#405a7a]"
                          href={`/devlog/category/${postTag}`}
                        >
                          {postTag}
                        </a>
                      ))}
                    </div>

                    <h3 className="mb-2 text-2xl font-bold">
                      <a
                        className="underline hover:text-[#405a7a]"
                        href={`/devlog/${post.slug}`}
                      >
                        {post.title}
                      </a>
                    </h3>

                    <p className="leading-7">{post.summary}</p>
                  </article>
                ))
              ) : (
                <div className="border-2 border-[#2d241f] bg-[#fff8e8] p-4 shadow-[4px_4px_0_#b7ad99]">
                  <h3 className="mb-2 font-mono text-lg font-bold">
                    No posts yet
                  </h3>
                  <p className="leading-7">
                    There are no posts filed under this category yet.
                  </p>
                </div>
              )}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}