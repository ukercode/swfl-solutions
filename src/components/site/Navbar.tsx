import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-md shadow-card-soft border-b border-border",
      )}
    >
      <div className="container-prose flex items-center md:items-end justify-between gap-3 md:gap-6 py-3 md:py-0 md:h-24 lg:h-28 md:pb-6 lg:pb-8">
        <Link to="/" className="flex flex-col leading-tight group min-w-0 flex-shrink" translate="no">
          <span
            className={cn(
              "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors leading-none",
              transparent ? "text-primary-foreground" : "text-primary",
            )}
          >
            SWFL <span className="text-accent">Solutions</span>
          </span>
          <span
            className={cn(
              "mt-1 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.18em] font-medium transition-colors hidden sm:block",
              transparent ? "text-primary-foreground/80" : "text-muted-foreground",
            )}
          >
            Owner Representative · Project Management
          </span>
        </Link>

        <a
          href="tel:941-249-5750"
          translate="no"
          className={cn(
            "hidden md:block font-serif text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight transition-colors leading-none whitespace-nowrap md:flex-1 md:text-center",
            transparent ? "text-primary-foreground hover:text-accent" : "text-primary hover:text-accent",
          )}
        >
          941-249-5750
        </a>

        <a
          href="tel:941-249-5750"
          translate="no"
          aria-label="Call 941-249-5750"
          className={cn(
            "md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-medium text-sm transition-colors min-h-[44px]",
            transparent ? "text-primary-foreground hover:text-accent" : "text-primary hover:text-accent",
          )}
        >
          <Phone className="w-4 h-4" /> Call
        </a>

        <button
          className={cn(
            "md:hidden p-2 rounded-md transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center",
            transparent ? "text-primary-foreground" : "text-primary",
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden md:flex items-end gap-3 lg:gap-4 xl:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors relative py-2",
                  transparent ? "text-primary-foreground/90 hover:text-accent" : "text-foreground/80 hover:text-primary",
                  isActive && "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-accent",
                  isActive && (transparent ? "text-primary-foreground" : "text-primary"),
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-gold transition-all font-medium"
          >
            <Link to="/contact">
              <Phone className="w-4 h-4" /> Free Consultation
            </Link>
          </Button>
        </nav>

      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-elegant">
          <nav className="container-prose py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="mt-4 bg-accent text-accent-foreground hover:bg-accent-glow w-full"
            >
              <Link to="/contact">
                <Phone className="w-4 h-4" /> Free Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
