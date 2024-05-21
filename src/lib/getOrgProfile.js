import Axios from "./api/axios"

export const getOrgProfile = async (AccessToken) => {
    let userDetail; 
    try{
         userDetail = await Axios.post(
            "/org/profile",
            {
                accessToken: AccessToken
            }
        );
    }catch(error){
        console.log(error.message);
    }
    return userDetail;

}