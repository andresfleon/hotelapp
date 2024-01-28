import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker } from "pigeon-maps"
import './styles/HotelInfoPage.css'


const HotelInfoPage = () => {

    const {id}=useParams()

    const url =`https://hotels-api.academlo.tech/hotels/${id}`

    const [hotel,gethotel]=useFetch(url)

    useEffect(() => {

        gethotel()
      
    }, [url])

    

  return (
    <div className='container__hotel__info'>
        <header>
            <h2>{hotel?.name}</h2>
            <span>Raiting</span>
        </header>
        <div className='container__img__map'>
            <img className='hotel__page__img' src={hotel?.images[0].url} />
       
            {
            hotel &&(
            <Map defaultCenter={[+hotel?.lat,+hotel?.lon]} width ={500} height={450} zoom={17} >
                <Marker 
                width={100} 
                anchor={[+hotel?.lat,+hotel?.lon]} 
                color='#34a356'/>
            </Map>

            )}

        </div>
        <div>
            <div>
                <span>{hotel?.city.name}</span>
                <span>{hotel?.city.country}</span>
            </div>
            <div>
                <i className='bx bx-map'></i>
                <span>{hotel?.address}</span>
            </div>

            <p>{hotel?.description}</p>
        </div>
    </div>
  )
}

export default HotelInfoPage