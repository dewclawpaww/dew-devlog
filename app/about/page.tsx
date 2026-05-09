export default function AboutPage() {
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
            <div className="border-2 border-[#2d241f] bg-[#eee6d6] p-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8b5e65]">
                About
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                What&apos;s this about?
              </h2>

              <p className="max-w-3xl text-base leading-7 md:text-lg">
                Dew Devlog is a small public notebook for my technical art
                notes, Maya plug-in development, rigging experiments, scripts,
                deformation tests, anatomy studies, and production workflow
                thoughts.
              </p>
            </div>

            <div className="mt-6 space-y-5 border-2 border-[#2d241f] bg-[#fff8e8] p-4 shadow-[4px_4px_0_#b7ad99] md:p-6">
              <section>
                <h3 className="mb-2 border-b-2 border-[#2d241f] pb-2 font-mono text-xl font-bold">
                  What this is
                </h3>
                <p className="leading-7">
                  This site isn&apos;t meant to be a polished tutorial library.
                  It&apos;s my own personal dev log to refer back to when I need
                  to see progress. I wanted a place to compartmentalize my
                  thoughts and theories and see if they can build something.
                </p>
              </section>

              <section>
                <h3 className="mb-2 border-b-2 border-[#2d241f] pb-2 font-mono text-xl font-bold">
                  What I post about
                </h3>
                <ul className="ml-6 list-disc space-y-2 leading-7">
                  <li>Maya C++ plug-in development</li>
                  <li>Rigging systems and deformation tests</li>
                  <li>Weighting, topology, anatomy, and articulation notes</li>
                  <li>Scripts, workflow experiments, and production thoughts</li>
                  <li>Drawing, design, and technical art studies</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 border-b-2 border-[#2d241f] pb-2 font-mono text-xl font-bold">
                  Contact
                </h3>
                <p className="leading-7">
                  For commissions, freelance work, rigging/plugin talk, or
                  general questions, contact me on Discord:
                </p>
                <p className="mt-2 font-mono text-sm font-bold">dewtheram</p>

                <p className="mt-4 leading-7">
                  You can also find my commission/contact card here:
                </p>
                <a
				  className="font-mono text-sm font-bold underline hover:text-[#405a7a]"
				  href="https://dewcard.vercel.app/"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  Commission Card
				</a>
              </section>

              <a
                className="inline-block font-mono text-sm underline hover:text-[#405a7a]"
                href="/"
              >
                ← Back to Dew Devlog
              </a>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}