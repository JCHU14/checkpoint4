export class Weather {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.main = data.main
    }




    get WeatherTemplate() {
        return `
        <p onclick="app.WeatherController.tempChangeCelcius()" class="mdi mdi-sun-snowflake-variant fs-3 "> ${this.name}  temp: ${this.main.feels_like}</p>`
    }
}

