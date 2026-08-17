"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { primaryNav, serviceNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Condense on scroll. Passive listener + a boolean state means this does not
  // re-render on every scroll frame, only on the threshold crossing.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes every overlay. Adjusted during render rather than in
  // an effect — an effect here would paint the new page with the old menu
  // still open for a frame, then cascade a second render to close it.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Lock body scroll only while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes; click-outside closes the mega-menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setServicesOpen(false);
      setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Small grace period so the pointer can cross the gap into the panel.
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between gap-4 transition-[height] duration-200",
          scrolled ? "h-14" : "h-16 md:h-20",
        )}
      >
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label="Codivra Solutions — home"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              if (item.href === "/services") {
                return (
                  <li
                    key={item.href}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive("/services")
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen && (
                      <div
                        id="services-menu"
                        className="absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-2 shadow-[var(--shadow-card)]">
                          <ul className="grid grid-cols-2 gap-1">
                            {serviceNav.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  className="block rounded-md p-3 transition-colors hover:bg-surface-2"
                                >
                                  <span className="block text-sm font-medium text-foreground">
                                    {service.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-muted-foreground">
                                    {service.description}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-1 border-t border-border p-3">
                            <Link
                              href="/services"
                              className="text-sm font-medium text-link hover:text-link-hover"
                            >
                              Compare all services and pricing →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Persistent quote CTA, per the conversion spec. */}
          <Button asChild size="sm" variant="gradient" className="hidden sm:inline-flex">
            <Link href="/contact">Get a quote</Link>
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-site py-6">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-subtle-foreground">
              Services
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              {serviceNav.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" variant="gradient" className="mt-6 w-full">
              <Link href="/contact">Get a quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
