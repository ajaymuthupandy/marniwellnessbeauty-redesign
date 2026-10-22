"use client";

import { useEffect } from "react";

/**
 * Publishes the footer's height as --footer-h on <html>, so the page's last
 * section (.section-end) can fill exactly the screen above the footer.
 */
export function FooterHeight({ target }: { target: string }) {
  useEffect(() => {
    const footer = document.getElementById(target);
    if (!footer) return;
    const root = document.documentElement.style;
    const observer = new ResizeObserver(() => root.setProperty("--footer-h", `${footer.getBoundingClientRect().height}px`));
    observer.observe(footer);
    return () => observer.disconnect();
  }, [target]);
  return null;
}
