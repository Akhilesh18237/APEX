
import { motion } from "framer-motion";

const images = [
  {
    src: "/lovable-uploads/96509432-2e72-475e-afae-55833e61965c.png",
    alt: "Elder and caretaker with walker indoors",
  },
  {
    src: "/lovable-uploads/29ded556-a377-410e-9b6b-40174fb4096b.png",
    alt: "Caretaker feeding elderly with care",
  },
  {
    src: "/lovable-uploads/1da5770d-49c8-4547-bf40-09f4a6a05fe7.png",
    alt: "Nurse feeding patient in bed",
  },
  {
    src: "/lovable-uploads/65b2292f-09e9-4c84-841c-a7871116ddd2.png",
    alt: "Caretaker assisting elderly outdoors",
  },
  // This is the 5th image
  {
    src: "/lovable-uploads/ce41fd54-c227-4dc4-aebd-13e8df3c7d21.png",
    alt: "Elderly enjoying music with caretaker",
  },
  {
    src: "/lovable-uploads/b21b4089-5242-4e00-99bf-cd36f73d17b9.png",
    alt: "Nurse checking blood pressure of elderly man",
  },
];

const Gallery = () => (
  <section id="gallery" className="bg-gradient-to-tr from-blue-50 via-white to-orange-50 py-12 px-2 sm:px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center"
      >
        <span className="text-orange">Gallery</span>
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.16 } },
        }}
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
      >
        {images.map((img, idx) => (
          <motion.div
            key={img.src}
            variants={{
              hidden: { opacity: 0, y: 32, scale: 0.92 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{
              scale: 1.08,
              zIndex: 5,
              boxShadow: "0 4px 32px #ffa22533"
            }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className={`rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-200 cursor-pointer ${
              idx === 4 ? "flex items-center justify-center bg-gray-50" : ""
            }`}
            style={idx === 4 ? { minHeight: "16rem" } : {}}
            tabIndex={0}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-48 xs:h-56 sm:h-56 md:h-64 ${idx === 4 ? "object-contain" : "object-cover"} object-center transition-transform duration-200`}
              loading="lazy"
              style={idx === 4 ? { background: "#f7fafc" } : undefined}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Gallery;
