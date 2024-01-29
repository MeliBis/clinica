import React from "react";
import Speciality from "./SpecialityFilter/Speciality";
import Cost from "./Cost/Cost";
import Experience from "./Experience/Experience";

const Filter = () => {
  return (
    <div className="col-3 mt-5">
      <h2 className="text-center fw-bold fs-4 mb-2">Filter</h2>
      <div
        style={{ cursor: "pointer" }}
        className="text-center  text-decoration-underline mb-4"
      >
        <h5>Limpiar</h5>
      </div>

      <div className="accordion" id="accordionExample">
        <Speciality/>
     
      </div>
    </div>
  );
};

export default Filter;
