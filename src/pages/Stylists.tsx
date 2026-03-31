import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const stylists = [
  { name: "KEN", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg" },
  { name: "SUMMER", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg" },
  { name: "JAMES", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg" },
  { name: "HUBERT", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-52.jpg" },
  { name: "HIKASO", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-22.jpg" },
  { name: "Ayane Oda", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-23.jpg" },
  { name: "ANGUS", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-54.jpg" },
  { name: "MAKO", img: "https://initialsalon.com/wp-content/uploads/2025/11/initial-hair-pic-222.jpg" },
  { name: "Wanda", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-32.jpg" },
  { name: "Emi", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-30.jpg" },
  { name: "DONNA", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg" },
  { name: "STELLA", img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg" },
  { name: "Hiro", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-51.jpg" },
  { name: "Kuro", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-49.jpg" },
  { name: "Meg", img: "https://initialsalon.com/wp-content/uploads/2024/08/initial-hair-pic-50.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

const Stylists = () => {
  return (
    <Layout>
      <SEOHead
        title="Stylists | Initial Salon"
        description="Meet our talented team of stylists at Initial Salon. Japanese and Taiwanese expertise for personalized hair care in Richmond, BC."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-3"
          >
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-title text-primary-foreground"
          >
            Stylists
          </motion.h1>
        </div>
      </section>

      {/* Stylists Grid */}
      <section className="section-padding">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {stylists.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i} className="group text-center">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">{s.name}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1">Stylist</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-alt">
        <div className="container-site text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready for Your New Look?
          </h2>
          <p className="font-body text-foreground/70 mb-8 max-w-md mx-auto">
            Book an appointment with one of our expert stylists today.
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

export default Stylists;
