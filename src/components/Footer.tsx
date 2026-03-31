import { Phone, MapPin, Clock } from "lucide-react";

const BOOKING_URL = "https://initialsalon.com/";

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "Stylists", href: "#stylists" },
  { label: "Services", href: "#services" },
  { label: "Portfolios", href: "#portfolios" },
  { label: "Contact", href: "#contact" },
];

const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
              <span className="font-heading text-lg font-bold text-foreground">Initial Salon</span>
            </a>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Where Japanese and Taiwanese expertise combine for exceptional styling in a harmonious and relaxing ambience.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-foreground mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {["Cut", "Perm", "Colour", "Treatment", "Shampoo & Blow Dry"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleAnchor(e, "#services")}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-foreground mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a href="tel:604-715-7888" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  604-715-7888
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">
                  #151 - 6386 No. 3 Rd.<br />Richmond, BC
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p>Mon – Fri: 11 am – 7 pm</p>
                  <p>Sat – Sun: 11 am – 7 pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-site py-5 text-center">
          <p className="font-body text-[11px] text-muted-foreground leading-relaxed">
            © {year} Initial Salon. All rights reserved. |{" "}
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
