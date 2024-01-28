import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const navigate = useNavigate()

    //Register

    const createNewUser =data=>{
        
        const url='https://hotels-api.academlo.tech/users'
        axios.post(url,data)
        .then((result) => {
            console.log(result.data);
            
        }).catch((err) => {

            console.log(err);            
        });

    }
    // login

    const loginUser=data=>{
        const url= 'https://hotels-api.academlo.tech/users/login'
        axios.post(url,data)
        .then((result) => {

            console.log(result.data);
            navigate('/')
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('user',JSON.stringify(result.data.user))
            
        }).catch((err) => {
            console.log(err);
        });
        
    }
    return {createNewUser, loginUser}
}

export default useAuth