import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilePopup({ isOpen, onClose, userId }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && userId) {
      fetchUserData();
    }
  }, [isOpen, userId]);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      setError("Failed to load user data");
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-white text-black w-[600px] p-6 rounded-xl relative shadow-xl">
          {/* Close Button */}
          <button className="absolute right-4 top-4" onClick={onClose}>
            <X size={24} className="text-black hover:text-red-600" />
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center">User Profile</h2>

          {/* Loading & Error States */}
          {loading && <p className="text-center text-blue-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Profile Information */}
          {userData && !loading && !error && (
            <div className="space-y-4">
              <div>
                <strong>Full Name:</strong> {userData.fullName || "N/A"}
              </div>
              <div>
                <strong>Email:</strong> {userData.email || "N/A"}
              </div>
              <div>
                <strong>Bio:</strong> {userData.bio || "N/A"}
              </div>
              <div>
                <strong>Phone:</strong> {userData.phone || "N/A"}
              </div>
              <div>
                <strong>Skills:</strong> {userData.skills?.length ? userData.skills.join(", ") : "N/A"}
              </div>
              <div>
                <strong>School Year:</strong> {userData.schoolYear || "N/A"}
              </div>
              <div>
                <strong>Rating:</strong> {userData.rating || "N/A"} / 100
              </div>
              <div>
                <strong>Social Links:</strong>
                <ul className="list-disc ml-5">
                  <li>Instagram: {userData.insta || "N/A"}</li>
                  <li>GitHub: {userData.github || "N/A"}</li>
                  <li>LinkedIn: {userData.linkedIn || "N/A"}</li>
                </ul>
              </div>
              <div>
                <strong>Previous Projects:</strong>
                {userData.previousProjects?.length ? (
                  <ul className="list-disc ml-5">
                    {userData.previousProjects.map((project, index) => (
                      <li key={index}>
                        <strong>{project.title}</strong> — {project.description}{" "}
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Source
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>N/A</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
