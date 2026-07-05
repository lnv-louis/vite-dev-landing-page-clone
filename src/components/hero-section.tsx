import { RiveGraphic } from "@/components/rive-graphic";

const PACKAGE_TABS = ["npm", "yarn", "pnpm", "bun"] as const;

export function HeroSection() {
  return (
    <section className="wrapper-ticks grid md:grid-cols-2 md:divide-x divide-nickel">
      {/* Left: copy + install command */}
      <div className="flex flex-col justify-between gap-16 p-6 md:p-10">
        <div className="flex flex-col gap-6">
          <a
            href="https://voidzero.dev"
            className="flex items-center gap-2 text-text-3 hover:text-text-1 transition-colors w-fit"
          >
            <span className="font-mono text-xs uppercase tracking-widest">By</span>
            <span className="font-display text-sm font-bold tracking-tight text-text-1">
              VOID<span className="text-brand">(0)</span>
            </span>
          </a>

          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.12] text-pretty max-w-[25rem]">
            The Build Tool for the Web
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-[27rem] text-pretty">
            Vite is a blazing fast frontend build tool powering the next
            generation of web applications.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/guide/"
              className="inline-flex items-center rounded-lg bg-[url('/images/primary-button-background.jpg')] bg-cover bg-center px-4 py-2 text-[15px] text-white shadow-[0_2px_12px_rgba(108,59,255,0.35)] transition-transform hover:scale-[1.02]"
            >
              Get Started
            </a>
            <a
              href="https://github.com/vitejs/vite"
              className="inline-flex items-center rounded-lg border border-nickel bg-bg-soft px-4 py-2 text-[15px] text-text-1 transition-colors hover:border-text-3"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Install command box */}
        <div className="overflow-hidden rounded-lg border border-nickel bg-bg-alt">
          <div className="flex items-center gap-4 border-b border-nickel px-4 py-2">
            {PACKAGE_TABS.map((tab, i) => (
              <span
                key={tab}
                className={
                  "font-mono text-xs " +
                  (i === 0 ? "text-text-1" : "text-text-3")
                }
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-3 font-mono text-sm">
            <code>
              <span className="text-text-3">$ </span>
              <span className="text-text-1">npm create vite@latest</span>
            </code>
          </div>
        </div>
      </div>

      {/* Right: Rive masthead animation */}
      <div className="relative flex items-center justify-center overflow-hidden p-6 md:p-10">
        <RiveGraphic
          src="/rive/vite-masthead.riv"
          width={641}
          height={629}
          className="max-w-[520px]"
        />
      </div>
    </section>
  );
}
