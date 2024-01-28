import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cityFilterSlice =createSlice({
    name:'cityFilter',
    initialState:'all cities',
    reducers:{
        setCityFilterG:(state,action)=>action.payload
    }
})

export const {setCityFilterG} = cityFilterSlice.actions
export default cityFilterSlice.reducer


