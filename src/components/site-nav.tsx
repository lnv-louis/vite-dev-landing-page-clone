import Link from "next/link";
import {
  BlueskyIcon,
  ChevronDownIcon,
  DiscordIcon,
  GithubIcon,
  LanguagesIcon,
  MastodonIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "@/components/icons";

const NAV_LINKS = [
  { label: "Guide", href: "/" },
  { label: "Config", href: "/" },
  { label: "Plugins", href: "/" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/vitejs/vite", Icon: GithubIcon },
  { label: "Discord", href: "https://chat.vite.dev", Icon: DiscordIcon },
  { label: "Bluesky", href: "https://bsky.app/profile/vite.dev", Icon: BlueskyIcon },
  { label: "Mastodon", href: "https://elk.zone/m.webtoo.ls/@vite", Icon: MastodonIcon },
  { label: "X", href: "https://twitter.com/vite_js", Icon: XIcon },
] as const;

function AnnouncementBar() {
  return (
    <div className="border-b border-nickel bg-bg-alt">
      <div className="relative flex h-9 items-center justify-center px-6">
        <Link
          href="https://blog.vite.dev/"
          className="flex items-center gap-1.5 text-[13px] text-text-2 hover:text-text-1"
        >
          <span aria-hidden="true">⚡</span>
          <span>Cloudflare supports Vite&apos;s mission</span>
          <span aria-hidden="true">›</span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss announcement"
          className="absolute right-6 text-text-3 hover:text-text-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-30 h-(--nav-height) border-b border-nickel bg-bg">
      <div className="mx-auto flex h-full max-w-[1248px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <img src="/images/vite-wordmark-light.svg" alt="Vite" className="h-6" />
          </Link>
          <span className="rounded-full border border-nickel px-2 py-0.5 text-xs text-text-2">
            v6.12
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] text-text-2 hover:text-text-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="flex items-center gap-1 text-[15px] text-text-2 hover:text-text-1"
          >
            Resources
            <ChevronDownIcon className="size-3.5" />
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 text-[15px] text-text-2 hover:text-text-1"
          >
            v6.12
            <ChevronDownIcon className="size-3.5" />
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-md border border-nickel px-3 py-1.5 text-sm text-text-3 sm:flex"
          >
            <SearchIcon className="size-4" />
            <span>Search</span>
            <kbd className="rounded border border-nickel px-1.5 py-0.5 text-xs text-text-3">
              ⌘K
            </kbd>
          </button>
          <button
            type="button"
            aria-label="Change language"
            className="hidden text-text-2 hover:text-text-1 sm:block"
          >
            <LanguagesIcon className="size-5" />
          </button>
          <div className="hidden items-center gap-3 md:flex">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-text-2 hover:text-text-1"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
          <button type="button" aria-label="Open menu" className="text-text-2 hover:text-text-1 md:hidden">
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function SiteNav() {
  return (
    <header>
      <AnnouncementBar />
      <NavBar />
    </header>
  );
}
