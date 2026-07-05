export function FrameworksSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-display text-3xl font-medium md:text-5xl text-center py-24">
        Powering your favorite frameworks and tools
      </h2>
      <div className="wrapper-ticks border-y border-nickel px-6 py-16">
        <img
          src="/images/vite-frameworks.png"
          alt="Frameworks powered by Vite"
          className="mx-auto hidden w-full sm:block"
        />
        <img
          src="/images/vite-frameworks-mobile.png"
          alt="Frameworks powered by Vite"
          className="mx-auto block w-full sm:hidden"
        />
      </div>
    </section>
  );
}
