import imgClinicaIntro from '../assets/home/intro.png'

const About = () => {
  return (
    <div className='container'>
      <div className="  col m-0 vh-100 row align-items-center justify-content-center display-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={imgClinicaIntro}
              className="d-block mx-lg-auto img-fluid rounded"
              alt="avatar Melissa"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="  lh-1 mb-5">Bienvinidos</h2>
            <p className="lead ">
              Bienvenido a [Nombre de la Clínica], donde la salud se convierte
              en un viaje personalizado hacia el bienestar integral. En nuestro
              espacio dedicado a la excelencia médica, combinamos la experiencia
              de profesionales apasionados con un enfoque centrado en el
              paciente. Desde especialidades médicas de vanguardia hasta un
              ambiente acogedor, te invitamos a descubrir un refugio de cuidado
              integral diseñado para revitalizar tu salud y transformar tu vida.
              En [Nombre de la Clínica], tu bienestar es nuestra prioridad, y
              cada visita es una oportunidad para fortalecer el vínculo entre tu
              salud y tu felicidad.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </div>
  );
};

export default About;
