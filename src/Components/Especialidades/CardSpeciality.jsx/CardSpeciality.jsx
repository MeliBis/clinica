import Card from '../../Generales/card/Card'
import doctores from '../../../data/doctores'

const CardSpeciality = () => {
  return (
    
      <div className="container align-items-center justify-content-center ">
        <div className="row">
            {
                doctores.map(doctor => (
                    <div key={doctor.id} className="col-md-4 col-md-6 col-lg-4 mb-4">
                        <Card title={doctor.name} description={ doctor.description} img={doctor.img} experience={doctor.experience} actionSpeciality={doctor.actionSpeciality} specialty={doctor.specialty}/>
                    </div>
                ))
            }

        </div>

    </div>
 
  )
}

export default CardSpeciality