export class Weather {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.main = data.main
    }




    get WeatherTemplate() {
        // FIXME tempChangeCelsius should flip the boolean on the weather object in your appstate
        return `
        <p onclick="app.WeatherController.tempChangeCelcius()" class="mdi mdi-sun-snowflake-variant fs-3 "> ${this.name}  temp: ${this.main.temp}</p>`
    }
}

