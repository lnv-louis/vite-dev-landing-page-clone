type Logo = {
  name: string;
  src: string;
};

const partnerLogos: Logo[] = [
  { name: "Bolt", src: "/images/sponsors/bolt.svg" },
  { name: "NuxtLabs", src: "/images/sponsors/nuxtlabs.svg" },
];

const platinumSponsors: Logo[] = [
  { name: "Storyblok", src: "/images/sponsors/storyblok.png" },
  { name: "CodeRabbit", src: "/images/sponsors/coderabbit.png" },
  { name: "Greptile", src: "/images/sponsors/greptile.png" },
  { name: "Railway", src: "/images/sponsors/railway.svg" },
  { name: "SerpApi", src: "/images/sponsors/serpapi.png" },
];

const goldSponsors: Logo[] = [
  { name: "Mux", src: "/images/sponsors/mux.svg" },
  { name: "Nx", src: "/images/sponsors/nx.svg" },
  { name: "Transloadit", src: "/images/sponsors/transloadit.png" },
  { name: "Handsontable", src: "/images/sponsors/handsontable.svg" },
  { name: "Mojam", src: "/images/sponsors/mojam.svg" },
  { name: "Convex", src: "/images/sponsors/convex.svg" },
  { name: "Zephyr Cloud", src: "/images/sponsors/zephyr_cloud.png" },
  { name: "Catalyst", src: "/images/sponsors/catalyst.svg" },
  { name: "Sanity", src: "/images/sponsors/sanity.svg" },
  { name: "Follower24", src: "/images/sponsors/follower24.svg" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-center text-xs tracking-wider text-text-3 uppercase">{children}</p>
  );
}

export function SponsorsSection() {
  return (
    <section className="wrapper-ticks px-6 py-24">
      <h2 className="text-center font-display text-4xl font-medium md:text-5xl">
        Free &amp; open source
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-center text-text-2">
        Vite is MIT Licensed and will always be free and open source. This is made possible by our
        contributors and these companies.
      </p>

      <img
        src="/images/vite-by-voidzero.png"
        alt="Brought to you by VoidZero"
        className="mx-auto my-10 h-40 object-contain"
      />

      <SectionLabel>In partnership with</SectionLabel>
      <div className="mb-16 flex divide-x divide-nickel border border-nickel">
        {partnerLogos.map((logo) => (
          <div key={logo.name} className="flex flex-1 items-center justify-center py-10">
            <img src={logo.src} alt={logo.name} className="logo-grayscale h-12 object-contain" />
          </div>
        ))}
      </div>

      <SectionLabel>Platinum sponsors</SectionLabel>
      <div className="mb-16 grid grid-cols-2 divide-x divide-y divide-nickel border border-nickel md:grid-cols-3">
        {platinumSponsors.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center py-10">
            <img src={logo.src} alt={logo.name} className="logo-grayscale h-10 object-contain" />
          </div>
        ))}
      </div>

      <SectionLabel>Gold sponsors</SectionLabel>
      <div className="grid grid-cols-3 divide-x divide-y divide-nickel border border-nickel md:grid-cols-5">
        {goldSponsors.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center py-8">
            <img src={logo.src} alt={logo.name} className="logo-grayscale h-8 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
