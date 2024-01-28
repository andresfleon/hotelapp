import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.state'
import { useDispatch } from 'react-redux'

const FilterCities = ({ setCitySelected, countryFil,setCountryId,idCity, countryId }) => {

    let urlCities = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(urlCities)

    useEffect(() => {
        getCities()
    }, [])


    const dispatch = useDispatch()

    

    

    
    useEffect(() => {
        let url = 'https://hotels-api.academlo.tech/hotels'

        dispatch(getHotelsThunk(url))

    }, [countryId])




    const handleFilterCities = (id, name) => {

        
        setCitySelected(name)
        let url = 'https://hotels-api.academlo.tech/hotels'
        if(countryId=='allC'){
            url = 'https://hotels-api.academlo.tech/hotels'
            setCountryId('')

        }
        
        else if (name !== 'all cities') {
            url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`

        }
        else if(name =='all cities'){
            setCountryId('')

            url = 'https://hotels-api.academlo.tech/hotels'

        }

        dispatch(getHotelsThunk(url))

    }



    return (
        <div>
            <h3>Cities</h3>
            <ul>
                <li onClick={() => handleFilterCities(0, 'all cities')}> All cities</li>
                {
                    cities?.map(city => (
                        <li onClick={() => handleFilterCities(city.id, city.name)} key={city.id}>
                            {city.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterCities