
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

const About = () => (
  <section
    id="about"
    className="relative py-16 sm:py-20 px-2 sm:px-4 flex items-center justify-center bg-transparent"
    style={{ zIndex: 1 }}
  >
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
      {/* Extra glassmorphism blur effect */}
      <div
        className="mx-auto w-full max-w-2xl h-[340px] sm:h-[400px] xl:h-[420px] rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg"
        style={{
          filter: "blur(13px)",
          boxShadow: "0 10px 42px 0 rgba(51,51,153, 0.11)",
        }}
        aria-hidden="true"
      />
    </div>
    <motion.div
      className="relative max-w-3xl mx-auto sm:rounded-3xl px-0 sm:px-0"
      style={{
        background:
          "linear-gradient(120deg,rgba(255,255,255,.82),rgba(255,247,237,.85) 80%)",
        boxShadow: "0 8px 48px 0 rgba(122, 92, 62, 0.11)",
        borderRadius: "1.6rem",
        zIndex: 2,
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 54, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, type: "spring", delay: 0.1 }}
    >
      {/* Decorative Ribbon */}
      <div className="absolute left-0 top-6 sm:top-8 h-24 sm:h-32 w-2 rounded-full bg-orange/90 shadow-md"></div>
      {/* Header/Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center pt-10 sm:pt-12"
      >
        <div className="bg-gradient-to-tr from-orange to-blue-300 rounded-full shadow-lg p-3 mb-2 border-4 border-white/80 animate-fade-in">
          <Sparkle size={36} className="text-white drop-shadow" />
        </div>
        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-blue-900 mb-1 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange via-blue-600 to-orange">
            About Us
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange via-blue-200 to-orange rounded-full opacity-60 mt-1 mb-3" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.92, delay: 0.22 }}
        className="z-10"
      >
        <p className="text-lg md:text-xl font-nunito text-blue-900/90 px-4 sm:px-10 pb-10 pt-2 text-center leading-relaxed font-medium drop-shadow-lg">
          At <span className="bg-orange/20 px-1.5 rounded-md font-semibold text-orange">Apex Elder Care</span>, we are dedicated to <span className="text-blue-800 font-semibold">providing compassionate and personalized healthcare services for seniors.</span>
          <br /><br />
          Our mission is to <span className="text-orange font-bold">enhance the quality of life</span> for elderly individuals by offering professional care that fosters health, independence, and dignity.
          <br /><br />
          With a caring team of <span className="font-semibold text-blue-700">highly trained healthcare professionals</span>, we deliver tailored solutions—be it <span className="text-orange font-semibold">in-home care</span>, <span className="text-blue-700 font-semibold">assisted living support</span>, or <span className="text-orange font-semibold">specialized services</span>.
          <br /><br />
          <span className="bg-gradient-to-r from-orange/20 to-blue-100/30 rounded px-2 py-0.5 font-poppins font-bold text-blue-900">
            Every senior deserves a life lived to the fullest.
          </span>
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
