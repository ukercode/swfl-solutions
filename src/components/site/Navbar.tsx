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
      <div className="container-prose flex items-center justify-between h-20 lg:h-28">
        <Link to="/" className="flex flex-col leading-tight group">
          <span
            className={cn(
              "font-serif text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight transition-colors",
              transparent ? "text-primary-foreground" : "text-primary",
            )}
          >
            SWFL <span className="text-accent">Solutions</span>
          </span>
          <span
            className={cn(
              "text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium transition-colors",
              transparent ? "text-primary-foreground/80" : "text-muted-foreground",
            )}
          >
            Owner Representative · Project Management
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
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

        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            transparent ? "text-primary-foreground" : "text-primary",
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
