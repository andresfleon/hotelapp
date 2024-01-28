import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from '../store/states/hotels.state'
import ListHotels from '../components/HomePage/ListHotels'
import FilterName from '../components/HomePage/FilterName'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCities from '../components/HomePage/FilterCities'
import FilterCountry from '../components/HomePage/FilterCountry'

const HomePage = () => {

  const [nameInput, setnameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  }
  )
  const [citySelected, setCitySelected] = useState('')
  const [countryFil, setCountryFil] = useState('')

  const[idCity, setIdCity] =useState('all cities')

  const [countryId, setCountryId] = useState()




  const dispatch = useDispatch()

  const hotels = useSelector(states => states.hotels)

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))


  }, [])




 

  const hotelsFiltered = hotels?.results.filter(hotelInfo => {
    // Filter Name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)
    //Filter price
    const priceHotel = +hotelInfo.price

    const filterPrice = priceHotel >= fromTo.from && priceHotel <= fromTo.to

    //filter cities
    //se hicieron con el backend

    const filterCountry = hotelInfo.city.countryId==countryId;


    return (filterCountry && filterPrice && filterName ) 
  })





  return (
    <div>
      <FilterName
        setnameInput={setnameInput}
      />
      <FilterPrice setFromTo={setFromTo} />
      <FilterCountry 
      setCountryFil={setCountryFil}
      setIdCity={setIdCity}
      setCountryId={setCountryId}
 />
      <FilterCities 
      setCitySelected={setCitySelected}
       setCountryFil={ setCountryFil}
       countryFil={countryFil}
       idCity={idCity}
       countryId={countryId}
       setCountryId={setCountryId}
      />
      <ListHotels 
        hotelsFilter={hotelsFiltered}
        citySelected={citySelected}
        
        />
    </div>
  )
}

export default HomePage