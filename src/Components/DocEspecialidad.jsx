import Doctores from "../data/doctores"
import PropTypes from 'prop-types'

const DocEspecialidad = ({id, name, specialty}) => {
  
  return (
 <>
 <div className="row">
  <div className="col">
    <h2 >Especialidades</h2>
    <select className="form-select form-select-sm" id="select1">
     {/*  <option >Especialidades</option> */}
      <option value={1}>
        Doctor 1, especialidad
      </option>
       <option value={2}>
        Doctor 2, especialidad
       </option>
      <option value={3}>
        Doctor 3, especialidad
      </option>
{/*        <Card title={card.title} description={card.description} img={card.img} url={card.url}/>
 */}
    </select>
  </div>
 </div>

 </>
  );
};

DocEspecialidad.prototypes={
  name: PropTypes.string,
  specialty: PropTypes.string
}

export default DocEspecialidad;
