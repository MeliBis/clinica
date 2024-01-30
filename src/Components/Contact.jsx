import imgHospital from '../assets/contact/hospital.jpg'
import Geolocalizacion from './Geolocalizacion'

const Contact = () => {
  return (
    <div className="container-1 ">
  <div className="background-page">
    <div className="container mt-5">
      <h2 className="text-center mb-5 pt-3">Clínica</h2>
      <div className="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
        <div className="title col col-12 col-md-3">
          <h2>Contacts</h2>
        </div>
        <div className="address col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-building" /> Office info:</h4>
          <p className="text-center">02 123123123</p>
          <p className="text-center">PEC: clinicadoctors@doctor.com</p>
        </div>
        <div className="program col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-users" /> Public relations office:</h4>
          <p className="text-center">Uping Street seen from Withsbrurck, 203</p>
        </div>
        <div className="contact-center col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-phone" /> Contact center:</h4>
          <p className="text-center">02 698279829</p>
        </div>
      </div>
      <hr />
      <div className="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
        <div className="title col col-12 col-md-3">
          <h2>Structure details</h2>
        </div>
        <div className="address col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-location-dot" /> Address:</h4>
          <p className="text-center">Downing Street seen from Whitehall, 2013</p>
        </div>
        <div className="program col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-calendar-days" /> Opening times:</h4>
          <p className="text-center">
            Lun-Ven 7:00-17:00 <br />
            Sabato 8:00-12:00 <br />
          </p>
        </div>
        <div className="contact-center col col-12 col-md-3">
          <h4 className="text-center"> <i className="fa-solid fa-circle-info" /> Information Admissions Solvency:</h4>
          <p className="text-center">
            Telefono 02 2643 2800 <br />
            Lun-Ven 7:00-17:00
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center  pb-5">
    <Geolocalizacion/>
     </div>
    </div>
  </div>
</div>
  )
}

export default Contact