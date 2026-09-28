import { useEffect, useState } from "react";
import { designer, navLinks } from "@/data/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/75 text-foreground backdrop-blur-xl" : "bg-transparent text-paper"
      }`}
    >
      <nav className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 sm:px-10">
        <a href="#top" className="label link-underline min-w-0 truncate">
          {designer.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="label link-underline shrink-0">
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="label shrink-0 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-current/15 bg-background/95 px-6 py-6 text-foreground backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="label" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
