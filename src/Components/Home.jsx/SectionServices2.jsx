import cards from '../../data/cards.js'
import Card from '../Generales/card/Card'
import Cards from '../Generales/card/Cards.jsx'

const SectionServices2 = () => {
  return (
 /*   <div className="container">
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

   </div> */
   <div className="container align-items-center justify-content-center ">
    <h2 className='text-center'>Servicios</h2>
   <div className="row">

    <Cards/>
   </div>

</div>
  )
}

export default SectionServices2