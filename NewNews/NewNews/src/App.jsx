import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import details from "./Components/details"

const App=()=>{
  return(
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/details" element={<details/>}/>

      </Routes>
      </BrowserRouter>
  );
}
export default App;

