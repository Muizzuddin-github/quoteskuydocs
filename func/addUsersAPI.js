import axios from "axios";

const addUserAPI = async (dataUser) => {
   const {data} =  await axios.post('/api/user/apikey',dataUser)
   return data
}
 
export default addUserAPI;