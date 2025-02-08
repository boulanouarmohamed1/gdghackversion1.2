import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";  // Update paths as needed
import Chatbot from "./components/Chatbot";
import Categories from "./components/Categories";
import Register from "./components/Register";
import AboutUs from "./components/Aboutus";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Project from "./components/Project";
import Profile from "./components/Profile";
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
         <Route path="/profile" element={<>
          <Navbar /> <Profile /> <Footer /> </>} />
        <Route path="/freelancing" element={
          <>
          <Navbar />
          <Project/>
          <Footer />
          <Profile />
          </>} />
      </Routes>
     
    </Router>
  );
}

export default App;
