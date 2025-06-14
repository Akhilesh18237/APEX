
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const FORMSPREE_ACTION = "https://formspree.io/f/mqabbkdr"; // <-- Updated endpoint

const EnquiryForm = () => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="enquiry" className="bg-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="max-w-lg mx-auto rounded-3xl shadow-lg p-8 border border-orange/30 animate-fade-in-up"
      >
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center"
        >
          Enquiry Form
        </motion.h2>
        <form
          action={FORMSPREE_ACTION}
          method="POST"
          target="_blank"
          onSubmit={() => setSubmitting(true)}
        >
          <div className="mb-4">
            <label className="block text-blue-900 font-medium mb-1" htmlFor="name">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.035, boxShadow: "0 0 0 2px #ffb76d88" }}
              transition={{ duration: 0.18 }}
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition font-nunito"
              placeholder="Full Name"
              autoComplete="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              required
              whileFocus={{ scale: 1.035, boxShadow: "0 0 0 2px #ffb76d88" }}
              transition={{ duration: 0.18 }}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition font-nunito"
              placeholder="Email Address"
              autoComplete="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <motion.input
              type="tel"
              name="phone"
              id="phone"
              required
              whileFocus={{ scale: 1.035, boxShadow: "0 0 0 2px #ffb76d88" }}
              transition={{ duration: 0.18 }}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition font-nunito"
              placeholder="Phone Number"
              autoComplete="tel"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 font-medium mb-1" htmlFor="message">
              Your Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              rows={4}
              required
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #ffb76d88" }}
              transition={{ duration: 0.18 }}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition font-nunito"
              placeholder="Your Enquiry"
            ></motion.textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.06, boxShadow: "0 3px 24px #ffa22544" }}
            transition={{ type: "spring", stiffness: 95 }}
            className={`w-full flex justify-center items-center px-5 py-3 text-lg rounded-full font-bold font-poppins text-white transition bg-orange hover:bg-orange-dark shadow-lg ${submitting ? "opacity-60 pointer-events-none" : ""}`}
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Enquiry"}
          </motion.button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground text-center">
          * Your details are safe & confidential
        </p>
      </motion.div>
    </section>
  );
};

export default EnquiryForm;
