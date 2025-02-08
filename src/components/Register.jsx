import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Login from "./Login";
import { AnimatePresence, motion } from "framer-motion";
import phone from "../assets/phone1.png"
export default function Registration({isOpen}) {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: "",
    rating: 0,
    bio: "",
    image: "",
    schoolYear: "",
    phone: "",
    insta: "",
    github: "",
    linkedIn: "",
    previousProjects: [],
  });

  const toggleRegister = () => setRegisterOpen(!isRegisterOpen);
  const toggleLogin = () => setLoginOpen(!isLoginOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value.split(",") });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.previousProjects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setFormData({ ...formData, previousProjects: updatedProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      previousProjects: [...formData.previousProjects, { title: "", description: "", sourceCode: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Registration successful!");
        setRegisterOpen(false);
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      {/* Main Container */}
      <div className="flex w-full max-w-5xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-xl">
        {/* Left Section */}
        <div className="w-1/2">
        <motion.img
          src={phone}
          alt="Placeholder"
          className="object-cover w-full h-[500px] mb-[-100px]"
          animate={{
            y: [0, -10, 0], // Vertical floating effect
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        </div>
        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-white text-transparent bg-clip-text">
            Do you think it’s time to join us
          </h1>
          <p className="text-lg">Or are you already a member? Sign in now!</p>

          <div className="flex space-x-4">
            <button
              onClick={toggleRegister}
              className="bg-[#00E0FF] text-black px-6 py-3 rounded-xl font-semibold shadow-md transition hover:bg-[#009FD8] hover:scale-105 hover:cursor-pointer"
            >
              Join Us
            </button>
            <button
              onClick={toggleLogin}
              className="border-2 border-[#00E0FF] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition hover:bg-[#00E0FF] hover:text-black hover:scale-105 hover:cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
           {/* Registration Popup */}
      <AnimatePresence>
      {isOpen && (
      <Dialog open={isRegisterOpen} onClose={toggleRegister} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white w-[400px] p-8 rounded-2xl shadow-2xl relative"
            >

          <div className="bg-gray-900 text-white w-[600px] p-6 ml-[-150px] rounded-xl relative">


            <button className="absolute right-4 top-4" onClick={toggleRegister}>
              <X size={24} className="text-black hover:text-red-600 hover:cursor-pointer" />
            </button>


            <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#00E0FF] to-[#00D4FF] text-transparent bg-clip-text">Join Us</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="w-full px-4 py-3 rounded-xl bg-gray-900 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-900">
                {[{ label: "Full Name", name: "fullName", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "Password", name: "password", type: "password" }, { label: "Skills (comma-separated)", name: "skills", type: "text", onChange: handleSkillsChange }, { label: "Profile Image URL", name: "image", type: "text" } ,{ label: "Phone", name: "phone", type: "text" }].map(({ label, name, type, onChange }) => (
                  <div className="mb-4" key={name}>
                    <label className="block mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={onChange || handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-400"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>

              {/* right Column */}
              <div className="w-full px-4 py-3 rounded-xl bg-gray-900 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-900">
                {[{ label: "School Year", name: "schoolYear", type: "text" }, { label: "Bio", name: "bio", type: "text" }, { label: "Instagram", name: "insta", type: "text" }, { label: "GitHub", name: "github", type: "text" } ,{ label: "LinkedIn", name: "linkedIn", type: "text" }].map(({ label, name, type }) => (
                  <div className="mb-4" key={name}>
                    <label className="block mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700 focus:ring-2 focus:ring-[#00E0FF] focus:outline-none text-white placeholder-gray-400"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>
              </form>
              
          

              <button type="submit" className="w-full bg-[#00E0FF] text-black py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform hover:cursor-pointer">
                Register
              </button>
           

          </div>
          </motion.div>
        </div>
       
      </Dialog>  
      
      )}
     </AnimatePresence>   
      <Login isOpen={isLoginOpen} onClose={toggleLogin} />
    </div>
  
  );
}
