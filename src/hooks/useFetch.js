import React, { useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
     const [response, setResponse] = useState()

     const getApi=()=>{
        axios.get(url)
        .then(res=>setResponse(res.data))
        .catch(err=>console.log(err));
     }

     return [response, getApi]
}

export default useFetch