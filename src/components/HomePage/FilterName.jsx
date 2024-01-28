import React, { useRef } from 'react'

const FilterName = ({setnameInput}) => {
    
    const inputSearch = useRef()

    const handleSearch=e=>{
        e.preventDefault()
        setnameInput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value=''

    }

   

  return (

    
    <form onSubmit={handleSearch}>
        <input  ref={inputSearch}type='text'/>
        <button>search</button>
    </form>
  )
}

export default FilterName