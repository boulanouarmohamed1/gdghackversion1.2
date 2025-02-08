import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";
export default function Navbar() {
  const navigate = useNavigate();
  const handletake = () => {
    navigate("/profile");
  }
  return (

    <nav className="w-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <motion.img src={logo}
          whileHover={{ scale: 1.1 }}
          className=" cursor-pointer w-[100px] h-[80px] ml-[-70px]"
        >
        </motion.img>

        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-[#00E0FF]  transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#00E0FF]  transition">
            <Link to="/chatbot">Education</Link>
          </li>
          <li className="hover:text-[#00E0FF]  transition">
            <Link to="/freelancing">Freelancing</Link>
          </li>
        </ul>

        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src={pfp}
            alt="Profile"
            className="object-cover w-full h-full"
            onClick={handletake}
          />
        </motion.div>
      </div>
    </nav>
  );
}
