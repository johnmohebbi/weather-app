import axios from "axios";


const getForecaste = async (lat,lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=f469ffbe268909318848e0dd79fc89e2`)
     return response.data;
};

export{
    getForecaste,

}