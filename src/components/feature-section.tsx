import { RiveGraphic } from "@/components/rive-graphic";

type Panel = {
  title: string;
  desc: string;
} & (
  | { variant: "gradient"; bg: string; media: string; mediaClass?: string }
  | { variant: "plain"; media: string; mediaClass?: string }
  | { variant: "rive"; riveSrc: string; riveW: number; riveH: number }
);

const GRID_ONE: Panel[] = [
  {
    title: "Instant Server Start",
    desc: "On demand source file serving over native ESM, with blazing fast dependency pre-bundling.",
    variant: "gradient",
    bg: "/images/feature/panel-1-bg.jpg",
    media: "/images/feature/panel-1-terminal.svg",
    mediaClass: "max-w-[85%]",
  },
  {
    title: "Lightning Fast HMR",
    desc: "Instantly reflect changes as you save, no matter how big your app is.",
    variant: "plain",
    media: "/images/feature/panel-2-terminal.png",
    mediaClass: "md:max-w-[80%]",
  },
  {
    title: "Rich Features Out of the Box",
    desc: "TypeScript, JSX, CSS, Workers, WebAssembly... and more just a plugin away.",
    variant: "rive",
    riveSrc: "/rive/rich-features.riv",
    riveW: 563,
    riveH: 420,
  },
  {
    title: "Optimized Build",
    desc: "Advanced tree-shaking, built-in minification, fine-grained chunking control powered by Rolldown.",
    variant: "gradient",
    bg: "/images/feature/panel-4-bg.jpg",
    media: "/images/feature/panel-4-terminal.svg",
    mediaClass: "max-w-[85%]",
  },
];

const GRID_TWO: Panel[] = [
  {
    title: "Flexible Plugin System",
    desc: "Vite plugins extends Rollup's well-designed plugin interface with a few extra Vite-specific options.",
    variant: "rive",
    riveSrc: "/rive/flexible-plugin.riv",
    riveW: 640,
    riveH: 300,
  },
  {
    title: "Fully Typed API",
    desc: "Designed to be built on top of.",
    variant: "gradient",
    bg: "/images/feature/panel-4-bg.jpg",
    media: "/images/feature/typed-api.svg",
    mediaClass: "max-w-[85%]",
  },
  {
    title: "First class SSR Support",
    desc: "It's never been easier to setup custom SSR (Server-Side Rendering), or build your own SSR framework.",
    variant: "plain",
    media: "/images/feature/ssr-support.png",
    mediaClass: "w-full px-5",
  },
  {
    title: "Continuous ecosystem integration",
    desc: "Our CI continuously tests Vite changes against downstream projects, allowing us to improve Vite with stability and confidence.",
    variant: "plain",
    media: "/images/feature/ci.svg",
    mediaClass: "w-full",
  },
];

function PanelHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2 p-6 md:p-10">
      <h3 className="font-display text-xl font-medium md:text-2xl">{title}</h3>
      <p className="max-w-md text-sm text-text-2 md:text-base">{desc}</p>
    </div>
  );
}

function FeaturePanel({ panel }: { panel: Panel }) {
  if (panel.variant === "gradient") {
    return (
      <div className="flex min-h-[24rem] flex-col justify-between">
        <PanelHeader title={panel.title} desc={panel.desc} />
        <div className="relative flex flex-1 items-end justify-center overflow-hidden">
          <img
            src={panel.bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={panel.media}
            alt={panel.title}
            className={`relative z-[1] mb-[-1px] object-contain ${panel.mediaClass ?? ""}`}
          />
        </div>
      </div>
    );
  }
  if (panel.variant === "plain") {
    return (
      <div className="flex min-h-[24rem] flex-col justify-between gap-6">
        <PanelHeader title={panel.title} desc={panel.desc} />
        <div className="flex justify-center px-6 pb-6">
          <img
            src={panel.media}
            alt={panel.title}
            className={`object-contain ${panel.mediaClass ?? ""}`}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-[24rem] flex-col justify-between gap-6">
      <PanelHeader title={panel.title} desc={panel.desc} />
      <div className="px-6 pb-6">
        <RiveGraphic src={panel.riveSrc} width={panel.riveW} height={panel.riveH} />
      </div>
    </div>
  );
}

function FeatureGrid({ panels }: { panels: Panel[] }) {
  return (
    <div className="wrapper-ticks grid divide-x divide-y divide-nickel border-t border-nickel lg:grid-cols-2">
      {panels.map((panel) => (
        <FeaturePanel key={panel.title} panel={panel} />
      ))}
    </div>
  );
}

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <h2 className="font-display text-3xl font-medium md:text-5xl">{title}</h2>
      {sub ? <p className="max-w-md text-text-2">{sub}</p> : null}
    </div>
  );
}

export function FeatureSection() {
  return (
    <>
      <SectionHeading
        title="Redefining developer experience"
        sub="Vite makes web development enjoyable again."
      />
      <FeatureGrid panels={GRID_ONE} />
      <SectionHeading title="A shared foundation to build upon" />
      <FeatureGrid panels={GRID_TWO} />
    </>
  );
}
