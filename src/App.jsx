import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Navbar from "./components/Navbar"
import './style.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Body />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;
