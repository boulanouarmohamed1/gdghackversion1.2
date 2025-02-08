import { useState } from "react";
import Card from "./Card";
import image from "../assets/sales.png";

const Project = () => {
  const [cards, setCards] = useState([
    { image, title: "We Need a Software", category: "Front-End" }
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    pfp: "",
    fullName: "",
    bio: "",
    projectImg: "",
    socialLinks: [],
    title: "",
    category: "",
    description: "",
    needs: ""
  });


    // Handle form submission
const handleSubmit = async (e) => {

  const postData = {
    pfp: "string", 
    fullName: "string", 
    bio: "string", 
    projectImg: "string", 
    socialLinks: ["string"], 
    title: "string", 
    category: "string", 
    description: "string", 
    needs: "string"
  };

  try {
    console.log(postData); // Log the post data to verify

    const response = await fetch("http://localhost:3000/post", {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Make sure the backend expects JSON
      },
      body: JSON.stringify(postData), // Send postData as a JSON string
    });

    // Check if the response status is 2xx (OK)
    if (response.ok) {
      const data = await response.json(); // Parse the JSON response body
      console.log("Post added successfully!");
      console.log(data); // Optionally log the response data from the server
    } else {
      throw new Error("Failed to add post");
    }
  } catch (error) {
    console.error(error);
    console.log("Error adding post.");
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, projectImg: imageURL });
    }
  };

  const handleAddCard = () => {
    setCards([...cards, { ...formData, image: formData.projectImg || image }]);
    setFormData({
      pfp: "",
      fullName: "",
      bio: "",
      projectImg: "",
      socialLinks: [],
      title: "",
      category: "",
      description: "",
      needs: ""
    });
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-black min-h-screen p-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Explore Our Projects
      </h1>

      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-[#0e5f68] py-[17.43px] px-[47.07px] rounded-[78.45px] cursor-pointer absolute right-40 top-40 text-white font-semibold text-[20px] hover:bg-[#458289] hover:shadow-[#b7f8ff]"
      >
        Add Card
      </button>

      <div className="grid grid-cols-3 gap-4 w-[1200px] ml-50 mt-60 gap-y-15">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            category={card.category}
          />
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full relative text-white">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 text-4xl hover:text-red-600"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCard();
              }}
              className="space-y-4"
            >
              {/* Circular Image Upload */}
              <div className="relative w-32 h-32 mx-auto">
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-gray-600">
                    {formData.projectImg ? (
                      <img
                        src={formData.projectImg}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">Upload Image</span>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />
              <textarea
                name="needs"
                placeholder="Needs"
                value={formData.needs}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 rounded-md"
              />

              <button
                onClick={()=> handleSubmit()}
                type="submit"
                className="bg-[#0e5f68] py-3 px-6 rounded-full text-white text-lg font-medium w-full hover:bg-[#458289] transition cursor-pointer"
              >
                Add Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
