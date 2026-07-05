"use client";

import { useRive, Layout, Fit, Alignment, RuntimeLoader } from "@rive-app/react-canvas";

// Host the Rive WASM locally so the page has no CDN / CSP dependency.
RuntimeLoader.setWasmUrl("/rive/rive.wasm");

interface RiveGraphicProps {
  /** Path under /public, e.g. "/rive/vite-masthead.riv" */
  src: string;
  /** Native artboard dimensions — used to preserve aspect ratio. */
  width: number;
  height: number;
  className?: string;
}

/**
 * Renders one of vite.dev's Rive brand animations. All three files expose a
 * default artboard driven by the "State Machine 1" state machine (verified
 * against the .riv binaries — see docs/research/hero-extraction).
 */
export function RiveGraphic({ src, width, height, className }: RiveGraphicProps) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  });

  return (
    <div
      className={className}
      style={{ aspectRatio: `${width} / ${height}`, width: "100%" }}
    >
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
