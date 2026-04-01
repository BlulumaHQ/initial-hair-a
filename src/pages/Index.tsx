import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Phone, MapPin, Clock, ChevronDown, ChevronUp, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL =
  "https://www.fresha.com/a/initial-salon-richmond-6386-no-3-road-kr9spcrw/all-offer?menu=true&rwg_token=AJKvS9UQy7d34XWVYz7Y2UcNMMI0llYMKBzKtJ-ix_hcoOULUtHkYyx4zXbut-9xmCflwhAa8Da7oKG28yDyZbEloWPcwryVjw%3D%3D&gei=7VnqZrP2Aorx0PEPoLbVsQ8";
const SHOP_URL = "https://www.fresha.com/store/initial-salon-store-ariubv76";

/* ── Data ── */

const stylists = [
  { name: "Ken", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg" },
  { name: "Summer", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg" },
  { name: "James", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg" },
  { name: "Hubert", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-52.jpg" },
  { name: "Hikaso", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-22.jpg" },
  { name: "Ayane Oda", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-23.jpg" },
  { name: "Angus", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-54.jpg" },
  { name: "Mako", img: "https://initialsalon.com/wp-content/uploads/2025/11/initial-hair-pic-222.jpg" },
  { name: "Wanda", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-32.jpg" },
  { name: "Emi", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-30.jpg" },
  { name: "Donna", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg" },
  { name: "Stella", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg" },
  { name: "Hiro", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg" },
  { name: "Kuro", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg" },
  { name: "Meg", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg" },
];

const serviceCategories = [
  {
    title: "Cut",
    note: "Includes shampoo & blow-dry",
    items: [
      { name: "Men Cut", price: "$55 – $80" },
      { name: "Women Cut", price: "$60 – $80" },
    ],
  },
  {
    title: "Perm",
    note: "Does not include hair cut, shampoo & blow-dry",
    items: [
      { name: "Japanese Perm", price: "From $110" },
      { name: "Japanese Straight Perm", price: "From $250" },
      { name: "Digital Perm", price: "From $250" },
    ],
  },
  {
    title: "Colour",
    note: "Does not include shampoo & blow-dry",
    items: [
      { name: "Retouch", price: "From $95" },
      { name: "Colour", price: "From $95" },
      { name: "Bleach + Colour", price: "From $360" },
      { name: "Highlight / Balayage", price: "From $400" },
    ],
  },
  {
    title: "Treatment",
    note: "Does not include shampoo price",
    items: [
      { name: "Nakano Treatment", price: "From $120" },
      { name: "Tokio Treatment", price: "From $130" },
      { name: "Scalp Treatment", price: "From $120" },
    ],
  },
  {
    title: "Other",
    note: "",
    items: [{ name: "Shampoo & Blow Dry", price: "From $45" }],
  },
];

const portfolioImages = [
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-52.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-22.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-23.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-54.jpg",
  "https://initialsalon.com/wp-content/uploads/2025/11/initial-hair-pic-222.jpg",
];

const testimonials = [
  {
    text: "The hairstylist Summer did the lightening and coloring for my hair, she is awesome! She spent time with you to discuss what color is right for you and it looks so good!",
    author: "Ming H.",
  },
  {
    text: "I have curly wavy hair, and Ken was knowledgeable on how to handle colour on my hair to ensure that hair damage is controlled; it was a pleasure to see my hair being taken care of!",
    author: "Angela T.",
  },
  {
    text: "I always enjoy my visit to Initial Salon... the atmosphere is so calming & relaxing. As usual I leave feeling like a million dollars, and absolutely love my haircut.",
    author: "Kathy R.",
  },
  {
    text: "Hikaso did an amazing job with my hair colouring. The color is exactly what I have in mind. I have a sensitive scalp, yet my scalp feels totally fine.",
    author: "Claire L.",
  },
  {
    text: "Mako was so nice and he definitely gave me what I wanted for my perm! He is really easy to talk to, very accommodating and made me feel very comfortable.",
    author: "Vincent",
  },
  {
    text: "I am so happy with the results! This was my first time getting my hair dyed and I was nervous because I have very curly hair. Ayaka was so kind, she explained the process and knew how to style curls!",
    author: "Tania L.",
  },
];

/* ── Reveal helper ── */
const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Page ── */
const Index = () => {
  const [showAllStylists, setShowAllStylists] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const visibleStylists = showAllStylists ? stylists : stylists.slice(0, 8);

  return (
    <Layout>
      <SEOHead
        title="Initial Salon – Where Style Meets Sophistication"
        description="Welcome to Initial Hair Salon in Richmond, BC. Japanese and Taiwanese expertise combine for exceptional styling. Book your appointment today."
      />

      {/* ═══════ HERO ═══════ */}
      <section id="home" className="relative min-h-[92vh] flex items-end pb-16 md:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" />
        <div className="relative z-10 container-site w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-background/60 mb-4">
              Japanese &amp; Taiwanese Expertise · Richmond, BC
            </p>
            <h1 className="font-heading text-background leading-[1.05] tracking-tight mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}>
              Bring Out the Best in Your Hair
            </h1>
            <p className="font-body text-sm md:text-base text-background/75 leading-relaxed mb-8 max-w-sm">
              Precision meets artistry. Experience personalized styling in a harmonious, relaxing ambience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Book Appointment
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline border-background/25 text-background hover:bg-background hover:text-foreground text-center"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.span variants={reveal} custom={0} className="section-label">About</motion.span>
              <motion.h2 variants={reveal} custom={1} className="section-title mb-6">Sculpting Stylish Solutions</motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-muted-foreground leading-[1.8] mb-4 text-[15px]">
                Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Our stylists merge precision and innovation to create personalized experiences that exceed expectations.
              </motion.p>
              <motion.p variants={reveal} custom={3} className="font-body text-muted-foreground leading-[1.8] text-[15px]">
                Step in and immerse yourself in our salon's harmonious and relaxing ambience. Every visit is crafted to make you feel your very best.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg"
                alt="Initial Salon interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STYLISTS ═══════ */}
      <section id="stylists" className="py-24 md:py-32 bg-accent/40">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">Our Team</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">Stylists</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-12"
          >
            {visibleStylists.map((s, i) => (
              <motion.div key={`${s.name}-${i}`} variants={reveal} custom={i} className="text-center group">
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground tracking-wide">{s.name}</h3>
                <p className="font-body text-[11px] text-muted-foreground mt-1 tracking-wider uppercase">Stylist</p>
              </motion.div>
            ))}
          </motion.div>

          {stylists.length > 8 && (
            <div className="text-center mt-10">
              <button onClick={() => setShowAllStylists(!showAllStylists)} className="btn-ghost gap-2 text-xs tracking-wider uppercase">
                {showAllStylists ? (<>Show Less <ChevronUp className="w-3.5 h-3.5" /></>) : (<>View All Stylists <ChevronDown className="w-3.5 h-3.5" /></>)}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="py-24 md:py-32">
        <div className="container-site max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">What We Offer</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">Services &amp; Pricing</motion.h2>
          </motion.div>

          {/* Promo */}
          <div className="mb-10 py-3 px-5 border-l-2 border-secondary/40 bg-accent/30">
            <p className="font-body text-sm text-foreground">
              New stylist discount — <span className="font-semibold">15% off perm &amp; colouring</span>
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-border border-t border-b border-border">
            {serviceCategories.map((cat, ci) => (
              <div key={cat.title}>
                <button
                  onClick={() => setExpandedService(expandedService === ci ? null : ci)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div>
                    <span className="font-heading text-base font-bold text-foreground">{cat.title}</span>
                    {cat.note && <span className="block font-body text-[11px] text-muted-foreground mt-0.5">{cat.note}</span>}
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${expandedService === ci ? "rotate-180" : ""}`} />
                </button>
                {expandedService === ci && (
                  <div className="pb-5">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-baseline justify-between py-2.5">
                        <span className="font-body text-sm text-foreground">{item.name}</span>
                        <span className="font-body text-sm text-muted-foreground tabular-nums">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="font-body text-[11px] text-muted-foreground text-center mt-6 tracking-wide">
            Prices may vary depending on hair length, thickness, and stylist.
          </p>

          <div className="text-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ PORTFOLIO ═══════ */}
      <section id="portfolio" className="py-24 md:py-32 bg-accent/40">
        <div className="container-site">
          {/* @ts-ignore */}
          <behold-widget feed-id="9Cg03AgPL9WyaEb5o8tX"></behold-widget>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 md:py-32">
        <div className="container-site max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">Client Love</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.author} variants={reveal} custom={i} className="relative pl-5 border-l border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-secondary/60 text-secondary/60" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-[1.8] italic mb-4">"{t.text}"</p>
                <p className="font-body text-[11px] font-semibold text-foreground tracking-wider uppercase">— {t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTACT + INFO ═══════ */}
      <section className="py-24 md:py-32 bg-accent/40">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left — info */}
            <div>
              <span className="section-label">Visit Us</span>
              <h2 className="section-title mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                    <a href="tel:604-715-7888" className="font-body text-sm text-foreground hover:text-secondary transition-colors">604-715-7888</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Address</p>
                    <p className="font-body text-sm text-foreground">#151 - 6386 No. 3 Rd., Richmond, BC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Hours</p>
                    <p className="font-body text-sm text-foreground">Monday – Sunday: 11:00 am – 7:00 pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right — map */}
            <div className="aspect-square lg:aspect-auto overflow-hidden bg-muted">
              <iframe
                title="Initial Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.1368!3d49.1707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzE0LjUiTiAxMjPCsDA4JzEyLjUiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ JOIN OUR TEAM ═══════ */}
      <section id="join-team" className="py-24 md:py-32">
        <div className="container-site max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <motion.span variants={reveal} custom={0} className="section-label">Careers</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title mb-6">Join Our Team</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-sm text-muted-foreground leading-[1.8] mb-10 max-w-lg mx-auto">
              Are you a passionate and talented hair stylist looking to advance your career? Our salon offers a vibrant environment where you can showcase your skills, learn from experienced stylists, and grow with us.
            </motion.p>
          </motion.div>

          {/* Simple contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-left space-y-5 max-w-md mx-auto"
          >
            <div>
              <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
              <input type="text" className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
              <input type="email" className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors" placeholder="Your email" />
            </div>
            <div>
              <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
              <textarea rows={4} className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none" placeholder="Tell us about yourself..." />
            </div>
            <button type="submit" className="btn-primary w-full gap-2 justify-center">
              <Send className="w-3.5 h-3.5" /> Send Application
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
