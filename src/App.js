import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';

//import Home from './components/Pages/Home';
//import About from './components/Pages/About';
//import Services from './components/Pages/Services';
//import Contact from './components/Pages/Contact';
import React, { lazy, Suspense } from 'react';

const Home = lazy(()=> import("./components/Pages/Home"))
const About = lazy(()=> import("./components/Pages/About"))
const Services = lazy(()=> import("./components/Pages/Services"))
const Contact = lazy(()=> import("./components/Pages/Contact"))



function App() {

  return (
    <>
      <Topbar />
      

      <Suspense >
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Suspense>


      




    </>
  );

}
function wait(time){
  return new Promise(resolve => setTimeout(resolve, time))
}

export default App;
