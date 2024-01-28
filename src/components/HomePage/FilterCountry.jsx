import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const FilterCountry = ({setCountryFil,setIdCity}) => {

    let url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])
    



    
    const countries= []
        
        for (let i =0; i<cities?.length;i++){
            if (!countries.includes(cities[i].country)){
                countries.push(cities[i].country)
            }
        }
                

        const handleFilteredCountries =(country)=>{


            if(country=='all countries'){
                console.log('object');
                setCountryFil('')
                
            }else{
                setCountryFil(country)
                setIdCity()



            }            
        }
        
    



  return (
    <div>
        <h3>Countries</h3>
            <ul>
                <li onClick={()=>handleFilteredCountries('all countries')}> All Countries</li>
                {
                    countries.map(country => (
                        <li onClick={()=>handleFilteredCountries(country)} key={country}>
                            {country}
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default FilterCountry