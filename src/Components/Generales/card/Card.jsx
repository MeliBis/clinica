import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const Card = ({title, description, img, url, name, specialty, action, actionSpeciality}) => {  
  return (
    <div className="card text-center background mt-5">
    <img className='cardImg' src={img} alt={title} />
    <div className="card-body text-light">
      <h4 className="card-title">{title} {name}</h4>
      <h5 >{specialty}</h5>
      <p className="card-text text-light">
        {
            description ? description : 'Lorem ipsum dolor sit amet consectetur adipisicing '
        }
        </p>
      <Link to={url} className="btn btn-outline-light rounded-0" target='_blank'>
        {action} {actionSpeciality}
      </Link>
    </div>
  </div>
  )
}

Card.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url:PropTypes.string,
    img:PropTypes.string
}

export default Card