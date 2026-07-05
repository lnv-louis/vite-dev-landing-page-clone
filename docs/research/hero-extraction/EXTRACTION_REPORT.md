# Vite.dev Animated Brand-Asset Extraction — Report

Target: the animated graphics on https://vite.dev/ (hero masthead + two feature-panel animations).
Method: web-shader-extractor kernel (LIST → ATTRIBUTE → LOCK → TRACE → REPLAY).

## Surface Inventory (SOURCE)
- 3 `<canvas>` elements, all confirmed rendered by the **Rive** runtime (`@rive-app/canvas`, WASM `rive.BagEuNN0.wasm`).
  Not hand-drawn Canvas2D, not WebGL shaders, not Lottie. Distinguishing evidence: bundle strings
  `@rive.app`, `RiveAssetCDN`, `artboard`/`stateMachines`, `"Image mesh will not be drawn"` (Rive-specific),
  WebGL2→WebGL→Canvas2D fallback renderer.
- DPR 1, no iframes, no video, no OffscreenCanvas usage on these surfaces.

## Target Lock (SOURCE)
| Surface | `.riv` asset | Canvas | Role |
|---|---|---|---|
| canvas 0 | `641_x_629_vite_masthead.riv` | 639×627, top of hero | Hero masthead (primary brand asset) |
| canvas 1 | `563_x_420_rich_features.riv` | feature panel | "Rich Features Out of the Box" |
| canvas 2 | `640_x_300_flexible_plugin.riv` | feature panel | "Flexible Plugin System" |

Owner: VitePress theme Vue component (scopeId `data-v-f244ec38`), props `desktop-src`/`mobile-src`/
`desktop-width`/`desktop-height`/`mobile-width`/`mobile-height`/`canvas-class="w-full"`. No artboard or
state-machine prop passed → runtime uses the **default artboard** + default state machine.

## Replay Config (SOURCE — read from the .riv binaries via the Rive runtime)
All three drive playback through state machine **"State Machine 1"** on their default artboard:
- `vite-masthead.riv`   → artboard "Artboard", SM "State Machine 1" (timelines: Timeline 1/2)
- `rich-features.riv`   → default artboard "1", SM "State Machine 1"
- `flexible-plugin.riv` → artboard "Artboard", SM "State Machine 1"

Layout: canvas is `w-full`, intrinsic size = artboard size, `Fit.contain` / `Alignment.center`, `autoplay: true`.

## Replay Route (chosen)
Render the original `.riv` files with `@rive-app/react-canvas` `useRive({ src, stateMachines: "State Machine 1",
autoplay: true, layout: Layout({ fit: Contain, alignment: Center }) })`. This is source-faithful (identical
vector assets + runtime), not a visual rebuild. WASM hosted locally to avoid CDN/CSP dependency.

## Assets pulled to repo
`public/rive/{vite-masthead,rich-features,flexible-plugin}.riv` + Rive wasm (via npm package).

## Labels
Everything above is `SOURCE` (asset files, runtime identity, artboard/SM names read from the binaries).
`GUESS` remainder: exact `Fit` used by the site (contain vs layout) — contain matches visually; documented as the one open tuning point.
