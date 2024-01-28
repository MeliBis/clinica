import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo/logo.png";

const NavBar1 = () => {
  return (
    /* navbar */
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand me-auto" to="/">
          <img src={imgLogo} alt="" width={50} height={50} />
        </Link>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Name
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-nosotros">
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/especialidad">
                  Doctores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Regístrate</a></li>
              <li><a className="dropdown-item" href="#">Iniciar sesión</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
            </ul>
          </div>
        </div>
{/*         <Link to="" className="login-button">
          Login
        </Link> */}
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  /* end navbar */



  );
};

export default NavBar1;
