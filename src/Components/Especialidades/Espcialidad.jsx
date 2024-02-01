import CardSpeciality from './CardSpeciality.jsx/CardSpeciality'
import SearchButton from './SearchButton/SearchButton'
import doctores from '../../data/doctores'

const Espcialidad = () => {
  const doctoresComponent = doctores.map((SearchButton, index) => <SearchButton key={index}/>  )

  return (
    <div className='App'>
      <div className="container">


      </div>
      <h2 className="text-center">Doctores</h2>
      <div className="container">
            <div className="row">
              <CardSpeciality/>
            
            </div>
      </div>


      </div>
  )
}

export default Espcialidad