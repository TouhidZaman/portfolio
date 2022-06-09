import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import MyProjects from "./components/MyProjects/MyProjects";
import SideNav from "./components/SideNav/SideNav";

function App() {
    return (
        <>
            <SideNav />
            <Home />
            <About />
            <MyProjects />
            <Contact />
        </>
    );
}

export default App;
