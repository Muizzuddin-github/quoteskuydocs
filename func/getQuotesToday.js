import axios from "axios";


const getQuotesToday = async () => {

    const {data} = await axios.get('https://quoteskuy-65d4.vercel.app/api/quotes/today',{
        headers : {
            "X-API-ID" : process.env.SECRET_API_ID,
            "X-API-KEY" : process.env.SECRET_API_KEY
        }
    })

    return data
}

export default getQuotesToday