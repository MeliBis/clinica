import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className=" d-flex mx-auto align-items-center justify-content-center row row-cols-5 container">

    <div className="card mt-4 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sushi</h5>
        <p className="card-text">Encuentra la mejor gama de sabores de sushi</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>

    

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Arma tu paquete</h5>
        <p className="card-text">Encuentra desde el pho  al ramen </p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Especialidades</h5>
        <p className="card-text">Comida auténtica y tradicional oriental</p>
        <Link to="/" className="btn btn-dark">Menu</Link>
      </div>
    </div>

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Extras</h5>
        <p className="card-text">Te gustaría agregar comida adicional a tu orden?</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>
    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Bebidas</h5>
        <p className="card-text">Las bebidas tradicionales también son deliciosas</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>
    </div>
  )
}

export default Services