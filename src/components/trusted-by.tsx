const LOGOS = [
  { src: "/images/trusted-by/openai.svg", alt: "openai" },
  { src: "/images/trusted-by/shopify.svg", alt: "shopify" },
  { src: "/images/trusted-by/stripe.svg", alt: "stripe" },
  { src: "/images/trusted-by/linear.svg", alt: "linear" },
  { src: "/images/trusted-by/clickup.svg", alt: "clickup" },
  { src: "/images/trusted-by/wiz.svg", alt: "wiz" },
] as const;

export function TrustedBy() {
  return (
    <div className="wrapper-ticks">
      <p className="py-8 text-center text-[15px] text-text-2">
        Trusted by the world&apos;s best software teams
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 divide-x divide-nickel border-t border-nickel py-8">
        {LOGOS.map((logo) => (
          <div key={logo.alt} className="flex min-w-[120px] flex-1 justify-center px-6">
            <img
              src={logo.src}
              alt={logo.alt}
              className="logo-grayscale h-7 max-h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
