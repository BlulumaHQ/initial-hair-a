import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://initialsalon.com/";

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

/* ── Animations ── */

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
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

      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-foreground/20" />
        <div className="relative z-10 container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-background/70 mb-5">
              Japanese & Taiwanese Expertise
            </p>
            <h1 className="hero-title text-background mb-5">
              Bring Out the Best in Your Hair
            </h1>
            <p className="font-body text-base md:text-lg text-background/80 leading-relaxed mb-8 max-w-md">
              Where precision meets artistry. Experience personalized styling in a harmonious and relaxing ambience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Book Appointment
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline border-background/30 text-background hover:bg-background hover:text-foreground text-center"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeIn} custom={0} className="section-label">About Us</motion.span>
              <motion.h2 variants={fadeIn} custom={1} className="section-title mb-5">
                Sculpting Stylish Solutions
              </motion.h2>
              <motion.p variants={fadeIn} custom={2} className="font-body text-muted-foreground leading-relaxed mb-4">
                Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Our stylists merge precision and innovation to create personalized experiences that exceed expectations.
              </motion.p>
              <motion.p variants={fadeIn} custom={3} className="font-body text-muted-foreground leading-relaxed">
                Step in and immerse yourself in our salon's harmonious and relaxing ambience. Every visit is crafted to make you feel your best.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] rounded-xl overflow-hidden"
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

      {/* ─── STYLISTS ─── */}
      <section id="stylists" className="section-padding bg-muted/30">
        <div className="container-site">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeIn} custom={0} className="section-label">Our Team</motion.span>
            <motion.h2 variants={fadeIn} custom={1} className="section-title">Stylists</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {visibleStylists.map((s, i) => (
              <motion.div key={`${s.name}-${i}`} variants={fadeIn} custom={i} className="text-center group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-muted">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-sm md:text-base font-bold text-foreground">{s.name}</h3>
                <p className="font-body text-xs text-muted-foreground mt-0.5">Stylist</p>
              </motion.div>
            ))}
          </motion.div>

          {stylists.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllStylists(!showAllStylists)}
                className="btn-ghost gap-2"
              >
                {showAllStylists ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Show All Stylists <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="section-padding">
        <div className="container-site max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeIn} custom={0} className="section-label">What We Offer</motion.span>
            <motion.h2 variants={fadeIn} custom={1} className="section-title">Services</motion.h2>
          </motion.div>

          {/* Promo */}
          <div className="mb-10 p-4 rounded-lg bg-secondary/5 border border-secondary/15 text-center">
            <p className="font-body text-sm text-foreground">
              🎉 New Stylist Discount: <span className="font-semibold">15% Off Perm & Colouring</span>
            </p>
          </div>

          {/* Accordion Services */}
          <div className="space-y-3">
            {serviceCategories.map((cat, ci) => (
              <div key={cat.title} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedService(expandedService === ci ? null : ci)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-background hover:bg-muted/30 transition-colors"
                >
                  <div className="text-left">
                    <span className="font-heading text-base font-bold text-foreground">{cat.title}</span>
                    {cat.note && (
                      <span className="block font-body text-xs text-muted-foreground mt-0.5">{cat.note}</span>
                    )}
                  </div>
                  {expandedService === ci ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedService === ci && (
                  <div className="px-5 pb-4">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                        <span className="font-body text-sm text-foreground">{item.name}</span>
                        <span className="font-body text-sm font-semibold text-secondary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-muted-foreground text-center mt-6">
            Prices may vary depending on hair length, thickness, and stylist.
          </p>

          <div className="text-center mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIOS ─── */}
      <section id="portfolios" className="section-padding bg-muted/30">
        <div className="container-site">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeIn} custom={0} className="section-label">Our Work</motion.span>
            <motion.h2 variants={fadeIn} custom={1} className="section-title">Portfolios</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {portfolioImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                custom={i}
                className="aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <img
                  src={img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Online Shop Promo */}
          <div className="mt-12 p-6 rounded-xl bg-background border border-border text-center">
            <p className="font-body text-sm text-foreground leading-relaxed max-w-lg mx-auto mb-4">
              Transform your hair care routine with our top-quality Hair Oil, Shampoo, Hair Mask, and Spray. Use Promo Code: <span className="font-bold">"ONLINESELL"</span> for 15% OFF Store Pickup.
            </p>
            <a
              href="https://initialsalon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Shop Products ↗
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeIn} custom={0} className="section-label">Client Love</motion.span>
            <motion.h2 variants={fadeIn} custom={1} className="section-title">What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                variants={fadeIn}
                custom={i}
                className="p-6 rounded-lg border border-border bg-background"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <p className="font-body text-xs font-semibold text-foreground">— {t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-site">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeIn} custom={0} className="section-label">Get In Touch</motion.span>
            <motion.h2 variants={fadeIn} custom={1} className="section-title">Contact</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Phone */}
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <Phone className="w-5 h-5 text-secondary mx-auto mb-3" />
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Phone</p>
              <a href="tel:604-715-7888" className="font-body text-sm text-foreground hover:text-secondary transition-colors">
                604-715-7888
              </a>
            </div>

            {/* Address */}
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <MapPin className="w-5 h-5 text-secondary mx-auto mb-3" />
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Address</p>
              <p className="font-body text-sm text-foreground">
                #151 - 6386 No. 3 Rd.<br />Richmond, BC
              </p>
            </div>

            {/* Hours */}
            <div className="text-center p-6 rounded-lg bg-background border border-border">
              <Clock className="w-5 h-5 text-secondary mx-auto mb-3" />
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Hours</p>
              <p className="font-body text-sm text-foreground">
                Mon – Sun<br />11:00 am – 7:00 pm
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="font-body text-muted-foreground mb-5 max-w-md mx-auto">
              Ready for your new look? Book an appointment with one of our expert stylists today.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </a>
          </div>

          {/* Join Our Team */}
          <div className="mt-16 p-8 rounded-xl bg-background border border-border text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Join Our Team</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Are you a passionate and talented hair stylist looking to advance your career? Our salon offers a vibrant environment where you can showcase your skills, learn from experienced stylists, and grow with us.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
