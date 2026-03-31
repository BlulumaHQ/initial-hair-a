import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact | Initial Salon"
        description="Get in touch with Initial Salon in Richmond, BC. Call 604-715-7888 or visit us at #151 - 6386 No. 3 Rd. Open Mon-Sun 11am-7pm."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-site text-center">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/70 mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-title text-primary-foreground"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Visit Us</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:604-715-7888" className="font-body text-muted-foreground hover:text-secondary transition-colors">
                      604-715-7888
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Address</p>
                    <p className="font-body text-muted-foreground">
                      #151 - 6386 No. 3 Rd.<br />Richmond, BC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">Opening Hours</p>
                    <p className="font-body text-muted-foreground">
                      Monday – Friday: 11:00 am – 7:00 pm<br />
                      Saturday – Sunday: 11:00 am – 7:00 pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.0!2d-123.1368!3d49.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzEwLjAiTiAxMjPCsDA4JzEyLjUiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Initial Salon Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-card rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}

              {/* Cancellation Policy */}
              <div className="mt-8 p-6 bg-card rounded-lg">
                <h3 className="font-heading text-base font-bold text-foreground mb-3">
                  Cancellation & Reschedule Policy
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Please provide at least 24 hours notice for cancellations or reschedules. Late cancellations or no-shows may be subject to a penalty charge. Thank you for your understanding and cooperation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding section-alt">
        <div className="container-site text-center max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join Our Team!
          </h2>
          <p className="font-body text-foreground/70 leading-relaxed mb-6">
            Are you a passionate and talented hair stylist looking to advance your career? At Initial Salon, we are always on the lookout for creative professionals to join our dynamic team. If you have a keen eye for detail, a dedication to customer satisfaction, and a love for the art of hairdressing, we want to hear from you!
          </p>
          <a
            href="mailto:"
            className="btn-primary"
          >
            Apply Now
          </a>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default Contact;
