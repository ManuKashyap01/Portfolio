import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
function App() {

  return (
    <>
      <div className="w-full py-5 px-6 sm:px-5 sm:max-w-[900px] mx-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
