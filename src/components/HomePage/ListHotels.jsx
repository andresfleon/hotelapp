import { useSelector } from "react-redux";
import HotelCard from "./HotelCard"
import './styles/ListHotels.css'


const ListHotels = ({hotelsFilter,citySelected}) => {

const hotels = useSelector(states => states.hotels)

  
  
  

 


  return (
    <div className="container__list__hotels">
        {
          !hotelsFilter || hotelsFilter.length==0
          ?(
            hotels?.results.map(hotel=>(
              <>
              <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              />
              <h2>hola</h2>
              </>
          ))
          )
          :(
          
            hotelsFilter.map(hotel=>(
                <HotelCard
                key={hotel.id}
                hotelInfo={hotel}
                />
            ))
          )
        }
    </div>
  )
}

export default ListHotels