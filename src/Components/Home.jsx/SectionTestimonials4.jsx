import React from 'react'

const SectionTestimonials4 = () => {
  return (
    <div id="carouselExample" className="carousel slide container">
    <div className="carousel-inner">
      <h3>Testimoials</h3>
      <div className="carousel-item active">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default SectionTestimonials4