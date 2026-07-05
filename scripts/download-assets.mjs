// Downloads all vite.dev homepage assets into public/. Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const PUB = join(ROOT, "public");

// [remoteUrl, localPathRelativeToPublic]
const ASSETS = [
  // Fonts (proprietary + Inter latin subsets) -> public/fonts
  ["https://vite.dev/assets/APK-Protocol-Medium.C7Mq9oGh.woff2", "fonts/APK-Protocol-Medium.woff2"],
  ["https://vite.dev/assets/APK-Protocol-Semi-Bold.CC2BASA5.woff2", "fonts/APK-Protocol-Semi-Bold.woff2"],
  ["https://vite.dev/assets/KHTekaMono-Regular.CiZ9ZkmZ.woff2", "fonts/KHTekaMono-Regular.woff2"],
  ["https://vite.dev/assets/KHTekaMono-Medium.CxAWoJPq.woff2", "fonts/KHTekaMono-Medium.woff2"],
  // Logos / brand
  ["https://vite.dev/logo.svg", "images/vite-logo.svg"],
  ["https://vite.dev/logo-without-border.svg", "seo/favicon.svg"],
  ["https://vite.dev/assets/vite-light.t8GCa_VF.svg", "images/vite-wordmark-light.svg"],
  ["https://vite.dev/assets/vite-dark.D2ACe7TL.svg", "images/vite-wordmark-dark.svg"],
  ["https://vite.dev/og-image.jpg", "seo/og-image.jpg"],
  // Trusted-by logos
  ["https://vite.dev/trusted-by/openai.svg", "images/trusted-by/openai.svg"],
  ["https://vite.dev/trusted-by/shopify.svg", "images/trusted-by/shopify.svg"],
  ["https://vite.dev/trusted-by/stripe.svg", "images/trusted-by/stripe.svg"],
  ["https://vite.dev/trusted-by/linear.svg", "images/trusted-by/linear.svg"],
  ["https://vite.dev/trusted-by/clickup.svg", "images/trusted-by/clickup.svg"],
  ["https://vite.dev/trusted-by/wiz.svg", "images/trusted-by/wiz.svg"],
  // Feature panels
  ["https://vite.dev/assets/vite-featurepanel-1-background.BHnDg8j4.jpg", "images/feature/panel-1-bg.jpg"],
  ["https://vite.dev/assets/vite-featurepanel-1-terminal.CQVUoUSU.svg", "images/feature/panel-1-terminal.svg"],
  ["https://vite.dev/assets/vite-featurepanel-2-terminal.ChpAU6sR.png", "images/feature/panel-2-terminal.png"],
  ["https://vite.dev/assets/vite-featurepanel-4-background.Bnx0RZk-.jpg", "images/feature/panel-4-bg.jpg"],
  ["https://vite.dev/assets/vite-featurepanel-4-terminal.BRnxuy_J.svg", "images/feature/panel-4-terminal.svg"],
  ["https://vite.dev/assets/vite-typed-api.B7gyuuaS.svg", "images/feature/typed-api.svg"],
  ["https://vite.dev/assets/vite-ssr-support.DvdwoLgL.png", "images/feature/ssr-support.png"],
  ["https://vite.dev/assets/vite-ci.rfkpyz0p.svg", "images/feature/ci.svg"],
  // Frameworks
  ["https://vite.dev/assets/vite-frameworks.D3X8o4O8.png", "images/vite-frameworks.png"],
  ["https://vite.dev/assets/vite-frameworks-mobile.BooA3_E6.png", "images/vite-frameworks-mobile.png"],
  // VoidZero + footer bg
  ["https://vite.dev/assets/vite-by-voidzero.D7bblMgo.png", "images/vite-by-voidzero.png"],
  ["https://vite.dev/assets/footer-background.BIgtbvhx.jpg", "images/footer-background.jpg"],
  // Sponsors
  ["https://sponsors.vite.dev/images/bolt.svg", "images/sponsors/bolt.svg"],
  ["https://sponsors.vite.dev/images/nuxtlabs.svg", "images/sponsors/nuxtlabs.svg"],
  ["https://sponsors.vite.dev/images/storyblok.png", "images/sponsors/storyblok.png"],
  ["https://sponsors.vite.dev/images/coderabbit.png", "images/sponsors/coderabbit.png"],
  ["https://sponsors.vite.dev/images/greptile.png", "images/sponsors/greptile.png"],
  ["https://sponsors.vite.dev/images/railway.svg", "images/sponsors/railway.svg"],
  ["https://sponsors.vite.dev/images/serpapi.png", "images/sponsors/serpapi.png"],
  ["https://sponsors.vite.dev/images/mux.svg", "images/sponsors/mux.svg"],
  ["https://sponsors.vite.dev/images/nx.svg", "images/sponsors/nx.svg"],
  ["https://sponsors.vite.dev/images/transloadit.png", "images/sponsors/transloadit.png"],
  ["https://sponsors.vite.dev/images/handsontable.svg", "images/sponsors/handsontable.svg"],
  ["https://sponsors.vite.dev/images/mojam.svg", "images/sponsors/mojam.svg"],
  ["https://sponsors.vite.dev/images/convex.svg", "images/sponsors/convex.svg"],
  ["https://sponsors.vite.dev/images/zephyr_cloud.png", "images/sponsors/zephyr_cloud.png"],
  ["https://sponsors.vite.dev/images/catalyst.svg", "images/sponsors/catalyst.svg"],
  ["https://sponsors.vite.dev/images/sanity.svg", "images/sponsors/sanity.svg"],
  ["https://sponsors.vite.dev/images/follower24.svg", "images/sponsors/follower24.svg"],
  // Testimonial avatars
  ["https://pbs.twimg.com/profile_images/1810837163447308292/8Piov0f6_400x400.jpg", "images/avatars/ryan-carniato.jpg"],
  ["https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg", "images/avatars/rich-harris.jpg"],
  ["https://pbs.twimg.com/profile_images/1691627325794725888/voQFcYjY_400x400.jpg", "images/avatars/david-east.jpg"],
  ["https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_400x400.jpg", "images/avatars/mark-dalgleish.jpg"],
  ["https://pbs.twimg.com/profile_images/1374778373239681025/Sc9ehtAr_400x400.jpg", "images/avatars/jason-miller.jpg"],
  ["https://pbs.twimg.com/profile_images/1911613315765133312/HVkULegC_400x400.jpg", "images/avatars/david-cramer.jpg"],
  ["https://pbs.twimg.com/profile_images/3380865881/f73b3687ff39b795db05fcaf35972270_400x400.jpeg", "images/avatars/dion-almaer.jpg"],
  ["https://pbs.twimg.com/profile_images/1910252462126313472/gXgT-jxL_400x400.jpg", "images/avatars/christoph-nakazawa.jpg"],
  ["https://avatars.githubusercontent.com/u/13629190?v=4", "images/avatars/nikolaj.jpg"],
];

async function fetchOne([url, rel]) {
  const dest = join(PUB, rel);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return `FAIL ${res.status} ${url}`;
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return `OK ${rel} (${(buf.length / 1024).toFixed(0)}kb)`;
  } catch (e) {
    return `ERR ${url} ${e.message}`;
  }
}

async function main() {
  const results = [];
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    results.push(...(await Promise.all(batch.map(fetchOne))));
  }
  const fails = results.filter((r) => !r.startsWith("OK"));
  console.log(results.join("\n"));
  console.log(`\n${results.length - fails.length}/${results.length} downloaded. ${fails.length} failed.`);
}
main();
