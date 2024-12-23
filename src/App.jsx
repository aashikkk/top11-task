import "./App.css";
import FifthBar from "./components/FifthBar";
import Footer from "./components/Footer";
import FourthBar from "./components/FourthBar";
import GalleryFootball from "./components/GalleryFootball";
import NavBar from "./components/NavBar";
import SecondBar from "./components/SecondBar";
import Sponsors from "./components/Sponsors";
import ThirdBar from "./components/ThirdBar";

function App() {
    return (
        <>
            <NavBar />
            <SecondBar />
            <ThirdBar />
            <FourthBar />
            <FifthBar />
            <GalleryFootball />
            <Sponsors />
            <Footer />
        </>
    );
}

export default App;
