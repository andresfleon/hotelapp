import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.state'
import { useDispatch } from 'react-redux'

const FilterCities = ({ setCitySelected, countryFil,setCountryFil,idCity }) => {

    let url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])


    const dispatch = useDispatch()

    useEffect(() => {


    }, [])


    const handleFilterCities = (id, name) => {
        setCitySelected(name)
        let url = 'https://hotels-api.academlo.tech/hotels'
        if (name !== 'all cities') {
            url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`

        }else if (countryFil===''&& idCity=='') {
            url = 'https://hotels-api.academlo.tech/hotels'
        }
        else if(countryFil && name =='all cities'){
            setCountryFil('')

            url = 'https://hotels-api.academlo.tech/hotels'

        }

        console.log(url)
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