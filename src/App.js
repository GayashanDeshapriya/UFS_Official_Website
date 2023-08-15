import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
//import Home from './components/Pages/Home';
//import About from './components/Pages/About';
//import Services from './components/Pages/Services';
//import Contact from './components/Pages/Contact';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => wait(500).then(()=> import("./components/Pages/Home")))
const About = lazy(() => wait(500).then(()=> import("./components/Pages/About")))
const Services = lazy(() => wait(500).then(()=> import("./components/Pages/Services")))
const Contact = lazy(() => wait(500).then(()=> import("./components/Pages/Contact")))



function App() {

  return (
    <>
      <Topbar />
      <Navbar />

      <Suspense fallback={<h1 className="mb-5 text-primary font-weight-bold" align="center" style={{ fontWeight: 'bold' }}>Loading....</h1>}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Suspense>


      <Footer />




    </>
  );

}
function wait(time){
  return new Promise(resolve => setTimeout(resolve, time))
}

export default App;
