import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header>
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>
          </div>
          <div className="col">
            <nav>
              <ul className="row">
                <li className="col">
                  <Link to="/">Home</Link>
                </li>
                <li className="col">
                  <Link to="/documentation">Documentation</Link>
                </li>
                <li className="col">
                  <NavLink 
                  className={navData => (navData.isActive ? "active" : "")}
                   to="/tutorials">
                    Tutorials</NavLink>
                </li>
                <li className="col">
                  <NavLink 
                  className={navData => (navData.isActive ? "active" : "")}
                   to="/about-us">
                    About Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
