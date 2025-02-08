import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Links Section */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-gray-300 hover:text-[#00E0FF] transition"
          >
            About Us
          </a>
          <a
            href="/"
            className="text-gray-300 hover:text-[#00E0FF] transition"
          >
            Services
          </a>
          <a
            href="/"
            className="text-gray-300 hover:text-[#00E0FF] transition"
          >
            Contact
          </a>
        </div>

        <div className="text-sm text-[#00E0FF]">
          <p>&copy; {new Date().getFullYear()} Softweb Elevation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
