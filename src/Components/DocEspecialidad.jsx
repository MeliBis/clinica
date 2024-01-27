const DocEspecialidad = () => {
  return (
 <>
 <div className="row">
  <div className="col">
    <label htmlFor="select1">Especialidades</label>
    <select className="form-select form-select-sm" id="select1">
      <option >Especialidades</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
 </div>

 </>
  );
};

export default DocEspecialidad;
