import './App.css';
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial'

function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Testimonial/>
   <Contact/>
   <Footer/> 
   </>
  );
}

export default App;
