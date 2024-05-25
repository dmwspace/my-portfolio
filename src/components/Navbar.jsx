import { Outlet, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id="navbar">
            <ul>
                <li><Link to="/" style={{textDecoration: "none", color: "rgb(85,33,137)"}}>Home</Link></li>
                {/* <li><Link to="/projects" style={{textDecoration: "none", color: "rgb(85,33,137)"}}>Projects</Link></li>
                <li><Link to="/resume" style={{textDecoration: "none", color: "rgb(85,33,137)"}}>Resume</Link></li>
                <li><Link to="/skills" style={{textDecoration: "none", color: "rgb(85,33,137)"}}>Skills</Link></li> */}
            </ul>
            <br />
            <Outlet />
        </div>
    )
}
export default Navbar