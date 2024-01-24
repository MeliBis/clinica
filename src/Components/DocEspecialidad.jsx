import React from 'react'

const DocEspecialidad = () => {
  return (
<div className="input-group mb-3">
  <button type="button" className="btn btn-dark btn-lg px-4">Doctores</button>
  <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>


  )
}

export default DocEspecialidad