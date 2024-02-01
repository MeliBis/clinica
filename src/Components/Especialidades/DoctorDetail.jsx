
import doctores from '../../data/doctores.js'

const DoctorDetail = () => {
  return (
    <div className="container align-items-center justify-content-center ">
    <div className="row">
        {
            doctores.map(doctor => (
                <div key={doctor.id} className="col-md-4 col-md-6 col-lg-4 mb-4">
                    <doctor title={doctor.title} />
                </div>
            ))
        }

    </div>

</div>
  )
}

export default DoctorDetail