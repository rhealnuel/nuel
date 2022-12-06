import About from "./componenet/About";
import Contact from "./componenet/Contant";
import Experience from "./componenet/Experience";
import Home from "./componenet/Home";
import Navbar from "./componenet/Navbar";
import Portfolio from "./componenet/portffolio";
import SocialLinks from "./componenet/SocialLinks";


function App() {
  
 

  return (
    <div className="App">
    <Navbar/>
    <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact />
    <SocialLinks/>
   
    </div>
  );
}

export default App;
