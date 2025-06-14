
import { motion } from "framer-motion";

const HERO_IMG = "/lovable-uploads/ac921642-9b21-4a03-8dd8-8dda009812ef.png";

const Hero = () => (
  <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white min-h-[60vh] flex flex-col md:flex-row items-center justify-between gap-8 px-4 pb-8 pt-8 md:pt-12 rounded-b-3xl mb-8 relative overflow-hidden">
    <div className="flex-1 flex flex-col items-start md:pl-10 animate-fade-in-up z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-4"
      >
        Compassionate <span className="text-orange font-extrabold">Elder Care</span>
        <br />
        for Your Loved Ones
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: .3 }}
        className="text-lg font-nunito mb-8 mt-2 text-slate-100 max-w-lg"
      >
        Trusted, personalized healthcare and support for seniors at home. Care, nursing assistance, physiotherapy, and 24/7 services by Apex Elder Care in Bhopal.
      </motion.p>
      <motion.a 
        whileHover={{ scale: 1.07 }}
        href="#enquiry"
        className="inline-block px-8 py-3 bg-orange text-white font-bold rounded-full text-xl shadow-lg transition hover:bg-orange-dark hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange/40 animate-fade-in-up"
        aria-label="Enquire Now"
      >
        Enquire Now
      </motion.a>
    </div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: .2 }}
      className="flex-1 flex items-center justify-center z-10"
    >
      <img 
        src={HERO_IMG}
        alt="Caregiver assisting elderly at Apex Elder Care"
        className="rounded-3xl shadow-2xl object-cover w-full max-w-[400px] md:max-w-[440px] border-8 border-white animate-fade-in-up"
        style={{minHeight: 325}}
      />
    </motion.div>
    {/* Animated hero background accent */}
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 0.12, scale: 1 }}
      transition={{ duration: 1.9, delay: .1 }}
      className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.32)_0%,rgba(44,98,184,0.07)_60%,transparent_100%)] pointer-events-none"
    />
  </section>
);

export default Hero;
