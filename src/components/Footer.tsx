import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Stylists", to: "/stylists" },
  { label: "Services", to: "/services" },
  { label: "Portfolios", to: "/portfolios" },
  { label: "Contact", to: "/contact" },
  { label: "Shop", to: "/shop" },
];

const services = ["Cut", "Perm", "Colour", "Treatment", "Shampoo & Blow Dry"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site section-padding">
        {/* Desktop: 5 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-bold text-primary-foreground">
                Initial Salon
              </span>
            </Link>
            <p className="font-body text-sm leading-relaxed opacity-80">
              Where Japanese and Taiwanese expertise combine for exceptional styling. Step in and immerse yourself in our salon's harmonious and relaxing ambience.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                <a href="tel:604-715-7888" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">
                  604-715-7888
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="font-body text-sm opacity-80">
                  #151 - 6386 No. 3 Rd.<br />Richmond, BC
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                <div className="font-body text-sm opacity-80">
                  <p>Mon – Fri: 11:00 am – 7:00 pm</p>
                  <p>Sat – Sun: 11:00 am – 7:00 pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container-site py-5 text-center">
          <p className="font-body text-xs opacity-60 leading-relaxed">
            © {year} Initial Salon. All rights reserved. |{" "}
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
