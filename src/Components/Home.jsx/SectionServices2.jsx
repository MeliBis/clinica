import img1 from '../../assets/Servicios/1.jpg'
import img2 from '../../assets/Servicios/2.jpg'
import img3 from '../../assets/Servicios/3.jpg'

const SectionServices2 = () => {
  return (
   <div className="container">
      <div className="row g-3">
        <h2 className='text-center '>Servicios</h2>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={img1} alt="foto 1" />
            <div className="card-body">
              <p className="card-title">Opción 1</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img src={img2} alt="foto 1" />
            <div className="card-body">
              <p className="card-title">Opción 1</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <img src={img3} alt="foto 1" />
            <div className="card-body">
              <p className="card-title">Opción 1</p>
            </div>
          </div>
        </div>
      </div>

   </div>
  )
}

export default SectionServices2