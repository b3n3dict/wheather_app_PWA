import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='f33a484cf794d08d0148764789aaba32'

export const fetchWheather = async (cityName)  =>{
   const {data} = await axios.get(URL,{
       params:{
           q: cityName,
           units: 'metric',
           APP_ID: API_KEY
       }
   })

   return data;
}

