import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
   useEffect(() => {
          document.title = "Contact Us";
        }, []);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2433] to-[#2B1E4E] text-white px-6 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300">
          Have questions or need help with a service?  
          Reach out to our team — we’re here to help you grow your business digitally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-[#2A3142] p-5 rounded-xl">
            <MapPin className="w-6 h-6 text-[#A35CF8]" />
            <p className="text-gray-300 text-sm">
              Metro Solver Limited  
              <br /> Grantham Road, London E12 5LX, United Kingdom
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#2A3142] p-5 rounded-xl">
            <Phone className="w-6 h-6 text-[#A35CF8]" />
            <p className="text-gray-300 text-sm">+44 7936 455446</p>
          </div>

          <div className="flex items-center gap-4 bg-[#2A3142] p-5 rounded-xl">
            <Mail className="w-6 h-6 text-[#A35CF8]" />
            <p className="text-gray-300 text-sm">official@metrosolver.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#2A3142] p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#3A4052] px-4 py-2 rounded-lg text-sm focus:outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#3A4052] px-4 py-2 rounded-lg text-sm focus:outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-[#3A4052] px-4 py-2 rounded-lg text-sm focus:outline-none resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#6C3EF8] to-[#A35CF8] py-2 rounded-lg hover:opacity-90 transition"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
