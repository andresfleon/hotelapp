import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'

const HotelCard = ({hotelInfo}) => {

  const navigate =useNavigate()

  const handleNavigate=()=>{
    navigate(`/hotel/${hotelInfo.id}`)

  }
  return (

    <article className='card'>
      <header className='card__header' >
      <img className='card__img' src={hotelInfo.images[0].url} alt="" />
      </header>
      <section className='card__body'>
        <h3 className='card__name'>{hotelInfo.name}</h3>
        <span className='card__rating'>Raiting</span>
        <p className='card__location'>{hotelInfo.city.name}, {hotelInfo.city.country}</p>
        <div className='card__price'>{hotelInfo.price}</div>
      <button className='card__btn' onClick={handleNavigate}>See more...</button>
      </section>
    </article>
  )
}

export default HotelCard