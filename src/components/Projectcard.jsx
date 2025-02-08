import { useState } from "react";
import sales from "../assets/sales.png";

const Card = ({ image, title, category, pfp, name, bio, sociallinks, description, needs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative w-[340px] h-[450px] rounded-[38.35px] shadow-lg overflow-hidden bg-gradient-to-b from-[#040a09] to-[#183D3D] hover:shadow-[#b1eef5] transition duration-300">
        {/* Image Section */}
        <img src={image} className="w-full rounded-t-[38.35px]" alt="Sales" />
        
        {/* Content Section */}
        <div className="p-5 text-white h-full flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h2 className="mt-3 text-gray-300 text-lg">{category}</h2>
          </div>
          
          {/* Fixed Button */}
          <button 
            onClick={togglePopup}
            className="absolute bottom-5 left-5 right-5 bg-[#0e5f68] py-3 px-6 rounded-full text-white text-lg font-medium cursor-pointer hover:scale-110 duration-300 transform">
            Read More
          </button>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg max-w-lg w-full relative">
            <button onClick={togglePopup} className="absolute top-4 right-4 text-white text-2xl">&times;</button>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-6">
              <img src={pfp || sales} alt={name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h2 className="text-xl font-semibold">{name || "Full Name"}</h2>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {sociallinks?.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.icon}
                    alt={`icon-${index}`}
                    className="w-6 h-6 hover:scale-110 transition"
                  />
                </a>
              ))}
            </div>

            {/* Project Information */}
            <h3 className="text-2xl font-medium text-cyan-300 mb-4">The Project</h3>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Category:</span> {category || "Not specified"}
            </p>
            <p className="mt-2 text-gray-400">
              <span className="font-semibold">Description:</span> {description || "No description provided."}
            </p>
            <p className="mt-2 text-gray-400">
              <span className="font-semibold">Needs:</span> {needs || "No needs specified."}
            </p>

            <div className="mt-6 text-right">
              <button onClick={togglePopup} className="bg-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
