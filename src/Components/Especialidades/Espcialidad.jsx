import Filter from './Filters.jsx/Filter'
import CardSpeciality from './CardSpeciality.jsx/CardSpeciality'

const Espcialidad = () => {
  return (
    <div className='App'>
      <h2 className="text-center">Doctores</h2>
      <div className="container">
        <div className="row">          
            <Filter/>    
          <div className="col-8">
            <div className="row">
              <CardSpeciality/>
            </div>
          </div>
        </div>
      </div>


      </div>
  )
}

export default Espcialidad