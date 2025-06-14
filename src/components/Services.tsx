
import { motion } from "framer-motion";
import { User, Heart, Stethoscope, Truck, BriefcaseMedical } from "lucide-react";

const services = [
  {
    label: "Care Taker For Elders",
    icon: User,
    description: "Reliable support by trained caretakers for daily living."
  },
  {
    label: "Nursing Assistance",
    icon: Heart,
    description: "Professional nursing assistance at home."
  },
  {
    label: "Physiotherapy at Home",
    icon: Stethoscope,
    description: "Expert home physiotherapy & rehabilitation."
  },
  {
    label: "Hospital Equipments",
    icon: BriefcaseMedical,
    description: "Medical equipment for home care needs."
  },
  {
    label: "Ambulance Service",
    icon: Truck,
    description: "24/7 ambulance for safe & timely care."
  }
];

const Services = () => (
  <section id="services" className="bg-blue-900 py-14 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 0.7 }}
        className="text-white font-poppins text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Our <span className="text-orange">Services</span>
      </motion.h2>
      {/* Staggered service cards */}
      <motion.div
        className="grid md:grid-cols-5 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
            },
          },
        }}
      >
        {services.map((srv, idx) => (
          <motion.div
            key={srv.label}
            variants={{
              hidden: { opacity: 0, y: 44, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.07, boxShadow: "0 6px 32px #ff790033" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 80, damping: 11 }}
            className="rounded-xl p-6 bg-white text-blue-900 shadow-md flex flex-col items-center group transition-transform duration-200 cursor-pointer relative overflow-hidden"
          >
            {/* Pop-in icon */}
            <motion.div
              whileHover={{ scale: 1.17, rotate: 8 }}
              transition={{ duration: 0.25, type: "spring" }}
              className=""
            >
              <srv.icon size={38} className="text-orange group-hover:scale-125 transition-transform mb-2" aria-label="" />
            </motion.div>
            <span className="font-poppins text-lg font-bold text-blue-900 mb-2 text-center">{srv.label}</span>
            <span className="font-nunito text-blue-800 text-sm text-center">{srv.description}</span>
            {/* Animated bottom accent line on hover */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileHover={{ width: "82%", opacity: 1 }}
              transition={{ duration: 0.37 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-4 h-1 rounded-full bg-orange/60"
              style={{height: "6px"}}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        initial={{opacity:0, y:28}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:.7, delay:.28, type:"spring"}}
        className="flex justify-center mt-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-3 font-poppins text-white">
          <span className="bg-orange rounded-full px-5 py-2 text-xl font-bold animate-pulse shadow-xl hover:scale-105 transition-transform">24/7 Emergency Services</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Services;
