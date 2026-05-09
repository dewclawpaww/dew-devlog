import { getAllPosts } from "./lib/posts";

const categories = [
  "plugin-dev",
  "scripting",
  "weighting",
  "articulation",
  "topology",
  "deformation",
  "workflow",
  "anatomy",
  "drawing",
  "design",
];

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 2);
  const recentPosts = posts.slice(0, 10);

  return (
    <main className="min-h-screen bg-[#d8cfbd] px-3 py-4 text-[#2d241f] md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <section className="border-2 border-[#2d241f] bg-[#eee6d6] shadow-[4px_4px_0_#6f6557] md:shadow-[8px_8px_0_#6f6557]">
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
              <a
                className="underline hover:text-[#405a7a]"
                href="https://dewcard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission Info
              </a>
              <a className="underline hover:text-[#405a7a]" href="/about">
                About
              </a>
            </nav>
          </header>

          <div className="grid gap-0 lg:grid-cols-[250px_1fr_280px]">
            <aside className="order-3 border-t-2 border-[#2d241f] bg-[#c9c0aa] p-4 lg:order-1 lg:border-r-2 lg:border-t-0">
              <div className="mb-5 border-2 border-[#2d241f] bg-[#eee6d6] p-3">
                <h2 className="mb-2 bg-[#8b5e65] px-2 py-1 font-mono text-sm font-bold text-[#fff8e8]">
                  STATUS
                </h2>
                <p className="text-sm leading-6">
                  Currently busy working on freelance work, commissions and
                  animation production. This is a small repo of all my tech art
                  notes.
                </p>
              </div>

              <div className="mb-5 border-2 border-[#2d241f] bg-[#eee6d6] p-3">
                <h2 className="mb-2 bg-[#8b5e65] px-2 py-1 font-mono text-sm font-bold text-[#fff8e8]">
                  CATEGORIES
                </h2>
                <ul className="space-y-1 font-mono text-sm">
                  {categories.map((category) => (
                    <li key={category}>
                      <a
                        className="underline hover:text-[#405a7a]"
                        href={`/devlog/category/${category}`}
                      >
                        ▸ {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-2 border-[#2d241f] bg-[#eee6d6] p-3">
                <h2 className="mb-2 bg-[#8b5e65] px-2 py-1 font-mono text-sm font-bold text-[#fff8e8]">
                  CONTACT ME
                </h2>
                <p className="font-mono text-xs leading-5">
                  Contact me on Discord:
                  <br />
                  <span className="font-bold">dewtheram</span>
                </p>

                <p className="mt-3 font-mono text-xs leading-5">
                  <a
                    className="font-bold underline hover:text-[#405a7a]"
                    href="https://dewcard.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commission Card
                  </a>
                </p>
              </div>
            </aside>

            <section className="order-1 p-4 md:p-6 lg:order-2">
              <div className="mb-6 border-2 border-[#2d241f] bg-[#fff8e8] p-4 md:p-5">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8b5e65] md:tracking-[0.25em]">
                  Rigging R&amp;D / Maya Plugins / Technical Art Notes
                </p>

                <h2 className="mb-3 text-3xl font-bold leading-tight md:text-5xl">
                  A notebook for the plug-ins, scripts, and rigs I’m building.
                </h2>

                <p className="max-w-3xl text-base leading-7 md:text-lg">
                  Notes, screenshots, tests, and progress logs from Maya C++
                  plugin development, rigging experiments, deformation tests,
                  scripting, weighting, articulation studies, and technical art
                  rabbit holes.
                </p>
              </div>

              <section id="latest" className="mb-8">
                <div className="mb-3 flex items-center justify-between border-2 border-[#2d241f] bg-[#8b5e65] px-3 py-2 text-[#fff8e8]">
                  <h2 className="font-mono text-base font-bold">
                    Latest Posts
                  </h2>
                  <span className="font-mono text-xs">most recent</span>
                </div>

                <div className="space-y-4">
                  {latestPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="border-2 border-[#2d241f] bg-[#fff8e8] p-4 shadow-[4px_4px_0_#b7ad99]"
                    >
                      <div className="mb-2 flex flex-wrap gap-2 font-mono text-xs">
                        <span className="bg-[#c9c0aa] px-2 py-1">
                          {post.date}
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
                  ))}
                </div>
              </section>
            </section>

            <aside className="order-2 border-t-2 border-[#2d241f] bg-[#c9c0aa] p-4 lg:order-3 lg:border-l-2 lg:border-t-0">
              <div className="border-2 border-[#2d241f] bg-[#eee6d6] p-3">
                <div className="mb-3 bg-[#8b5e65] px-2 py-1 text-[#fff8e8]">
                  <h2 className="font-mono text-sm font-bold">
                    RECENT POSTS
                  </h2>
                </div>

                <ol className="space-y-3">
                  {recentPosts.map((post) => (
                    <li
                      key={post.slug}
                      className="border-b border-[#b7ad99] pb-3 last:border-b-0 last:pb-0"
                    >
                      <a
                        className="block hover:text-[#405a7a]"
                        href={`/devlog/${post.slug}`}
                      >
                        <span className="mb-1 block font-mono text-xs font-bold text-[#8b5e65]">
                          {post.date}
                          {post.tags.length > 0
                            ? ` · ${post.tags.join(", ")}`
                            : ""}
                        </span>
                        <span className="block text-sm font-bold leading-5 underline">
                          {post.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-4 border-t-2 border-[#2d241f] pt-3">
                  <a
                    className="font-mono text-xs font-bold underline hover:text-[#405a7a]"
                    href="#"
                  >
                    View full archive →
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <footer
            id="about"
            className="border-t-2 border-[#2d241f] bg-[#c9c0aa] px-4 py-3 font-mono text-xs"
          >
            Dew Devlog · Maya plugin development, rigging R&amp;D, deformation
            tests, and technical art notes.
          </footer>
        </section>
      </div>
    </main>
  );
}