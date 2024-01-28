import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const FilterCountry = ({setCountryFil,setCountryId}) => {

    let url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])
    



    
    const countries= []
        
        for (let i =0; i<cities?.length;i++){
            if (!countries.includes(cities[i].country)){
                countries.push({
                    'name':cities[i].country,
                    'countryId':cities[i].countryId,
                })
            }
        }
                

        const handleFilteredCountries =(country)=>{


            if(country=='all countries'){
                setCountryId('allC')
                setCountryFil('')                

                
              
                
            }else{
                setCountryId(country.countryId)
                setCountryFil(country.name)
           



            }            
        }
        
    



  return (
    <div>
        <h3>Countries</h3>
            <ul>
                <li onClick={()=>handleFilteredCountries('all countries')}> All Countries</li>
                {
                    countries.map(country => (
                        <li onClick={()=>handleFilteredCountries(country)} key={country.countryId}>
                            {country.name}
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default FilterCountry