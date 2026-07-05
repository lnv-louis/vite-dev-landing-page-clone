import { BlueskyIcon, DiscordIcon, GithubIcon, XIcon } from "@/components/icons";

type FooterLink = {
  label: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Vite",
    links: [
      { label: "Guide", href: "/guide/" },
      { label: "Config", href: "/config/" },
      { label: "Plugins", href: "/plugins/" },
      { label: "Resources", href: "/resources/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Releases", href: "https://github.com/vitejs/vite/releases" },
    ],
  },
  {
    heading: "Versions",
    links: [
      { label: "Unreleased Docs", href: "https://main.vite.dev" },
      { label: "Vite 7 Docs", href: "https://vite.dev" },
      { label: "Vite 6 Docs", href: "https://v6.vite.dev" },
      { label: "Vite 5 Docs", href: "https://v5.vite.dev" },
      { label: "Vite 4 Docs", href: "https://v4.vite.dev" },
      { label: "Vite 3 Docs", href: "https://v3.vite.dev" },
      { label: "Vite 2 Docs", href: "https://v2.vite.dev" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/vitejs/vite", icon: GithubIcon },
      { label: "Discord", href: "https://chat.vite.dev", icon: DiscordIcon },
      { label: "Bluesky", href: "https://bsky.app/profile/vite.dev", icon: BlueskyIcon },
      { label: "X.com", href: "https://x.com/vite_js", icon: XIcon },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-nickel bg-bg py-16">
      <div className="mx-auto max-w-[1248px] px-6">
        <div className="mb-12">
          <img src="/images/vite-wordmark-light.svg" alt="Vite" className="h-6" />
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-3 text-xs tracking-wider text-text-3 uppercase">
                {column.heading}
              </h3>
              <ul>
                {column.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block py-1 text-text-2 hover:text-text-1"
                      >
                        {Icon ? (
                          <span className="inline-flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            {link.label}
                          </span>
                        ) : (
                          link.label
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-nickel pt-6 text-xs text-text-3">
          © 2019-present VoidZero Inc. &amp; Vite contributors.
        </div>
      </div>
    </footer>
  );
}
