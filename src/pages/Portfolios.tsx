import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const portfolioImages = [
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-52.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-22.jpg",
  "https://initialsalon.com/wp-content/uploads/2025/11/initial-hair-pic-222.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-23.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-54.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-32.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-30.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

const Portfolios = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolios | Initial Salon"
        description="Browse our portfolio of stunning hair transformations at Initial Salon. See the artistry of our Japanese and Taiwanese styling expertise."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-3"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-title text-primary-foreground"
          >
            Portfolios
          </motion.h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {portfolioImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-alt">
        <div className="container-site text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Love What You See?
          </h2>
          <p className="font-body text-foreground/70 mb-8 max-w-md mx-auto">
            Let our stylists create your next stunning look.
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
      </section>

      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default Portfolios;
