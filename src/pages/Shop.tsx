import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const products = [
  {
    name: "Hair Oil",
    description: "Nourish and protect your hair with our premium salon-quality hair oil.",
    img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-32.jpg",
  },
  {
    name: "Shampoo",
    description: "Gentle, effective cleansing for all hair types with salon-grade ingredients.",
    img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-30.jpg",
  },
  {
    name: "Hair Mask",
    description: "Deep conditioning treatment for silky, revitalized hair.",
    img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-33.jpg",
  },
  {
    name: "Hair Spray",
    description: "Professional hold and finish to keep your style in place all day.",
    img: "https://initialsalon.com/wp-content/uploads/2024/06/initial-hair-pic-25.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Shop = () => {
  return (
    <Layout>
      <SEOHead
        title="Shop | Initial Salon"
        description="Shop our curated selection of professional hair care products. Use promo code ONLINESELL for 15% off store pickup at Initial Salon."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-3"
          >
            Hair Care Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-title text-primary-foreground"
          >
            Shop
          </motion.h1>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-4 bg-secondary text-center">
        <p className="font-body text-sm font-semibold text-secondary-foreground">
          🛍️ Use Promo Code: <span className="font-bold">"ONLINESELL"</span> for 15% OFF Store Pickup
        </p>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="font-body text-foreground/70 max-w-xl mx-auto">
              Transform your hair care routine with our top-quality Hair Oil, Shampoo, Hair Mask, and Spray. Our expert stylists will help you find the perfect products for your hair type. Experience salon-quality results at home.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href="https://initialsalon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    View Product
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default Shop;
