import React from "react";

const Geolocalizacion = () => {
  return (
    <div className="d-flex justify-content-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.047521347716!2d-97.97134972336066!3d19.922402181464385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d06fd1b9f2ddfb%3A0x89123c2030b4505e!2sC.%20Carmen%20Serd%C3%A1n%2C%2073310%20Pue.!5e0!3m2!1ses!2smx!4v1706146914420!5m2!1ses!2smx"
        width="600"
        height="450"
        style={{border:0}}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Geolocalizacion;
