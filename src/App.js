import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import TopNavBar from "./components/Home/TopNavBar/TopNavBar";
import SecondNavBar from "./components/Home/SecondNavBar.js/SecondNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
    <BrowserRouter>
      <TopNavBar />
      <SecondNavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>

    </Routes>
      {/* <Carousel />  */}
    </BrowserRouter>
    </>
  );
}

export default App;
