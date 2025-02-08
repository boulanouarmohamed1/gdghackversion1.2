import { motion } from "framer-motion";
import logo from "../assets/logo.png";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 relative">
      

      <div className="flex w-full max-w-5xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-xl">
        <div className="w-full p-10 flex flex-col justify-center space-y-8">
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-white text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <p className="text-lg">
            Welcome to our platform, where we believe in the power of collaboration and education to help students become successful, professional freelancers. Our mission is to provide a space where aspiring freelancers can develop their skills, connect with others, and work together on real-world projects.
          </p>
          <p className="text-lg">
            Whether you re just starting or looking to enhance your freelance career, we offer resources, guidance, and a supportive community to help you thrive. Learn from industry experts, share your knowledge, and grow your portfolio with collaborative projects that showcase your talent.
          </p>
          <p className="text-lg">
            At the core of our platform is a commitment to education, collaboration, and mutual support. Together, we can shape the future of freelancing and help one another achieve our professional goals.
          </p>
        </div>
        <motion.img
        src={logo} 
        alt="Logo"
        className="absolute top-40 right-70 w-50 h-50 object-contain"
        animate={{
            y: [0, -20, 0], 
          }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
      />
      </div>
    </div>
  );
}
