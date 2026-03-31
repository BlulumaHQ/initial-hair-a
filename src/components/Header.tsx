import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "STYLISTS", to: "/stylists" },
  { label: "SERVICES", to: "/services" },
  { label: "PORTFOLIOS", to: "/portfolios" },
  { label: "CONTACT", to: "/contact" },
  { label: "SHOP", to: "/shop" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://initialsalon.com/wp-content/uploads/2024/06/initial-Hair-salon-logo.png"
            alt="Initial Salon"
            className="h-[65px] md:h-[75px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xs tracking-[0.15em] font-semibold transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-foreground hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:604-715-7888" className="flex items-center gap-2 text-foreground font-body text-sm font-medium">
            <Phone className="w-4 h-4" />
            604-715-7888
          </a>
          <a
            href="https://initialsalon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-site py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm tracking-[0.12em] font-semibold py-2 ${
                    location.pathname === link.to
                      ? "text-secondary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:604-715-7888" className="flex items-center gap-2 text-foreground font-body text-sm font-medium">
                  <Phone className="w-4 h-4" />
                  604-715-7888
                </a>
                <a
                  href="https://initialsalon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Book Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
