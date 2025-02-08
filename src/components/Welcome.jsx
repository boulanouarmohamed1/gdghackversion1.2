import { useNavigate } from "react-router-dom";
import phone from "../assets/phone.png";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/chatbot");
  };

  return (
    <div className="bg-black text-white w-full h-full pb-[200px]">
      <div className="flex relative justify-center pl-[600px] pt-[100px]">
        <h1 className="text-5xl font-bold mt-[200px] absolute left-[200px] bg-gradient-to-r from-gray-600 to-white text-transparent bg-clip-text">
          Welcome to <span className="text-[#00E0FF]">EdWork</span>
        </h1>
        <button
          onClick={handleLink}
          className="
            absolute bg-[#111827] text-[#D1F4FF] rounded-full w-[400px] h-[90px] pb-[10px] top-[500px] left-[250px]
            text-[50px] font-semibold border-2 border-[#00E0FF] shadow-md transition-all duration-300 ease-in-out
            hover:bg-[#00E0FF] hover:text-[#111827] hover:scale-105 hover:shadow-[0_0_30px_#00E0FF]"
        >
          Want to learn
        </button>
        <motion.img
          src={phone}
          alt="Placeholder"
          className="object-cover h-[500px] mb-[-100px] w-220"
          animate={{
            y: [0, -10, 0], 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         /> 
      </div>
    </div>
  );
};

export default Welcome;
