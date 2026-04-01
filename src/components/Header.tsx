import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/a/initial-salon-richmond-6386-no-3-road-kr9spcrw/all-offer?menu=true&rwg_token=AJKvS9UQy7d34XWVYz7Y2UcNMMI0llYMKBzKtJ-ix_hcoOULUtHkYyx4zXbut-9xmCflwhAa8Da7oKG28yDyZbEloWPcwryVjw%3D%3D&gei=7VnqZrP2Aorx0PEPoLbVsQ8";
const SHOP_URL = "https://www.fresha.com/store/initial-salon-store-ariubv76";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "STYLISTS", href: "#stylists" },
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "JOIN OUR TEAM", href: "#join-team" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]" : "bg-background"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex-shrink-0"
        >
          <img
            src="https://initialsalon.com/wp-content/uploads/2024/06/initial-Hair-salon-logo.png"
            alt="Initial Salon"
            className="h-[54px] md:h-[64px] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body text-[11px] tracking-[0.16em] font-medium text-foreground/55 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] tracking-[0.16em] font-medium text-foreground/55 hover:text-foreground transition-colors"
          >
            SHOP
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary text-[12px] py-2.5 px-6"
        >
          Book Appointment
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-background z-40">
          <nav className="container-site py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-body text-[15px] tracking-[0.1em] font-medium text-foreground py-4 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] tracking-[0.1em] font-medium text-foreground py-4 border-b border-border/50"
            >
              SHOP ↗
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-6"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
