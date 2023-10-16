import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"





class WeatherService {
    async GetWeather() {
        const res = await api.get('api/weather')
        console.log("got weather", res.data)
        AppState.weathers = new Weather(res.data)

        const weatherTemp = AppState.weathers.main.feels_like
        const faren = (((weatherTemp - 273.15) * 1.8) + 32).toFixed(0)
        const celcius = (weatherTemp - 273.15).toFixed(1)

        AppState.celcius.push(celcius)
        AppState.faren.push(faren)
        console.log(AppState.weathers)
    }



}



export const weatherService = new WeatherService();