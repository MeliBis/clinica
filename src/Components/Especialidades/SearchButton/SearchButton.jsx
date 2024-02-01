import React, { useRef, useState } from 'react'



const SearchButton = () => {
/*   const [doctor, setDoctor]= useState([])
  const [search, useSearch] = useState("")
 */

  

  return (
    <div>
        <form className='d-flex my-5 ' role='search'>
            <input type="search" className="form-control me-2"  placeholder='Buscar' aria-label='Search'/>
            <button className="btn btn-success"type='submit'>Buscar</button>
        </form>
    </div>
  )
}

export default SearchButton