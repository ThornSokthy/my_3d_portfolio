import {Toaster} from "react-hot-toast";
import {useThemeStore} from "./store/useThemeStore.js";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import ExpAndEdu from "./sections/ExpAndEdu.jsx";
import Skill from "./sections/Skill.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
    const { theme } = useThemeStore();
    return (
        <div className="min-h-screen px-4 sm:px-10 md:px-22" data-theme={theme}>
            <Toaster
                position="top-center"
                containerStyle={{
                    top: '20px',
                    zIndex: 9999
                }}
            />
            <Navbar />
            <Hero />
            <About />
            <ExpAndEdu />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
