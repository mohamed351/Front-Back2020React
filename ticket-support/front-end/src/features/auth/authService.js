import axios from "axios";
const register = async (userData)=>{
   const response = await axios.post("http://localhost:9800/api/users",JSON.stringify(userData),{
    headers:{
        "Content-Type":"application/json"
    }
   });
   if(response.data){
    localStorage.setItem("user",JSON.stringify(response.data))
   }
   return response;

}

const authService = {
 register

};
export default  authService;