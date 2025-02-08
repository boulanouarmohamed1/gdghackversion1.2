import ph from "../assets/AA.png"
import phm from "../assets/BB.png"
import phg from "../assets/CC.png"
import pfp from "../assets/pfp.png"
const Profile = () => {
  return (
    <div className="min-h-screen color text-white p-10">
      <div className="max-w-5xl mx-auto font-sans">
        {/* Profile Header */}
        <div className="flex items-center gap-6 border-b border-gray-700 pb-6">
          <img
            src={pfp}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-500 "
          />
          <div>
            <h1 className="text-4xl font-semibold">Bounbirat Asma</h1>
            <p className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-6 mt-6 border-b border-gray-700 pb-6 text-lg">
          <p>Email: <span className="text-blue-400">oa_bounbirat@esi.dz</span></p>
          <p>Phone: <span className="text-blue-400">0660598843</span></p>
          <p>LinkedIn: <span className="text-blue-400">linkedin.com/AsmaB</span></p>
          <p>GitHub: <span className="text-blue-400">github.com/AsmaB</span></p>
          <p>Instagram: <span className="text-blue-400">insta.com/AsmaB</span></p>
          <p>School: <span className="text-blue-400">ESI Algiers</span></p>
        </div>

        {/* Skills Section */}
        <div className="mt-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p>Programming Languages: Java, Python, C++</p>
          <p>Development Tools: Git, Eclipse, Jira</p>
        </div>

        {/* Previous Projects */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Previous Projects</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <img src={ph} alt="Investment App" />
              <p className="mt-3 text-lg font-medium">Investment Application</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <img src={phm} alt="Corporate Card"  />
              <p className="mt-3 text-lg font-medium">Corporate Card</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <img src={phg} alt="Payment System"  />
              <p className="mt-3 text-lg font-medium">Online Card Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
