"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, socials, type NavLink } from "@/data/site";
import { ArrowIcon, ChevronIcon, CloseIcon, FacebookIcon, InstagramIcon, MenuIcon } from "./icons";
import { SmartLink } from "./ui";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href.replace(/\/$/, ""));

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [baliOpen, setBaliOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const closeTimer = useRef<number | undefined>(undefined);

  // A new pathname means the navigation finished: drop the progress bar and any open menus.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setNavigating(false);
    setBaliOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Show the progress bar as soon as an internal link to another page is clicked.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      setNavigating(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Safety net: never leave the bar running if a navigation is abandoned.
  useEffect(() => {
    if (!navigating) return;
    const t = window.setTimeout(() => setNavigating(false), 8000);
    return () => window.clearTimeout(t);
  }, [navigating]);

  // Hover intent: open at once, close after a short grace period so small slips don't shut the menu.
  const openBali = () => {
    window.clearTimeout(closeTimer.current);
    setBaliOpen(true);
  };
  const closeBali = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setBaliOpen(false), 220);
  };

  const close = () => {
    setOpen(false);
    setBaliOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b bg-white transition-[height,border-color] duration-300 ${
          scrolled
            ? "h-(--header-h-compact) border-line [--logo-h:2.125rem] lg:[--logo-h:2.5rem]"
            : "h-(--header-h) border-transparent [--logo-h:2.5rem] lg:[--logo-h:3rem]"
        }`}
      >
        {/* From desktop up, equal side columns keep the menu on the page's centre line, however wide the logo is. */}
        <div className="container-x flex h-full items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="shrink-0 justify-self-start" aria-label="Marni Alas Retreat Center Ubud, home">
            {/* The negative margin cancels the PNG's transparent left edge so the logo lines up with the content. */}
            <Image
              src="/images/2025/05/logomarcmiring.png"
              alt="Marni Alas Retreat Center Ubud"
              width={500}
              height={115}
              loading="eager"
              className="ml-[calc(var(--logo-h)*-0.148)] h-(--logo-h) w-auto transition-[height,margin] duration-300"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                "children" in item ? (
                  <li
                    key={item.label}
                    className="group relative"
                    onMouseEnter={openBali}
                    onMouseLeave={closeBali}
                    onKeyDown={(e) => e.key === "Escape" && setBaliOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={baliOpen}
                      aria-haspopup="true"
                      onClick={() => setBaliOpen((v) => !v)}
                      className={`label relative flex items-center gap-1 px-3 py-3 text-gold-ink after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:bg-gold-light after:transition-transform after:duration-300 ${
                        item.children.some((c) => isActive(pathname, c.href)) ? "after:scale-x-100" : "after:scale-x-0"
                      }`}
                    >
                      {item.label}
                      <ChevronIcon className={`text-sm transition-transform ${baliOpen ? "rotate-180" : ""}`} />
                    </button>
                    <ul
                      className={`absolute left-0 top-full min-w-60 border-t-2 border-gold-light bg-white py-2 shadow-[0_18px_40px_-18px_rgb(34_34_34/0.35)] transition-[opacity,transform,visibility] duration-200 group-has-[:focus-visible]:visible group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:opacity-100 ${
                        baliOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SmartLink
                            href={child.href}
                            onClick={(e) => {
                              e.currentTarget.blur();
                              setBaliOpen(false);
                            }}
                            className={`label block px-5 py-2.5 transition-colors hover:bg-mist hover:text-gold-ink ${
                              isActive(pathname, child.href) ? "text-gold-ink" : "text-ink-soft"
                            }`}
                          >
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <DesktopLink item={item} active={isActive(pathname, item.href)} />
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            type="button"
            className="-mr-2 grid size-11 place-items-center justify-self-end text-2xl text-gold-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>

        <div
          aria-hidden="true"
          className={`absolute inset-x-0 -bottom-px h-0.5 bg-gold-light ${navigating ? "nav-progress" : "scale-x-0 opacity-0"}`}
        />
      </header>

      {/* Holds the header's full height in the page flow, so content never starts underneath it. */}
      <div aria-hidden="true" className="h-(--header-h) shrink-0" />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-night text-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-x flex h-(--header-h) shrink-0 items-center justify-between border-b border-white/10">
          <span className="label text-gold-light">Menu</span>
          <button type="button" className="-mr-2 grid size-11 place-items-center text-2xl" aria-label="Close menu" onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto py-4">
          <ul className="divide-y divide-white/10">
            {nav.map((item) =>
              "children" in item ? (
                <li key={item.label} className="py-1">
                  <span className="block py-3 text-lg font-semibold uppercase tracking-[0.1em] text-gold-light">{item.label}</span>
                  <ul className="mb-2 grid grid-cols-2 gap-x-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <SmartLink href={child.href} onClick={close} className="label block py-2.5 text-white/80 hover:text-gold-light">
                          {child.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <SmartLink
                    href={item.href}
                    onClick={close}
                    className={`block py-3 text-lg font-semibold uppercase tracking-[0.1em] ${
                      isActive(pathname, item.href) ? "text-gold-light" : "text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.external && <ExternalMark />}
                    </span>
                  </SmartLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="container-x flex shrink-0 items-center justify-between border-t border-white/10 py-4">
          <Socials className="flex text-white/70" />
          <span className="label text-white/50">Bali · Switzerland</span>
        </div>
      </div>
    </>
  );
}

/** Marks a nav link that leaves the site in a new tab. */
function ExternalMark() {
  return (
    <>
      <ArrowIcon aria-hidden="true" className="-rotate-45 text-[0.9em]" />
      <span className="sr-only">(opens in a new tab)</span>
    </>
  );
}

function DesktopLink({ item, active }: { item: NavLink; active: boolean }) {
  return (
    <SmartLink
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`label relative flex items-center gap-1 px-3 py-3 text-gold-ink after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-center after:bg-gold-light after:transition-transform after:duration-300 hover:after:scale-x-100 ${
        active ? "after:scale-x-100" : "after:scale-x-0"
      }`}
    >
      {item.label}
      {item.external && <ExternalMark />}
    </SmartLink>
  );
}

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`items-center ${className}`}>
      <a
        href={socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="grid size-10 place-items-center text-lg transition-colors hover:text-gold"
      >
        <FacebookIcon />
      </a>
      <a
        href={socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="grid size-10 place-items-center text-lg transition-colors hover:text-gold"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
