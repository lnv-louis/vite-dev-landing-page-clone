export function CtaSection() {
  return (
    <section className="relative flex min-h-[440px] flex-col items-center justify-center gap-6 overflow-hidden py-32 text-center">
      <img
        src="/images/footer-background.jpg"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <h2 className="font-display text-4xl font-medium md:text-6xl">Start building with Vite</h2>
        <p className="max-w-md text-white/85">
          Prepare for a development environment that can finally keep pace with the speed of your
          mind.
        </p>
        <a
          href="/guide/"
          className="rounded-md bg-white px-6 py-3 font-display text-[15px] text-black transition hover:bg-white/90"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
