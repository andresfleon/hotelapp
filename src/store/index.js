import { configureStore } from "@reduxjs/toolkit";
import hotels from './states/hotels.state'
import cityFilter from "./states/cityFilter.state";

export default configureStore({


    
    reducer:{
        hotels,
        cityFilter
        

    }

})