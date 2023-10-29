import { Outlet, Link } from "react-router-dom";
import "./Sidebar.css"
import logo from "../../assets/LogoRushHour2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faList,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="mainContainer">

      <nav className="sidebarContainer">

        <div className="logoContainer">
          <div className="rushHourText">
            Rush Hour
          </div>
          <img className="logo" src={logo} />
        </div>

        <div className="navigationLinks">

          <div className="linkContainer">
            <Link className="link" to="/Home">
              <FontAwesomeIcon icon={faHouse} />
              <div>
                Acasa
              </div>
            </Link>
          </div>

          <div className="linkContainer">
            <Link className="link" to="/Menu">
              <FontAwesomeIcon icon={faList} />
              <div>
                Meniu
              </div>
            </Link>
          </div>
          <div className="linkContainer">
            <Link className="link" to="/Cart">
              <FontAwesomeIcon icon={faList} />
              <div>
                Cosul Tau
              </div>
            </Link>
          </div>

          <div className="linkContainer">
            <Link className="link" to="/Map">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                Map
              </div>
            </Link>
          </div>

        </div>

      </nav>

      <div className="outlet">
        <Outlet />
      </div>

    </div>
  )
};

export default Sidebar;
