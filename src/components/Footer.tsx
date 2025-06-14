
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="bg-blue-900 text-white py-5 px-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-nunito text-sm">&copy; {new Date().getFullYear()} Apex Elder Care. All rights reserved.</span>
      <span className="font-nunito text-sm">Website by <a href="https://apexhealthcare.life" className="underline hover:text-orange">ApexHealthcare.Life</a></span>
    </div>
  </motion.footer>
);
export default Footer;
