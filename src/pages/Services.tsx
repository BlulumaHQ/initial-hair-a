import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const serviceCategories = [
  {
    title: "Cut",
    subtitle: "Includes shampoo & blow-dry",
    items: [
      { name: "Men Cut", price: "$55 – $80" },
      { name: "Women Cut", price: "$60 – $80" },
    ],
  },
  {
    title: "Perm",
    subtitle: "Does not include hair cut, shampoo & blow-dry",
    items: [
      { name: "Japanese Perm", price: "From $110" },
      { name: "Japanese Straight Perm", price: "From $250" },
      { name: "Digital Perm", price: "From $250" },
    ],
  },
  {
    title: "Colour",
    subtitle: "Does not include shampoo & blow-dry",
    items: [
      { name: "Retouch", price: "From $95" },
      { name: "Colour", price: "From $95" },
      { name: "Bleach + Colour", price: "From $360" },
      { name: "Highlight / Balayage", price: "From $400" },
    ],
  },
  {
    title: "Treatment",
    subtitle: "Does not include shampoo price",
    items: [
      { name: "Nakano Treatment", price: "From $120" },
      { name: "Tokio Treatment", price: "From $130" },
      { name: "Scalp Treatment", price: "From $120" },
    ],
  },
  {
    title: "Other",
    subtitle: "",
    items: [
      { name: "Shampoo & Blow Dry", price: "From $45" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services | Initial Salon"
        description="Explore our full range of hair services including cuts, perms, colouring, and treatments at Initial Salon in Richmond, BC."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-title text-primary-foreground"
          >
            Services
          </motion.h1>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-4 bg-secondary text-center">
        <p className="font-body text-sm font-semibold text-secondary-foreground">
          🎉 New Stylist Discount: 15% Off Perm & Colouring
        </p>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {serviceCategories.map((cat, ci) => (
              <motion.div key={cat.title} variants={fadeUp} custom={ci}>
                <div className="mb-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{cat.title}</h2>
                  {cat.subtitle && (
                    <p className="font-body text-sm text-muted-foreground mt-1">{cat.subtitle}</p>
                  )}
                </div>
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-4 border-b border-border"
                    >
                      <span className="font-body text-foreground">{item.name}</span>
                      <span className="font-body font-semibold text-secondary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <p className="font-body text-sm text-muted-foreground mb-6">
              Prices may vary depending on hair length, thickness, and stylist. Please consult with your stylist for an accurate quote.
            </p>
            <a
              href="https://initialsalon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default Services;
