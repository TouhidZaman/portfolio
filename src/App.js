import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import SideNav from "./components/SideNav/SideNav";

function App() {
    return (
        <>
            <SideNav />
            <Home />
            <Contact />
        </>
    );
}

export default App;
