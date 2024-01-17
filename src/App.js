import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';

//import Home from './components/Pages/Home'; 
//import About from './components/Pages/About';
//import Services from './components/Pages/Services';
//import Contact from './components/Pages/Contact';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import("./Pages/Home"))
const About = lazy(() => import("./Pages/About"))
const Services = lazy(() => import("./Pages/Services"))
const Contact = lazy(() => import("./Pages/Contact"))
const SeaContainer = lazy(() => import("./Pages/Sea Container Charges"))

function App() {
  return (
    <>
      <Topbar />
      <Suspense >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services/Sea-Container-Charges" element={<SeaContainer />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
