import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      <Link to="/freelancing"></Link>
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data.message : error
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white w-[400px] p-8 rounded-2xl shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 text-gray-400 hover:text-red-600 hover:cursor-pointer"
                onClick={onClose}
              >
                <X size={24} />
              </button>

              <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#00E0FF] to-[#00D4FF] text-transparent bg-clip-text">
                Welcome Back
              </h2>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-400"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00E0FF] text-black py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform hover:cursor-pointer"
                >
                  Log In
                </button>
              </form>


            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
