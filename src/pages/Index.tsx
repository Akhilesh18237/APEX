
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-x-hidden">
      {/* Animated background image */}
      <div
        className="fixed inset-0 -z-10 bg-no-repeat bg-center bg-cover bg-fixed opacity-15 animate-fade-in-up"
        style={{
          // fit entire image without cropping, always showing whole image
          backgroundImage: "url('/lovable-uploads/ce41fd54-c227-4dc4-aebd-13e8df3c7d21.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      {/* Animate navbar */}
      <motion.header
        className="bg-white shadow"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 52, damping: 12, delay: 0.03 }}
      >
        <nav className="max-w-6xl mx-auto py-4 flex justify-between items-center px-2 sm:px-4">
          <div className="flex gap-3 items-center">
            <img
              src="/lovable-uploads/c7bf229c-d261-4aa0-9b37-f5aa4833d7c0.png"
              alt="Apex Elder Care Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white p-1 shadow-lg animate-scale-in"
              style={{objectFit: "contain", background: "white"}}
            />
            <span className="font-poppins text-base md:text-2xl font-bold text-blue-900">Apex Elder Care</span>
          </div>
          <ul className="flex gap-3 md:gap-6 font-poppins text-blue-900 text-sm md:text-lg">
            <li><a href="#about" className="hover:text-orange transition story-link">About</a></li>
            <li><a href="#services" className="hover:text-orange transition story-link">Services</a></li>
            <li><a href="#gallery" className="hover:text-orange transition story-link">Gallery</a></li>
            <li><a href="#enquiry" className="hover:text-orange transition story-link">Enquiry</a></li>
            <li><a href="#contact" className="hover:text-orange transition story-link">Contact</a></li>
          </ul>
        </nav>
      </motion.header>
      {/* Animate sections and footer */}
      <main className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            key="main-hero"
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .11 }}
            key="main-about"
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .17 }}
            key="main-services"
          >
            <Services />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .23 }}
            key="main-gallery"
          >
            <Gallery />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .29 }}
            key="main-enquiry"
          >
            <EnquiryForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: .37 }}
            key="main-contact"
          >
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: .47, type: "spring", stiffness: 50 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
