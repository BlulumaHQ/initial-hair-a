import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Scissors, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const heroImages = [
  "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg",
];

const stylists = [
  { name: "KEN", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg" },
  { name: "SUMMER", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg" },
  { name: "HIKASO", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg" },
  { name: "MAKO", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-52.jpg" },
];

const testimonials = [
  {
    text: "The hairstylist Summer did the lightening and coloring for my hair, she is awesome! She spent time with you to discuss what color is right for you and it looks so good! I will definitely go back for her 😊",
    author: "Ming H.",
  },
  {
    text: "I have curly wavy hair, and Ken was knowledgeable on how to handle colour on my hair to ensure that hair damage is controlled; it was a pleasure to see my hair being taken care of!",
    author: "Angela T.",
  },
  {
    text: "I always enjoy my visit to Initial Salon... the atmosphere is so calming & relaxing. The music is always pleasant to listen to & just there! As usual I leave feeling like a million dollars, and absolutely love my haircut. Thank you Ken",
    author: "Kathy R.",
  },
];

const galleryImages = [
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-22.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-23.jpg",
  "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-54.jpg",
  "https://initialsalon.com/wp-content/uploads/2025/11/initial-hair-pic-222.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Initial Salon – Where Style Meets Sophistication"
        description="Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Our stylists merge precision and innovation to create personalized experiences in Richmond, BC."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[0]})` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 container-site pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/80 mb-4">
              Sculpting Stylish Solutions
            </p>
            <h1 className="hero-title text-primary-foreground mb-6">
              Bring Out the Best in Your Hair
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-lg">
              Welcome to Initial Hair Salon, where Japanese and Taiwanese expertise combine for exceptional styling. Step in and immerse yourself in our salon's harmonious and relaxing ambience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://initialsalon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Appointment
              </a>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Scissors, title: "Cut", desc: "Includes shampoo & blow-dry. Men from $55, Women from $60.", price: "From $55" },
              { icon: Sparkles, title: "Perm", desc: "Japanese Perm, Digital Perm, and Japanese Straight Perm options.", price: "From $110" },
              { icon: Star, title: "Colour", desc: "Retouch, full colour, bleach + colour, highlight and balayage services.", price: "From $95" },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <span className="font-body text-sm font-semibold text-secondary">{service.price}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stylists Preview */}
      <section className="section-padding section-alt">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">
              Meet Our Team
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Stylists
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {stylists.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground text-center">{s.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/stylists" className="btn-outline">
              View All Stylists
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">
              Client Love
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <p className="font-body text-sm font-semibold text-foreground">— {t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding section-alt">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Portfolios
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {galleryImages.map((img, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Portfolio work ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/portfolios" className="btn-outline">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="section-padding bg-primary">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 mb-3">Special Offer</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              15% Off Perm & Colouring
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              New stylist discount campaign. Experience our expert styling at a special introductory rate.
            </p>
            <a
              href="https://initialsalon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-secondary mb-3">Careers</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                Join Our Team
              </h2>
              <p className="font-body text-foreground/70 leading-relaxed mb-6">
                Are you a passionate and talented hair stylist looking to advance your career? At Initial Salon, we are always on the lookout for creative professionals to join our dynamic team. Our salon offers a vibrant environment where you can showcase your skills, learn from experienced stylists, and grow with us.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src="https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg"
                alt="Initial Salon team environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default Index;
