import { Phone, Mail, MapPin } from "lucide-react";

const phone = "+91 7610-122-133";
const email = "apexhealthcarebhopal@gmail.com";
const address = "B-17, Subhash Colony, Ashoka Garden, Bhopal, M.P. 462023";

const addressQuery = encodeURIComponent(address);
const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

// Remove gmailComposeLink and use mailto link directly
const mailtoLink = `mailto:${email}?subject=Enquiry%20for%20Eldercare%20Services`;

const Contact = () => (
  <section id="contact" className="py-10 px-4 bg-blue-50">
    <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center">
      <h2 className="font-poppins text-2xl md:text-3xl text-blue-900 font-bold mb-2">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8 mt-3 items-center justify-center">
        <a
          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 bg-blue-900 hover:bg-orange text-white py-3 px-6 rounded-full font-poppins font-bold text-lg transition hover:scale-105 shadow"
          aria-label="Call Apex Elder Care"
        >
          <Phone size={24} />
          {phone}
        </a>
        <a
          href={mailtoLink}
          className="flex items-center gap-2 bg-blue-900 hover:bg-orange text-white py-3 px-6 rounded-full font-poppins font-bold text-lg transition hover:scale-105 shadow"
          aria-label="Email Apex Elder Care via Gmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={24} />
          {email}
        </a>
        <a
          href={gmapsUrl}
          className="flex items-center gap-2 bg-blue-900 hover:bg-orange text-white py-3 px-6 rounded-full font-poppins font-bold text-lg transition hover:scale-105 shadow"
          aria-label="Get Directions to Apex Elder Care"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={24} />
          Our Location
        </a>
      </div>
      <p className="mt-4 text-blue-800 font-nunito text-center">{address}</p>
    </div>
  </section>
);

export default Contact;
