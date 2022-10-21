import axios from "axios";

const forgotApiUser = async (dataUser) => {
   const {data} =  await axios.patch('/api/user/forgot',dataUser)
   return data
}
 
export default forgotApiUser;