import React from 'react'
import { Link } from 'react-router-dom'
import imgLogo from "../../assets/logo/logo-clinica.svg"
const Footer = () => {
  return (
    <footer>
      <div className="container bg-info  p-3">
        <div className="d-flex flex-column flex-md-row g-4 row justify-content-around ">
          <div className="left-container col-12 col-lg-4">
            <Link to="/">
              <img
                className="logo"
                src={imgLogo}
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
            <span></span>
            <h6 className='mt-5'>
              calle x<span className="addres">Calle</span> <br />
              México- Estado <br />
              Teléfono: (800)-000-0000
            </h6>
          </div>
          <div className="container-right text-start col-12 col-lg-8">
            {/* <h4>We care about you health</h4> */}
            <div className="row g-3 mt-4 links">
              <ul className="col-6 col-md-3">
                <h5 className="text-muted">Carreras</h5>
                <li>
                  <Link to=''> ∘ Trabaja con nosotros </Link>
                </li>
                <li>
                  <Link to=''> ∘ Posiciones abiertas </Link>
                </li>
                <li>
                  <Link to=''> ∘ Aplicaciones abiertas </Link>
                </li>
               {/*  <li>
                  <a to> ∘ Company intranet </a>
                </li> */}
              </ul>
              <ul className="col-6 col-md-3">
                <h5 className="text-muted">Contáctanos</h5>
                <li>
                  <Link to=''> ∘ Trabajo y contacto </Link>
                </li>
                <li>
                  <Link to=''> ∘ Contáctnos  </Link>
                </li>
                <li>
                  <Link to=''> ∘ Applications open </Link>
                </li>
              </ul>
              <ul className="col-6 col-md-3">
                <h5 className="text-muted">Información legal</h5>
                <li>
                  <Link to=''> ∘ Coockie  </Link>
                </li>
                <li>
                  <Link to=''> ∘ Política de privacidad</Link>
                </li>
                <li>
                  <Link to=''> ∘ Transparencia </Link>
                </li>
              </ul>
              <ul className="col-6 col-md-3">
                <h5 className="text-muted">Otra información</h5>
                <li>
                  <Link to=''> ∘ Comite de ética </Link>
                </li>
                <li>
                  <Link to=''> ∘ Configuración de cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="socials d-flex pt-5 justify-content-center justify-content-md-end">
          <div>
            <i className="fa-brands fa-instagram" />
          </div>
          <div>
            <i className="fa-brands fa-square-twitter" />
          </div>
          <div>
            <i className="fa-brands fa-facebook" />
          </div>
          <div>
            <i className="fa-brands fa-linkedin" />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <p>
            © <span className="date">2023</span> Copyright: Clinica
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer