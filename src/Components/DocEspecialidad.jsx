import PropTypes from "prop-types";

const DocEspecialidad = ({ index, id, name, specialty }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Especialidades</h2>
          <select className="form-select form-select-sm" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value={1}><a href="/contacto">primer</a></option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
      </div>
    </>
  );
};

DocEspecialidad.prototypes = {
  name: PropTypes.string,
  specialty: PropTypes.string,
};

export default DocEspecialidad;
