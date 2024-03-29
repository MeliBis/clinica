import { Link } from 'react-router-dom'
import imgsection1 from '../../assets/home/intro.png'

const SectionDoctores1 = () => {
  
  return (
    <div>
    <div className='app-home'>
      <div className="container col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 text-white">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={imgsection1} className="d-block mx-lg-auto img-fluid " alt="Clinica" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6 ">
            <h2 className="display-5 fw-bold lh-1 mb-3 text-white"> Tu camino hacia una vida más saludable  <span className='$gray-100'>
            comienza aquí</span> </h2>
            <p className="lead"> La experiencia y la empatía convergen para brindarte un camino personalizado hacia la salud óptima.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to='/especialidad' className="text-reset">
                <button type="button" className="btn btn-outline-light btn-lg px-4 me-md-2">Especialidades</button>
            </Link>           
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </div>
</div>
  )
}

export default SectionDoctores1