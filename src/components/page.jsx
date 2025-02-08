"use client";
import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import steps from "./chatbotsteps.js";
import { IconMessageCircle } from "lucide-react";

function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 to-teal-800 text-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Want to learn?</h1>
        <p className="text-base text-gray-300 mb-8">Improve your skills before your first project</p>

        <div className="flex justify-center gap-4 mb-8">
          {/* Placeholder Icons for Design */}
          <div className="bg-teal-600 p-3 rounded-full shadow-xl">
            <span className="text-xl font-bold text-white">N</span>
          </div>
          <div className="bg-teal-600 p-3 rounded-full shadow-xl">
            <span className="text-xl font-bold text-white">S</span>
          </div>
          <div className="bg-teal-600 p-3 rounded-full shadow-xl">
            <span className="text-xl font-bold text-white">A</span>
          </div>
        </div>

        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out flex items-center gap-2"
        >
          Tutorial
          <IconMessageCircle className="w-5 h-5" />
        </button>
      </div>

      {showChatbot && (
        <div className="absolute bottom-10 right-10 w-96 border border-gray-400 rounded-xl shadow-md overflow-hidden">
          <ChatBot steps={steps} className="p-4 bg-white text-gray-800" />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
