import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import './style.css'




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Body />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;
