import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";







function _drawWeather() {
    const weathers = AppState.weathers
    console.log('draw weather', weathers)

    let temp = ''
    let content = ''
    let faren = AppState.faren
    let celcius = AppState.celcius

    temp += AppState.weathers?.main.feels_like

    setHTML('weathers', content)
    setHTML('weathers', weathers?.WeatherTemplate)
}


export class WeatherController {
    constructor() {
        console.log('weather controller loaded')

        this.GetWeather()

        AppState.on('weathers', _drawWeather)


    }



    async GetWeather() {
        try {
            console.log('test weather')
            await weatherService.GetWeather()
            _drawWeather()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    tempChangeFaren() {
        let faren = AppState.faren
        let content = '<p onclick="app.WeatherController.tempChangeCelcius()"> <p>'
        setHTML('weathers', content)
    }

    tempChangeCelcius() {
        let content = ''
        let celcius = AppState.celcius
        content += '<p onclick=" app.WeatherController.tempChangeFaren()"><p>'
        setHTML('weathers', content)
    }
}