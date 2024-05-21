import Axios from "./api/axios"

export const getUserProfile = async () => {
    let userDetail; 
    try{
         userDetail = await Axios.get("/user/profile");
    }catch(error){
        console.log(error.message);
    }
    return userDetail;

}