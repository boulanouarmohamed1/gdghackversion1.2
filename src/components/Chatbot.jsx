"use client";
import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { motion, AnimatePresence } from "framer-motion";
import icons from "../assets/icons.png";
import chatIcon from "../assets/chat.png";
import steps from "./chatbotsteps.js";

function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ background: "linear-gradient(to right, #1C575D, rgb(0, 0, 0) 20% 80%, #1C575D)" }}
    >
      <div className="text-center mt-[-300px]">
        <h1 className="text-[100px] text-white">Want to learn?</h1>
        <p className="text-[20px] text-[#d1d1d1]">
          Improve your skills before your first project
        </p>
      </div>

         <motion.img
          src={icons}
          alt="Placeholder"
          className="object-cover absolute bottom-70 left-20"
          animate={{
            y: [0, -10, 0], 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         /> 
      <div className="flex flex-col">
        <button
          onClick={handleClick}
          className="absolute bottom-40 left-60 py-3 px-6 bg-[#0F545B] cursor-pointer
          text-white font-semibold text-[28px] rounded-full shadow-lg transform 
          hover:scale-110 transition-all duration-300 ease-in-out
          hover:shadow-[0_0_15px_#00FFC6,0_0_30px_#00FFC6]"
        >
          Start Learning
        </button>

        <div className="absolute bottom-30 right-30">
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="hover:scale-110 transition-transform duration-300 ease-in-out inline-flex"
          >
            
            <motion.img
          src={chatIcon}
          alt="Placeholder"
          className="object-cover w-30 h-30 hover:filter hover:drop-shadow-[0_0_25px_#00FFC6] hover:cursor-pointer"
          animate={{
            y: [0, -20, 0], 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         /> 
          </button>

          <AnimatePresence>
            {showChatbot && (
              <motion.div
                className="absolute bottom-20 right-0 bg-[#001F1F] p-5 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]
               border border-[#00FFC6] transform w-[410px]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ChatBot
                  steps={steps}
                  hideHeader={true} 
                  hideUserInput={true} 
                  hideFooter={true} 
                  className="p-4 bg-[#0A2A2E] rounded-lg shadow-inner mb-[0px]"
                  style={{
                    backgroundColor: "#0A2A2E",
                    borderRadius: "16px",
                    color: "#E0FFFF",
                  }}
                  bubbleStyle={{
                    backgroundColor: "#00FFC6",
                    color: "#001F1F",
                  }}
                  bubbleOptionStyle={{
                    backgroundColor: "#008080",
                    color: "#E0FFFF",
                  }}
                  contentStyle={{
                    backgroundColor: "#0A2A2E",
                    color: "#E0FFFF",
                  }}
                  userDelay={0}
                  enableUserInput={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;