import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";  // Update paths as needed
import Chatbot from "./components/Chatbot";
import Categories from "./components/Categories";
import Register from "./components/Register";
import ProfilePopup from "./components/Profilepopup";
import AboutUs from "./components/Aboutus";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Project from "./components/Project";
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Welcome />
          <Categories />
          <Register isOpen={true} />
          <AboutUs />
          <Footer />
           </>} />
        <Route path="/chatbot" element={
          <>
            <Navbar />
            <Chatbot />
            <Footer />
          </>
          } 
        />
        <Route path="/profile" element={<ProfilePopup/>} />
        <Route path="/freelancing" element={
          <>
          <Navbar />
          <Project/>
          <Footer />
          </>} />
      </Routes>
    </Router>
  );
}

export default App;
