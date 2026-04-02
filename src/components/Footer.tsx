import { Phone, MapPin, Clock } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const BOOKING_URL =
  "https://www.fresha.com/a/initial-salon-richmond-6386-no-3-road-kr9spcrw/all-offer?menu=true&rwg_token=AJKvS9UQy7d34XWVYz7Y2UcNMMI0llYMKBzKtJ-ix_hcoOULUtHkYyx4zXbut-9xmCflwhAa8Da7oKG28yDyZbEloWPcwryVjw%3D%3D&gei=7VnqZrP2Aorx0PEPoLbVsQ8";
const SHOP_URL = "https://www.fresha.com/store/initial-salon-store-ariubv76";

const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const { t } = useLanguage();

  const footerNav = [
    { label: t(translations.nav.home), href: "#home" },
    { label: t(translations.nav.stylists), href: "#stylists" },
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.portfolio), href: "#portfolio" },
  ];

  return (
    <footer className="border-t border-border">
      {/* Desktop/Tablet: full layout — Mobile: compact 2-col */}
      <div className="container-site py-8 md:py-16 lg:py-20">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
              <span className="font-heading text-xl font-bold text-foreground">Initial Salon</span>
            </a>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed mb-4">
              {t(translations.footer.tagline)}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/people/initial_hair_salon/100089371435734/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/initial_hair_salon/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.tiktok.com/@salon.initial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg></a>
              <a href="https://www.threads.com/@Initial_hair_salon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.415 2.35 5.56 3.995 3.51 5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.506 5.467l-2.85.795c-.964-3.478-3.323-5.345-6.49-5.362h-.009c-2.745.019-4.823.947-6.175 2.761C5.73 7.417 5.02 9.578 5 11.993v.014c.02 2.415.73 4.576 2.001 6.234 1.352 1.814 3.43 2.742 6.175 2.76h.009c2.312-.016 4.083-.693 5.265-2.012 1.037-1.157 1.6-2.728 1.672-4.667a7.7 7.7 0 00-2.005-.506 4.618 4.618 0 01-1.456 2.91c-.867.784-2.07 1.2-3.476 1.206h-.008c-1.79-.008-3.163-.658-4.08-1.93-.778-1.08-1.192-2.513-1.2-4.15v-.065c.008-1.637.422-3.07 1.2-4.15.917-1.272 2.29-1.922 4.08-1.93h.008c1.799.008 3.197.666 4.158 1.96.456.613.79 1.34 1 2.16a10.2 10.2 0 012.87.73c-.028-.584-.114-1.153-.26-1.706-.674-2.555-2.24-4.423-4.661-5.558a9.56 9.56 0 00-3.107-.776z"/></svg></a>
            </div>
          </div>
          <div className="hidden lg:block" />
          <div>
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.navigation)}</h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleAnchor(e, link.href)} className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.quickLinks)}</h4>
            <ul className="space-y-3">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {t(translations.nav.bookAppointment)}
                </a>
              </li>
              <li>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {t(translations.footer.shopProducts)}
                </a>
              </li>
              <li>
                <a href="#join-team" onClick={(e) => handleAnchor(e, "#join-team")} className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {t(translations.footer.joinOurTeam)}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.contactTitle)}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a href="tel:604-715-7888" className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">604-715-7888</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="font-body text-[15px] text-muted-foreground">#151 - 6386 No. 3 Rd.<br />Richmond, BC</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="font-body text-[15px] text-muted-foreground">
                  <p>{t(translations.footer.hoursShort)}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile compact layout */}
        <div className="md:hidden">
          <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-3">
            <span className="font-heading text-xl font-bold text-foreground">Initial Salon</span>
          </a>
          <div className="flex items-center gap-3 mb-4">
            <a href="https://www.facebook.com/people/initial_hair_salon/100089371435734/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/initial_hair_salon/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.tiktok.com/@salon.initial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg></a>
            <a href="https://www.threads.com/@Initial_hair_salon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.415 2.35 5.56 3.995 3.51 5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.506 5.467l-2.85.795c-.964-3.478-3.323-5.345-6.49-5.362h-.009c-2.745.019-4.823.947-6.175 2.761C5.73 7.417 5.02 9.578 5 11.993v.014c.02 2.415.73 4.576 2.001 6.234 1.352 1.814 3.43 2.742 6.175 2.76h.009c2.312-.016 4.083-.693 5.265-2.012 1.037-1.157 1.6-2.728 1.672-4.667a7.7 7.7 0 00-2.005-.506 4.618 4.618 0 01-1.456 2.91c-.867.784-2.07 1.2-3.476 1.206h-.008c-1.79-.008-3.163-.658-4.08-1.93-.778-1.08-1.192-2.513-1.2-4.15v-.065c.008-1.637.422-3.07 1.2-4.15.917-1.272 2.29-1.922 4.08-1.93h.008c1.799.008 3.197.666 4.158 1.96.456.613.79 1.34 1 2.16a10.2 10.2 0 012.87.73c-.028-.584-.114-1.153-.26-1.706-.674-2.555-2.24-4.423-4.661-5.558a9.56 9.56 0 00-3.107-.776z"/></svg></a>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-3">{t(translations.footer.navigation)}</h4>
              <ul className="space-y-2">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleAnchor(e, link.href)} className="font-body text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-3">{t(translations.footer.contactTitle)}</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Phone className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <a href="tel:604-715-7888" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">604-715-7888</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-[13px] text-muted-foreground">#151 - 6386 No. 3 Rd., Richmond, BC</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-[13px] text-muted-foreground">{t(translations.footer.hoursShort)}</span>
                </li>
              </ul>
              <div className="mt-4 space-y-1.5">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors block">{t(translations.nav.bookAppointment)} →</a>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors block">{t(translations.footer.shopProducts)} →</a>
                <a href="#join-team" onClick={(e) => handleAnchor(e, "#join-team")} className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors block">{t(translations.footer.joinOurTeam)} →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-site py-5 text-center">
          <p className="font-body text-[12px] text-muted-foreground leading-relaxed">
            © 2026 Initial Salon. All rights reserved. |{" "}
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">Bluluma</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
