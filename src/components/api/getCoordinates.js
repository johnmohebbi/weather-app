import axios from "axios"
export const getCoordinates = (cityName) => {
    const fetchCity = async () => {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=f469ffbe268909318848e0dd79fc89e2`)
        return response.data
    }
    return fetchCity();
}