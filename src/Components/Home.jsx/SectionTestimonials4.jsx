import imgTestimonial1 from '../../assets/Servicios/4.jpg'
const SectionTestimonials4 = () => {
  return (
    <section className='section'>
      <div className="container">
        <h2 className="section-header text-center">
          Testimonios <span>de nuestros pacientes</span>
        </h2>
        <div className="testimonials">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile">
                        <div className="img-area">
                          <img src={imgTestimonial1} alt=""  />
                        </div>
                        <div className="bio">
                          <h2>Melissa Barrios</h2>
                          <h4>Web Debeloper</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p><span></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rerum harum dolorem sint repellat quaerat eos incidunt ipsum, suscipit dolores aperiam culpa, recusandae iste perspiciatis doloremque consequatur amet voluptatem repellendus?
                        </p>
                      
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="carousel-item">
              <div className="single-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile">
                        <div className="img-area">
                          <img src={imgTestimonial1} alt="" />
                        </div>
                        <div className="bio">
                          <h2>Cata Micaela Barrios</h2>
                          <h4>Web Debeloper</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rerum harum dolorem sint repellat quaerat eos incidunt ipsum, suscipit dolores aperiam culpa, recusandae iste perspiciatis doloremque consequatur amet voluptatem repellendus?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="single-item">
                  <div className="row">

                    <div className="col-md-6">
                      <div className="profile">
                        <div className="img-area">
                          <img src={imgTestimonial1} alt="" />
                        </div>
                        <div className="bio">
                          <h2>Melissa Barrios</h2>
                          <h4>Web Debeloper</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p><span>logo left</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rerum harum dolorem sint repellat quaerat eos incidunt ipsum, suscipit dolores aperiam culpa, recusandae iste perspiciatis doloremque consequatur amet voluptatem repellendus?
                        </p>
                 
                      </div>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials4;
