import axios from "axios";
const register = async (userData)=>{
   const response = await axios.post("http://localhost:6000/api/login",JSON.stringify(userData));
   if(response.data){
    localStorage.setItem("user",JSON.stringify(response.data))
   }
   return response;

}

const authService = {
 register

};
export default  authService;