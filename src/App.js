import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import MyProjects from "./components/MyProjects/MyProjects";
import SideNav from "./components/SideNav/SideNav";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/MyProjects/ProjectDetails/ProjectDetails";
import MyBlogs from "./components/MyBlogs/MyBlogs";

function App() {
    return (
        <>
            <SideNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="my-projects" element={<MyProjects />} />
                <Route path="/project:projectId" element={<ProjectDetails />} />
                <Route path="my-blogs" element={<MyBlogs />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
