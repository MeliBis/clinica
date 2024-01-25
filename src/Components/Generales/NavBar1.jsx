import { Link } from 'react-router-dom'
import imgLogo from '../../assets/logo/logo.png'

const NavBar1 = () => {
  return (
    <div className="container mw-100  fixed-top ">
    <nav className="navbar navbar-expand-lg bg-info  ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={imgLogo} alt="" 
           width={50}
           height={50}/>
        </Link>
        <button
          className="navbar-toggler text-info-emphasis"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="sobre-nosotros">
                Sobre nosotros
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
          </ul>
        </div>
        <div className="d-flex gap-2 d-md-flex justify-content-md-end">
          <li className="nav-item dropdown d-flex ">
            <Link
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="" alt="" width="25" className="" />
            </Link>

            <ul className="dropdown-menu dropdown-menu-end">
              <div className="d-flex">
                <li>
                  <Link to="/" className="dropdown-item  ">
                    <button
                      type="button"
                      className="btn btn-outline-dark me-1"
                    >
                      Inicio de sesion
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="dropdown-item ">
                    <button type="button" className="btn btn-outline-danger">
                      Regístrate
                    </button>
                  </Link>
                </li>
              </div>
              <li>
                <Link to="/" className="dropdown-item">
                  Cuentas
                </Link>
              </li>
            </ul>
          </li>

          <Link>
            <i className="bi bi-person-circle"></i>
          </Link>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar1