import { Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';


function App() {

  return(
    <>
    <Topbar/>
    <Navbar/>

    <div>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    
     <Footer/>
       
    </div>
    
    
</>
  );
  
}

export default App;
